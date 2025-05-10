<template>
  <div class="sentence-analyzer">
    <!-- 原文显示 -->
    <div class="py-4 text-lg border-b border-gray-200 dark:border-gray-700">
      {{ data.original }}
    </div>
    
    <!-- 色彩说明 -->
    <div class="flex flex-wrap gap-2 py-3 border-b border-gray-200 dark:border-gray-700">
      <div class="text-sm font-bold mr-2">語彙の種類:</div>
      <template v-for="(_, type) in posColorMap" :key="type">
        <div class="flex items-center gap-1">
          <div 
            class="w-4 h-4 rounded-sm shadow-sm" 
            :style="getLegendColorStyle(type)"
          ></div>
          <span class="text-xs">{{ type }}</span>
        </div>
      </template>
    </div>
    
    <!-- 句子分析 -->
    <div v-for="(sentence, sentenceIndex) in data.sentences" :key="sentenceIndex" class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div class="text-base mb-2">{{ sentence.sentence }}</div>
      
      <div class="flex flex-wrap">
        <template v-for="(token, tokenIndex) in sentence.analysis.modeB" :key="tokenIndex">
          <div 
            class="relative group cursor-pointer my-1 mx-0.5"
            @mouseenter="showTooltip(tokenIndex, token, sentenceIndex)"
            @mouseleave="hideTooltip"
          >
            <span 
              :class="getPartOfSpeechClass(token.partOfSpeech[0])"
              class="px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600"
            >
              {{ token.surface }}
            </span>
            
            <!-- 提示框 -->
            <div 
              v-if="activeTooltip && activeTooltip.tokenIndex === tokenIndex && activeTooltip.sentenceIndex === sentenceIndex"
              class="absolute z-50 w-64 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-3 mt-1 border border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out"
              style="left: 0; top: 100%;"
            >
              <div class="text-sm font-semibold mb-1">{{ token.surface }}</div>
              <div class="grid grid-cols-2 gap-x-2 gap-y-1 text-xs mb-2">
                <div class="text-gray-500 dark:text-gray-400">読み方:</div>
                <div>{{ token.readingForm }}</div>
                <div class="text-gray-500 dark:text-gray-400">品詞:</div>
                <div>{{ token.partOfSpeech.filter(p => p !== '*').join(', ') }}</div>
                <div class="text-gray-500 dark:text-gray-400">辞書形:</div>
                <div>{{ token.dictionaryForm }}</div>
              </div>
              
              <!-- 辞書検索結果 -->
              <div class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2 min-h-[40px] transition-all duration-200">
                <div v-if="isLoading" class="flex items-center gap-1">
                  <div class="w-3 h-3 border-t-2 border-r-2 border-blue-300 dark:border-blue-600 rounded-full animate-spin opacity-60"></div>
                  <span class="text-gray-500 dark:text-gray-400">辞書情報を検索中...</span>
                </div>
                <div v-else-if="activeDictionaryData" class="transition-opacity duration-200">
                  <div class="font-semibold mb-1">辞書情報:</div>
                  <div>{{ activeDictionaryData.meaning }}</div>
                </div>
              </div>
              
              <!-- 関連単語 -->
              <div v-if="relatedTokens.length > 0" class="text-xs border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div class="font-semibold mb-1">関連単語:</div>
                <div>
                  <div v-for="(related, relatedIndex) in relatedTokens" :key="relatedIndex" class="mb-1">
                    <span 
                      class="cursor-pointer underline text-blue-600 dark:text-blue-400" 
                      @click="highlightSentence(related.sentenceIndex)"
                    >
                      文{{ related.sentenceIndex + 1 }}
                    </span>: {{ related.token.surface }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      
      <!-- 活跃句子高亮显示 -->
      <div v-if="highlightedSentenceIndex !== null && highlightedSentenceIndex !== sentenceIndex" class="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900 rounded border border-yellow-200 dark:border-yellow-800 text-sm">
        <div class="font-semibold mb-1">文{{ highlightedSentenceIndex + 1 }}:</div>
        <div>{{ data.sentences[highlightedSentenceIndex].sentence }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件属性
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

// 活跃提示框状态
const activeTooltip = ref(null);
const activeDictionaryData = ref(null);
const relatedTokens = ref([]);
const highlightedSentenceIndex = ref(null);
const isLoading = ref(false);

// 词性颜色映射
const posColorMap = {
  '名詞': '',
  '動詞': '',
  '形容詞': '',
  '副詞': '',
  '助詞': '',
  '助動詞': '',
  '接続詞': '',
  '感動詞': '',
  '代名詞': '',
  '連体詞': '',
  '接頭辞': '',
  '接尾辞': '',
  '補助記号': '',
  '形状詞': '',
};

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

// 获取图例颜色样式
const getLegendColorStyle = (pos) => {
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

// 显示提示框
const showTooltip = async (tokenIndex, token, sentenceIndex) => {
  activeTooltip.value = { tokenIndex, sentenceIndex };
  relatedTokens.value = findRelatedTokens(sentenceIndex, token);
  
  // 模拟获取词典信息
  isLoading.value = true;
  try {
    await fetchDictionaryData(token.dictionaryForm);
  } catch (error) {
    console.error('获取词典数据失败', error);
    activeDictionaryData.value = { meaning: 'データ読み込みエラー' };
  } finally {
    isLoading.value = false;
  }
};

// 隐藏提示框
const hideTooltip = () => {
  activeTooltip.value = null;
  activeDictionaryData.value = null;
  relatedTokens.value = [];
};

// 查找相关的单词
const findRelatedTokens = (sentenceIndex, token) => {
  const result = [];
  const searchWord = token.dictionaryForm;
  const addedTokens = new Map(); // 用于追踪每个句子中已添加的词形
  
  // 遍历所有句子寻找相关单词
  props.data.sentences.forEach((sentence, sIdx) => {
    // 跳过当前句子
    if (sIdx === sentenceIndex) return;
    
    // 每个句子重置已添加词形的追踪
    const sentenceAddedTokens = new Set();
    
    sentence.analysis.modeB.forEach((t, tIdx) => {
      // 查找相同词形或有相同含义的单词
      if ((t.dictionaryForm === searchWord || 
          (t.synonymGroupIds && token.synonymGroupIds && 
           t.synonymGroupIds.some(id => token.synonymGroupIds.includes(id)))) && 
          !sentenceAddedTokens.has(t.dictionaryForm)) {
        
        // 添加到结果前先检查该词形是否已在当前句子中添加过
        sentenceAddedTokens.add(t.dictionaryForm);
        
        result.push({
          sentenceIndex: sIdx,
          tokenIndex: tIdx,
          token: t
        });
      }
    });
  });
  
  return result;
};

// 高亮显示句子
const highlightSentence = (sentenceIndex) => {
  highlightedSentenceIndex.value = sentenceIndex;
  
  // 5秒后自动取消高亮
  setTimeout(() => {
    if (highlightedSentenceIndex.value === sentenceIndex) {
      highlightedSentenceIndex.value = null;
    }
  }, 5000);
};

// 模拟获取词典数据
const fetchDictionaryData = async (word) => {
  // 这里可以替换为真实的API调用
  return new Promise((resolve) => {
    setTimeout(() => {
      // 简单的词典数据模拟
      const mockDictionary = {
        '春': { meaning: '春天，一年四季的第一季。' },
        '夕暮れ': { meaning: '黄昏，日落后的时间。' },
        '桜': { meaning: '樱花，春天开花的树种。' },
        '花びら': { meaning: '花瓣，花的一部分。' },
        '静か': { meaning: '安静的，没有噪音的。' },
        '舞い落ちる': { meaning: '飘落，旋转着落下。' },
        '川沿い': { meaning: '河边，靠近河流的地方。' },
        '小道': { meaning: '小路，狭窄的道路。' },
        '歩く': { meaning: '走路，步行。' },
        '遠く': { meaning: '远处，远方。' },
        '聞こえる': { meaning: '听见，能够听到。' },
        '子ども': { meaning: '孩子，儿童。' },
        '笑い声': { meaning: '笑声，笑的声音。' },
        '風': { meaning: '风，空气流动。' },
        '揺れる': { meaning: '摇晃，摇动。' },
        '木々': { meaning: '树木，多棵树。' },
        'ざわめき': { meaning: '嘈杂声，喧闹声。' },
        '心地よい': { meaning: '舒适的，令人愉快的。' },
        '時間': { meaning: '时间，计量事物持续的单位。' },
        'ゆっくり': { meaning: '缓慢地，慢慢地。' },
        '流れる': { meaning: '流动，水等液体移动。' },
        '感じる': { meaning: '感觉，感受。' }
      };
      
      activeDictionaryData.value = mockDictionary[word] || { meaning: '未找到词典信息。' };
      resolve(activeDictionaryData.value);
    }, 800); // 增加延迟以便更好地观察加载状态
  });
};
</script>

<style scoped>
.sentence-analyzer {
  font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, "Yu Gothic", sans-serif;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-enter-active {
  animation: fadeIn 0.3s ease-in-out;
}
</style>
