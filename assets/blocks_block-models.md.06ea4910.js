import{_ as p,c as r,a as e,b as s,w as c,e as l,d as a,r as o,o as i}from"./404.md.1f6c987e.js";const d="/assets/images/blocks/block-models/new_project.png",u="/assets/images/blocks/block-models/project_settings.png",D="/assets/images/blocks/block-models/root_bone.png",y="/assets/images/blocks/block-models/select_edit_material_instances.png",b="/assets/images/blocks/block-models/edit_material_instances.png",H=JSON.parse('{"title":"Creating Block Models","description":"","frontmatter":{"title":"Creating Block Models","category":"Tutorials","tags":["beginner","easy"],"mentions":["QuazChick"]},"headers":[{"level":2,"title":"Model Setup","slug":"model-setup","link":"#model-setup","children":[]},{"level":2,"title":"Adding Cubes","slug":"adding-cubes","link":"#adding-cubes","children":[]},{"level":2,"title":"Removing Faces","slug":"removing-faces","link":"#removing-faces","children":[]},{"level":2,"title":"Previewing Textures","slug":"previewing-textures","link":"#previewing-textures","children":[]},{"level":2,"title":"Rearranging UVs","slug":"rearranging-uvs","link":"#rearranging-uvs","children":[]},{"level":2,"title":"Changing Material Instances","slug":"changing-material-instances","link":"#changing-material-instances","children":[]},{"level":2,"title":"Applying Geometry & Textures","slug":"applying-geometry-textures","link":"#applying-geometry-textures","children":[]}],"relativePath":"blocks/block-models.md"}'),m={name:"blocks/block-models.md"},F=l('<p>Although custom blocks are unable to make use of vanilla <a href="/blocks/block-shapes.html">block shapes</a>, we can create our own models which follow a similar format to entity models. This tutorial will walk you through the process of creating a custom block model for a &quot;paper bag&quot; using <a href="https://blockbench.net" target="_blank" rel="noreferrer">Blockbench</a>. You should learn the main features of Minecraft geometry tailored towards creating custom blocks from this tutorial.</p><p><strong>NOTE:</strong> Custom block models must be within the <a href="/blocks/block-components.html#geometry">model size limits</a>.</p><h2 id="model-setup" tabindex="-1">Model Setup <a class="header-anchor" href="#model-setup" aria-hidden="true">#</a></h2><p>Open Blockbench and create a new <code>Bedrock Block</code> project.</p><p><img src="'+d+'" alt="New project panel with Bedrock Block selected"></p><p>Now you can give your model an identifier! Your file name can be decided here, or changed later.</p><p>The UV mode and texture size should remain unchanged.</p><div class="danger custom-block"><p class="custom-block-title">NAMESPACES</p><p>Model identifiers are <strong>not namespaced and cannot contain colons</strong>. Colons were previously used for model inheritance and are invalid in modern geometry formats.</p></div><p><img src="'+u+'" alt=""></p><h2 id="adding-cubes" tabindex="-1">Adding Cubes <a class="header-anchor" href="#adding-cubes" aria-hidden="true">#</a></h2><p>Despite not necessarily being perfect cube shapes, elements in your model are called <strong>cubes</strong>. All cubes must be contained within <strong>bones</strong>, which act as groups.</p><p>First, let&#39;s create a root bone for our model from the outliner by clicking on <code>Add Group</code>. Bones can be renamed by pressing <code>F2</code>.</p><p><img src="'+D+'" alt=""></p><p>The &quot;paper bag&quot; model will need two cubes: one for the handle, and one for the main bag. These can be added by selecting your root bone and clicking <code>Add Cube</code>.</p>',14),g=s("p",null,'Cubes can be moved, resized and rotated from the top toolbar. Below are the two cubes my "paper_bag" model will use.',-1),h=s("h2",{id:"removing-faces",tabindex:"-1"},[a("Removing Faces "),s("a",{class:"header-anchor",href:"#removing-faces","aria-hidden":"true"},"#")],-1),_=s("p",null,"Some of the faces of our cubes might not need to be visible. In my example, the top face of the paper_bag should be removed so that you can see inside.",-1),C=s("p",null,"To remove a face, click on it in the preview and remove its UV.",-1),A=s("p",null,"Additionally, only the north and south faces of the handle should be visible. You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.",-1),k=s("h2",{id:"previewing-textures",tabindex:"-1"},[a("Previewing Textures "),s("a",{class:"header-anchor",href:"#previewing-textures","aria-hidden":"true"},"#")],-1),f=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("Textures can be created in Blockbench by clicking "),s("code",null,"Create Texture"),a(" and selecting "),s("code",null,"Blank"),a(".")])],-1),q=s("p",null,'The "paper_bag" model has multiple pre-made textures, listed below:',-1),w=s("p",null,[s("code",null,"textures/blocks/paper_bag.png")],-1),v=s("br",null,null,-1),x=s("br",null,null,-1),T=s("p",null,[s("code",null,"textures/blocks/paper_bag_bottom_fold.png")],-1),E=s("br",null,null,-1),B=s("br",null,null,-1),S=s("p",null,[s("code",null,"textures/blocks/paper_bag_side_gusset.png")],-1),V=s("p",null,"These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won't look quite right...",-1),P=s("h2",{id:"rearranging-uvs",tabindex:"-1"},[a("Rearranging UVs "),s("a",{class:"header-anchor",href:"#rearranging-uvs","aria-hidden":"true"},"#")],-1),I=s("p",null,"To get textures into the right positions, you may need to reposition/resize your faces' UV mapping. This can be done by selecting the affected face and using the UV panel.",-1),M=s("br",null,null,-1),N=l('<h2 id="changing-material-instances" tabindex="-1">Changing Material Instances <a class="header-anchor" href="#changing-material-instances" aria-hidden="true">#</a></h2><p>Applying custom material instance names can be used to easily define how certain faces are rendered.</p><p>They can be edited by right-clicking on a cube and opening <code>Edit Material Instances</code></p><p><img src="'+y+'" alt=""></p><p>For the &quot;paper_bag&quot; model, the east and west faces should have their own texture. We can indicate this by giving them a material instance.</p><p><img src="'+b+'" alt=""></p><h2 id="applying-geometry-textures" tabindex="-1">Applying Geometry &amp; Textures <a class="header-anchor" href="#applying-geometry-textures" aria-hidden="true">#</a></h2><p>Once exported from <code>File &gt; Export &gt; Export Bedrock Geometry</code> into your <code>RP/models/blocks</code> folder, you can reference a model in your block JSON.</p><p>Then, textures can be applied by material instances through their <code>RP/textures/terrian_texture.json</code> shortname. In this example, the paper_bag shouldn&#39;t block light, so its light dampening is set to 0.</p>',9),R=l(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.20.30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:paper_bag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">menu_category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">// Apply your model by referencing its identifier</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:geometry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geometry.paper_bag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">// Apply textures and other rendering configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:material_instances</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">texture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paper_bag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">render_method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alpha_test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Disable backface culling and allow transparency</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">down</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">texture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paper_bag_bottom_fold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">render_method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alpha_test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Must be the same in all instances</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// Custom instance name used in model</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">side_gusset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">texture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paper_bag_side_gusset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">render_method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alpha_test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Must be the same in all instances</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">// Prevent shadows</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:light_dampening</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,1);function j(U,z,O,G,$,W){const n=o("WikiImage"),t=o("CodeHeader");return i(),r("div",null,[F,e(n,{src:"/assets/images/blocks/block-models/new_cube.png",alt:"",width:"600",class:"my-4"}),g,e(n,{src:"/assets/images/blocks/block-models/paper_bag_cubes.png",alt:"",width:"300",class:"my-4"}),h,_,C,e(n,{src:"/assets/images/blocks/block-models/paper_bag_top_removed.png",alt:"",width:"600",class:"my-4"}),A,e(n,{src:"/assets/images/blocks/block-models/paper_bag_handle_faces_removed.png",alt:"",width:"600",class:"my-4"}),k,f,q,s("ul",null,[s("li",null,[w,e(n,{src:"/assets/images/blocks/block-models/paper_bag.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"true",width:"128"}),v,x]),s("li",null,[T,e(n,{src:"/assets/images/blocks/block-models/paper_bag_bottom_fold.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"true",width:"128"}),E,B]),s("li",null,[S,e(n,{src:"/assets/images/blocks/block-models/paper_bag_side_gusset.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"true",width:"128"})])]),V,e(n,{src:"/assets/images/blocks/block-models/preview_textures_applied.png",alt:"",width:"300",class:"my-4"}),P,I,e(n,{src:"/assets/images/blocks/block-models/paper_bag_handle_uv.png",alt:"",width:"300",class:"my-4"}),M,e(n,{src:"/assets/images/blocks/block-models/paper_bag_final.png",alt:"",width:"300",class:"my-4"}),N,e(t,null,{default:c(()=>[a("BP/blocks/paper_bag.json")]),_:1}),R])}const J=p(m,[["render",j]]);export{H as __pageData,J as default};