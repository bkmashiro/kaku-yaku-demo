<template>
  <Dropdown ref="dropdown"
            :distance="10"
            :skidding="0"
            placement="auto-end"
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
            :class="{ 'locked-state': isLocked }"
            tabindex="-1">
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
                    @mouseleave="handleMouseLeaveTooltip"
                    tabindex="-1" />
    </template>
  </Dropdown>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
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
// 定时器引用
let checkInterval = null;

// 动态控制动画延迟时间
const animationDelays = computed(() => {
  return isLocked.value
    ? { show: 0, hide: 0 }
    : { show: 200, hide: 0 };
});

// 处理DOM更新，修复aria-hidden警告
// const fixAriaHidden = () => {
//   if (!isLocked.value) return;
  
//   // 使用nextTick确保DOM已更新
//   nextTick(() => {
//     // 尝试查找相关的popper元素
//     if (dropdown.value && dropdown.value.$el) {
//       const poppers = document.querySelectorAll('.v-popper__popper[aria-hidden="true"]');
//       poppers.forEach(popper => {
//         // 删除可能导致警告的属性
//         popper.removeAttribute('aria-hidden');
//         // 使用inert属性替代
//         if (isLocked.value) {
//           popper.removeAttribute('inert');
//         }
//       });
//     }
//   });
// };

// 组件卸载前清理工作
onBeforeUnmount(() => {
  // 清除定时器
  if (checkInterval) {
    clearInterval(checkInterval);
    checkInterval = null;
  }
  
  // 如果当前tooltip是锁定的，通知父组件
  if (isLocked.value) {
    isLocked.value = false;
    isOpen.value = false;
    emit('hide-tooltip');
  }
});

// 监听锁定状态变化
watch(isLocked, (locked) => {
  // 锁定状态变化时，更新isOpen状态
  isOpen.value = locked || isMouseInTooltip.value;
  
  // 如果锁定，修复aria-hidden问题
  if (locked) {
    // fixAriaHidden();
    
    // 定期检查并修复
    if (checkInterval) {
      clearInterval(checkInterval);
    }
    
    checkInterval = setInterval(() => {
      if (!isLocked.value) {
        clearInterval(checkInterval);
        checkInterval = null;
        return;
      }
      isOpen.value = true;
      // fixAriaHidden();
    }, 200);
  } else if (checkInterval) {
    clearInterval(checkInterval);
    checkInterval = null;
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
      // fixAriaHidden();
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
  isMouseInTooltip.value = true;
  isOpen.value = true;
};

// 处理鼠标离开tooltip
const handleMouseLeaveTooltip = () => {
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
  /* 修复可访问性问题 */
  /* inert: none !important; */
  /* 确保圆角正确 */
  overflow: hidden !important;
  border-radius: 8px !important;
}

/* 控制显示和隐藏过渡 */
.v-popper__popper {
  transition: opacity 0.15s, visibility 0.15s !important;
  overflow: hidden !important;
  border-radius: 8px !important;
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
  border-radius: 8px !important;
  overflow: hidden !important;
}

/* 修复可访问性问题 */
/* .v-popper__popper[aria-hidden="true"] {
  visibility: hidden !important;
  opacity: 0 !important;
} */

/* 锁定状态下的popper元素 */
.locked-state ~ .v-popper__popper,
.locked-state > .v-popper__popper,
.locked-state .v-popper__popper {
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  overflow: hidden !important;
  border-radius: 8px !important;
}

/* 修复圆角裁剪问题 - 应用于所有tooltip元素 */
.v-popper__popper, 
.v-popper__inner, 
.token-tooltip {
  -webkit-mask-image: -webkit-radial-gradient(white, black) !important;
  mask-image: radial-gradient(white, black) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  background-clip: padding-box !important;
}
</style>