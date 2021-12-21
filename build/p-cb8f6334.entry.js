import{r as t,d as i,w as s,f as e,h,H as r,a as n}from"./p-3b0580b4.js";import{c as o}from"./p-c73722f4.js";const a=(t,i)=>{const s=l(t,i);return s&&t.ownerDocument?t.ownerDocument.importNode(s.content,!0).children[0]:null},l=(t,i)=>{switch(i){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},c=(t,i,s,e,h,r,n,o,a,l,c,u)=>{const d=[],m=u+c;for(let u=c;u<m;u++){const c=t[u];if(h){const i=h(c,u,t);null!=i&&d.push({i:l++,type:"header",value:i,index:u,height:s?s(i,u):n,reads:s?0:2,visible:!!s})}if(d.push({i:l++,type:"item",value:c,index:u,height:i?i(c,u):a,reads:i?0:2,visible:!!i}),r){const i=r(c,u,t);null!=i&&d.push({i:l++,type:"footer",value:i,index:u,height:e?e(i,u):o,reads:e?0:2,visible:!!e})}}return d};let u=class{constructor(i){t(this,i),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}componentWillLoad(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,i,s)=>{const e=i.find((i=>"item"===i.type&&i.index===t));return e?s[e.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,i=-1){if(!this.items)return;const s=-1===i?this.items.length-t:i,e=((t,i)=>0===i?0:i===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((t=>t.index===i)))(this.cells,t),h=c(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,e,t,s);this.cells=((t,i,s)=>{if(0===s&&i.length>=t.length)return i;for(let e=0;e<i.length;e++)t[e+s]=i[e];return t})(this.cells,h,e),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),i(this.readVS.bind(this)),s(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:i,el:s}=this;let e=0,h=s;for(;h&&h!==t;)e+=h.offsetTop,h=h.offsetParent;this.viewportOffset=e,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)}writeVS(){const t=this.indexDirty,i=(r=this.currentScrollTop-this.viewportOffset,n=this.viewportHeight,{top:Math.max(r-100,0),bottom:r+n+100}),s=this.getHeightIndex(),h=((t,i)=>{const s=i.top,e=i.bottom;let h=0;for(;h<t.length&&!(t[h]>s);h++);const r=Math.max(h-2-1,0);for(;h<t.length&&!(t[h]>=e);h++);return{offset:r,length:Math.min(h+2,t.length)-r}})(s,i);var r,n;((t,i,s)=>t<=s.offset+s.length||i.offset!==s.offset||i.length!==s.length)(t,this.range,h)&&(this.range=h,((t,i,s,e)=>{for(const i of t)i.change=0,i.d=!0;const h=[],r=e.offset+e.length;for(let n=e.offset;n<r;n++){const e=s[n],r=t.find((t=>t.d&&t.cell===e));if(r){const t=i[n];t!==r.top&&(r.top=t,r.change=1),r.d=!1}else h.push(e)}const n=t.filter((t=>t.d));for(const s of h){const e=n.find((t=>t.d&&t.cell.type===s.type)),h=s.i;e?(e.d=!1,e.change=2,e.cell=s,e.top=i[h]):t.push({d:!1,cell:s,visible:!0,change:2,top:i[h]})}t.filter((t=>t.d&&-9999!==t.top)).forEach((t=>{t.change=1,t.top=-9999}))})(this.virtualDom,s,this.cells,h),this.nodeRender?((t,i,s,e)=>{const h=Array.from(t.children).filter((t=>"TEMPLATE"!==t.tagName)),r=h.length;let n;for(let o=0;o<s.length;o++){const l=s[o],c=l.cell;if(2===l.change){if(o<r)n=h[o],i(n,c,o);else{const s=a(t,c.type);n=i(s,c,o)||s,n.classList.add("virtual-item"),t.appendChild(n)}n.$ionCell=c}else n=h[o];0!==l.change&&(n.style.transform=`translate3d(0,${l.top}px,0)`);const u=c.visible;l.visible!==u&&(u?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),l.visible=u),c.reads>0&&(e(c,n),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&e(this))}updateCellHeight(t,i){const s=()=>{if(i.$ionCell===t){const s=window.getComputedStyle(i),e=i.offsetHeight+parseFloat(s.getPropertyValue("margin-bottom"));this.setCellHeight(t,e)}};i?o(i,s):s()}setCellHeight(t,i){const s=t.i;t===this.cells[s]&&(t.height===i&&!0===t.visible||(t.visible=!0,t.height=i,this.indexDirty=Math.min(this.indexDirty,s),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((()=>this.updateVirtualScroll()),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=c(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,i)=>{if(!t)return new Uint32Array(i);if(t.length===i)return t;if(i>t.length){const s=new Uint32Array(i);return s.set(t),s}return t.subarray(0,i)})(this.heightIndex,this.cells.length),this.totalHeight=((t,i,s)=>{let e=t[s];for(let h=s;h<t.length;h++)t[h]=e,e+=i[h].height;return e})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{i.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:i,value:s,index:e}=t.cell;switch(i){case"item":return this.renderItem(s,e);case"header":return this.renderHeader(s,e);case"footer":return this.renderFooter(s,e)}}render(){return h(r,{style:{height:`${this.totalHeight}px`}},this.renderItem&&h(d,{dom:this.virtualDom},this.virtualDom.map((t=>this.renderVirtualNode(t)))))}get el(){return n(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}};const d=({dom:t},i,s)=>s.map(i,((i,s)=>{const e=t[s],h=i.vattrs||{};let r=h.class||"";return r+="virtual-item ",e.visible||(r+="virtual-loading"),Object.assign(Object.assign({},i),{vattrs:Object.assign(Object.assign({},h),{class:r,style:Object.assign(Object.assign({},h.style),{transform:`translate3d(0,${e.top}px,0)`})})})}));u.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;transition-duration:0ms;will-change:transform}";export{u as ion_virtual_scroll}