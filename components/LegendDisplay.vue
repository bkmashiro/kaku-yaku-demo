<template>
  <div class="flex flex-wrap gap-2 py-3 border-b border-gray-200 dark:border-gray-700">
    <div class="text-sm font-bold mr-2">語彙の種類:</div>
    <template v-for="(pos, index) in partsOfSpeech" :key="index">
      <div class="flex items-center gap-1">
        <div 
          class="w-4 h-4 rounded-sm shadow-sm" 
          :class="getColorClass(pos)"
        ></div>
        <span class="text-xs">{{ pos }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  partsOfSpeech: {
    type: Array,
    default: () => [
      '名詞', '動詞', '形容詞', '副詞', '助詞', '助動詞',
      '接続詞', '感動詞', '代名詞', '連体詞', '接頭辞', '接尾辞',
      '補助記号', '形状詞'
    ]
  }
});

// 获取图例颜色类名，与TokenDisplay保持一致
const getColorClass = (pos) => {
  const classMap = {
    '名詞': 'bg-blue-100 dark:bg-blue-800 border border-blue-200 dark:border-blue-700',
    '動詞': 'bg-green-100 dark:bg-green-800 border border-green-200 dark:border-green-700',
    '形容詞': 'bg-purple-100 dark:bg-purple-800 border border-purple-200 dark:border-purple-700',
    '副詞': 'bg-amber-100 dark:bg-amber-800 border border-amber-200 dark:border-amber-700',
    '助詞': 'bg-yellow-50 dark:bg-yellow-900 border border-yellow-100 dark:border-yellow-800',
    '助動詞': 'bg-pink-100 dark:bg-pink-800 border border-pink-200 dark:border-pink-700',
    '接続詞': 'bg-indigo-100 dark:bg-indigo-800 border border-indigo-200 dark:border-indigo-700',
    '感動詞': 'bg-orange-100 dark:bg-orange-800 border border-orange-200 dark:border-orange-700',
    '代名詞': 'bg-red-100 dark:bg-red-800 border border-red-200 dark:border-red-700',
    '連体詞': 'bg-cyan-100 dark:bg-cyan-800 border border-cyan-200 dark:border-cyan-700',
    '接頭辞': 'bg-teal-100 dark:bg-teal-800 border border-teal-200 dark:border-teal-700',
    '接尾辞': 'bg-lime-100 dark:bg-lime-800 border border-lime-200 dark:border-lime-700',
    '補助記号': 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700',
    '形状詞': 'bg-violet-100 dark:bg-violet-800 border border-violet-200 dark:border-violet-700',
  };
  
  return classMap[pos] || 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700';
};
</script> 