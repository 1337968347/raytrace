import{r as t,c as o}from"./p-3b0580b4.js";let n=class{constructor(n){t(this,n),this.ionRouteDataChanged=o(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const n=t?Object.keys(t):[],e=o?Object.keys(o):[];if(n.length===e.length){for(const e of n)if(t[e]!==o[e])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{n as ion_route}