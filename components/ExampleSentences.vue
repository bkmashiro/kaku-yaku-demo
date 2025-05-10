<template>
  <div class="example-sentences">
    <div v-if="filteredExamples.length > 0" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <div class="font-semibold mb-1">用例:</div>
      <div v-for="(example, index) in limitedExamples" :key="`example-${index}`" 
           class="mb-2 p-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
           :class="{'cursor-pointer hover:border-blue-300 dark:hover:border-blue-500': !isDictionaryExample(example)}"
           @click="!isDictionaryExample(example) && $emit('highlight-sentence', getDictionaryExampleIndex(example))">
        <div class="text-blue-600 dark:text-blue-400 break-words">{{ example.japanese }}</div>
        <div class="text-gray-600 dark:text-gray-400 mt-1 break-words">{{ example.translation }}</div>
        <div v-if="example.source" class="text-xs text-gray-400 mt-1">
          出典: {{ example.source }}
        </div>
      </div>
      <div v-if="filteredExamples.length > maxExamples" class="text-xs text-gray-400 mt-1 text-center">
        ...さらに {{ filteredExamples.length - maxExamples }} の用例
      </div>
    </div>
    
    <div v-if="related.length > 0" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <div class="font-semibold mb-1">関連文脈:</div>
      <div v-for="(related, relatedIndex) in limitedRelated" :key="`related-${relatedIndex}`" 
           class="mb-2 cursor-pointer rounded-md p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" 
           @click="$emit('highlight-sentence', related.sentenceIndex)">
        <div class="flex items-start">
          <span class="inline-block px-1 py-0.5 mr-2 rounded text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 shrink-0">
            文{{ related.sentenceIndex + 1 }}
          </span>
          <div class="break-words">
            <span class="font-medium">{{ related.token.surface }}</span>
            <span class="text-gray-500 text-xs block mt-0.5"> {{ related.context }}</span>
          </div>
        </div>
      </div>
      <div v-if="related.length > maxRelated" class="text-xs text-gray-400 mt-1 text-center">
        ...さらに {{ related.length - maxRelated }} の関連
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, inject } from 'vue';

const props = defineProps({
  examples: {
    type: Array,
    default: () => []
  },
  related: {
    type: Array,
    default: () => []
  },
  token: {
    type: Object,
    default: null
  }
});

const maxExamples = 3; // 最大显示例句数
const maxRelated = 3;  // 最大显示相关上下文数

// 过滤已在字典中显示的例句
const filteredExamples = computed(() => {
  const dictionaryExamples = getAllDictionaryExamples();
  
  // 返回在字典中没有的例句
  return props.examples.filter(example => {
    // 如果没有内容，跳过
    if (!example.japanese || !example.translation) return false;
    
    // 检查是否是字典例句
    const inDictionary = dictionaryExamples.some(dictEx => 
      dictEx[0] === example.japanese && dictEx[1] === example.translation
    );
    
    // 返回不在字典中的例句
    return !inDictionary;
  });
});

// 获取所有字典中的例句
const getAllDictionaryExamples = () => {
  const examples = [];
  
  // 如果token有jmdict数据
  if (props.token && props.token.jmdict) {
    props.token.jmdict.forEach(entry => {
      if (entry.example && entry.example.length) {
        entry.example.forEach(ex => {
          if (ex.sentences && ex.sentences.length >= 2) {
            examples.push(ex.sentences);
          }
        });
      }
    });
  }
  
  return examples;
};

// 判断例句是否在字典例句中
const isDictionaryExample = (example) => {
  if (!props.token || !props.token.jmdict) return false;
  
  for (const entry of props.token.jmdict) {
    if (entry.example && entry.example.length) {
      for (const ex of entry.example) {
        if (ex.sentences && ex.sentences.length >= 2) {
          if (ex.sentences[0] === example.japanese && ex.sentences[1] === example.translation) {
            return true;
          }
        }
      }
    }
  }
  
  return false;
};

// 获取例句在原始数组中的索引
const getDictionaryExampleIndex = (example) => {
  return props.examples.findIndex(ex => 
    ex.japanese === example.japanese && ex.translation === example.translation
  );
};

// 限制显示的例句数量
const limitedExamples = computed(() => {
  return filteredExamples.value.slice(0, maxExamples);
});

// 限制显示的相关上下文数量
const limitedRelated = computed(() => {
  return props.related.slice(0, maxRelated);
});

defineEmits(['highlight-sentence']);
</script>

<style scoped>
.example-sentences {
  font-size: 0.875rem;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style> 