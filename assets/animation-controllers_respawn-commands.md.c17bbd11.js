import{_ as e,c as r,a,w as l,b as n,d as s,e as c,r as o,o as D}from"./404.md.82760895.js";const f=JSON.parse('{"title":"Respawn Commands","description":"","frontmatter":{"title":"Respawn Commands","tags":["recipe"],"mentions":["SirLich","solvedDev","Joelant05","BlueFrog130","SmokeyStack","MedicalJewel105","cda94581"]},"headers":[],"relativePath":"animation-controllers/respawn-commands.md"}'),F={name:"animation-controllers/respawn-commands.md"},i=n("p",null,"This animation controller can be used to run commands, such as re-adding potion effects or giving items when the player respawns.",-1),y=n("p",null,[s("Simply add the following animation controller to the "),n("code",null,"player.json"),s(", and you'll be all done!")],-1),C=c(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.10.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">animation_controllers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">controller.animation.death</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">initial_state</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initialization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">states</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">initialization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">transitions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">has_died</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!q.is_alive</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">on_exit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v.delay = 0.2 + q.life_time;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;death command or animation&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">has_died</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">on_exit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;Respawn command or animation&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">transitions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">initialization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">q.is_alive &amp;&amp; (q.life_time &gt;= v.delay)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,1);function u(A,m,b,d,_,q){const p=o("BButton"),t=o("CodeHeader");return D(),r("div",null,[a(p,{color:"blue",link:"animation-controllers-intro"},{default:l(()=>[s("Learn more about Animation Controllers")]),_:1}),i,y,a(t,null,{default:l(()=>[s("BP/animation_controllers/respawn.ac.json")]),_:1}),C])}const v=e(F,[["render",u]]);export{f as __pageData,v as default};