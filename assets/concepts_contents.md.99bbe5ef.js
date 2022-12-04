import{_ as r,c as l,a,w as o,e as t,b as s,d as n,r as p,o as c}from"./404.md.f7b48380.js";const w='{"title":"contents.json","description":"","frontmatter":{"title":"contents.json","mentions":["MedicalJewel105","Osaxely"]},"headers":[{"level":2,"title":"Structure of the file","slug":"structure-of-the-file"},{"level":2,"title":"Automatizing the process","slug":"automatizing-the-process"},{"level":2,"title":"Additional information","slug":"additional-information"}],"relativePath":"concepts/contents.md"}',u={},d=t('<p><code>contents.json</code> is a file that is <em>probably</em> used for the game to process the pack files more easily. It is <em>probably</em> intended for marketplace content creators and Mojang, it is not required to have this file in the pack for the pack to work properly.</p><p>You will find there some instructions about the usage of this file.</p><h2 id="structure-of-the-file" tabindex="-1">Structure of the file <a class="header-anchor" href="#structure-of-the-file" aria-hidden="true">#</a></h2><p><code>contents.json</code> is located at the root of the add-on directory. It contains a list of the files that are included in the pack. Example:</p>',4),m=n("RP/contents.json"),b=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;texts/en_US.lang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contents.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manifest.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animations/my_animation.animation.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animation_controllers/my_ac.ac.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity/my_entity.entity.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/textures_list.json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/my_block.png&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1),h=s("h2",{id:"automatizing-the-process",tabindex:"-1"},[n("Automatizing the process "),s("a",{class:"header-anchor",href:"#automatizing-the-process","aria-hidden":"true"},"#")],-1),_=s("p",null,[n("The "),s("code",null,"contents.json"),n(" file can be generated automatically by the game itself, it is very recommended to decrease the risks of making mistakes. However, the file must be prepared first. Create a new empty file called "),s("code",null,"contents.json"),n(" in the root directory of your add-on, and add empty brackets.")],-1),k=n("BP|RP/contents.json"),f=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The file content will be automatically written next time the game is launched.</p><h2 id="additional-information" tabindex="-1">Additional information <a class="header-anchor" href="#additional-information" aria-hidden="true">#</a></h2><ul><li>The automatic process can be achieved no matter what is the location of the pack (Development folders or normal folders).</li><li>Do not make multiple <code>contents.json</code> for subpacks, the file at the root of the pack is sufficient.</li><li>This file is not required for the addon to work properly.</li></ul>`,4);function y(q,g,j,T,v,x){const e=p("CodeHeader"),i=p("FolderView");return c(),l("div",null,[d,a(e,null,{default:o(()=>[m]),_:1}),b,a(i,{paths:["RP/texts/en_US.lang","RP/manifest.json","RP/contents.json","RP/animations/my_animation.animation.json","RP/animation_controllers/my_ac.ac.json","RP/entity/my_entity.entity.json","RP/textures/texture_list.json","RP/textures/blocks/my_block.png"]},null,8,["paths"]),h,_,a(e,null,{default:o(()=>[k]),_:1}),f])}var S=r(u,[["render",y]]);export{w as __pageData,S as default};