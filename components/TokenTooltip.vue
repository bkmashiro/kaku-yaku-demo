<template>
  <div class="token-tooltip bg-white dark:bg-gray-900 shadow-lg rounded-lg pl-2 pt-2 border border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out overflow-hidden"
       @mouseenter="$emit('mouseenter')"
       @mouseleave="$emit('mouseleave')">
    <div class="tooltip-content"
         :style="contentStyle">
      <!-- 基本信息和字典 -->
      <div class="pb-2">
        <DictionaryInfo :token="token"
                        :is-loading="isLoading" />
      </div>

      <!-- 例句和相关上下文 -->
      <div v-if="examples.length > 0 || relatedTokens.length > 0"
           class="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
        <ExampleSentences :examples="examples"
                          :related="relatedTokens"
                          @highlight-sentence="$emit('highlight-sentence', $event)" />
      </div>

      <!-- 翻译或备注 -->
      <div v-if="note"
           class="text-xs pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
        <div class="font-semibold mb-1">備考:</div>
        <div class="text-gray-600 dark:text-gray-400">{{ note }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DictionaryInfo from './DictionaryInfo.vue';
import ExampleSentences from './ExampleSentences.vue';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  token: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  examples: {
    type: Array,
    default: () => []
  },
  relatedTokens: {
    type: Array,
    default: () => []
  },
  note: {
    type: String,
    default: ''
  }
});

defineEmits(['highlight-sentence', 'mouseenter', 'mouseleave']);

// 动态计算tooltip内容区域的最大高度
const maxHeight = ref(0);

onMounted(() => {
  calculateMaxHeight();
  window.addEventListener('resize', calculateMaxHeight);
});

// 计算最大高度
const calculateMaxHeight = () => {
  const viewportHeight = window.innerHeight;
  // 预留顶部和底部空间，防止超出视口
  maxHeight.value = viewportHeight * 0.8;
};

// 计算内容样式
const contentStyle = computed(() => {
  return {
    maxHeight: `${maxHeight.value - 24}px` // 减去padding
  };
});
</script>

<style scoped>
.token-tooltip {
  min-width: 280px;
  max-width: min(400px, calc(100vw - 40px));
  width: auto;
  z-index: 10000;
  /* 确保tooltip在最上层 */
  box-sizing: border-box;
  position: relative;
  overflow: hidden !important;
  /* 外层容器不滚动 */
  margin: 0 !important;
  /* 移除可能的外边距 */
  border-radius: 8px;
  /* 保持圆角 */
}

.tooltip-content {
  scrollbar-width: thin;
  /* 添加内部滚动条，避免整页滚动 */
  overflow-y: auto !important;
  /* 只有内容区滚动 */
  overflow-x: hidden !important;
  max-height: 100%;
  /* 充满父容器 */
  /* padding-right: 4px; 为滚动条留出空间 */
  margin-right: 0;
  /* 移除右边距 */
}

.tooltip-content::-webkit-scrollbar {
  width: 3px;
}

.tooltip-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 1.5px;
}

.tooltip-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1.5px;
}

.tooltip-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
</style>