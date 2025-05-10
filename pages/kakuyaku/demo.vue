<template>
  <div class="container mx-auto py-6 px-4">
    <h1 class="text-2xl font-bold mb-6">日本語文法解析デモ</h1>

    <UCard class="mb-8">
      <SentenceAnalyzer :data="analysisData" />
    </UCard>
  </div>
</template>

<script setup>
import SentenceAnalyzer from '../../components/sentence.vue';

// 示例数据
const analysisData = {
  "original": "春の夕暮れ、桜の花びらが静かに舞い落ちる中、私は川沿いの小道を歩いていた。遠くから聞こえてくる子どもたちの笑い声と、風に揺れる木々のざわめきが心地よく、時間がゆっくりと流れていくのを感じた。",
  "sentences": [
    {
      "sentence": "春の夕暮れ、桜の花びらが静かに舞い落ちる中、私は川沿いの小道を歩いていた。",
      "analysis": {
        "modeA": [
          {
            "surface": "春",
            "dictionaryForm": "春",
            "readingForm": "ハル",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "春",
            "dictionaryId": 0,
            "synonymGroupIds": [
              13234
            ],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "夕暮れ",
            "dictionaryForm": "夕暮れ",
            "readingForm": "ユウグレ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "夕暮れ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "桜",
            "dictionaryForm": "桜",
            "readingForm": "サクラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "桜",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "花びら",
            "dictionaryForm": "花びら",
            "readingForm": "ハナビラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "花弁",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "静か",
            "dictionaryForm": "静か",
            "readingForm": "シズカ",
            "partOfSpeech": [
              "形状詞",
              "一般",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "静か",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "舞い",
            "dictionaryForm": "舞う",
            "readingForm": "マイ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "五段-ワア行",
              "連用形-一般"
            ],
            "normalizedForm": "舞う",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "落ちる",
            "dictionaryForm": "落ちる",
            "readingForm": "オチル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "上一段-タ行",
              "連体形-一般"
            ],
            "normalizedForm": "落ちる",
            "dictionaryId": 0,
            "synonymGroupIds": [
              23515
            ],
            "isOov": false
          },
          {
            "surface": "中",
            "dictionaryForm": "中",
            "readingForm": "ナカ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "中",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "私",
            "dictionaryForm": "私",
            "readingForm": "ワタクシ",
            "partOfSpeech": [
              "代名詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "私",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "は",
            "dictionaryForm": "は",
            "readingForm": "ハ",
            "partOfSpeech": [
              "助詞",
              "係助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "は",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "川沿い",
            "dictionaryForm": "川沿い",
            "readingForm": "カワゾイ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "川沿い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "小道",
            "dictionaryForm": "小道",
            "readingForm": "コミチ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "小道",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "歩い",
            "dictionaryForm": "歩く",
            "readingForm": "アルイ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "五段-カ行",
              "連用形-イ音便"
            ],
            "normalizedForm": "歩く",
            "dictionaryId": 0,
            "synonymGroupIds": [
              14939
            ],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "い",
            "dictionaryForm": "いる",
            "readingForm": "イ",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "上一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "居る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "modeB": [
          {
            "surface": "春",
            "dictionaryForm": "春",
            "readingForm": "ハル",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "春",
            "dictionaryId": 0,
            "synonymGroupIds": [
              13234
            ],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "夕暮れ",
            "dictionaryForm": "夕暮れ",
            "readingForm": "ユウグレ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "夕暮れ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "桜",
            "dictionaryForm": "桜",
            "readingForm": "サクラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "桜",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "花びら",
            "dictionaryForm": "花びら",
            "readingForm": "ハナビラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "花弁",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "静か",
            "dictionaryForm": "静か",
            "readingForm": "シズカ",
            "partOfSpeech": [
              "形状詞",
              "一般",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "静か",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "舞い落ちる",
            "dictionaryForm": "舞い落ちる",
            "readingForm": "マイオチル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "上一段-タ行",
              "連体形-一般"
            ],
            "normalizedForm": "舞い落ちる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "中",
            "dictionaryForm": "中",
            "readingForm": "ナカ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "中",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "私",
            "dictionaryForm": "私",
            "readingForm": "ワタクシ",
            "partOfSpeech": [
              "代名詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "私",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "は",
            "dictionaryForm": "は",
            "readingForm": "ハ",
            "partOfSpeech": [
              "助詞",
              "係助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "は",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "川沿い",
            "dictionaryForm": "川沿い",
            "readingForm": "カワゾイ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "川沿い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "小道",
            "dictionaryForm": "小道",
            "readingForm": "コミチ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "小道",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "歩い",
            "dictionaryForm": "歩く",
            "readingForm": "アルイ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "五段-カ行",
              "連用形-イ音便"
            ],
            "normalizedForm": "歩く",
            "dictionaryId": 0,
            "synonymGroupIds": [
              14939
            ],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "い",
            "dictionaryForm": "いる",
            "readingForm": "イ",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "上一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "居る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "modeC": [
          {
            "surface": "春",
            "dictionaryForm": "春",
            "readingForm": "ハル",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "春",
            "dictionaryId": 0,
            "synonymGroupIds": [
              13234
            ],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "夕暮れ",
            "dictionaryForm": "夕暮れ",
            "readingForm": "ユウグレ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "夕暮れ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "桜",
            "dictionaryForm": "桜",
            "readingForm": "サクラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "桜",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "花びら",
            "dictionaryForm": "花びら",
            "readingForm": "ハナビラ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "花弁",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "静か",
            "dictionaryForm": "静か",
            "readingForm": "シズカ",
            "partOfSpeech": [
              "形状詞",
              "一般",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "静か",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "舞い落ちる",
            "dictionaryForm": "舞い落ちる",
            "readingForm": "マイオチル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "上一段-タ行",
              "連体形-一般"
            ],
            "normalizedForm": "舞い落ちる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "中",
            "dictionaryForm": "中",
            "readingForm": "ナカ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "中",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "私",
            "dictionaryForm": "私",
            "readingForm": "ワタクシ",
            "partOfSpeech": [
              "代名詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "私",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "は",
            "dictionaryForm": "は",
            "readingForm": "ハ",
            "partOfSpeech": [
              "助詞",
              "係助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "は",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "川沿い",
            "dictionaryForm": "川沿い",
            "readingForm": "カワゾイ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "川沿い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "小道",
            "dictionaryForm": "小道",
            "readingForm": "コミチ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "小道",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "歩い",
            "dictionaryForm": "歩く",
            "readingForm": "アルイ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "五段-カ行",
              "連用形-イ音便"
            ],
            "normalizedForm": "歩く",
            "dictionaryId": 0,
            "synonymGroupIds": [
              14939
            ],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "い",
            "dictionaryForm": "いる",
            "readingForm": "イ",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "上一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "居る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "textOutputA": "春\t名詞,普通名詞,副詞可能,*,*,*\t春\nの\t助詞,格助詞,*,*,*,*\tの\n夕暮れ\t名詞,普通名詞,一般,*,*,*\t夕暮れ\n、\t補助記号,読点,*,*,*,*\t、\n桜\t名詞,普通名詞,一般,*,*,*\t桜\nの\t助詞,格助詞,*,*,*,*\tの\n花びら\t名詞,普通名詞,一般,*,*,*\t花弁\nが\t助詞,格助詞,*,*,*,*\tが\n静か\t形状詞,一般,*,*,*,*\t静か\nに\t助動詞,*,*,*,助動詞-ダ,連用形-ニ\tだ\n舞い\t動詞,一般,*,*,五段-ワア行,連用形-一般\t舞う\n落ちる\t動詞,一般,*,*,上一段-タ行,連体形-一般\t落ちる\n中\t名詞,普通名詞,副詞可能,*,*,*\t中\n、\t補助記号,読点,*,*,*,*\t、\n私\t代名詞,*,*,*,*,*\t私\nは\t助詞,係助詞,*,*,*,*\tは\n川沿い\t名詞,普通名詞,一般,*,*,*\t川沿い\nの\t助詞,格助詞,*,*,*,*\tの\n小道\t名詞,普通名詞,一般,*,*,*\t小道\nを\t助詞,格助詞,*,*,*,*\tを\n歩い\t動詞,一般,*,*,五段-カ行,連用形-イ音便\t歩く\nて\t助詞,接続助詞,*,*,*,*\tて\nい\t動詞,非自立可能,*,*,上一段-ア行,連用形-一般\t居る\nた\t助動詞,*,*,*,助動詞-タ,終止形-一般\tた\n。\t補助記号,句点,*,*,*,*\t。\nEOS\n",
        "textOutputB": "春\t名詞,普通名詞,副詞可能,*,*,*\t春\t春\tハル\t0\t[13234]\nの\t助詞,格助詞,*,*,*,*\tの\tの\tノ\t0\t[]\n夕暮れ\t名詞,普通名詞,一般,*,*,*\t夕暮れ\t夕暮れ\tユウグレ\t0\t[]\n、\t補助記号,読点,*,*,*,*\t、\t、\t、\t0\t[]\n桜\t名詞,普通名詞,一般,*,*,*\t桜\t桜\tサクラ\t0\t[]\nの\t助詞,格助詞,*,*,*,*\tの\tの\tノ\t0\t[]\n花びら\t名詞,普通名詞,一般,*,*,*\t花弁\t花びら\tハナビラ\t0\t[]\nが\t助詞,格助詞,*,*,*,*\tが\tが\tガ\t0\t[]\n静か\t形状詞,一般,*,*,*,*\t静か\t静か\tシズカ\t0\t[]\nに\t助動詞,*,*,*,助動詞-ダ,連用形-ニ\tだ\tだ\tニ\t0\t[]\n舞い落ちる\t動詞,一般,*,*,上一段-タ行,連体形-一般\t舞い落ちる\t舞い落ちる\tマイオチル\t0\t[]\n中\t名詞,普通名詞,副詞可能,*,*,*\t中\t中\tナカ\t0\t[]\n、\t補助記号,読点,*,*,*,*\t、\t、\t、\t0\t[]\n私\t代名詞,*,*,*,*,*\t私\t私\tワタクシ\t0\t[]\nは\t助詞,係助詞,*,*,*,*\tは\tは\tハ\t0\t[]\n川沿い\t名詞,普通名詞,一般,*,*,*\t川沿い\t川沿い\tカワゾイ\t0\t[]\nの\t助詞,格助詞,*,*,*,*\tの\tの\tノ\t0\t[]\n小道\t名詞,普通名詞,一般,*,*,*\t小道\t小道\tコミチ\t0\t[]\nを\t助詞,格助詞,*,*,*,*\tを\tを\tヲ\t0\t[]\n歩い\t動詞,一般,*,*,五段-カ行,連用形-イ音便\t歩く\t歩く\tアルイ\t0\t[14939]\nて\t助詞,接続助詞,*,*,*,*\tて\tて\tテ\t0\t[]\nい\t動詞,非自立可能,*,*,上一段-ア行,連用形-一般\t居る\tいる\tイ\t0\t[]\nた\t助動詞,*,*,*,助動詞-タ,終止形-一般\tた\tた\tタ\t0\t[]\n。\t補助記号,句点,*,*,*,*\t。\t。\t。\t0\t[]\nEOS\n",
        "wakatiOutput": "春 の 夕暮れ 、 桜 の 花びら が 静か に 舞い落ちる 中 、 私 は 川沿い の 小道 を 歩い て い た 。"
      }
    },
    {
      "sentence": "遠くから聞こえてくる子どもたちの笑い声と、風に揺れる木々のざわめきが心地よく、時間がゆっくりと流れていくのを感じた。",
      "analysis": {
        "modeA": [
          {
            "surface": "遠く",
            "dictionaryForm": "遠く",
            "readingForm": "トオク",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "遠く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "から",
            "dictionaryForm": "から",
            "readingForm": "カラ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "から",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "聞こえ",
            "dictionaryForm": "聞こえる",
            "readingForm": "キコエ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "聞こえる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "くる",
            "dictionaryForm": "くる",
            "readingForm": "クル",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "カ行変格",
              "連体形-一般"
            ],
            "normalizedForm": "来る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "子ども",
            "dictionaryForm": "子ども",
            "readingForm": "コドモ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "子供",
            "dictionaryId": 0,
            "synonymGroupIds": [
              16008,
              19163
            ],
            "isOov": false
          },
          {
            "surface": "たち",
            "dictionaryForm": "たち",
            "readingForm": "タチ",
            "partOfSpeech": [
              "接尾辞",
              "名詞的",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "達",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "笑い声",
            "dictionaryForm": "笑い声",
            "readingForm": "ワライゴエ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "笑い声",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "風",
            "dictionaryForm": "風",
            "readingForm": "フウ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "形状詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "風",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "揺れる",
            "dictionaryForm": "揺れる",
            "readingForm": "ユレル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連体形-一般"
            ],
            "normalizedForm": "揺れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "木々",
            "dictionaryForm": "木々",
            "readingForm": "キギ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "木々",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ざわめき",
            "dictionaryForm": "ざわめき",
            "readingForm": "ザワメキ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "騒めき",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "心地よく",
            "dictionaryForm": "心地よい",
            "readingForm": "ココチヨク",
            "partOfSpeech": [
              "形容詞",
              "一般",
              "*",
              "*",
              "形容詞",
              "連用形-一般"
            ],
            "normalizedForm": "心地良い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "時間",
            "dictionaryForm": "時間",
            "readingForm": "ジカン",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "助数詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "時間",
            "dictionaryId": 0,
            "synonymGroupIds": [
              442
            ],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ゆっくり",
            "dictionaryForm": "ゆっくり",
            "readingForm": "ユックリ",
            "partOfSpeech": [
              "副詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "ゆっくり",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "流れ",
            "dictionaryForm": "流れる",
            "readingForm": "ナガレ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連用形-一般"
            ],
            "normalizedForm": "流れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "いく",
            "dictionaryForm": "いく",
            "readingForm": "イク",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "五段-カ行",
              "連体形-一般"
            ],
            "normalizedForm": "行く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "準体助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "感じ",
            "dictionaryForm": "感ずる",
            "readingForm": "カンジ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "サ行変格",
              "連用形-一般"
            ],
            "normalizedForm": "感じる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "modeB": [
          {
            "surface": "遠く",
            "dictionaryForm": "遠く",
            "readingForm": "トオク",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "遠く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "から",
            "dictionaryForm": "から",
            "readingForm": "カラ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "から",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "聞こえ",
            "dictionaryForm": "聞こえる",
            "readingForm": "キコエ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "聞こえる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "くる",
            "dictionaryForm": "くる",
            "readingForm": "クル",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "カ行変格",
              "連体形-一般"
            ],
            "normalizedForm": "来る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "子ども",
            "dictionaryForm": "子ども",
            "readingForm": "コドモ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "子供",
            "dictionaryId": 0,
            "synonymGroupIds": [
              16008,
              19163
            ],
            "isOov": false
          },
          {
            "surface": "たち",
            "dictionaryForm": "たち",
            "readingForm": "タチ",
            "partOfSpeech": [
              "接尾辞",
              "名詞的",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "達",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "笑い声",
            "dictionaryForm": "笑い声",
            "readingForm": "ワライゴエ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "笑い声",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "風",
            "dictionaryForm": "風",
            "readingForm": "フウ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "形状詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "風",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "揺れる",
            "dictionaryForm": "揺れる",
            "readingForm": "ユレル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連体形-一般"
            ],
            "normalizedForm": "揺れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "木々",
            "dictionaryForm": "木々",
            "readingForm": "キギ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "木々",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ざわめき",
            "dictionaryForm": "ざわめき",
            "readingForm": "ザワメキ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "騒めき",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "心地よく",
            "dictionaryForm": "心地よい",
            "readingForm": "ココチヨク",
            "partOfSpeech": [
              "形容詞",
              "一般",
              "*",
              "*",
              "形容詞",
              "連用形-一般"
            ],
            "normalizedForm": "心地良い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "時間",
            "dictionaryForm": "時間",
            "readingForm": "ジカン",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "助数詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "時間",
            "dictionaryId": 0,
            "synonymGroupIds": [
              442
            ],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ゆっくり",
            "dictionaryForm": "ゆっくり",
            "readingForm": "ユックリ",
            "partOfSpeech": [
              "副詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "ゆっくり",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "流れ",
            "dictionaryForm": "流れる",
            "readingForm": "ナガレ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連用形-一般"
            ],
            "normalizedForm": "流れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "いく",
            "dictionaryForm": "いく",
            "readingForm": "イク",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "五段-カ行",
              "連体形-一般"
            ],
            "normalizedForm": "行く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "準体助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "感じ",
            "dictionaryForm": "感ずる",
            "readingForm": "カンジ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "サ行変格",
              "連用形-一般"
            ],
            "normalizedForm": "感じる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "modeC": [
          {
            "surface": "遠く",
            "dictionaryForm": "遠く",
            "readingForm": "トオク",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "副詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "遠く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "から",
            "dictionaryForm": "から",
            "readingForm": "カラ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "から",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "聞こえ",
            "dictionaryForm": "聞こえる",
            "readingForm": "キコエ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ア行",
              "連用形-一般"
            ],
            "normalizedForm": "聞こえる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "くる",
            "dictionaryForm": "くる",
            "readingForm": "クル",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "カ行変格",
              "連体形-一般"
            ],
            "normalizedForm": "来る",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "子ども",
            "dictionaryForm": "子ども",
            "readingForm": "コドモ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "子供",
            "dictionaryId": 0,
            "synonymGroupIds": [
              16008,
              19163
            ],
            "isOov": false
          },
          {
            "surface": "たち",
            "dictionaryForm": "たち",
            "readingForm": "タチ",
            "partOfSpeech": [
              "接尾辞",
              "名詞的",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "達",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "笑い声",
            "dictionaryForm": "笑い声",
            "readingForm": "ワライゴエ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "笑い声",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "風",
            "dictionaryForm": "風",
            "readingForm": "フウ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "形状詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "風",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "に",
            "dictionaryForm": "だ",
            "readingForm": "ニ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-ダ",
              "連用形-ニ"
            ],
            "normalizedForm": "だ",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "揺れる",
            "dictionaryForm": "揺れる",
            "readingForm": "ユレル",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連体形-一般"
            ],
            "normalizedForm": "揺れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "木々",
            "dictionaryForm": "木々",
            "readingForm": "キギ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "木々",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ざわめき",
            "dictionaryForm": "ざわめき",
            "readingForm": "ザワメキ",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "一般",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "騒めき",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "心地よく",
            "dictionaryForm": "心地よい",
            "readingForm": "ココチヨク",
            "partOfSpeech": [
              "形容詞",
              "一般",
              "*",
              "*",
              "形容詞",
              "連用形-一般"
            ],
            "normalizedForm": "心地良い",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "、",
            "dictionaryForm": "、",
            "readingForm": "、",
            "partOfSpeech": [
              "補助記号",
              "読点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "、",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "時間",
            "dictionaryForm": "時間",
            "readingForm": "ジカン",
            "partOfSpeech": [
              "名詞",
              "普通名詞",
              "助数詞可能",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "時間",
            "dictionaryId": 0,
            "synonymGroupIds": [
              442
            ],
            "isOov": false
          },
          {
            "surface": "が",
            "dictionaryForm": "が",
            "readingForm": "ガ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "が",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "ゆっくり",
            "dictionaryForm": "ゆっくり",
            "readingForm": "ユックリ",
            "partOfSpeech": [
              "副詞",
              "*",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "ゆっくり",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "と",
            "dictionaryForm": "と",
            "readingForm": "ト",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "と",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "流れ",
            "dictionaryForm": "流れる",
            "readingForm": "ナガレ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "下一段-ラ行",
              "連用形-一般"
            ],
            "normalizedForm": "流れる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "て",
            "dictionaryForm": "て",
            "readingForm": "テ",
            "partOfSpeech": [
              "助詞",
              "接続助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "て",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "いく",
            "dictionaryForm": "いく",
            "readingForm": "イク",
            "partOfSpeech": [
              "動詞",
              "非自立可能",
              "*",
              "*",
              "五段-カ行",
              "連体形-一般"
            ],
            "normalizedForm": "行く",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "の",
            "dictionaryForm": "の",
            "readingForm": "ノ",
            "partOfSpeech": [
              "助詞",
              "準体助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "の",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "を",
            "dictionaryForm": "を",
            "readingForm": "ヲ",
            "partOfSpeech": [
              "助詞",
              "格助詞",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "を",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "感じ",
            "dictionaryForm": "感ずる",
            "readingForm": "カンジ",
            "partOfSpeech": [
              "動詞",
              "一般",
              "*",
              "*",
              "サ行変格",
              "連用形-一般"
            ],
            "normalizedForm": "感じる",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "た",
            "dictionaryForm": "た",
            "readingForm": "タ",
            "partOfSpeech": [
              "助動詞",
              "*",
              "*",
              "*",
              "助動詞-タ",
              "終止形-一般"
            ],
            "normalizedForm": "た",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          },
          {
            "surface": "。",
            "dictionaryForm": "。",
            "readingForm": "。",
            "partOfSpeech": [
              "補助記号",
              "句点",
              "*",
              "*",
              "*",
              "*"
            ],
            "normalizedForm": "。",
            "dictionaryId": 0,
            "synonymGroupIds": [],
            "isOov": false
          }
        ],
        "textOutputA": "遠く\t名詞,普通名詞,副詞可能,*,*,*\t遠く\nから\t助詞,格助詞,*,*,*,*\tから\n聞こえ\t動詞,一般,*,*,下一段-ア行,連用形-一般\t聞こえる\nて\t助詞,接続助詞,*,*,*,*\tて\nくる\t動詞,非自立可能,*,*,カ行変格,連体形-一般\t来る\n子ども\t名詞,普通名詞,一般,*,*,*\t子供\nたち\t接尾辞,名詞的,一般,*,*,*\t達\nの\t助詞,格助詞,*,*,*,*\tの\n笑い声\t名詞,普通名詞,一般,*,*,*\t笑い声\nと\t助詞,格助詞,*,*,*,*\tと\n、\t補助記号,読点,*,*,*,*\t、\n風\t名詞,普通名詞,形状詞可能,*,*,*\t風\nに\t助動詞,*,*,*,助動詞-ダ,連用形-ニ\tだ\n揺れる\t動詞,一般,*,*,下一段-ラ行,連体形-一般\t揺れる\n木々\t名詞,普通名詞,一般,*,*,*\t木々\nの\t助詞,格助詞,*,*,*,*\tの\nざわめき\t名詞,普通名詞,一般,*,*,*\t騒めき\nが\t助詞,格助詞,*,*,*,*\tが\n心地よく\t形容詞,一般,*,*,形容詞,連用形-一般\t心地良い\n、\t補助記号,読点,*,*,*,*\t、\n時間\t名詞,普通名詞,助数詞可能,*,*,*\t時間\nが\t助詞,格助詞,*,*,*,*\tが\nゆっくり\t副詞,*,*,*,*,*\tゆっくり\nと\t助詞,格助詞,*,*,*,*\tと\n流れ\t動詞,一般,*,*,下一段-ラ行,連用形-一般\t流れる\nて\t助詞,接続助詞,*,*,*,*\tて\nいく\t動詞,非自立可能,*,*,五段-カ行,連体形-一般\t行く\nの\t助詞,準体助詞,*,*,*,*\tの\nを\t助詞,格助詞,*,*,*,*\tを\n感じ\t動詞,一般,*,*,サ行変格,連用形-一般\t感じる\nた\t助動詞,*,*,*,助動詞-タ,終止形-一般\tた\n。\t補助記号,句点,*,*,*,*\t。\nEOS\n",
        "textOutputB": "遠く\t名詞,普通名詞,副詞可能,*,*,*\t遠く\t遠く\tトオク\t0\t[]\nから\t助詞,格助詞,*,*,*,*\tから\tから\tカラ\t0\t[]\n聞こえ\t動詞,一般,*,*,下一段-ア行,連用形-一般\t聞こえる\t聞こえる\tキコエ\t0\t[]\nて\t助詞,接続助詞,*,*,*,*\tて\tて\tテ\t0\t[]\nくる\t動詞,非自立可能,*,*,カ行変格,連体形-一般\t来る\tくる\tクル\t0\t[]\n子ども\t名詞,普通名詞,一般,*,*,*\t子供\t子ども\tコドモ\t0\t[16008, 19163]\nたち\t接尾辞,名詞的,一般,*,*,*\t達\tたち\tタチ\t0\t[]\nの\t助詞,格助詞,*,*,*,*\tの\tの\tノ\t0\t[]\n笑い声\t名詞,普通名詞,一般,*,*,*\t笑い声\t笑い声\tワライゴエ\t0\t[]\nと\t助詞,格助詞,*,*,*,*\tと\tと\tト\t0\t[]\n、\t補助記号,読点,*,*,*,*\t、\t、\t、\t0\t[]\n風\t名詞,普通名詞,形状詞可能,*,*,*\t風\t風\tフウ\t0\t[]\nに\t助動詞,*,*,*,助動詞-ダ,連用形-ニ\tだ\tだ\tニ\t0\t[]\n揺れる\t動詞,一般,*,*,下一段-ラ行,連体形-一般\t揺れる\t揺れる\tユレル\t0\t[]\n木々\t名詞,普通名詞,一般,*,*,*\t木々\t木々\tキギ\t0\t[]\nの\t助詞,格助詞,*,*,*,*\tの\tの\tノ\t0\t[]\nざわめき\t名詞,普通名詞,一般,*,*,*\t騒めき\tざわめき\tザワメキ\t0\t[]\nが\t助詞,格助詞,*,*,*,*\tが\tが\tガ\t0\t[]\n心地よく\t形容詞,一般,*,*,形容詞,連用形-一般\t心地良い\t心地よい\tココチヨク\t0\t[]\n、\t補助記号,読点,*,*,*,*\t、\t、\t、\t0\t[]\n時間\t名詞,普通名詞,助数詞可能,*,*,*\t時間\t時間\tジカン\t0\t[442]\nが\t助詞,格助詞,*,*,*,*\tが\tが\tガ\t0\t[]\nゆっくり\t副詞,*,*,*,*,*\tゆっくり\tゆっくり\tユックリ\t0\t[]\nと\t助詞,格助詞,*,*,*,*\tと\tと\tト\t0\t[]\n流れ\t動詞,一般,*,*,下一段-ラ行,連用形-一般\t流れる\t流れる\tナガレ\t0\t[]\nて\t助詞,接続助詞,*,*,*,*\tて\tて\tテ\t0\t[]\nいく\t動詞,非自立可能,*,*,五段-カ行,連体形-一般\t行く\tいく\tイク\t0\t[]\nの\t助詞,準体助詞,*,*,*,*\tの\tの\tノ\t0\t[]\nを\t助詞,格助詞,*,*,*,*\tを\tを\tヲ\t0\t[]\n感じ\t動詞,一般,*,*,サ行変格,連用形-一般\t感じる\t感ずる\tカンジ\t0\t[]\nた\t助動詞,*,*,*,助動詞-タ,終止形-一般\tた\tた\tタ\t0\t[]\n。\t補助記号,句点,*,*,*,*\t。\t。\t。\t0\t[]\nEOS\n",
        "wakatiOutput": "遠く から 聞こえ て くる 子ども たち の 笑い声 と 、 風 に 揺れる 木々 の ざわめき が 心地よく 、 時間 が ゆっくり と 流れ て いく の を 感じ た 。"
      }
    }
  ]
};
</script>
