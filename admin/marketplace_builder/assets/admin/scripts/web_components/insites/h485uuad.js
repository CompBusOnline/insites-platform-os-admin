/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{constructor(){this.icon="icon-settings-1",this.label="Settings",this.menuToggled=!1}val(e,t){let s={icon:this.icon,label:this.label};return e&&!t?this[e]:e&&t?void(this[e]=t):s}toggleMenu(){this.menuToggled=!this.menuToggled}hideMenu(){this.menuToggled=!1}showMenu(){this.menuToggled=!0}mouseLeaveHandler(){document.querySelector("ins-admin").className.includes("mini")&&this.hideMenu()}render(){if(this.icon)return e("div",{class:"ins-sidebar-footer-item-wrap"},e("button",{class:"ins-sfiw-button",onClick:()=>this.toggleMenu()},this.icon?e("i",{class:`ins-sfiw-button-icon ${this.icon}`}):""),e("div",{class:`menu-item-wrap ${this.menuToggled?"visible":""} `,onMouseLeave:()=>this.mouseLeaveHandler()},e("button",{class:"ins-sfiw-button-back",onClick:()=>this.toggleMenu()},e("i",{class:"fas icon-chevron-left"}),e("span",{class:"ins-sfiw-button-label"},this.label?this.label:"Back")),e("slot",null)))}static get is(){return"ins-sidebar-footer-menu"}static get properties(){return{hideMenu:{method:!0},icon:{type:String,attr:"icon",mutable:!0},label:{type:String,attr:"label",mutable:!0},menuToggled:{state:!0},showMenu:{method:!0},toggleMenu:{method:!0},val:{method:!0}}}static get style(){return".ins-sidebar-footer-item-wrap{float:left;height:53px}.ins-sidebar-footer-item-wrap .ins-sfiw-button{display:block;width:100%;font-size:14px;padding:20px 0 18px;color:#2c3148;outline:0;cursor:pointer}.ins-sidebar-footer-item-wrap .ins-sfiw-button:active,.ins-sidebar-footer-item-wrap .ins-sfiw-button:hover{background:#2c3148;color:#fff}.ins-sidebar-footer-item-wrap .ins-sfiw-button-back{background:0 0;border:none;outline:0;cursor:pointer;color:#1e86e3;font-size:14px;display:block;padding:16px}.ins-sidebar-footer-item-wrap .ins-sfiw-button-back .fas{color:#1e86e3;margin-right:16px;display:inline-block;width:18px}.ins-sidebar-footer-item-wrap .menu-item-wrap{display:none;position:absolute;z-index:1002;top:calc(-100vh + 110px);height:calc(100vh - 110px);padding:16px 0;background:#f5f6f8}.ins-sidebar-footer-item-wrap .menu-item-wrap.visible{display:block}"}}export{t as InsSidebarFooterMenu};