/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{constructor(){this.link="",this.icon="no-icon",this.app=!1,this.withSubmenu=!1,this.label="Label",this.landingPage=!1,this.formatUrl=(()=>{})}routePageHandler(){this.activate();let e=!0,t=this.insSidebarItemEl.parentElement.closest("ins-sidebar-item"),i=[],s={link:this.link,app:this.app,withSubmenu:this.withSubmenu,label:this.label};for(i.push(s);e;)if(t){let e={link:t.link,app:t.app,withSubmenu:t.withSubmenu,label:t.label};i.push(e),t=t.parentElement.closest("ins-sidebar-item")}else e=!1;i.reverse(),this.toggleMenuNav(),this.routePage.emit({crumbs:i});let a=document.querySelector("ins-admin");this.withSubmenu&&a.className.includes("mini")&&this.hideSiblingsMenu(),document.querySelector("body").style.overflowY=null,this.app&&(document.querySelector("body").style.overflowY="hidden")}val(e,t){let i={link:this.link,icon:this.icon,app:this.app,withSubmenu:this.withSubmenu,label:this.label};if(e&&"object"==typeof e&&!t);else{if(e&&!t)return this[e];if(!e||!t)return i;this[e]=t}}toggleMenuNav(){let e=document.querySelector("ins-header"),t=e.querySelector(".full-width-navs");this.hasClass(t,"active")&&e.toggleNav()}hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}showSubMenu(){let e=document.querySelector("ins-admin");this.withSubmenu&&e.className.includes("mini")&&this.hideSiblingsMenu(),this.submenuVisible=!0}hideSubMenu(){this.submenuVisible=!1}activate(){this.deactivateSiblings();let e=this.insSidebarItemEl.closest(".submenu-wrap");e&&e.closest("ins-sidebar-item").activateParent()}activateParent(){this.isActive=!0}deactivate(){this.isActive=!1}hideSiblingsMenu(){let e=this.insSidebarItemEl.closest("ins-sidebar").querySelectorAll("ins-sidebar-item");for(let t=0;t<e.length;++t)e[t].hideSubMenu()}deactivateSiblings(){let e=this.insSidebarItemEl.closest("ins-sidebar").querySelectorAll("ins-sidebar-item");for(let t=0;t<e.length;++t)e[t].deactivate();this.isActive=!0}componentWillLoad(){this.formatRoute()}componentDidLoad(){let e=this,t=this.insSidebarItemEl.querySelector(".ins-ripple-button");this.insSidebarItemEl.addEventListener("click",function(i){e.addRippleEffect(i,t)}),this.landingPage&&this.activate()}formatRoute(){let e=this.insSidebarItemEl.closest("ins-sidebar-item[with-submenu]"),t=e?`${e.label}/${this.label}`:this.label;t=this.formatUrl(t),this.formattedRoute="#/app/"+t}mouseLeaveHandler(){let e=document.querySelector("ins-admin");e&&e.className.includes("mini")&&this.hideSubMenu()}render(){return this.withSubmenu?e("div",{class:`ins-sidebar-item-wrap ${this.isActive?"active":""} ${this.icon?"":"no-icon"}`},e("div",{class:"ins-ripple-button"},e("a",{onClick:()=>this.showSubMenu(),class:"ins-ripple-link"},e("i",{class:`fas ${this.icon?this.icon:"no-icon"}`}),e("span",{class:"ins-sidebar-item-label"},this.label),e("i",{class:"fas icon-chevron-right"}))),e("div",{class:"relative-wrap"},e("div",{class:`submenu-wrap ${this.submenuVisible?"is-active":""}`,onMouseLeave:()=>this.mouseLeaveHandler()},e("div",{class:"btn-nav-wrap"},e("button",{class:"btn-nav",onClick:()=>this.hideSubMenu()},e("i",{class:"fas icon-chevron-left"}),e("span",null,this.label))),e("slot",null)))):""!==this.label?e("div",{class:`ins-sidebar-item-wrap ${this.isActive?"active":""} ${this.icon?"":"no-icon"}`},e("div",{class:"ins-ripple-button"},this.app?e("a",{class:"ins-ripple-link",href:`${this.formattedRoute}`,onClick:()=>this.routePageHandler()},e("i",{class:`fas ${this.icon}`}),e("span",{class:"ins-sidebar-item-label"},this.label)):e("a",{href:this.link?this.link:"",class:"ins-ripple-link",onClick:()=>this.routePageHandler()},e("i",{class:`fas ${this.icon}`}),e("span",{class:"ins-sidebar-item-label"},this.label)))):void 0}static get is(){return"ins-sidebar-item"}static get properties(){return{activate:{method:!0},activateParent:{method:!0},addRippleEffect:{context:"addRippleEffect"},app:{type:Boolean,attr:"app",mutable:!0},deactivate:{method:!0},formattedRoute:{state:!0},formatUrl:{context:"formatUrl"},hideSubMenu:{method:!0},icon:{type:"Any",attr:"icon",mutable:!0},insSidebarItemEl:{elementRef:!0},isActive:{state:!0},label:{type:String,attr:"label",mutable:!0},landingPage:{type:Boolean,attr:"landing-page",mutable:!0},link:{type:"Any",attr:"link",mutable:!0},routePageHandler:{method:!0},showSubMenu:{method:!0},submenuVisible:{state:!0},val:{method:!0},withSubmenu:{type:Boolean,attr:"with-submenu",mutable:!0}}}static get events(){return[{name:"routePage",method:"routePage",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-sidebar-item div.ins-sidebar-item-wrap{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:240px}ins-sidebar-item div.ins-sidebar-item-wrap a{color:#8c94a4;text-decoration:none;font-size:14px;display:block;padding:16px 16px 16px 18px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:240px;-webkit-transition:none;transition:none}ins-sidebar-item div.ins-sidebar-item-wrap a .fas{color:#1e86e3;margin-right:13px;display:inline-block;width:18px}ins-sidebar-item div.ins-sidebar-item-wrap a:hover{color:#2c3148;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;background-color:#e4e6ec}ins-sidebar-item div.ins-sidebar-item-wrap a .ins-sidebar-item-label{opacity:1;-webkit-transition:opacity .35s;transition:opacity .35s}ins-sidebar-item div.ins-sidebar-item-wrap .fas.icon-chevron-right{font-size:10px;color:#8c94a4;position:absolute;top:calc(50% - 5px);right:0;opacity:1;-webkit-transition:opacity .15s;transition:opacity .15s}ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap{display:none;position:absolute;background-color:#f5f6f8;width:240px;height:calc(100vh - 104px);top:0;left:0;z-index:1001;padding:16px 0}ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap.is-active{display:block}ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .btn-nav-wrap{padding:16px}ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .btn-nav-wrap .btn-nav{background:0 0;border:none;outline:0;cursor:pointer;color:#1e86e3;font-size:14px;display:block;padding:2px 0}ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .btn-nav-wrap .btn-nav .fas{color:#1e86e3;margin-right:16px;display:inline-block;width:18px}ins-sidebar-item div.ins-sidebar-item-wrap .hide-slot{display:none}ins-sidebar-item div.ins-sidebar-item-wrap.active>.ins-ripple-button>a{background-color:#e4e6ec;color:#2c3148;font-weight:600;border-left:3px solid #1e86e3;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:15px}html{-webkit-tap-highlight-color:#000}.ins-ripple-button{width:100%;-webkit-appearance:none;position:relative;background:0 0;display:block;overflow:hidden;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .25s ease;transition:all .25s ease;text-align:left}.ins-ripple-button:focus,.ins-ripple-button:hover{outline:0;text-decoration:none}.ins-ripple-button:not(:disabled){cursor:pointer}.ins-ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:0 0}.ins-ripple__circle{position:absolute;top:50%;left:50%;z-index:1000;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0;height:0;border-radius:50%;background:#d2d4d8}.ins-ripple.activated .ins-ripple__circle{-webkit-animation:.5s ease-in a-ripple;animation:.5s ease-in a-ripple}\@-webkit-keyframes a-ripple{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}\@keyframes a-ripple{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}.ripple-wave{position:absolute;background:rgba(255,255,255,.45);border-radius:100%;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.ripple-wave.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}\@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}\@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"}}export{t as InsSidebarItem};