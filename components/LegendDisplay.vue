<template>
  <div class="flex flex-wrap gap-2 py-3 border-b border-gray-200 dark:border-gray-700">
    <div class="text-sm font-bold mr-2">語彙の種類:</div>
    <template v-for="(pos, index) in partsOfSpeech" :key="index">
      <div class="flex items-center gap-1">
        <div 
          class="w-4 h-4 rounded-sm shadow-sm" 
          :style="getColorStyle(pos)"
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

// 获取图例颜色样式
const getColorStyle = (pos) => {
  const colorMap = {
    '名詞': 'background-color: #3b82f6;', // blue-500
    '動詞': 'background-color: #22c55e;', // green-500
    '形容詞': 'background-color: #a855f7;', // purple-500
    '副詞': 'background-color: #f59e0b;', // amber-500
    '助詞': 'background-color: #eab308;', // yellow-500
    '助動詞': 'background-color: #ec4899;', // pink-500
    '接続詞': 'background-color: #6366f1;', // indigo-500
    '感動詞': 'background-color: #f97316;', // orange-500
    '代名詞': 'background-color: #ef4444;', // red-500
    '連体詞': 'background-color: #06b6d4;', // cyan-500
    '接頭辞': 'background-color: #14b8a6;', // teal-500
    '接尾辞': 'background-color: #84cc16;', // lime-500
    '補助記号': 'background-color: #9ca3af;', // gray-400
    '形状詞': 'background-color: #8b5cf6;', // violet-500
  };
  
  return colorMap[pos] || 'background-color: #d1d5db;'; // gray-300 default
};
</script> 