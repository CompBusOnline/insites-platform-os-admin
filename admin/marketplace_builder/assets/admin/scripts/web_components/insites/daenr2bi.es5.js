/*! Built with http://stenciljs.com */
insites.loadBundle("daenr2bi",["exports"],function(e){var t=window.insites.h,n=function(){function e(){this.formDataState={name:"",message:""}}return e.prototype.componentWillLoad=function(){this.bindFormData()},e.prototype.componentWillUpdate=function(){this.bindFormData()},e.prototype.bindFormData=function(){this.formData.name&&(this.formDataState.name=this.formData.name),this.formData.message&&(this.formDataState.message=this.formData.message)},e.prototype.formSubmissionHandler=function(e){e.preventDefault();var t=this.insFormEl.querySelector("#insFormName"),n=this.insFormEl.querySelector("#insFormMessage"),a={name:t.value,message:n.value};this.onFormSubmitted.emit(a)},e.prototype.render=function(){var e=this;return t("form",null,t("label",null,"Name"),t("div",null,t("input",{id:"insFormName",class:"form-input",value:this.formDataState.name})),t("label",null,"Message"),t("div",null,t("textarea",{id:"insFormMessage",class:"form-input",value:this.formDataState.message})),t("input",{type:"submit",class:"btn-submit",onClick:function(t){return e.formSubmissionHandler(t)}}))},Object.defineProperty(e,"is",{get:function(){return"ins-form"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{formData:{type:"Any",attr:"form-data"},formDataState:{state:!0},insFormEl:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onFormSubmitted",method:"onFormSubmitted",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.InsForm=n,Object.defineProperty(e,"__esModule",{value:!0})});