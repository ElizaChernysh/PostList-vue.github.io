(function(){"use strict";var t={4747:function(t,e,o){var n=o(9242),s=o(3396);const a={class:"app"};function i(t,e,o,n,i,r){const l=(0,s.up)("navbar"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s._)("div",a,[(0,s.Wm)(u)])],64)}const r={class:"navbar"},l={class:"navbar__btns"},u=(0,s.Uk)("Пости"),d=(0,s.Uk)("Про сайт");function c(t,e,o,n,a,i){const c=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Пости"),(0,s._)("div",l,[(0,s.Wm)(c,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts")),style:{"margin-right":"10px"}},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(c,{onClick:e[2]||(e[2]=e=>t.$router.push("/about"))},{default:(0,s.w5)((()=>[d])),_:1})])])}var p={},m=o(89);const h=(0,m.Z)(p,[["render",c],["__scopeId","data-v-80d2880a"]]);var v=h,f={name:"app",components:{Navbar:v}};const g=(0,m.Z)(f,[["render",i]]);var w=g;const y={class:"btn"};function _(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("button",y,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var b={name:"my-button"};const k=(0,m.Z)(b,[["render",_],["__scopeId","data-v-12e51902"]]);var P=k;const D=["value"];function C(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t)),class:"input",type:"text"},null,40,D)}var V={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const W=(0,m.Z)(V,[["render",C],["__scopeId","data-v-13e283f0"]]);var O=W;function I(t,e,o,a,i,r){return o.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(...e)=>t.hideDialog&&t.hideDialog(...e))},[(0,s._)("div",{onClick:e[0]||(e[0]=(0,n.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var U={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDailog(){this.$emit("update:show",!1)}}};const $=(0,m.Z)(U,[["render",I],["__scopeId","data-v-40ca766c"]]);var Z=$,x=o(7139);const j=["value"],S=(0,s._)("option",{disabled:"",value:""},"Оберіть щось",-1),L=["value"];function z(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("select",{value:o.modelValue,onChange:e[0]||(e[0]=(...t)=>i.changeOption&&i.changeOption(...t))},[S,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.value,value:t.value},(0,x.zw)(t.name),9,L)))),128))],40,j)}var Q={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const A=(0,m.Z)(Q,[["render",z]]);var H=A,M=[P,O,Z,H];const R=(0,s._)("h1",null,"Привіт! Раді бачити тебе на нашій сторінці",-1),Y=[R];function q(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",null,Y)}var F={};const K=(0,m.Z)(F,[["render",q]]);var E=K;const N=(0,s._)("h1",{style:{"margin-bottom":"15px"}},"Сторінка з постами",-1),T={class:"app__btns"},B=(0,s.Uk)("Отримати пости"),G=(0,s.Uk)(" Створити "),J={key:1},X={class:"page__wrapper"},tt=["onClick"];function et(t,e,o,n,a,i){const r=(0,s.up)("my-input"),l=(0,s.up)("my-button"),u=(0,s.up)("my-select"),d=(0,s.up)("PostForm"),c=(0,s.up)("my-dialog"),p=(0,s.up)("PostList"),m=(0,s.Q2)("focus");return(0,s.wg)(),(0,s.iD)("div",null,[N,(0,s.wy)((0,s.Wm)(r,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchQuery=t),placeholder:"Пошук..."},null,8,["modelValue"]),[[m]]),(0,s._)("div",T,[(0,s.Wm)(l,{onClick:i.fetchPosts},{default:(0,s.w5)((()=>[B])),_:1},8,["onClick"]),(0,s.Wm)(l,{onClick:i.showDialog},{default:(0,s.w5)((()=>[G])),_:1},8,["onClick"]),(0,s.Wm)(u,{modelValue:a.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>a.selectedSort=t),options:a.sortOptions},null,8,["modelValue","options"])]),(0,s.Wm)(c,{show:a.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>a.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{onCreate:i.createPost},null,8,["onCreate"])])),_:1},8,["show"]),a.isPostsLoading?((0,s.wg)(),(0,s.iD)("div",J,"Завантаження...")):((0,s.wg)(),(0,s.j4)(p,{key:0,posts:i.sortedAndSearchedPosts,onRemove:i.removePost},null,8,["posts","onRemove"])),(0,s._)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.totalPages,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,x.C_)(["page",{"current-page":a.page===t}]),onClick:e=>i.changePage(t)},(0,x.zw)(t),11,tt)))),128))])])}const ot=t=>((0,s.dD)("data-v-252a055c"),t=t(),(0,s.Cn)(),t),nt=ot((()=>(0,s._)("h3",{style:{"margin-bottom":"15px"}},"Створити пост",-1))),st=(0,s.Uk)(" Додати ");function at(t,e,o,a,i,r){const l=(0,s.up)("my-input"),u=(0,s.up)("my-button"),d=(0,s.Q2)("focus");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"]))},[nt,(0,s.wy)((0,s.Wm)(l,{modelValue:i.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.post.title=t),type:"text",placeholder:"Назва"},null,8,["modelValue"]),[[d]]),(0,s.Wm)(l,{modelValue:i.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>i.post.body=t),type:"text",placeholder:"Опис"},null,8,["modelValue"]),(0,s.Wm)(u,{style:{"align-self":"flex-end"},onClick:r.createPost},{default:(0,s.w5)((()=>[st])),_:1},8,["onClick"])],32)])}var it={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.title="",this.body="",this.post={title:"",body:""}}}};const rt=(0,m.Z)(it,[["render",at],["__scopeId","data-v-252a055c"]]);var lt=rt;const ut=t=>((0,s.dD)("data-v-1005abc5"),t=t(),(0,s.Cn)(),t),dt={key:0},ct=ut((()=>(0,s._)("h3",null,"Список постів",-1))),pt={key:1,style:{color:"tomato"}};function mt(t,e,o,a,i,r){const l=(0,s.up)("PostItem");return o.posts.length>0?((0,s.wg)(),(0,s.iD)("div",dt,[ct,(0,s.Wm)(n.W3,{name:"post-list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.posts,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.id,post:e,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",pt," Список постів порожній "))}const ht=t=>((0,s.dD)("data-v-0fdebd54"),t=t(),(0,s.Cn)(),t),vt={class:"post"},ft=ht((()=>(0,s._)("strong",null,"Назва: ",-1))),gt=ht((()=>(0,s._)("strong",null,"Опис: ",-1))),wt={class:"post__btns"},yt=(0,s.Uk)(" Видалити "),_t=(0,s.Uk)(" Відкрити ");function bt(t,e,o,n,a,i){const r=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",vt,[(0,s._)("div",null,[(0,s._)("div",null,(0,x.zw)(o.post.id),1),(0,s._)("div",null,[ft,(0,s.Uk)((0,x.zw)(o.post.title),1)]),(0,s._)("div",null,[gt,(0,s.Uk)((0,x.zw)(o.post.body),1)])]),(0,s._)("div",wt,[(0,s.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$emit("remove",o.post))},{default:(0,s.w5)((()=>[yt])),_:1}),(0,s.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,s.w5)((()=>[_t])),_:1})])])}var kt={props:{post:{type:Object,required:!0}}};const Pt=(0,m.Z)(kt,[["render",bt],["__scopeId","data-v-0fdebd54"]]);var Dt=Pt,Ct={components:{PostItem:Dt},props:{posts:{type:Array,required:!0}}};const Vt=(0,m.Z)(Ct,[["render",mt],["__scopeId","data-v-1005abc5"]]);var Wt=Vt,Ot=o(6265),It=o.n(Ot),Ut={components:{PostList:Wt,PostForm:lt},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",sortOptions:[{value:"title",name:"По назві"},{value:"body",name:"По змісту"}],searchQuery:"",page:1,limit:10,totalPages:0}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},changePage(t){this.page=t},async fetchPosts(){try{this.isPostsLoading=!0;const t=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Помилка")}finally{this.isPostsLoading=!1}},mounted(){this.fetchPosts()}},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{page(){this.fetchPosts()}}};const $t=(0,m.Z)(Ut,[["render",et]]);var Zt=$t;const xt=(0,s._)("h1",null,"Даний додаток був створений в 2022 році",-1),jt=[xt];function St(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",null,jt)}var Lt={};const zt=(0,m.Z)(Lt,[["render",St]]);var Qt=zt;function At(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h1",null,"Це сторінка посту з ID = "+(0,x.zw)(t.$route.params.id),1)])}var Ht={};const Mt=(0,m.Z)(Ht,[["render",At]]);var Rt=Mt,Yt=o(2483);const qt=[{path:"/",component:E},{path:"/posts",component:Zt},{path:"/about",component:Qt},{path:"/posts/:id",component:Rt}],Ft=(0,Yt.p7)({routes:qt,history:(0,Yt.PO)("/")});var Kt=Ft;const Et=(0,n.ri)(w);M.forEach((t=>{Et.component(t.name,t)})),Et.use(Kt).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],a=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,i=n[0],r=n[1],l=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var d=l(o)}for(e&&e(n);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},n=self["webpackChunkseedra"]=self["webpackChunkseedra"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4747)}));n=o.O(n)})();
//# sourceMappingURL=app.8a7269fb.js.map