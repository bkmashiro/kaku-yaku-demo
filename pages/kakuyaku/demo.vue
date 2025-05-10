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

/* 简单设置tooltip最大高度和滚动 */
.v-popper__inner {
  max-height: 80vh;
  overflow-y: hidden !important;
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

/* 移除滚动条与边框的间距 */
.v-popper__inner > * {
  margin: 0 !important;
}
</style>
