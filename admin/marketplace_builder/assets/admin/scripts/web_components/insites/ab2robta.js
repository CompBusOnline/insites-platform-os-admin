/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class i{render(){return t("div",{class:"ins-notifications-item-wrap"},t("div",{class:"ins-niw-status-wrap "+this.status},t("i",{class:this.icon})),t("h2",null,this.eventType),this.heading?t("h3",null,this.heading,t("span",{class:"ins-niw-duration-wrap"},this.duration)):t("span",{class:"ins-niw-duration-wrap"},this.duration),this.desc?t("p",null,this.desc,this.link?t("a",{href:this.link},this.linkLabel):""):this.link?t("p",null,t("a",{href:this.link,class:"link-only"},this.linkLabel)):"")}static get is(){return"ins-notifications-item"}static get properties(){return{desc:{type:String,attr:"desc"},duration:{type:String,attr:"duration"},eventType:{type:String,attr:"event-type"},heading:{type:String,attr:"heading"},icon:{type:String,attr:"icon"},InsNotificationsItemEl:{elementRef:!0},link:{type:String,attr:"link"},linkLabel:{type:String,attr:"link-label"},status:{type:String,attr:"status"}}}static get style(){return".ins-notifications-item-wrap{-webkit-box-sizing:border-box;box-sizing:border-box;padding:14px 0 14px 38px;position:relative;border-bottom:solid 1px #eee;top:100vh;-webkit-transition:top 1s ease-in-out,opacity 1s ease-in-out;transition:top 1s ease-in-out,opacity 1s ease-in-out;opacity:0}.ins-notifications-item-wrap.show{top:0;opacity:1}.ins-notifications-item-wrap .ins-niw-status-wrap{width:24px;height:24px;border-radius:50%;background-color:#f3f3f3;position:absolute;left:0;top:15px;color:#fff;font-size:10px;padding:5px 6px;-webkit-box-sizing:border-box;box-sizing:border-box}.ins-notifications-item-wrap .ins-niw-status-wrap.green{background-color:#24be8d}.ins-notifications-item-wrap .ins-niw-status-wrap.blue{background-color:#1e86e3}.ins-notifications-item-wrap .ins-niw-status-wrap.red{background-color:#f27474}.ins-notifications-item-wrap .icon-today{font-size:11px;margin-left:1px}.ins-notifications-item-wrap .icon-settings{margin-left:1px}.ins-notifications-item-wrap h2{margin:0;font-size:18px;font-weight:400;font-family:'Open Sans',sans-serif;color:#1a1d2c}.ins-notifications-item-wrap h3{font-size:14px;position:relative;font-weight:400;font-family:'Open Sans',sans-serif;color:#2c3148;margin-top:20px}.ins-notifications-item-wrap .ins-niw-duration-wrap{font-size:11px;position:absolute;right:0;font-weight:400;color:#8c94a4;top:50%;margin-top:-8px}.ins-notifications-item-wrap p{font-size:12px;line-height:20px;color:#8c94a4}.ins-notifications-item-wrap p a{color:#1e86e3;text-decoration:none;margin-left:5px;font-weight:600}.ins-notifications-item-wrap p a.link-only{margin-left:0}"}}export{i as InsNotificationsItem};