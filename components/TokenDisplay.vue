<template>
  <Dropdown ref="dropdown"
            :distance="10"
            :skidding="0"
            placement="auto"
            :delay="animationDelays"
            :shown="isLocked || isOpen"
            :auto-hide="!isLocked"
            :triggers="isLocked ? [] : ['hover', 'click']"
            :popper-triggers="isLocked ? [] : ['hover', 'click']"
            theme="tooltip"
            :hover-hide="!isLocked"
            :handle-resize="true"
            :close-delay="isLocked ? 0 : 300"
            :open-delay="isLocked ? 0 : 300"
            :hover-trigger-selector="'.token-tooltip'"
            @apply-show="handlePopoverShow"
            @apply-hide="handlePopoverHide"
            @click-outside="handleClickOutside"
            :class="{ 'locked-state': isLocked }">
    <div class="relative group cursor-pointer my-1 mx-0.5"
         @click="handleClick"
         :data-token="`${sentenceIndex}-${tokenIndex}`">
      <span :class="[
        tokenClass,
        isLocked ? 'ring-2 ring-offset-1 ring-blue-500 dark:ring-blue-400' : ''
      ]"
            class="px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600">
        {{ token.surface }}
      </span>
      <!-- 锁定指示器 -->
      <span v-if="isLocked"
            class="absolute -top-2 -right-2 text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        <span class="i-heroicons-lock-closed text-[10px]"></span>
      </span>
    </div>

    <template #popper>
      <TokenTooltip :token="token"
                    :is-loading="isLoading"
                    :examples="examples"
                    :related-tokens="relatedTokens"
                    @highlight-sentence="$emit('highlight-sentence', $event)"
                    @mouseenter="handleMouseEnterTooltip"
                    @mouseleave="handleMouseLeaveTooltip" />
    </template>
  </Dropdown>
</template>

<script setup>
import { computed, ref, watch, onBeforeUnmount } from 'vue';
import TokenTooltip from './TokenTooltip.vue';
import { Dropdown } from 'floating-vue';

const props = defineProps({
  token: {
    type: Object,
    required: true
  },
  tokenIndex: {
    type: Number,
    required: true
  },
  sentenceIndex: {
    type: Number,
    required: true
  },
  examples: {
    type: Array,
    default: () => []
  },
  relatedTokens: {
    type: Array,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['show-tooltip', 'hide-tooltip', 'highlight-sentence']);

const isOpen = ref(false);
// 点击锁定状态
const isLocked = ref(false);
// 鼠标是否在tooltip内
const isMouseInTooltip = ref(false);
// dropdown实例引用
const dropdown = ref(null);

// 动态控制动画延迟时间
const animationDelays = computed(() => {
  return isLocked.value
    ? { show: 0, hide: 0 }
    : { show: 0, hide: 0 };
});

// 监听锁定状态变化
watch(isLocked, (locked) => {
  // 锁定状态变化时，更新isOpen状态
  isOpen.value = locked || isMouseInTooltip.value;
  
  // 如果锁定，添加一个定时器定期检查状态并确保tooltip显示
  if (locked) {
    const checkInterval = setInterval(() => {
      if (!isLocked.value) {
        clearInterval(checkInterval);
        return;
      }
      isOpen.value = true;
    }, 200);
    
    // 在组件销毁时清理定时器
    onBeforeUnmount(() => {
      clearInterval(checkInterval);
    });
  }
});

// 根据词性获取类名
const getPartOfSpeechClass = (pos) => {
  const classMap = {
    '名詞': 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-700 border-blue-200 dark:border-blue-700 transition-colors',
    '動詞': 'bg-green-100 hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700 border-green-200 dark:border-green-700 transition-colors',
    '形容詞': 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 border-purple-200 dark:border-purple-700 transition-colors',
    '副詞': 'bg-amber-100 hover:bg-amber-200 dark:bg-amber-800 dark:hover:bg-amber-700 border-amber-200 dark:border-amber-700 transition-colors',
    '助詞': 'bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900 dark:hover:bg-yellow-800 border-yellow-100 dark:border-yellow-800 transition-colors',
    '助動詞': 'bg-pink-100 hover:bg-pink-200 dark:bg-pink-800 dark:hover:bg-pink-700 border-pink-200 dark:border-pink-700 transition-colors',
    '接続詞': 'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 border-indigo-200 dark:border-indigo-700 transition-colors',
    '感動詞': 'bg-orange-100 hover:bg-orange-200 dark:bg-orange-800 dark:hover:bg-orange-700 border-orange-200 dark:border-orange-700 transition-colors',
    '代名詞': 'bg-red-100 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700 border-red-200 dark:border-red-700 transition-colors',
    '連体詞': 'bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-800 dark:hover:bg-cyan-700 border-cyan-200 dark:border-cyan-700 transition-colors',
    '接頭辞': 'bg-teal-100 hover:bg-teal-200 dark:bg-teal-800 dark:hover:bg-teal-700 border-teal-200 dark:border-teal-700 transition-colors',
    '接尾辞': 'bg-lime-100 hover:bg-lime-200 dark:bg-lime-800 dark:hover:bg-lime-700 border-lime-200 dark:border-lime-700 transition-colors',
    '補助記号': 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-100 dark:border-gray-700 transition-colors',
    '形状詞': 'bg-violet-100 hover:bg-violet-200 dark:bg-violet-800 dark:hover:bg-violet-700 border-violet-200 dark:border-violet-700 transition-colors',
  };

  return classMap[pos] || 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 transition-colors';
};

const tokenClass = computed(() => {
  return getPartOfSpeechClass(props.token.pos || props.token.partOfSpeech?.[0]);
});

// 点击事件处理
const handleClick = (event) => {
  event.stopPropagation();
  isLocked.value = !isLocked.value;
  
  // 如果锁定，则强制显示
  if (isLocked.value) {
    isOpen.value = true;
    // 确保锁定状态下始终可见
    setTimeout(() => { 
      isOpen.value = true;
    }, 50);
  } else if (!isMouseInTooltip.value) {
    // 如果解锁且鼠标不在tooltip上，则隐藏
    isOpen.value = false;
  }

  emit('show-tooltip', {
    tokenIndex: props.tokenIndex,
    sentenceIndex: props.sentenceIndex,
    token: props.token,
    locked: isLocked.value
  });
};

// 弹出框显示处理
const handlePopoverShow = () => {
  isOpen.value = true;
  emit('show-tooltip', {
    tokenIndex: props.tokenIndex,
    sentenceIndex: props.sentenceIndex,
    token: props.token
  });
};

// 弹出框隐藏处理
const handlePopoverHide = (event) => {
  console.log('popover hide event, isLocked:', isLocked.value);
  // 如果是锁定状态，阻止隐藏
  if (isLocked.value) {
    // 阻止默认隐藏行为
    if (event) {
      event.stop();
      event.preventDefault();
    }
    // 强制保持打开状态
    isOpen.value = true;
    // 避免事件冒泡
    return false;
  }
  
  // 如果不是锁定状态且鼠标不在tooltip内，则允许隐藏
  if (!isLocked.value && !isMouseInTooltip.value) {
    isOpen.value = false;
    emit('hide-tooltip');
  } else if (isMouseInTooltip.value) {
    // 如果鼠标还在tooltip内，保持显示
    isOpen.value = true;
    return false;
  }
};

// 处理鼠标进入tooltip
const handleMouseEnterTooltip = () => {
  console.log('mouse enter tooltip, isLocked:', isLocked.value);
  isMouseInTooltip.value = true;
  isOpen.value = true;
};

// 处理鼠标离开tooltip
const handleMouseLeaveTooltip = () => {
  console.log('mouse leave tooltip, isLocked:', isLocked.value);
  isMouseInTooltip.value = false;
  
  // 只有在非锁定状态下，才允许隐藏
  if (!isLocked.value) {
    isOpen.value = false;
    emit('hide-tooltip');
  } else {
    // 确保锁定状态下保持显示
    isOpen.value = true;
  }
};

// 处理点击外部事件
const handleClickOutside = () => {
  if (isLocked.value) {
    isLocked.value = false;
    isOpen.value = false;
    emit('hide-tooltip');
  }
};

// 组件卸载前清理工作
onBeforeUnmount(() => {
  // 如果当前tooltip是锁定的，通知父组件
  if (isLocked.value) {
    isLocked.value = false;
    isOpen.value = false;
    emit('hide-tooltip');
  }
});
</script>

<style>
/* 自定义tooltip样式 */
.locked-state .v-popper__popper {
  visibility: visible !important;
  opacity: 1 !important;
  transition: none !important;
  pointer-events: auto !important;
  position: absolute !important;
  transform: none !important;
  z-index: 10000 !important;
}

/* 控制显示和隐藏过渡 */
.v-popper__popper {
  transition: opacity 0.15s, visibility 0.15s !important;
}

.v-popper__popper[data-popper-reference-hidden] {
  visibility: hidden !important;
  opacity: 0 !important;
  transition: opacity 0.15s, visibility 0.15s !important;
}

/* 确保锁定状态下tooltip内容一直可见 */
.locked-state .v-popper__inner {
  visibility: visible !important;
  opacity: 1 !important;
}
</style>