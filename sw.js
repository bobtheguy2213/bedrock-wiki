if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.7ad51bf3.js",revision:null},{url:"assets/404.md.7ad51bf3.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.fc6bb9e3.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.fc6bb9e3.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.e322fa0b.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.e322fa0b.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.e90d52e9.js",revision:null},{url:"assets/animation-controllers_death-commands.md.e90d52e9.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.84e00fbd.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.84e00fbd.lean.js",revision:null},{url:"assets/animation-controllers_index.md.5731ad69.js",revision:null},{url:"assets/animation-controllers_index.md.5731ad69.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.dd2822d0.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.dd2822d0.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.9a7a4490.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.9a7a4490.lean.js",revision:null},{url:"assets/app.b7b90868.js",revision:null},{url:"assets/blocks_applying-effects.md.0d1bf3a7.js",revision:null},{url:"assets/blocks_applying-effects.md.0d1bf3a7.lean.js",revision:null},{url:"assets/blocks_block-materials.md.e22d17ee.js",revision:null},{url:"assets/blocks_block-materials.md.e22d17ee.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.89aff2c1.js",revision:null},{url:"assets/blocks_block-shapes.md.89aff2c1.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.af5cb5d7.js",revision:null},{url:"assets/blocks_block-sounds.md.af5cb5d7.lean.js",revision:null},{url:"assets/blocks_block-tags.md.8b9ecace.js",revision:null},{url:"assets/blocks_block-tags.md.8b9ecace.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.f4db4f08.js",revision:null},{url:"assets/blocks_block-texture-variation.md.f4db4f08.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.571ff7e4.js",revision:null},{url:"assets/blocks_blocks-16.md.571ff7e4.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.f3a7b019.js",revision:null},{url:"assets/blocks_blocks-intro.md.f3a7b019.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.95aad6ee.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.95aad6ee.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.2982f373.js",revision:null},{url:"assets/blocks_custom-tree.md.2982f373.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.7a80b70c.js",revision:null},{url:"assets/blocks_fake-blocks.md.7a80b70c.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.426deddb.js",revision:null},{url:"assets/blocks_flipbook-textures.md.426deddb.lean.js",revision:null},{url:"assets/blocks_index.md.1c6c9c52.js",revision:null},{url:"assets/blocks_index.md.1c6c9c52.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.5b3d504e.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.5b3d504e.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c95b5884.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c95b5884.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f90affc5.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f90affc5.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.13b0ec51.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.13b0ec51.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.2f2dfefb.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.4a28f335.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_index.md.12dc5693.js",revision:null},{url:"assets/commands_index.md.12dc5693.lean.js",revision:null},{url:"assets/commands_mcfunction.md.4492410a.js",revision:null},{url:"assets/commands_mcfunction.md.4492410a.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.ae4fe68d.js",revision:null},{url:"assets/commands_nbt-commands.md.ae4fe68d.lean.js",revision:null},{url:"assets/commands_new-execute.md.5ac65887.js",revision:null},{url:"assets/commands_new-execute.md.5ac65887.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.0a3a75cc.js",revision:null},{url:"assets/commands_relative-coordinates.md.0a3a75cc.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.f187e98d.js",revision:null},{url:"assets/commands_scoreboard-operations.md.f187e98d.lean.js",revision:null},{url:"assets/commands_selectors.md.358ac432.js",revision:null},{url:"assets/commands_selectors.md.358ac432.lean.js",revision:null},{url:"assets/commands_tellraw.md.8d62d528.js",revision:null},{url:"assets/commands_tellraw.md.8d62d528.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.8f2beaa0.js",revision:null},{url:"assets/commands_tick_json-creations.md.8f2beaa0.lean.js",revision:null},{url:"assets/commands_timers.md.62a9dabe.js",revision:null},{url:"assets/commands_timers.md.62a9dabe.lean.js",revision:null},{url:"assets/concepts_contents.md.418dd703.js",revision:null},{url:"assets/concepts_contents.md.418dd703.lean.js",revision:null},{url:"assets/concepts_emojis.md.d8b4903e.js",revision:null},{url:"assets/concepts_emojis.md.d8b4903e.lean.js",revision:null},{url:"assets/concepts_index.md.3ec35d23.js",revision:null},{url:"assets/concepts_index.md.3ec35d23.lean.js",revision:null},{url:"assets/concepts_molang.md.8297377c.js",revision:null},{url:"assets/concepts_molang.md.8297377c.lean.js",revision:null},{url:"assets/concepts_namespaces.md.63f3d3a8.js",revision:null},{url:"assets/concepts_namespaces.md.63f3d3a8.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.5e8b3eeb.js",revision:null},{url:"assets/concepts_overwriting-assets.md.5e8b3eeb.lean.js",revision:null},{url:"assets/concepts_shaders.md.975274f3.js",revision:null},{url:"assets/concepts_shaders.md.975274f3.lean.js",revision:null},{url:"assets/concepts_sounds.md.a6c1568f.js",revision:null},{url:"assets/concepts_sounds.md.a6c1568f.lean.js",revision:null},{url:"assets/concepts_subpacks.md.90c23cb8.js",revision:null},{url:"assets/concepts_subpacks.md.90c23cb8.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.518c09e9.js",revision:null},{url:"assets/concepts_text-and-translations.md.518c09e9.lean.js",revision:null},{url:"assets/concepts_textures-list.md.0b877ea0.js",revision:null},{url:"assets/concepts_textures-list.md.0b877ea0.lean.js",revision:null},{url:"assets/contribute-how-to.md.9d40ab18.js",revision:null},{url:"assets/contribute-how-to.md.9d40ab18.lean.js",revision:null},{url:"assets/contribute-style.md.c71cd41c.js",revision:null},{url:"assets/contribute-style.md.c71cd41c.lean.js",revision:null},{url:"assets/contribute.md.2533c3c5.js",revision:null},{url:"assets/contribute.md.2533c3c5.lean.js",revision:null},{url:"assets/discord.md.b086534e.js",revision:null},{url:"assets/discord.md.b086534e.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.c78c17d9.js",revision:null},{url:"assets/documentation_advanced-molang.md.c78c17d9.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.8cf5e180.js",revision:null},{url:"assets/documentation_creative-categories.md.8cf5e180.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.7559cf00.js",revision:null},{url:"assets/documentation_fog-ids.md.7559cf00.lean.js",revision:null},{url:"assets/documentation_index.md.e018f471.js",revision:null},{url:"assets/documentation_index.md.e018f471.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.fd19d1d8.js",revision:null},{url:"assets/documentation_material-config-description.md.fd19d1d8.lean.js",revision:null},{url:"assets/documentation_materials.md.07e129e0.js",revision:null},{url:"assets/documentation_materials.md.07e129e0.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.69d8dfc9.js",revision:null},{url:"assets/documentation_pack-structure.md.69d8dfc9.lean.js",revision:null},{url:"assets/documentation_projectiles.md.315111d2.js",revision:null},{url:"assets/documentation_projectiles.md.315111d2.lean.js",revision:null},{url:"assets/documentation_queries.md.d4cdc58c.js",revision:null},{url:"assets/documentation_queries.md.d4cdc58c.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.23f60038.js",revision:null},{url:"assets/documentation_shared-constructs.md.23f60038.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.bb60004a.js",revision:null},{url:"assets/documentation_sound-definitions.md.bb60004a.lean.js",revision:null},{url:"assets/entities_boat-entities.md.42850070.js",revision:null},{url:"assets/entities_boat-entities.md.42850070.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3496fe01.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3496fe01.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.2eea5163.js",revision:null},{url:"assets/entities_disabling-team-damage.md.2eea5163.lean.js",revision:null},{url:"assets/entities_dummy-components.md.8a2bb020.js",revision:null},{url:"assets/entities_dummy-components.md.8a2bb020.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.02c3b5a2.js",revision:null},{url:"assets/entities_dummy-entities.md.02c3b5a2.lean.js",revision:null},{url:"assets/entities_entity-attack.md.08b7fd61.js",revision:null},{url:"assets/entities_entity-attack.md.08b7fd61.lean.js",revision:null},{url:"assets/entities_entity-events.md.699c0884.js",revision:null},{url:"assets/entities_entity-events.md.699c0884.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.6859d5d9.js",revision:null},{url:"assets/entities_entity-holds-item.md.6859d5d9.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1040f489.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1040f489.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.c2da8449.js",revision:null},{url:"assets/entities_entity-intro-rp.md.c2da8449.lean.js",revision:null},{url:"assets/entities_entity-movement.md.e226a7b7.js",revision:null},{url:"assets/entities_entity-movement.md.e226a7b7.lean.js",revision:null},{url:"assets/entities_entity-properties.md.43a04445.js",revision:null},{url:"assets/entities_entity-properties.md.43a04445.lean.js",revision:null},{url:"assets/entities_flying-entities.md.dc8d58ea.js",revision:null},{url:"assets/entities_flying-entities.md.dc8d58ea.lean.js",revision:null},{url:"assets/entities_index.md.dc5c8fca.js",revision:null},{url:"assets/entities_index.md.dc5c8fca.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.3cecc926.js",revision:null},{url:"assets/entities_introduction-to-aec.md.3cecc926.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.87d3e7bf.js",revision:null},{url:"assets/entities_invulnerable-entities.md.87d3e7bf.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.aef67cdf.js",revision:null},{url:"assets/entities_look-at-entity.md.aef67cdf.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.dc23b96b.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.dc23b96b.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.07b1eec8.js",revision:null},{url:"assets/entities_npc-dialogs.md.07b1eec8.lean.js",revision:null},{url:"assets/entities_render-controllers.md.3c6da2d2.js",revision:null},{url:"assets/entities_render-controllers.md.3c6da2d2.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.a7e545c2.js",revision:null},{url:"assets/entities_runtime-identifier.md.a7e545c2.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.cfd7da9a.js",revision:null},{url:"assets/entities_sleeping-entities.md.cfd7da9a.lean.js",revision:null},{url:"assets/entities_solid-entities.md.efb0b5ec.js",revision:null},{url:"assets/entities_solid-entities.md.efb0b5ec.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.53493288.js",revision:null},{url:"assets/entities_spawn-rules.md.53493288.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.8dafc257.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.8dafc257.lean.js",revision:null},{url:"assets/entities_timers.md.4b7c43e8.js",revision:null},{url:"assets/entities_timers.md.4b7c43e8.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.b06400aa.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.b06400aa.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.c7eedfb7.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.c7eedfb7.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.8ce8e865.js",revision:null},{url:"assets/entities_village-mechanic.md.8ce8e865.lean.js",revision:null},{url:"assets/entities_vuc-full.md.ccf5ff83.lean.js",revision:null},{url:"assets/entities_vusr-full.md.dec56caf.js",revision:null},{url:"assets/entities_vusr-full.md.dec56caf.lean.js",revision:null},{url:"assets/graph-test.md.5ea82578.js",revision:null},{url:"assets/graph-test.md.5ea82578.lean.js",revision:null},{url:"assets/guide_addons.md.7973cd50.js",revision:null},{url:"assets/guide_addons.md.7973cd50.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.9b42afb0.js",revision:null},{url:"assets/guide_advancedmanifest.md.9b42afb0.lean.js",revision:null},{url:"assets/guide_blockbench.md.195aeb92.js",revision:null},{url:"assets/guide_blockbench.md.195aeb92.lean.js",revision:null},{url:"assets/guide_custom-entity.md.52a66dbc.js",revision:null},{url:"assets/guide_custom-entity.md.52a66dbc.lean.js",revision:null},{url:"assets/guide_custom-item.md.390af238.js",revision:null},{url:"assets/guide_custom-item.md.390af238.lean.js",revision:null},{url:"assets/guide_download-packs.md.911e6778.js",revision:null},{url:"assets/guide_download-packs.md.911e6778.lean.js",revision:null},{url:"assets/guide_format-version.md.e26256d3.js",revision:null},{url:"assets/guide_format-version.md.e26256d3.lean.js",revision:null},{url:"assets/guide_index.md.15ae56af.js",revision:null},{url:"assets/guide_index.md.15ae56af.lean.js",revision:null},{url:"assets/guide_introduction.md.811e035d.js",revision:null},{url:"assets/guide_introduction.md.811e035d.lean.js",revision:null},{url:"assets/guide_loot-table.md.61e4cb24.js",revision:null},{url:"assets/guide_loot-table.md.61e4cb24.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.7db3c810.js",revision:null},{url:"assets/guide_project-setup-android.md.7db3c810.lean.js",revision:null},{url:"assets/guide_project-setup.md.32f84fa8.js",revision:null},{url:"assets/guide_project-setup.md.32f84fa8.lean.js",revision:null},{url:"assets/guide_software-preparation.md.16ad7d2e.js",revision:null},{url:"assets/guide_software-preparation.md.16ad7d2e.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.f7e40f78.js",revision:null},{url:"assets/guide_troubleshooting.md.f7e40f78.lean.js",revision:null},{url:"assets/guide_understanding-json.md.24998107.js",revision:null},{url:"assets/guide_understanding-json.md.24998107.lean.js",revision:null},{url:"assets/hacktoberfest.md.a7eb207a.js",revision:null},{url:"assets/hacktoberfest.md.a7eb207a.lean.js",revision:null},{url:"assets/index.md.bea1a371.js",revision:null},{url:"assets/index.md.bea1a371.lean.js",revision:null},{url:"assets/items_attachables.md.0b3957d5.js",revision:null},{url:"assets/items_attachables.md.0b3957d5.lean.js",revision:null},{url:"assets/items_custom-armor.md.505d8b9a.js",revision:null},{url:"assets/items_custom-armor.md.505d8b9a.lean.js",revision:null},{url:"assets/items_custom-weapon.md.45c23a28.js",revision:null},{url:"assets/items_custom-weapon.md.45c23a28.lean.js",revision:null},{url:"assets/items_enchantments.md.41e4e1ea.js",revision:null},{url:"assets/items_enchantments.md.41e4e1ea.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.d9508a1d.js",revision:null},{url:"assets/items_equipped-item-commands.md.d9508a1d.lean.js",revision:null},{url:"assets/items_index.md.45c587bc.js",revision:null},{url:"assets/items_index.md.45c587bc.lean.js",revision:null},{url:"assets/items_item-identifiers.md.648b91a5.js",revision:null},{url:"assets/items_item-identifiers.md.648b91a5.lean.js",revision:null},{url:"assets/items_items-16.md.ec9ef0f4.js",revision:null},{url:"assets/items_items-16.md.ec9ef0f4.lean.js",revision:null},{url:"assets/items_items-intro.md.90b564e6.js",revision:null},{url:"assets/items_items-intro.md.90b564e6.lean.js",revision:null},{url:"assets/items_spawning-items.md.f111d001.js",revision:null},{url:"assets/items_spawning-items.md.f111d001.lean.js",revision:null},{url:"assets/items_spear.md.b703c383.js",revision:null},{url:"assets/items_spear.md.b703c383.lean.js",revision:null},{url:"assets/items_throwable.md.f6886c31.js",revision:null},{url:"assets/items_throwable.md.f6886c31.lean.js",revision:null},{url:"assets/items_tool-durability.md.ca0cfa12.js",revision:null},{url:"assets/items_tool-durability.md.ca0cfa12.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.0581141a.js",revision:null},{url:"assets/items_troubleshooting-items.md.0581141a.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.326fbdbf.js",revision:null},{url:"assets/items_vanilla-usage-items.md.326fbdbf.lean.js",revision:null},{url:"assets/items_vui-full.md.a6a91dc0.js",revision:null},{url:"assets/items_vui-full.md.a6a91dc0.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.dcc76987.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.dcc76987.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.ad9baa34.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.ad9baa34.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.d4a75ccf.js",revision:null},{url:"assets/json-ui_best-practices.md.d4a75ccf.lean.js",revision:null},{url:"assets/json-ui_index.md.9560e0a4.js",revision:null},{url:"assets/json-ui_index.md.9560e0a4.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9cb8fa0c.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9cb8fa0c.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6aaa697c.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6aaa697c.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a33f3913.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a33f3913.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.d2fb1bbb.js",revision:null},{url:"assets/json-ui_string-to-number.md.d2fb1bbb.lean.js",revision:null},{url:"assets/loot_index.md.ce9eb2de.js",revision:null},{url:"assets/loot_index.md.ce9eb2de.lean.js",revision:null},{url:"assets/loot_item-functions.md.0421dfbb.js",revision:null},{url:"assets/loot_item-functions.md.0421dfbb.lean.js",revision:null},{url:"assets/loot_loot-tables.md.b08689e3.js",revision:null},{url:"assets/loot_loot-tables.md.b08689e3.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.d783d15a.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.d783d15a.lean.js",revision:null},{url:"assets/loot_recipes.md.ff9ebd02.js",revision:null},{url:"assets/loot_recipes.md.ff9ebd02.lean.js",revision:null},{url:"assets/loot_trade-tables.md.2297b7d0.js",revision:null},{url:"assets/loot_trade-tables.md.2297b7d0.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f2e0c937.js",revision:null},{url:"assets/loot_trading-behavior.md.f2e0c937.lean.js",revision:null},{url:"assets/meta_addon-performance.md.f933d4bb.js",revision:null},{url:"assets/meta_addon-performance.md.f933d4bb.lean.js",revision:null},{url:"assets/meta_index.md.d56e77f0.js",revision:null},{url:"assets/meta_index.md.d56e77f0.lean.js",revision:null},{url:"assets/meta_jq.md.e66caf25.js",revision:null},{url:"assets/meta_jq.md.e66caf25.lean.js",revision:null},{url:"assets/meta_style-guide.md.5d8c6afd.js",revision:null},{url:"assets/meta_style-guide.md.5d8c6afd.lean.js",revision:null},{url:"assets/meta_useful-links.md.e982f3ca.js",revision:null},{url:"assets/meta_useful-links.md.e982f3ca.lean.js",revision:null},{url:"assets/meta_using-schemas.md.b8660313.js",revision:null},{url:"assets/meta_using-schemas.md.b8660313.lean.js",revision:null},{url:"assets/meta_version-control.md.545c9de6.js",revision:null},{url:"assets/meta_version-control.md.545c9de6.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.16c65b9f.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.16c65b9f.lean.js",revision:null},{url:"assets/nbt_index.md.118022e5.js",revision:null},{url:"assets/nbt_index.md.118022e5.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.44038a0c.js",revision:null},{url:"assets/nbt_mcstructure.md.44038a0c.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.9e63988c.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.9e63988c.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.2b764d8e.js",revision:null},{url:"assets/nbt_step-by-step-example.md.2b764d8e.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.e4151146.js",revision:null},{url:"assets/nbt_structure-limits.md.e4151146.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.04fe1753.js",revision:null},{url:"assets/particles_disabling-particles.md.04fe1753.lean.js",revision:null},{url:"assets/particles_index.md.dd5bb825.js",revision:null},{url:"assets/particles_index.md.dd5bb825.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.202c140e.js",revision:null},{url:"assets/particles_particles-and-sounds.md.202c140e.lean.js",revision:null},{url:"assets/particles_particles.md.d05332f7.js",revision:null},{url:"assets/particles_particles.md.d05332f7.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.a30a4797.js",revision:null},{url:"assets/particles_vanilla-particles.md.a30a4797.lean.js",revision:null},{url:"assets/privacy.md.f239b6f1.js",revision:null},{url:"assets/privacy.md.f239b6f1.lean.js",revision:null},{url:"assets/scripting_custom-command.md.42290fd3.js",revision:null},{url:"assets/scripting_custom-command.md.42290fd3.lean.js",revision:null},{url:"assets/scripting_game-tests.md.2b1859b0.js",revision:null},{url:"assets/scripting_game-tests.md.2b1859b0.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.026c3bf6.js",revision:null},{url:"assets/scripting_gametest-form.md.026c3bf6.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.aff33103.js",revision:null},{url:"assets/scripting_gametest-qna.md.aff33103.lean.js",revision:null},{url:"assets/scripting_index.md.25ae285e.js",revision:null},{url:"assets/scripting_index.md.25ae285e.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.495808c9.js",revision:null},{url:"assets/scripting_saving-loading.md.495808c9.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.a481270a.js",revision:null},{url:"assets/scripting_scripting-intro.md.a481270a.lean.js",revision:null},{url:"assets/scripting_typescript.md.82307f49.js",revision:null},{url:"assets/scripting_typescript.md.82307f49.lean.js",revision:null},{url:"assets/servers_index.md.ade24840.js",revision:null},{url:"assets/servers_index.md.ade24840.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.ede14c62.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.ede14c62.lean.js",revision:null},{url:"assets/servers_server-software.md.fe038dcf.js",revision:null},{url:"assets/servers_server-software.md.fe038dcf.lean.js",revision:null},{url:"assets/style.1e62f284.css",revision:null},{url:"assets/test.md.66bf05d7.js",revision:null},{url:"assets/test.md.66bf05d7.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.0a9e3723.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.0a9e3723.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.09e87b92.js",revision:null},{url:"assets/visuals_animation-effects.md.09e87b92.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.35546498.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.35546498.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.5f664389.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.5f664389.lean.js",revision:null},{url:"assets/visuals_death-animations.md.7587be8d.js",revision:null},{url:"assets/visuals_death-animations.md.7587be8d.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.04284293.js",revision:null},{url:"assets/visuals_glowing-texture.md.04284293.lean.js",revision:null},{url:"assets/visuals_index.md.81be5c91.js",revision:null},{url:"assets/visuals_index.md.81be5c91.lean.js",revision:null},{url:"assets/visuals_introduction.md.3e236b5a.js",revision:null},{url:"assets/visuals_introduction.md.3e236b5a.lean.js",revision:null},{url:"assets/visuals_leash-position.md.acc8359e.js",revision:null},{url:"assets/visuals_leash-position.md.acc8359e.lean.js",revision:null},{url:"assets/visuals_materials.md.53c1cf5b.js",revision:null},{url:"assets/visuals_materials.md.53c1cf5b.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.37a06720.js",revision:null},{url:"assets/visuals_math-based-animations.md.37a06720.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.8396d16c.js",revision:null},{url:"assets/visuals_player-geometry.md.8396d16c.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.1728ce14.js",revision:null},{url:"assets/visuals_remove-shadows.md.1728ce14.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.cdc53601.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.cdc53601.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.353d91f2.js",revision:null},{url:"assets/visuals_structure-presentation.md.353d91f2.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.fda86dc2.js",revision:null},{url:"assets/vr_editing-your-first-model.md.fda86dc2.lean.js",revision:null},{url:"assets/vr_index.md.b63baa80.js",revision:null},{url:"assets/vr_index.md.b63baa80.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ad326e7f.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ad326e7f.lean.js",revision:null},{url:"assets/vr_pack_setup.md.df5ac26b.js",revision:null},{url:"assets/vr_pack_setup.md.df5ac26b.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.0b3a45d3.js",revision:null},{url:"assets/world-generation_biome-tags.md.0b3a45d3.lean.js",revision:null},{url:"assets/world-generation_biomes.md.b01daaa0.js",revision:null},{url:"assets/world-generation_biomes.md.b01daaa0.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.2ba0e63d.js",revision:null},{url:"assets/world-generation_custom-ores.md.2ba0e63d.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.9424f577.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.9424f577.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.8df4d04c.js",revision:null},{url:"assets/world-generation_feature-types.md.8df4d04c.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.2f2ecc07.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.2f2ecc07.lean.js",revision:null},{url:"assets/world-generation_index.md.9708ec0e.js",revision:null},{url:"assets/world-generation_index.md.9708ec0e.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.1aa630fe.js",revision:null},{url:"assets/world-generation_structure-features.md.1aa630fe.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.2d3c25da.js",revision:null},{url:"assets/world-generation_surface-builder.md.2d3c25da.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.cb5ae56f.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.cb5ae56f.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));