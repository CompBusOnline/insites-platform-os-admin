/*! Built with http://stenciljs.com */
insites.loadBundle("cydsdrfn",["exports","./chunk-3b5e9de3.js"],function(e,r){var t=window.insites.h,n=function(){function e(){}return e.prototype.routePageHandler=function(e){this.updateRoute(e.detail.crumbs)},e.prototype.componentDidLoad=function(){var e=this;this.renderBreadcrumbs(),this.insHeaderEl=this.insAdminEl.querySelector("ins-header"),this.renderUrls(),window.onhashchange=function(){e.renderUrls()}},e.prototype.renderUrls=function(){var e=this,t=window.location.hash;if(this.sidebarItemEls=this.insAdminEl.querySelectorAll("ins-sidebar-item"),this.sidebarItemEls.slice().forEach(function(e){var r="#/"+e.label.toLowerCase().replace(/ +(?= )/g,"").replace(/- | - | -| /gi,"-");t===r&&e.app&&e.routePageHandler()}),t){var n=JSON.parse(localStorage.getItem("insChildPages"))?JSON.parse(localStorage.getItem("insChildPages")):[],i=r._.find(n,{hash:window.location.pathname+t});i&&(window.location.href=i.parentHash,this.insRenderer=this.insAdminEl.querySelector("ins-renderer"),setTimeout(function(){e.insRenderer.querySelector("#insRendererFrame").src=i.childLink},100))}},e.prototype.updateRoute=function(e){this.insRenderer=this.insAdminEl.querySelector("ins-renderer"),this.insRenderer.updateRoute(e)},e.prototype.hasClass=function(e,r){return(" "+e.className+" ").indexOf(" "+r+" ")>-1},e.prototype.renderBreadcrumbs=function(){var e=window.sessionStorage.getItem("ins_breadcrumbs");if(e&&(this.crumbs=JSON.parse(e),"#/"===window.location.hash)){this.updateRoute(this.crumbs);var r=this.insAdminEl.querySelector("ins-sidebar").querySelector(".sidebar-items-wrap").children;this.activateRoutes(r,0)}},e.prototype.activateRoutes=function(e,r){for(var t=0;t<e.length;t++)if("INS-SIDEBAR-ITEM"===e[t].nodeName&&e[t].label===this.crumbs[r].label){var n=e[t].querySelector(".ins-sidebar-item-wrap").querySelector(".submenu-wrap");n?(r+=1,this.activateRoutes(n.children,r)):e[t].activate();break}},e.prototype.render=function(){return t("div",null,t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ins-admin"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{crumbs:{state:!0},insAdminEl:{elementRef:!0},insHeaderEl:{state:!0},insRenderer:{state:!0},sidebarItemEls:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"routePage",method:"routePageHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ins-admin .ins-form-field{font-size:16px;font-family:'Open Sans',sans-serif;padding:8px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;border:solid 1px #e4e6ec;background:#fff;width:100%;display:block}ins-admin .off-canvas-content{position:relative}ins-admin .content{width:calc(100% - 240px);height:100vh;margin-left:240px;padding-top:75px;background-color:#fafbfc;-webkit-transition:margin .5s,width .5s;transition:margin .5s,width .5s}ins-admin .content.no-sidebar{width:100%;margin-left:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar{width:50px;overflow:initial}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .insites-logo-wrap img{width:46px;margin-top:4px;margin-left:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap{width:50px;padding:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .relative-wrap{position:relative}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap a{padding:16px;padding-left:18px;padding-right:0;-webkit-transition:width .25s;transition:width .25s;width:50px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap a .icon-chevron-right,ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap a span{display:none}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .fas{margin-right:16px;margin-left:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .fas.icon-chevron-right,ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .ins-sidebar-item-label{opacity:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap{left:50px;height:auto;-webkit-box-shadow:1px 2px 3px #ddd;box-shadow:1px 2px 3px #ddd;padding:0;top:-45px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap>.btn-nav-wrap>.btn-nav>.fas.icon-chevron-left{display:none}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap>.btn-nav-wrap>.btn-nav>span{margin-left:28px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap div.ins-sidebar-item-wrap{width:240px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap a{padding:16px;text-align:left;width:100%}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap a span{opacity:1}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .fas{margin-right:10px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .fas.icon-chevron-right,ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .ins-sidebar-item-label{display:initial}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap div.ins-sidebar-item-wrap{position:initial}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap .submenu-wrap .submenu-wrap{left:0;top:0;height:100%;-webkit-box-shadow:none;box-shadow:none}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar ins-sidebar-item div.ins-sidebar-item-wrap.active a{padding-left:15px}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap{float:none;display:block;width:100%!important;position:relative}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap .ins-sfiw-button{padding:19px 0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap .menu-item-wrap{width:240px;left:50px;height:auto;top:auto;bottom:0;-webkit-box-shadow:1px 2px 3px #ddd;box-shadow:1px 2px 3px #ddd;padding-bottom:0}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap .ins-sidebar-item-wrap{width:100%}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap .ins-sidebar-item-wrap a{width:100%}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .ins-sidebar-footer-item-wrap .ins-sidebar-item-wrap a .ins-sidebar-item-label{opacity:1;display:inline-block}ins-admin.mini ins-sidebar:not(.style-guide) .sidebar .sidebar-action>div{width:100%}ins-admin.mini .content{margin-left:50px;width:calc(100% - 50px)}ins-admin.mini .ins-header-wrap{width:100%}ins-admin.mini .ins-header-wrap .burger{margin-left:65px}\@media (max-width:1024px){ins-admin .sidebar{-webkit-box-shadow:1px 0 10px rgba(0,0,0,.15);box-shadow:1px 0 10px rgba(0,0,0,.15)}ins-admin .content{margin-left:50px;width:calc(100% - 50px)}ins-admin .burger{margin-left:255px}ins-admin.mini .sidebar{position:fixed;-webkit-box-shadow:none;box-shadow:none}}"},enumerable:!0,configurable:!0}),e}();e.InsAdmin=n,Object.defineProperty(e,"__esModule",{value:!0})});