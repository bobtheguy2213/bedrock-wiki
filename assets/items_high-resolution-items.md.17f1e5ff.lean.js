import{_ as r,c,a as s,w as p,e as l,b as a,d as n,r as t,o as D}from"./404.md.82760895.js";const x=JSON.parse('{"title":"High Resolution Items","description":"","frontmatter":{"title":"High Resolution Items","category":"Tutorials","mentions":["BlazeDrake"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Files","slug":"files","link":"#files","children":[]},{"level":2,"title":"Result","slug":"result","link":"#result","children":[]}],"relativePath":"items/high-resolution-items.md"}'),F={name:"items/high-resolution-items.md"},y=l("",3),i=a("p",null,"The solution to this is using an attachable to scale the item down while being held. The calculations to do so can require quite a bit of tuning, so this page gives the code you need to create an attachable to scale your item back down to a normal size! It isn't perfect, but it will look very similar to a normal item, save for some slight differences in rotation and in how it animates when you punch with it. The main idea of what it does is that it uses an animation to scale the size of the item down to what the size should be",-1),C=a("h2",{id:"files",tabindex:"-1"},[n("Files "),a("a",{class:"header-anchor",href:"#files","aria-hidden":"true"},"#")],-1),u=a("p",null,"For this fix, we need a geometry, a render controller, an attachable, and an animation.",-1),A=a("p",null,"Here is the geometry file. What it does is it uses a texture mesh to read in the texture used in your attachable, and create a geometry based off of that, without having to painstakingly model cubes to match the item! This file should not require any editing",-1),b=l("",2),m=l("",2),h=l("",2),d=l("",3);function q(_,g,f,v,w,E){const e=t("WikiImage"),o=t("CodeHeader");return D(),c("div",null,[y,s(e,{src:"/assets/images/items/high-resolution-items/large_item_broken_thirdperson.png",alt:"alternative text",pixelated:"false",width:"1080"}),i,C,u,A,s(o,null,{default:p(()=>[n("RP/models/entity/large_item.geo.json")]),_:1}),b,s(o,null,{default:p(()=>[n("RP/render_controllers/large_item.render_controllers.json")]),_:1}),m,s(o,null,{default:p(()=>[n("RP/attachables/large_item.json")]),_:1}),h,s(o,null,{default:p(()=>[n("RP/animations/large_item.animation.json")]),_:1}),d,s(e,{src:"/assets/images/items/high-resolution-items/large_item_fixed_thirdperson.png",alt:"alternative text",pixelated:"false",width:"1080"})])}const k=r(F,[["render",q]]);export{x as __pageData,k as default};