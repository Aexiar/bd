<script setup lang="ts">
import { House, ArrowRight, Database, Layers3, Workflow, Radio, ChartNoAxesCombined, Braces, Sparkles } from '@lucide/vue'
import { withBase } from 'vitepress'
const topics = [
  { number: '01', icon: Database, title: '夯实数据底座', en: 'FOUNDATION', description: '从 Linux、Java 到数据库，搭建理解大数据的知识地基。', tags: ['Linux', 'Java', 'MySQL'], color: 'mint' },
  { number: '02', icon: Layers3, title: '探索批流计算', en: 'COMPUTING', description: '走进分布式计算，理解海量数据如何被高效存储与处理。', tags: ['Hadoop', 'Spark', 'Flink'], color: 'blue' },
  { number: '03', icon: Workflow, title: '连接生态实践', en: 'ECOSYSTEM', description: '串联采集、分析与治理，让零散的知识成为完整的工程视野。', tags: ['数据采集', '数据仓库', '调度治理'], color: 'violet' },
]
</script>
<template>
  <div class="data-home">
    <section class="data-hero" aria-labelledby="data-title">
      <div class="data-intro">
        <div class="data-eyebrow"><span></span> 在这里，连接数据与知识</div>
        <h1 id="data-title">走进大数据的世界<br><span>让知识，流动起来。</span></h1>
        <p class="data-description">从第一条数据，到每一次洞察。<br>一起探索海量数据背后的原理、技术与实践。</p>
        <div class="data-actions"><a class="data-secondary" :href="withBase('/')"><House :size="17" />首页</a><a class="data-primary" :href="withBase('/guide')">开启学习之旅 <ArrowRight :size="17" /></a></div>
        <div class="data-notes"><span><i></i> 系统梳理</span><span><i></i> 实践驱动</span><span><i></i> 持续积累</span></div>
      </div>
      <div class="data-visual" role="img" aria-label="数据流示意：多源数据经采集接入数据平台，经过分布式存储和批流计算，最终形成分析洞察。">
        <div class="visual-label"><span class="live-dot"></span> THE DATA JOURNEY <span>数据的旅程</span></div>
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <svg class="data-connectors" viewBox="0 0 560 350" fill="none" aria-hidden="true">
          <path d="M100 104 H170 Q190 104 190 124 V166 H252 M100 260 H170 Q190 260 190 240 V196 H252 M308 181 H365 Q380 181 380 160 V111 H464 M308 196 H367 Q380 196 380 220 V268 H464" />
          <path class="flow-line" d="M100 104 H170 Q190 104 190 124 V166 H252 M100 260 H170 Q190 260 190 240 V196 H252 M308 181 H365 Q380 181 380 160 V111 H464 M308 196 H367 Q380 196 380 220 V268 H464" />
        </svg>
        <div class="flow-node source-node"><div class="node-icon"><Radio :size="22" /></div><strong>多源采集</strong><small>Kafka · Flume</small></div>
        <div class="flow-node storage-node"><div class="node-icon"><Database :size="22" /></div><strong>分布式存储</strong><small>HDFS · HBase</small></div>
        <div class="data-core"><div class="core-symbol"><Layers3 :size="37" :stroke-width="1.5" /></div><strong>DATA</strong><small>连接 · 计算 · 价值</small></div>
        <div class="flow-node compute-node"><div class="node-icon"><Braces :size="22" /></div><strong>批流计算</strong><small>Spark · Flink</small></div>
        <div class="flow-node insight-node"><div class="node-icon"><ChartNoAxesCombined :size="22" /></div><strong>分析洞察</strong><small>Hive · Superset</small></div>
        <div class="visual-caption"><Sparkles :size="14" /> 从海量数据中，发现新的可能</div>
      </div>
    </section>
    <div class="data-stack"><span>构建你的技术视野</span><div><b>Hadoop</b><i></i><b>Spark</b><i></i><b>Flink</b><i></i><b>Kafka</b><i></i><b>Hive</b></div><span class="stack-end">开放生态 · 无限可能</span></div>
    <section id="learning-path" class="data-learning" aria-labelledby="learning-title">
      <div class="learning-heading"><div><p>LEARN · BUILD · CONNECT</p><h2 id="learning-title">每一步积累，都通向更大的世界</h2></div><span>循序渐进，构建你的大数据知识体系</span></div>
      <div class="data-topics">
        <article v-for="topic in topics" :key="topic.number" class="data-topic" :class="topic.color">
          <div class="topic-top"><div class="topic-icon"><component :is="topic.icon" :size="23" :stroke-width="1.7" /></div><span>{{ topic.number }} / {{ topic.en }}</span></div>
          <h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><div class="topic-tags"><span v-for="tag in topic.tags" :key="tag">{{ tag }}</span></div>
        </article>
      </div>
    </section>
    <p class="data-closing"><span></span> 保持好奇，让每一份数据都有意义 <span></span></p>
  </div>
</template>
