import{_ as i}from"./chunks/6.07d6a5aa.js";import{_ as c}from"./chunks/gametick.8221204e.js";import{_ as p,c as d,a,w as t,e as s,b as e,d as n,r as l,o as u}from"./404.md.1f6c987e.js";const P=JSON.parse('{"title":"On Player Leave","description":"","frontmatter":{"title":"On Player Leave","category":"On Event Systems","mentions":["BedrockCommands","zheaEvyline"],"nav_order":3,"tags":["system"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/on-player-leave.md"}'),m={name:"commands/on-player-leave.md"},h=s('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This system will run your desired commands on the event that a player leaves the world.</p><blockquote><p><strong>Note:</strong> you cannot execute commands on the <em>players</em> that leave using selectors. However; you may use the <a href="/commands/on-player-join.html">On Player Join</a> system to execute when they join back.</p></blockquote><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p><em>To be typed in Chat:</em></p><p><code>/scoreboard objectives add total dummy</code></p><p>If you prefer to have the objective added automatically on world initialisation, follow the process outlined in <a href="/commands/on-first-world-load.html">On First World Load.</a></p><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-hidden="true">#</a></h2>',9),y=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">scoreboard players reset new total</span></span>
<span class="line"><span style="color:#C3E88D;">execute as @a run scoreboard players add new total 1</span></span>
<span class="line"><span style="color:#C3E88D;">scoreboard players operation new total -= old total</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">execute if score new total matches ..-1 run say a player has left the world</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">scoreboard players reset old total</span></span>
<span class="line"><span style="color:#C3E88D;">execute as @a run scoreboard players add old total 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+i+'" alt="commandBlockChain6"></p><p>Here we have used a <strong><code>/say</code></strong> command as an example but you can use any command you prefer and as many as you require.</p><p>Just make sure to follow the given order and properly use the <code>/execute if score</code> command as shown to run the commands you need.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><ul><li><strong><code>new</code></strong> this FakePlayer name means the total number of players on the world in the current game tick.</li><li><strong><code>old</code></strong> this FakePlayer name means the total number of players that were on the world in the previous game tick but also saves the values to be used in the <em>next</em> game tick.</li></ul><p>These values are obtained using the <a href="/commands/entity-counter.html">Entity Counter</a> system. It may be beneficial to refer to that doc for better understanding this one.</p><p>By subtracting &#39;old&#39; total from &#39;new&#39; total we will be able to identify if player count has:</p><ul><li>decreased <code>..-1</code></li><li>increased <code>1..</code></li><li>or if it&#39;s unchanged <code>0</code></li></ul><p>If it has decreased; we know that 1 or more players have left the game. With this knowledge we can run our desired commands from &#39;new&#39; if it&#39;s score is -1 or less.</p><ul><li><p>ie, if there were 10 players and someone leaves:</p><ul><li>that is <code>new - old</code></li><li>which is <code>9 - 10 = -1</code></li><li>hence we will detect by <code>..-1</code></li></ul></li><li><p>The &#39;new&#39; total value is obtained first, subtraction is performed after that to run your desired commands and lastly the &#39;old&#39; total value is obtained to be used in the next game tick.</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All commands involved in a command-block-chain or function will only run in a sequence one after the other but it all still happens in the same tick regardless of the number of commands involved. We are able to achieve this system due to the fact that commands run along the end of a game tick after all events such as player log in, log out, death etc.. occur.</p><p><img src="'+c+'" alt="gametick"></p></div><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-hidden="true">#</a></h2><p>If you are using functions instead of command blocks, the <code>on_player_leave</code> function must be added to the <code>tick.json</code> in order to loop and run it continuously. Multiple files can be added to the <code>tick.json</code> by placing a comma after each string. Refer to <a href="/commands/mcfunctions.html#tick-json">Functions</a> documentation for further info.</p>',14),b=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">values</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">on_player_leave</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If using functions, your pack folder structure will be be as follows:</p>`,2),f=e("blockquote",null,[e("p",null,[e("strong",null,"Note:"),n(" the scoreboard names (in this case: 'total') may end up being used by other people. Appending "),e("code",null,"_"),n(" and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the "),e("code",null,".mcfunction"),n(" filenames. Ex:")]),e("ul",null,[e("li",null,[e("code",null,"total_0fe678")]),e("li",null,[e("code",null,"on_player_leave_0fe678.mcfunction")])])],-1);function _(v,g,k,w,C,D){const o=l("CodeHeader"),r=l("FolderView");return u(),d("div",null,[h,a(o,null,{default:t(()=>[n("BP/functions/on_player_leave.mcfunction")]),_:1}),y,a(o,null,{default:t(()=>[n("BP/functions/tick.json")]),_:1}),b,a(r,{paths:["BP","BP/functions","BP/pack_icon.png","BP/manifest.json","BP/functions/on_player_leave.mcfunction","BP/functions/tick.json"]},null,8,["paths"]),f])}const S=p(m,[["render",_]]);export{P as __pageData,S as default};