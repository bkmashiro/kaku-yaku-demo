<template>
  <div class="token-tooltip bg-white dark:bg-gray-900 shadow-lg rounded-lg pl-2 pt-2 border border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out overflow-auto"
       @mouseenter="$emit('mouseenter')"
       @mouseleave="$emit('mouseleave')">
    <div class="tooltip-content overflow-visible"
         :style="contentStyle">
      <!-- 基本信息和字典 -->
      <div class="pb-2">
        <DictionaryInfo :token="token"
                        :is-loading="isLoading" />
      </div>

      <!-- 例句和相关上下文 -->
      <div v-if="examples.length > 0 || relatedTokens.length > 0"
           class="pt-2 mt-2 border-gray-200 dark:border-gray-700">
        <ExampleSentences :examples="examples"
                          :related="relatedTokens"
                          :token="token"
                          @highlight-sentence="$emit('highlight-sentence', $event)" />
      </div>

      <!-- 翻译或备注 -->
      <div v-if="note"
           class="text-xs pt-2 mt-2 border-gray-200 dark:border-gray-700">
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

// 计算内容样式 - 不再设置最大高度限制
const contentStyle = computed(() => {
  return {}; // 空对象，不设置高度限制
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
  overflow: auto !important;
  /* 外层容器滚动 */
  max-height: 80vh;
  /* 限制最大高度 */
  margin: 0 !important;
  /* 移除可能的外边距 */
  border-radius: 8px;
  /* 保持圆角 */
  scrollbar-width: thin;
  /* 滚动条样式 */
  /* 隐藏滚动条但保留功能 */
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
  /* 确保背景被裁剪成圆角 */
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: radial-gradient(white, black);
}

.tooltip-content {
  /* 添加内部内容样式 */
  overflow: visible !important;
  /* 内层不滚动 */
  overflow-x: visible !important;
  padding-right: 8px;
  /* 为滚动条留出空间 */
}

/* 自定义滚动条样式 */
.token-tooltip::-webkit-scrollbar {
  width: 2px;
  /* 更窄的滚动条 */
}

.token-tooltip::-webkit-scrollbar-track {
  background: transparent;
  /* 透明轨道 */
}

.token-tooltip::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  /* 更透明的滚动条 */
  border-radius: 1px;
  height: 50px;
  /* 固定高度，创建简单的圆角矩形 */
}

/* 隐藏滚动条上下按钮 */
.token-tooltip::-webkit-scrollbar-button {
  display: none;
  /* 隐藏上下箭头按钮 */
}

/* 隐藏边角 */
.token-tooltip::-webkit-scrollbar-corner {
  background: transparent;
}

/* 暗黑模式下的滚动条样式 */
.dark .token-tooltip {
  scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
}

.dark .token-tooltip::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  /* 暗黑模式下更亮的滚动条 */
}

/* 隐藏滚动条上下按钮 */
.token-tooltip::-webkit-scrollbar-button {
  display: none;
  /* 隐藏上下箭头按钮 */
}
</style>