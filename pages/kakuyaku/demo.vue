<template>
  <div class="container mx-auto py-6 px-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">日本語文法解析 Demo</h1>
      <UButton
        color="gray"
        variant="ghost"
        :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
        @click="toggleColorMode"
      />
    </div>

    <UCard class="mb-8">
      <div class="mb-4">
        <UInput
          v-model="inputSentence"
          placeholder="日本語の文章を入力してください"
          class="w-full"
          @keyup.enter="analyzeSentence"
        />
        <UButton
          class="mt-2"
          color="primary"
          @click="analyzeSentence"
          :loading="isLoading"
        >
          解析
        </UButton>
      </div>

      <SentenceAnalyzer v-if="analysisData" :data="analysisData" />
    </UCard>

    <div class="text-sm text-gray-500 dark:text-gray-400 text-center">
      <p> Yuzhe Shi </p>
    </div>
  </div>
</template>

<script setup>
import SentenceAnalyzer from '../../components/SentenceAnalyzer.vue';


const defaultText = '春の夕暮れ、桜の花びらが静かに舞い落ちる中、私は川沿いの小道を歩いていた。遠くから聞こえてくる子どもたちの笑い声と、風に揺れる木々のざわめきが心地よく、時間がゆっくりと流れていくのを感じた。';

const inputSentence = ref(defaultText);
const analysisData = ref(null);
const isLoading = ref(false);
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// 初始化时自动解析默认文本
onMounted(() => {
  analyzeSentence();
});

const analyzeSentence = async () => {
  if (!inputSentence.value.trim()) return;
  
  isLoading.value = true;
  try {
    const response = await $fetch('/api/analysis/text', {
      method: 'POST',
      body: { text: inputSentence.value, mode: 2 },
    });
    console.log('API响应数据:', response);
    analysisData.value = response;
  } catch (error) {
    console.error('解析エラー:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style>
/* 修复暗黑模式下的颜色 */
.dark .v-popper--theme-dropdown .v-popper__inner,
.dark .v-popper--theme-tooltip .v-popper__inner {
  background: #1f2937;
  color: #f3f4f6;
}

/* 更新tooltip的滚动策略 - 外层滚动内层不滚动 */
.v-popper__inner {
  max-height: none !important; /* 移除高度限制，由内部控制 */
  overflow: visible !important; /* 内部不应该滚动 */
}

/* 全局滚动条样式 */
:root {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
}

/* 暗黑模式下的滚动条样式 */
.dark {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15); /* 暗黑模式下更亮的滚动条 */
}

/* Webkit浏览器滚动条样式 */
::-webkit-scrollbar {
  width: 2px; /* 更窄的滚动条 */
}

::-webkit-scrollbar-track {
  background: transparent; /* 透明轨道 */
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15); /* 更透明的滚动条 */
  border-radius: 1px;
}

/* 隐藏滚动条上下按钮 */
::-webkit-scrollbar-button {
  display: none; /* 隐藏上下箭头按钮 */
}

/* 隐藏边角 */
::-webkit-scrollbar-corner {
  background: transparent;
}

/* 修复tooltip圆角裁剪问题 */
.v-popper__popper {
  overflow: hidden !important;
  border-radius: 8px !important;
  background-clip: padding-box !important;
  -webkit-mask-image: -webkit-radial-gradient(white, black) !important;
  mask-image: radial-gradient(white, black) !important;
}

/* 确保内部元素也有圆角 */
.v-popper__inner {
  border-radius: 8px !important;
  overflow: hidden !important;
  background-clip: padding-box !important;
}

/* 修复floating-vue的样式以确保圆角正确 */
.v-popper--theme-tooltip .v-popper__inner {
  border-radius: 8px !important;
  overflow: hidden !important;
}

/* 确保锁定的tooltip不闪烁 */
.locked-tooltip {
  visibility: visible !important;
  opacity: 1 !important;
  transition: none !important;
  animation: none !important;
}

.locked-tooltip .v-popper__inner {
  transition: none !important;
  animation: none !important;
}

.locked-tooltip .token-tooltip {
  transition: none !important;
  animation: none !important;
}

/* 修复tooltip内嵌iframe中body的margin */
.v-popper__popper {
  margin: 0 !important;
  padding: 0 !important;
}

/* 这个会被注入到iframe的head中 */
:global([data-v-app]) {
  margin: 0 !important;
  padding: 0 !important;
}

/* 向iframe注入样式 */
.v-popper__popper iframe {
  margin: 0 !important;
  padding: 0 !important;
}

/* 修复可访问性警告 */
/* .v-popper__popper[aria-hidden="true"] {
  visibility: hidden !important; 
  opacity: 0 !important;
} */

/* 在锁定状态下覆盖浮动提示的可访问性属性 */
.locked-state ~ .v-popper__popper,
.locked-state + .v-popper__popper,
.locked-state > .v-popper__popper {
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 9999 !important;
}

/* 针对特定情况的修复 */
/* div.v-popper__popper[aria-hidden="true"][tabindex="0"] {
  visibility: hidden !important;
  opacity: 0 !important;
} */

</style>
