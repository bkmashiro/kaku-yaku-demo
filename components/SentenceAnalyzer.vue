<template>
  <div class="sentence-analyzer">
    <!-- 原文显示 -->
    <div class="py-4 text-lg border-b border-gray-200 dark:border-gray-700">
      {{ data.original }}
    </div>
    
    <!-- 操作提示 -->
    <div class="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex items-center">
      <span class="i-heroicons-information-circle mr-1"></span>
      点击单词可以锁定提示框，再次点击解除锁定
      <span v-if="lockedToken" class="ml-2 text-blue-500 dark:text-blue-400 font-medium flex items-center">
        <span class="i-heroicons-lock-closed mr-1 text-xs"></span>
        当前已锁定: {{ lockedToken.token.surface }}
        <button 
          @click="clearLocked" 
          class="ml-2 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded px-2 py-0.5 transition-colors"
        >
          清除
        </button>
      </span>
    </div>
    
    <!-- 色彩说明 -->
    <LegendDisplay />
    
    <!-- 按句子分析 -->
    <div v-for="(sentence, sentenceIndex) in data.sentences" :key="sentenceIndex"
         class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
      <!-- 句子原文 -->
      <div class="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
        {{ sentence.original }}
      </div>
      
      <!-- 单词分析部分 -->
      <div class="flex flex-wrap">
        <template v-for="(token, tokenIndex) in sentence.tokens" :key="`${sentenceIndex}-${tokenIndex}`">
          <TokenDisplay 
            :token="token" 
            :token-index="tokenIndex"
            :sentence-index="sentenceIndex"
            :examples="getExamplesForToken(token)"
            :related-tokens="getRelatedTokens(token, sentenceIndex)"
            :is-loading="isLoadingTokenDetails(token)"
            @show-tooltip="handleShowTooltip"
            @hide-tooltip="handleHideTooltip"
            @highlight-sentence="highlightSentence"
          />
        </template>
      </div>
    </div>

    <!-- 高亮显示的例句 -->
    <div v-if="highlightedExample" class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-800">
      <div class="text-sm font-medium mb-1">例文:</div>
      <div class="text-blue-600 dark:text-blue-400">{{ highlightedExample.japanese }}</div>
      <div class="text-gray-600 dark:text-gray-400 mt-1">{{ highlightedExample.translation }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TokenDisplay from './TokenDisplay.vue';
import LegendDisplay from './LegendDisplay.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

// 状态管理
const loadingTokens = ref(new Set()); // 正在加载详情的token
const highlightedExample = ref(null);
const activeToken = ref(null); // 当前激活的token
const lockedToken = ref(null); // 当前锁定的token

// 是否正在加载token详情
const isLoadingTokenDetails = (token) => {
  return loadingTokens.value.has(token.surface + token.dictionaryForm);
};

// 显示提示框时的处理
const handleShowTooltip = async (tokenInfo) => {
  const token = tokenInfo.token;
  activeToken.value = tokenInfo;
  
  // 如果设置了锁定状态
  if (tokenInfo.locked !== undefined) {
    if (tokenInfo.locked) {
      lockedToken.value = tokenInfo;
    } else if (lockedToken.value && 
              lockedToken.value.tokenIndex === tokenInfo.tokenIndex && 
              lockedToken.value.sentenceIndex === tokenInfo.sentenceIndex) {
      lockedToken.value = null;
    }
  }
  
  // 如果该token还没有加载过详细信息，则进行加载
  if (token && !token.detailsLoaded) {
    await loadTokenDetails(token);
  }
};

// 隐藏提示框时的处理
const handleHideTooltip = () => {
  // 如果没有锁定的token，则清空当前激活的token
  if (!lockedToken.value) {
    activeToken.value = null;
  }
};

// 清除所有锁定
const clearLocked = () => {
  lockedToken.value = null;
  activeToken.value = null;
};

// 高亮显示例句
const highlightSentence = (exampleIndex) => {
  // 这里应该通过索引获取正确的例句
  if (props.data.examples && props.data.examples[exampleIndex]) {
    highlightedExample.value = props.data.examples[exampleIndex];
  }
};

// 获取特定token的例句
const getExamplesForToken = (token) => {
  const examples = [];
  
  // 从JMDict获取例句
  if (token.jmdict) {
    token.jmdict.forEach(entry => {
      if (entry.example) {
        entry.example.forEach(ex => {
          if (ex.sentences && ex.sentences.length >= 2) {
            examples.push({
              japanese: ex.sentences[0],
              translation: ex.sentences[1],
              source: 'JMDict'
            });
          }
        });
      }
    });
  }
  
  // 从其他来源获取例句
  if (props.data.examples) {
    props.data.examples.forEach(ex => {
      // 检查例句是否包含当前词汇
      if (ex.japanese && (ex.japanese.includes(token.surface) || ex.japanese.includes(token.dictionaryForm))) {
        examples.push(ex);
      }
    });
  }
  
  return examples;
};

// 获取相关词汇
const getRelatedTokens = (token, currentSentenceIndex) => {
  const related = [];
  
  // 遍历所有句子寻找相同的词形
  props.data.sentences.forEach((sentence, sentenceIndex) => {
    // 跳过当前单词所在的句子
    if (sentenceIndex === currentSentenceIndex) return;
    
    sentence.tokens.forEach((t, tokenIndex) => {
      // 如果找到相同词形或词典形
      if (t.surface === token.surface || t.dictionaryForm === token.dictionaryForm) {
        // 获取上下文（前后各最多3个单词）
        const contextStart = Math.max(0, tokenIndex - 3);
        const contextEnd = Math.min(sentence.tokens.length - 1, tokenIndex + 3);
        
        // 构建上下文文本
        const context = sentence.tokens
          .slice(contextStart, contextEnd + 1)
          .map(ct => ct.surface)
          .join('');
        
        related.push({
          sentenceIndex,
          tokenIndex,
          token: t,
          context
        });
      }
    });
  });
  
  return related;
};

// 加载词汇详细信息
const loadTokenDetails = async (token) => {
  const tokenKey = token.surface + token.dictionaryForm;
  
  // 如果已经在加载中，则跳过
  if (loadingTokens.value.has(tokenKey)) return;
  
  // 添加到加载集合
  loadingTokens.value.add(tokenKey);
  
  try {
    // 这里可以调用API获取更详细的词典数据
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 标记为已加载，避免重复请求
    token.detailsLoaded = true;
  } catch (error) {
    console.error('加载词汇详情失败', error);
  } finally {
    // 从加载集合中移除
    loadingTokens.value.delete(tokenKey);
  }
};
</script>

<style scoped>
.sentence-analyzer {
  font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, "Yu Gothic", sans-serif;
}
</style> 