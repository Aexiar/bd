<script setup lang="ts">
import { ArrowRight, House, Database, Layers3, Workflow, Radio, ChartNoAxesCombined, Braces, Sparkles } from '@lucide/vue'
import { withBase } from 'vitepress'

const topics = [
  { number: '01', icon: Database, title: '夯实数据底座', en: 'FOUNDATION', description: '从 Linux、Java 到数据库，搭建理解大数据的知识地基。', tags: ['Linux', 'Java', 'MySQL'], color: 'slate' },
  { number: '02', icon: Layers3, title: '探索批流计算', en: 'COMPUTING', description: '走进分布式计算，理解海量数据如何被高效存储与处理。', tags: ['Hadoop', 'Spark', 'Flink'], color: 'blue' },
  { number: '03', icon: Workflow, title: '连接生态实践', en: 'ECOSYSTEM', description: '串联采集、分析与治理，让零散的知识成为完整的工程视野。', tags: ['数据采集', '数据仓库', '调度治理'], color: 'violet' },
]
const nodes = [
  { icon: Radio, title: '多源采集', detail: 'Kafka · Flume', position: 'system' },
  { icon: Database, title: '分布式存储', detail: 'HDFS · HBase', position: 'containers' },
  { icon: Braces, title: '批流计算', detail: 'Spark · Flink', position: 'cluster' },
  { icon: ChartNoAxesCombined, title: '分析洞察', detail: 'Hive · Superset', position: 'delivery' },
]
const flowPaths = [
  'M110 96 H174 Q198 96 198 120 V161 Q198 175 218 175 H250',
  'M110 256 H174 Q198 256 198 232 V203 Q198 189 218 189 H250',
  'M310 175 H345 Q370 175 370 151 V120 Q370 96 394 96 H450',
  'M310 189 H345 Q370 189 370 213 V232 Q370 256 394 256 H450',
]
</script>

<template>
  <div class="data-home">
    <section class="data-hero" aria-labelledby="data-title">
      <div class="data-intro">
        <p class="data-eyebrow"><i /> 在这里，连接数据与知识</p>
        <h1 id="data-title">走进大数据的世界<br><span>让知识，流动起来。</span></h1>
        <p class="data-description">从第一条数据，到每一次洞察。<br>一起探索海量数据背后的原理、技术与实践。</p>
        <div class="data-actions">
          <a class="data-secondary" :href="withBase('/')"><House :size="17" />首页</a>
          <a class="data-primary" :href="withBase('/guide')">开启学习之旅<ArrowRight :size="17" /></a>
        </div>
        <div class="data-notes"><span>系统梳理</span><span>实践驱动</span><span>持续积累</span></div>
      </div>
      <div class="data-visual" role="img" aria-label="数据流示意：多源数据经采集接入数据平台，经过分布式存储和批流计算，最终形成分析洞察。">
        <div class="visual-label"><span><i /> THE DATA JOURNEY</span><span>数据的旅程</span></div>
        <div class="data-orbit orbit-one" /><div class="data-orbit orbit-two" />
        <svg class="data-connectors" viewBox="0 0 560 350" fill="none" aria-hidden="true">
          <g v-for="(path, index) in flowPaths" :key="path">
            <path :d="path" />
            <path class="data-flow" :d="path" pathLength="100" :style="{ animationDelay: `${index * -0.8}s` }" />
          </g>
        </svg>
        <div v-for="node in nodes" :key="node.position" class="data-node" :class="node.position">
          <component :is="node.icon" :size="24" :stroke-width="1.6" />
          <strong>{{ node.title }}</strong><small>{{ node.detail }}</small>
        </div>
        <div class="data-core"><Layers3 :size="43" :stroke-width="1.4" /><strong>DATA</strong><small>连接 · 计算 · 价值</small></div>
        <div class="visual-caption"><Sparkles :size="14" /> 从海量数据中，发现新的可能</div>
      </div>
    </section>
    <div class="data-stack"><span>构建你的技术视野</span><div><b>Hadoop</b><i /><b>Spark</b><i /><b>Flink</b><i /><b>Kafka</b><i /><b>Hive</b></div><span>开放生态 · 无限可能</span></div>
    <section id="learning-path" class="data-learning" aria-labelledby="learning-title">
      <div class="learning-heading"><div><p>LEARN · BUILD · CONNECT</p><h2 id="learning-title">每一步积累，都通向更大的世界</h2></div><span>循序渐进，构建你的大数据知识体系</span></div>
      <div class="data-topics">
        <article v-for="topic in topics" :key="topic.number" class="data-topic" :class="topic.color">
          <div class="topic-top"><div class="topic-icon"><component :is="topic.icon" :size="23" :stroke-width="1.7" /></div><span>{{ topic.number }} / {{ topic.en }}</span></div>
          <h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><div class="topic-tags"><span v-for="tag in topic.tags" :key="tag">{{ tag }}</span></div>
        </article>
      </div>
    </section>
    <p class="data-closing"><span />保持好奇，让每一份数据都有意义<span /></p>
  </div>
</template>

<!-- Layout and motion adapted from Aexiar/linux CloudHome.vue. -->
<style scoped>
.data-home { --data-text: #203c36; --data-muted: #607b72; --data-accent: var(--data-primary); --data-line: #d8e9e2; --data-surface: rgb(255 255 255 / 65%); max-width: 1200px; margin: 0 auto; padding: clamp(24px, 4vh, 40px) 32px 16px; color: var(--data-text); line-height: 1.5; }
.data-hero { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 48px; padding: 8px 0 clamp(20px, 3vh, 28px); }
.data-eyebrow { display: flex; align-items: center; gap: 10px; color: var(--data-accent); font-size: 12px; letter-spacing: 2px; margin: 0 0 10px; }
.data-eyebrow i, .visual-label i { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--vp-c-brand-1); box-shadow: 0 0 0 4px rgb(23 139 120 / 10%); }
.data-intro h1 { padding: 0; text-align: left; font-size: clamp(30px, 3vw, 40px); line-height: 1.3; letter-spacing: -1.7px; font-weight: 750; margin: 0; }
.data-intro h1::after { display: none; } .data-intro h1 span { color: var(--data-accent); background: linear-gradient(110deg, var(--data-primary), var(--vp-c-brand-1) 65%, #229d87); background-clip: text; -webkit-text-fill-color: transparent; }
.data-description { margin: 10px 0 14px; font-size: 15px; line-height: 1.6; color: var(--data-muted); }
.data-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.data-actions a { display: inline-flex; align-items: center; justify-content: center; gap: 14px; padding: 10px 18px; border-radius: 8px; font-size: 13px; line-height: 24px; font-weight: 600; transition: transform .2s, box-shadow .2s; }
.data-actions a:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgb(23 139 120 / 18%); }
.data-actions a:focus-visible { outline: 3px solid var(--data-accent); outline-offset: 4px; }
.data-primary { background: linear-gradient(110deg, #137766, #178b78); color: white; }
.data-secondary { background: rgb(23 139 120 / 6%); border: 1px solid #acd5c7; color: var(--data-accent); }
.data-notes { display: flex; gap: 22px; margin-top: 12px; color: var(--data-muted); font-size: 11px; }
.data-notes span::before { content: '•'; color: #88b5a5; margin-right: 7px; }
.data-visual { position: relative; width: 100%; aspect-ratio: 560 / 350; background-image: radial-gradient(rgb(23 139 120 / 16%) .8px, transparent .8px); background-size: 18px 18px; }
.visual-label { position: absolute; inset: 0 0 auto; display: flex; justify-content: space-between; color: var(--data-muted); font-size: 9px; letter-spacing: 1.8px; }
.visual-label i { margin-right: 9px; }.visual-label > span:last-child { letter-spacing: 0; }
.data-connectors { position: absolute; inset: 0; width: 100%; height: 100%; stroke: #9fc9bb; stroke-width: 1.2; }
.data-orbit { position: absolute; border: 1px solid rgb(23 139 120 / 10%); border-radius: 50%; top: 52%; left: 50%; transform: translate(-50%, -50%); aspect-ratio: 1; }.orbit-one { width: 44%; }.orbit-two { width: 60%; }
.data-node { position: absolute; width: 23%; height: 25%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: var(--data-surface); border: 1px solid #bdd9cd; border-radius: 13px; color: #388572; }
.data-node strong { color: var(--data-text); font-size: 12px; }.data-node small { color: var(--data-muted); font-size: 9px; }
.system { left: 2%; top: 15%; }.containers { left: 2%; bottom: 14%; border-color: #a9d6c8; color: var(--vp-c-brand-2); }.cluster { right: 2%; top: 15%; border-color: #a5d6c5; color: var(--vp-c-brand-1); }.delivery { right: 2%; bottom: 14%; border-color: #b4d9c6; color: #438d72; }
.data-core { position: absolute; top: 52%; left: 50%; transform: translate(-50%, -50%); width: 24%; height: 37%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 1px solid #8bcab7; border-radius: 26px; background: linear-gradient(140deg, #e7f8f0, #d4efe5); box-shadow: 0 0 0 7px rgb(255 255 255 / 40%), 0 12px 35px rgb(23 139 120 / 12%); color: var(--vp-c-brand-2); }
.data-core strong { font-size: 20px; letter-spacing: 4px; font-weight: 500; }.data-core small { font-size: 9px; letter-spacing: 1px; }
.visual-caption { position: absolute; bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; color: var(--data-muted); font-size: 10px; }
.data-stack { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 12px 0; border-block: 1px solid var(--data-line); color: var(--data-muted); font-size: 11px; }.data-stack > div { display: flex; align-items: center; gap: 25px; }.data-stack b { font-size: 16px; font-weight: 600; line-height: 24px; letter-spacing: .3px; }.data-stack i { width: 3px; height: 3px; background: #afcfc0; border-radius: 50%; }
.data-learning { padding-top: clamp(20px, 3vh, 28px); }.learning-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; margin-bottom: 18px; }.learning-heading p { font-size: 9px; letter-spacing: 2px; color: var(--data-accent); margin: 0 0 8px; }.learning-heading h2 { padding: 0; border: 0; font-size: 20px; font-weight: 650; line-height: 1.5; letter-spacing: -.5px; margin: 0; }.learning-heading > span { font-size: 11px; color: var(--data-muted); }
.data-topics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }.data-topic { --topic-color: #388572; --topic-border: #b8d8ca; --topic-tint: rgb(56 133 114 / 8%); position: relative; overflow: hidden; border: 1px solid var(--topic-border); border-radius: 14px; padding: 20px; background: var(--data-surface); }.data-topic::before { content: ''; position: absolute; top: 0; left: 18px; right: 18px; height: 2px; background: linear-gradient(90deg, var(--topic-color), transparent); opacity: .6; }.blue { --topic-color: var(--vp-c-brand-1); --topic-border: #a9d5c6; --topic-tint: rgb(23 139 120 / 8%); }.violet { --topic-color: #438d72; --topic-border: #bbd9c7; --topic-tint: rgb(67 141 114 / 8%); }
.topic-top { display: flex; align-items: center; gap: 12px; color: var(--topic-color); }.topic-top > span { line-height: 24px; font-size: 9px; letter-spacing: 1px; }.topic-icon { padding: 7px; border-radius: 10px; background: var(--topic-tint); }.data-topic h3 { font-size: 17px; font-weight: 650; margin: 8px 0 5px; }.data-topic p { font-size: 12px; line-height: 1.9; color: var(--data-muted); margin: 0; }.topic-tags { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 7px; }.topic-tags span { color: var(--topic-color); background: var(--topic-tint); border-radius: 4px; padding: 2px 8px; font-size: 10px; line-height: 16px; }
.data-closing { display: flex; align-items: center; justify-content: center; gap: 14px; margin: clamp(18px, 2.5vh, 24px) 0 0; font-size: 11px; color: var(--data-muted); }.data-closing span { width: 24px; height: 1px; background: var(--data-line); }
:global(.is-home-page .Layout:has(.data-home)) { background-image: radial-gradient(ellipse at 72% 18%, rgb(137 210 181 / 20%), transparent 46%), linear-gradient(150deg, rgb(221 244 232 / 65%), transparent 58%), linear-gradient(215deg, rgb(223 245 239 / 55%), transparent 58%); background-size: auto; }
:global(.VPHome:has(.data-home)) { margin-bottom: 0; } :global(.Layout:has(.data-home) .VPFooter) { padding: 16px 24px; }
:global(.dark .data-home) { --data-text: #dceee6; --data-muted: #a5bfb3; --data-accent: var(--data-primary); --data-line: #324c40; --data-surface: rgb(25 42 34 / 82%); }
:global(.dark .is-home-page .Layout:has(.data-home)), :global(.dark.is-home-page .Layout:has(.data-home)) { background-image: radial-gradient(ellipse at 70% 18%, rgb(38 104 78 / 20%), transparent 50%), linear-gradient(145deg, rgb(24 82 64 / 28%), transparent 65%); }
:global(.dark .data-home .data-core) { background: linear-gradient(140deg, #244b3d, #203f36); color: var(--vp-c-brand-1); border-color: #548b75; box-shadow: 0 0 0 7px rgb(90 166 136 / 8%); }
:global(.dark .data-home .data-topic) { --topic-border: #3d594a; --topic-color: #a3cfba; }:global(.dark .data-home .blue) { --topic-border: #3b6051; --topic-color: var(--vp-c-brand-1); }:global(.dark .data-home .violet) { --topic-border: #486553; --topic-color: #a3d2b5; }
@media (max-width: 960px) { .data-hero { gap: 24px; }.data-stack > span:last-child { display: none; }.data-stack > div { gap: 18px; }.learning-heading > span { display: none; }.data-core { gap: 5px; }.data-core svg { width: 32px; } }
@media (max-width: 700px) { .data-home { padding: 32px 24px 20px; }.data-hero { grid-template-columns: 1fr; gap: 36px; padding-bottom: 30px; }.data-intro { text-align: center; }.data-eyebrow, .data-actions, .data-notes { justify-content: center; }.data-intro h1 { text-align: center; font-size: clamp(27px, 6vw, 38px); line-height: 1.4; letter-spacing: -1px; }.data-description { font-size: 13px; line-height: 1.8; }.data-visual { max-width: 520px; margin: auto; }.data-stack { flex-direction: column; gap: 12px; }.data-stack > div { gap: 12px; }.data-stack b { font-size: 12px; }.data-learning { padding-top: 30px; }.learning-heading h2 { font-size: 18px; }.data-topics { grid-template-columns: 1fr; gap: 14px; }.data-topic { padding: 20px; }.data-topic h3 { font-size: 15px; line-height: 22px; }.data-topic p { line-height: 1.6; }.data-closing { font-size: 10px; gap: 8px; }.data-closing span { width: 12px; } }
@media (max-width: 700px) {
  .data-node { gap: 4px; }
  .data-node > svg { width: 19px; height: 19px; flex-shrink: 0; }
  .data-node strong { font-size: 10px; line-height: 1.4; }
  .data-node small { font-size: 7px; line-height: 1.4; white-space: nowrap; }
  .data-core { gap: 4px; border-radius: 20px; }
  .data-core > svg { width: 28px; height: 28px; flex-shrink: 0; }
  .data-core strong { font-size: 16px; letter-spacing: 2px; }
  .data-core small { font-size: 7px; letter-spacing: 0; }
}
/* Flow overlays share the static paths so connections stay attached to the nodes. */
.data-flow {
  stroke: var(--data-accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 5 95;
  animation: data-flow 4s linear infinite;
}
.data-core::before {
  content: '';
  position: absolute;
  inset: -8px;
  border: 1px solid rgb(23 139 120 / 35%);
  border-radius: 32px;
  animation: data-pulse 4s ease-out infinite;
  pointer-events: none;
}
.data-core > svg { animation: data-float 5s ease-in-out infinite; }
.visual-label i { animation: data-beacon 3s ease-in-out infinite; }
@keyframes data-flow { to { stroke-dashoffset: -100; } }
@keyframes data-pulse {
  0% { transform: scale(1); opacity: .65; }
  85%, 100% { transform: scale(1.25); opacity: 0; }
}
@keyframes data-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes data-beacon {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}
/* Reduce spacing on short desktop viewports without clipping content. */
@media (min-width: 961px) and (max-height: 900px) {
  .data-home { padding-top: 16px; padding-bottom: 12px; }
  .data-hero { padding-bottom: 16px; }
  .data-visual { max-width: 408px; justify-self: end; }
  .data-intro h1 { font-size: 32px; }
  .data-eyebrow { margin-bottom: 8px; }
  .data-description { margin: 12px 0; line-height: 1.7; }
  .data-actions a { padding: 10px 16px; }
  .data-notes { margin-top: 8px; }
  .data-learning { padding-top: 16px; }
  .learning-heading h2 { font-size: 18px; }
  .learning-heading p { margin-bottom: 5px; }
  .data-topic h3 { margin-top: 10px; margin-bottom: 6px; }
  .data-topic p { margin-bottom: 10px; }
  .learning-heading { margin-bottom: 12px; }
  .data-topic { padding: 16px; }
  .data-closing { margin-top: 18px; }
  :global(.Layout:has(.data-home) .VPFooter) { padding: 12px 24px; }
}
@media (prefers-reduced-motion: reduce) {
  .data-flow, .data-core::before, .data-core > svg, .visual-label i { animation: none; }
  .data-flow, .data-core::before { opacity: 0; } .data-actions a { transition: none; }.data-actions a:hover { transform: none; } }
</style>
