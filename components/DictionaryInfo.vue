<template>
  <div class="dictionary-info">
    <!-- 基本信息显示 -->
    <div class="text-sm font-semibold mb-1">{{ token.surface }}</div>
    <div class="grid grid-cols-2 gap-x-2 gap-y-1 text-xs mb-2">
      <div class="text-gray-500 dark:text-gray-400">読み方:</div>
      <div>{{ token.reading }}</div>
      <div class="text-gray-500 dark:text-gray-400">品詞:</div>
      <div>{{ posDetails }}</div>
      <div class="text-gray-500 dark:text-gray-400">辞書形:</div>
      <div>{{ token.dictionaryForm }}</div>
    </div>

    <!-- JMDict 辞書情報 -->
    <div v-if="hasJMDict" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <div class="font-semibold mb-1">JMDict:</div>
      <div v-for="(entry, index) in token.jmdict" :key="`jmdict-${index}`" class="mb-3 pb-2 border-b border-gray-100 dark:border-gray-800">
        <div class="font-medium">{{ entry.keb?.join('、') || token.surface }}</div>
        <div class="text-gray-600 dark:text-gray-300 italic">{{ entry.reb?.join('、') }}</div>
        
        <!-- 意味 -->
        <div class="mt-1">
          <div class="text-gray-500 dark:text-gray-400 mb-1">意味:</div>
          <div class="ml-2">
            <div v-for="(gloss, gIndex) in entry.gloss" :key="`gloss-${gIndex}`" 
                class="flex items-start mb-0.5">
              <div class="text-gray-400 min-w-[12px] mr-1 shrink-0">{{ gIndex + 1 }}.</div>
              <div class="break-words">{{ gloss }}</div>
            </div>
          </div>
        </div>
        
        <!-- 例文表示 - 限制显示数量 -->
        <div v-if="entry.example?.length" class="mt-2">
          <div class="text-gray-500 dark:text-gray-400 mb-1">例文:</div>
          <div v-for="(ex, exIndex) in entry.example.slice(0, 2)" :key="`example-${exIndex}`" 
               class="ml-2 mt-1 p-1 border-l-2 border-gray-300 dark:border-gray-600 pl-2">
            <div class="text-blue-600 dark:text-blue-400 break-words">{{ ex.sentences[0] }}</div>
            <div class="text-gray-500 dark:text-gray-400 break-words">{{ ex.sentences[1] }}</div>
          </div>
          <div v-if="entry.example.length > 2" class="ml-2 mt-1 text-gray-400 text-xs">
            ...他 {{ entry.example.length - 2 }} の例文
          </div>
        </div>
      </div>
    </div>

    <!-- 漢字辞書情報 -->
    <div v-if="hasKanji" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <div class="font-semibold mb-1">漢字:</div>
      <div class="grid grid-cols-2 gap-x-2 gap-y-1">
        <div class="text-gray-500 dark:text-gray-400">文字:</div>
        <div>{{ token.kanji.literal }}</div>
        <div class="text-gray-500 dark:text-gray-400">読み:</div>
        <div>
          <div v-if="token.kanji.onReadings?.length">
            <span class="text-gray-500 dark:text-gray-400">音:</span> {{ token.kanji.onReadings.join('、') }}
          </div>
          <div v-if="token.kanji.kunReadings?.length">
            <span class="text-gray-500 dark:text-gray-400">訓:</span> {{ token.kanji.kunReadings.join('、') }}
          </div>
        </div>
        <div class="text-gray-500 dark:text-gray-400">画数:</div>
        <div>{{ token.kanji.strokeCount }}</div>
        <div class="text-gray-500 dark:text-gray-400">JLPT:</div>
        <div v-if="token.kanji.jlptLevel">N{{ token.kanji.jlptLevel }}</div>
        <div v-else>-</div>
        <div class="text-gray-500 dark:text-gray-400">意味:</div>
        <div class="break-words">
          <template v-if="token.kanji.meanings?.en?.length">
            {{ token.kanji.meanings.en.filter(m => m).join('、') }}
          </template>
        </div>
      </div>
    </div>

    <!-- ローディング表示 -->
    <div v-if="isLoading" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2 min-h-[40px] flex items-center justify-center">
      <div class="w-4 h-4 border-t-2 border-r-2 border-blue-300 dark:border-blue-600 rounded-full animate-spin opacity-60 mr-2"></div>
      <span class="text-gray-500 dark:text-gray-400">辞書情報を検索中...</span>
    </div>

    <!-- 辞書情報がない場合 -->
    <div v-if="!hasJMDict && !hasKanji && !isLoading" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <div class="text-gray-500 dark:text-gray-400">この単語の詳細な辞書情報はありません。</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  token: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

// 品詞详细信息
const posDetails = computed(() => {
  if (props.token.posDetail) {
    return props.token.posDetail.filter(p => p !== '*').join(', ');
  } else if (props.token.partOfSpeech) {
    return props.token.partOfSpeech.filter(p => p !== '*').join(', ');
  }
  return props.token.pos || '';
});

// 检查是否有JMDict数据
const hasJMDict = computed(() => {
  return props.token.jmdict && props.token.jmdict.length > 0;
});

// 检查是否有汉字数据
const hasKanji = computed(() => {
  return props.token.kanji != null;
});
</script>

<style scoped>
.dictionary-info {
  font-size: 0.875rem;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style> 