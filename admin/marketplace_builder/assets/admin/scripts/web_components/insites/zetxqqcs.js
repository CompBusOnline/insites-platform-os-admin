/*! Built with http://stenciljs.com */
const{h:i}=window.insites;class s{toggleNotificationshandler(){this.showNotifications=!this.showNotifications,this.insNotificationsitemsEl.forEach(function(i,s){setTimeout(function(){i.querySelector(".ins-notifications-item-wrap").className+=" show"},100*s)})}componentWillLoad(){this.insNotificationsitemsEl=document.querySelectorAll("ins-notifications-item")}render(){return this.showNotifications?i("div",null,i("ins-backdrop",null),i("div",{class:"ins-notifications-wrap"},i("div",{class:"ins-nw-header"},i("h1",null,"Notifications"),i("button",{class:"ins-nwh-close",onClick:()=>this.toggleNotificationshandler()},i("i",{class:"icon-close-1"}))),i("div",{class:"ins-nw-items-wrap"},i("div",null,i("slot",null))))):i("div",{class:"hide-slot"},i("ins-backdrop",null),i("div",{class:"ins-notifications-wrap"},i("div",{class:"ins-nw-header"},i("h1",null,"Notifications"),i("button",{class:"ins-nwh-close",onClick:()=>this.toggleNotificationshandler()},i("i",{class:"icon-close-1"}))),i("div",{class:"ins-nw-items-wrap"},i("div",null,i("slot",null)))))}static get is(){return"ins-notifications"}static get properties(){return{insNotificationsitemsEl:{state:!0},showNotifications:{state:!0},toggleNotificationshandler:{method:!0}}}static get style(){return".ins-notifications-wrap{position:fixed;width:380px;right:0;height:100vh;top:0;z-index:9999;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.ins-notifications-wrap .ins-nw-header{padding:22px;position:relative;border-bottom:solid 1px #eee;-webkit-box-sizing:border-box;box-sizing:border-box}.ins-notifications-wrap .ins-nw-header h1{font-size:24px;font-family:'Open Sans',sans-serif;font-weight:300;margin:0;color:#1a1d2c}.ins-notifications-wrap .ins-nw-header .ins-nwh-close{position:absolute;top:calc(50% - 8px);right:20px;color:#bcc1ca;border:none;background:0 0;padding:0;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}.ins-notifications-wrap .ins-nw-items-wrap{padding:20px}.hide-slot{display:none}"}}export{s as InsNotifications};