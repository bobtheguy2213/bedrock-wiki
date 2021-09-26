import{r as s,o as n,c as e,a as t,w as a,b as l}from"./404.md.1c39222c.js";const o='{"title":"Intro to Blocks","description":"","frontmatter":{"title":"Intro to Blocks","nav_order":1,"tags":["guide"]},"headers":[{"level":2,"title":"Block Behavior File","slug":"block-behavior-file"},{"level":2,"title":"Block Resource File","slug":"block-resource-file"},{"level":3,"title":"Block terrain texture definition","slug":"block-terrain-texture-definition"},{"level":3,"title":"Block flipbook texture definition","slug":"block-flipbook-texture-definition"},{"level":2,"title":"Setting block names","slug":"setting-block-names"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"blocks/blocks-intro.md","lastUpdated":1632693236702}',r={},p=t("p",null,"Minecraft Bedrock allows us to add custom blocks into our world with various vanilla-like properties. In latest versions, custom blocks can have multiple stages (like plants), directional facing, and other features. This tutorial will cover how to create some simple blocks for the stable version of Minecraft Bedrock.",-1),c=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,[l("Blocks on the stable version of Minecraft (1.10 format version) are missing many new features, available in experimental (1.16 format version). You can learn more about "),t("a",{href:"/blocks/blocks-16.html"},"experimental blocks here"),l(".")])],-1),i=t("h2",{id:"block-behavior-file"},[t("a",{class:"header-anchor",href:"#block-behavior-file","aria-hidden":"true"},"#"),l(" Block Behavior File")],-1),u=t("p",null,"Block behaviors are structured similarly to entities: they contain a description and a list of components that defines the block's behavior.",-1),k=l("BP/blocks/blockname.json"),b=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),l("\n\t"),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"1.12.0"'),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"minecraft:block"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"description"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"identifier"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"wiki:blocky"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"is_experimental"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"register_to_creative_menu"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token boolean"},"true"),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:loot"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"loot_tables/blocks/blocky.json"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:destroy_time"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:explosion_resistance"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:friction"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"0.6"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:flammable"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t\t"),t("span",{class:"token property"},'"flame_odds"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),l("\n\t\t\t\t"),t("span",{class:"token property"},'"burn_odds"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"0"),l("\n\t\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:map_color"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"#FFFFFF"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:block_light_absorption"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:block_light_emission"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"0.25"),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),l("\n\t"),t("span",{class:"token punctuation"},"}"),l("\n"),t("span",{class:"token punctuation"},"}"),l("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br")])],-1),d=t("ul",null,[t("li",null,[t("code",null,'"identifier"'),l(" under "),t("code",null,'"description"'),l(" is already familiar to us.")]),t("li",null,[t("code",null,'"components"'),t("ul",null,[t("li",null,[t("code",null,'"minecraft:loot"'),l(" defines a loot table path for the block to drop. We'll look into loot tables in the next chapter.")]),t("li",null,[t("code",null,'"minecraft:destroy_time"'),l(" defines how long the player will need to mine the block until it breaks. Currently, it isn't possible to set different destroy times for different tools.")]),t("li",null,[t("code",null,'"minecraft:explosion_resistance"'),l(" defines the chance for an explosion to break the block. Higher the value, lower the chance.")]),t("li",null,[t("code",null,'"minecraft:friction"'),l(" defines how much friction the block has. For example, soulsand and has a high value for friction, so it slows the players. Ice has a lower friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is "),t("code",null,"0.6"),l(".")]),t("li",null,[t("code",null,'"minecraft:flammable"'),t("ul",null,[t("li",null,[t("code",null,'"flame_odds"'),l(" defines how likely the block is to catch fire.")]),t("li",null,[t("code",null,'"burn_odds"'),l(" defines how likely the block is to be destroyed by fire.")])])]),t("li",null,[t("code",null,'"minecraft:map_color"'),l(" is the hex color code that will be displayed on a Minecraft map to symbolize this block. "),t("code",null,"#FFFFFF"),l(" means white. You can get hex codes for other colors "),t("a",{href:"https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enDE886DE886&oq=hex+color+picker&aqs=chrome..69i57j0l7.2293j0j8&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"},"here"),l(".")]),t("li",null,[t("code",null,'"minecraft:block_light_emission"'),l(" defines the light level the block will output. Light level is out of 15, so to get a light level of 9, insert "),t("code",null,"0.6"),l(" as the value.")])])])],-1),m=t("p",null,[l("Let's create some more blocks in "),t("code",null,"BP/blocks"),l(". I created these four block for the tutorial:")],-1),h=t("ul",null,[t("li",null,[l("Filename: "),t("code",null,"blocky.json"),l("; Identifier: "),t("code",null,"wiki:blocky"),l(";")]),t("li",null,[l("Filename: "),t("code",null,"sapp_log.json"),l("; Identifier: "),t("code",null,"wiki:sapp_log"),l(";")]),t("li",null,[l("Filename: "),t("code",null,"compass_block.json"),l("; Identifier: "),t("code",null,"wiki:compass_block"),l(";")]),t("li",null,[l("Filename: "),t("code",null,"flashing.json"),l("; Identifier: "),t("code",null,"wiki:flashing"),l("; You can play around with changing the component values for each of these. Now let's move over to the resource definition.")])],-1),f=t("h2",{id:"block-resource-file"},[t("a",{class:"header-anchor",href:"#block-resource-file","aria-hidden":"true"},"#"),l(" Block Resource File")],-1),g=t("p",null,"The resource definition for blocks differs from entities/items because all the definitions appear in a single file.",-1),_=l("RP/blocks.json"),y=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),l("\n\t"),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),l(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),l(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"wiki:blocky"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"blocky"'),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"stone"'),l("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"wiki:sapp_log"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"sapp_log_top"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"sapp_log_top"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"side"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"sapp_log_side"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"wood"'),l("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"wiki:compass_block"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_up"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_down"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_north"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_south"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_west"'),t("span",{class:"token punctuation"},","),l("\n\t\t\t"),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"compass_block_east"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"wool"'),l("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"wiki:flashing"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"flashing"'),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"glass"'),l("\n\t"),t("span",{class:"token punctuation"},"}"),l("\n"),t("span",{class:"token punctuation"},"}"),l("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br")])],-1),x=t("p",null,"As you can see, every block's identifier is applied with textures and step sounds. All of these blocks have different types of textures. Let's look through them.",-1),w=t("ul",null,[t("li",null,[t("code",null,'"wiki:blocky"'),l(" has textures set to the shortname "),t("code",null,'"blocky"'),l(". We'll define it in a file similar to "),t("code",null,"item_texture.json"),l(" later.")]),t("li",null,[t("code",null,'"wiki:sapp_log"'),l(" has textures broken into 3 parts: "),t("ul",null,[t("li",null,[t("code",null,'"up"'),l(" for the upper face of the block.")]),t("li",null,[t("code",null,'"down"'),l(" for the bottom face of the block.")]),t("li",null,[t("code",null,'"side"'),l(" for the remaining four faces. Each one of these has a separate texture shortname applied.")])])]),t("li",null,[t("code",null,'"wiki:compass_block"'),l(" has textures broken into more sub-textures. Instead of "),t("code",null,'"side"'),l(", we have a different texture shortname set for the "),t("code",null,'"north"'),l(" side, the "),t("code",null,'"south"'),l(" side, the "),t("code",null,'"west"'),l(" side, and the "),t("code",null,'"east"'),l(" side.")]),t("li",null,[t("code",null,'"wiki_flashing'),l('" has '),t("code",null,'"flashing"'),l(" defined in the same way as "),t("code",null,'"wiki_blocky"'),l(".")])],-1),v=t("h3",{id:"block-terrain-texture-definition"},[t("a",{class:"header-anchor",href:"#block-terrain-texture-definition","aria-hidden":"true"},"#"),l(" Block terrain texture definition")],-1),j=t("p",null,[l('These "gorgeous" textures are the ones I\'m going to use for my example blocks. The first three are located in the '),t("code",null,"RP/textures/blocks/"),l(" folder and, the last 6 are located in the "),t("code",null,"RP/textures/blocks/compass_block"),l(" subfolder - they show North, South, etc.")],-1),F=t("p",null,[t("em",null,[l("Left to right: "),t("code",null,"blocky.png"),l(", "),t("code",null,"sapp_log_side.png"),l(", "),t("code",null,"side_block_top.png"),l(", "),t("code",null,"sb_up.png"),l(", "),t("code",null,"sb_down.png"),l(", "),t("code",null,"sb_north.png"),l(", "),t("code",null,"sb_south.png"),l(", "),t("code",null,"sb_west.png"),l(", "),t("code",null,"sb_east.png")])],-1),B=t("p",null,[l("All textures need to define a "),t("strong",null,"shortname"),l(" and we'll do it the same way as we defined item texture shortnames in "),t("code",null,"RP/textures/item_texture.json"),l(", but this time in "),t("code",null,"RP/textures/terrain_texture.json")],-1),I=l("RP/textures/terrain_texture.json"),R=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),l("\n\t"),t("span",{class:"token property"},'"resource_pack_name"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"wiki"'),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"texture_name"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"atlas.terrain"'),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"padding"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"num_mip_levels"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),l("\n\t"),t("span",{class:"token property"},'"texture_data"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"blocky"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/blocky"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sapp_log_top"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/sapp_log_top"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"sapp_log_side"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/sapp_log_side"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_north"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_north"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_east"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_east"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_west"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_west"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_south"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_south"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_up"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_up"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"compass_block_down"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_down"'),l("\n\t\t"),t("span",{class:"token punctuation"},"}"),l("\n\t"),t("span",{class:"token punctuation"},"}"),l("\n"),t("span",{class:"token punctuation"},"}"),l("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br")])],-1),P=t("p",null,[l("The only difference from "),t("code",null,"item_textures.json"),l(' is that "'),t("code",null,"atlas.items"),l('" is now changed to "'),t("code",null,"atlas.terrain"),l('".')],-1),T=t("p",null,[t("code",null,'"padding"'),l(" and "),t("code",null,'"num_mip_leavels"'),l(" mean the quality of how the texture is displayed, especially noticeable on higher resolution textures. The performance will be better if it's lower, but the textures will appear glitchy from further distances.")],-1),A=t("p",null,[l("Next, all our texture shortnames have been defined. These shortnames were already used in "),t("code",null,"RP/blocks.json"),l(", as you might remember. If you load the game now, you'll be able to see the 3 new custom blocks you just added, with all the texture functionality 😃")],-1),C=t("p",null,[t("img",{src:"/assets/images/guide/custom_blocks_inventory.png",alt:""})],-1),L=t("p",null,[l("But, we still have to define the "),t("code",null,"wiki:flashing"),l(" texture(third from the left), which is currently undefined. That's why it appears as a purple/black tiled texture right now.")],-1),W=t("h3",{id:"block-flipbook-texture-definition"},[t("a",{class:"header-anchor",href:"#block-flipbook-texture-definition","aria-hidden":"true"},"#"),l(" Block flipbook texture definition")],-1),S=t("p",null,[l("As you might have already guessed, flipbook texture shortnames are defined in a different place than "),t("code",null,"RP/textures/terrain_texture.json"),l(". Let's create another file "),t("code",null,"RP/textures/flipbook_textures.json"),l(".")],-1),Y=l("RP/textures/flipbook_textures.json"),q=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"["),l("\n\t"),t("span",{class:"token punctuation"},"{"),l("\n\t\t"),t("span",{class:"token property"},'"flipbook_texture"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"textures/blocks/flashing_flipbook"'),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"atlas_tile"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token string"},'"flashing"'),t("span",{class:"token punctuation"},","),l("\n\t\t"),t("span",{class:"token property"},'"ticks_per_frame"'),t("span",{class:"token operator"},":"),l(),t("span",{class:"token number"},"13"),l("\n\t"),t("span",{class:"token punctuation"},"}"),l("\n"),t("span",{class:"token punctuation"},"]"),l("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br")])],-1),M=t("ul",null,[t("li",null,[t("code",null,'"flipbook_texture"'),l(" is the path to your texture file, which is named "),t("code",null,'"flashing_flipbook"'),l(" in this scenario.")]),t("li",null,[t("code",null,'"atlas_tile"'),l(" is the shortname definition. As you know, we already applied "),t("code",null,'"flashing"'),l(" texture shortname to the "),t("code",null,"wiki:flashing"),l(" block in "),t("code",null,"RP/blocks.json"),l(".")]),t("li",null,[t("code",null,'"ticks_per_frame"'),l(" defines how quickly the different textures will fade into the block, in other words, the speed of the animation.")])],-1),N=t("p",null,[l("A "),t("strong",null,"flipbook texture"),l(" file is created like this:")],-1),D=t("ul",null,[t("li",null,"The image width is 16;"),t("li",null,[l("Image height is "),t("code",null,"16*3"),l(", as we have three different block textures/"),t("strong",null,"frames"),l(" to fade. If you wanted a flipbook with 12 different textures, the height would be "),t("code",null,"16*12"),l(". "),t("strong",null,"Done!"),l(" All of our blocks work perfectly.")])],-1),E=t("video",{width:"320",height:"240",controls:""},[t("source",{src:"/assets/images/guide/custom_blocks_done.mp4",type:"video/mp4"})],-1),H=t("h2",{id:"setting-block-names"},[t("a",{class:"header-anchor",href:"#setting-block-names","aria-hidden":"true"},"#"),l(" Setting block names")],-1),U=t("p",null,[l("And, finally, let's define our block's names in "),t("code",null,"/RP/texts/en_US.lang"),l(" as we did with items, somewhat like this:")],-1),z=t("div",{class:"language-"},[t("pre",null,[t("code",null,"tile.wiki:blocky.name=Blocky Block\ntile.wiki:sapp_log.name=Sapphire Wood\ntile.wiki:compass_block.name=A compass in block-form\ntile.wiki:flashing.name=Block of Flashing Matter\n")]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),G=t("p",null,[t("a",{href:"/concepts/lang.html"},"You can learn more about .lang here")],-1),J=t("hr",null,null,-1),K=t("h2",{id:"your-progress-so-far"},[t("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#"),l(" Your progress so far")],-1),O=t("p",null,[t("strong",null,"What you've done:")],-1),Q=t("ul",null,[t("li",null,"[x] Learned about custom block behavior components;"),t("li",null,"[x] Created a custom block with simple textures;"),t("li",null,"[x] Created a custom block with side- and face-relying textures;"),t("li",null,"[x] Created a custom block with flipbook textures;")],-1),V=t("p",null,[t("strong",null,"What are you to do next:")],-1),X=t("ul",null,[t("li",null,"[x] Create custom Loot Tables for your blocks and entities;"),t("li",null,"[ ] Create custom crafting recipes;"),t("li",null,"[ ] Create custom Spawn Rules for entities;")],-1);r.render=function(l,o,r,Z,$,ss){const ns=s("CodeHeader"),es=s("WikiImage");return n(),e("div",null,[p,c,i,u,t(ns,null,{default:a((()=>[k])),_:1}),b,d,m,h,f,g,t(ns,null,{default:a((()=>[_])),_:1}),y,x,w,v,j,F,t(es,{src:"/assets/images/guide/tut_blocky_texture.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_log_side_texture.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_log_top_texture.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_up.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_down.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_north.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_south.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_west.png",pixelated:""}),t(es,{src:"/assets/images/guide/tut_sb_east.png",pixelated:""}),B,t(ns,null,{default:a((()=>[I])),_:1}),R,P,T,A,C,L,W,S,t(ns,null,{default:a((()=>[Y])),_:1}),q,M,N,D,E,H,U,z,G,J,K,O,Q,V,X])};export default r;export{o as __pageData};