/*! Built with http://stenciljs.com */
insites.loadBundle("vze6j47u",["exports"],function(e){var t=window.insites.h,n=function(){function e(){}return e.prototype.val=function(e,t){var n={steady:this.steady,noPadding:this.noPadding};if(e&&"object"==typeof e&&!t)console.log("this is json");else{if(e&&!t)return this[e];if(!e||!t)return n;this[e]=t}},e.prototype.render=function(){return t("div",{class:"ins-card-wrap "+(this.steady?"steady":"")+" "+(this.noPadding?"no-padding":"")},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ins-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{noPadding:{type:Boolean,attr:"no-padding",mutable:!0},steady:{type:Boolean,attr:"steady",mutable:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".ins-card-wrap{border:1px solid #e4e6ec;border-radius:3px;margin-top:0;-webkit-box-shadow:1px 1px 3px #e4e6ed;box-shadow:1px 1px 3px #e4e6ed;background:#fff;-webkit-transition:all .15s;transition:all .15s;padding:20px}.ins-card-wrap:hover{margin-top:-3px;-webkit-box-shadow:0 4px 13px #e4e6ed;box-shadow:0 4px 13px #e4e6ed}.ins-card-wrap.outlined{border-style:dashed;-webkit-box-shadow:none;box-shadow:none}.ins-card-wrap.steady:hover{margin-top:0;-webkit-box-shadow:1px 1px 3px #e4e6ed;box-shadow:1px 1px 3px #e4e6ed}.ins-card-wrap.no-padding{padding:0}"},enumerable:!0,configurable:!0}),e}();e.InsCard=n,Object.defineProperty(e,"__esModule",{value:!0})});