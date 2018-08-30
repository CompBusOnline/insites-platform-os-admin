/*! Built with http://stenciljs.com */
insites.loadBundle("tea6fqnd",["exports"],function(e){var t=window.insites.h,n=function(){function e(){this.label="",this.areacodePlaceholder="",this.areacodeValue="",this.phonenumPlaceholder="",this.phonenumValue="",this.areaCode="",this.phoneNumber=""}return e.prototype.val=function(e,t){var n={label:this.label,areacodePlaceholder:this.areacodePlaceholder,areacodeValue:this.areacodeValue,phonenumPlaceholder:this.phonenumPlaceholder,phonenumValue:this.phonenumValue,areaCode:this.areaCode,phoneNumber:this.phoneNumber};if(e&&"object"==typeof e&&!t)console.log("this is json");else{if(e&&!t)return this[e];if(!e||!t)return n;this[e]=t}},e.prototype.componentDidLoad=function(){var e=this;if(this.initintTel(),window.$){var t=$(".row-col-container .ins-form-field"),n=$(".column-2 .ins-form-field"),a=$(".column-3 .ins-form-field");t.on("keypress keyup blur",function(e){$(this).val($(this).val().replace(/[^\d].+/,"")),(e.which<48||e.which>57)&&e.preventDefault()}),n.keyup(function(){$(this).val().length>5&&$(this).val($(this).val().substr(0,5))}),a.keyup(function(){$(this).val().length>10&&$(this).val($(this).val().substr(0,10))}),this.insInputTelEl.querySelector(".selected-flag").addEventListener("click",function(){e.activateLabel()}),this.insInputTelEl.querySelector(".selected-flag").addEventListener("blur",function(){e.deactivateLabel()}),this.insInputTelEl.querySelector(".iti-arrow").className="icon-caret-down"}},e.prototype.initintTel=function(){if(window.$){var e=this.insInputTelEl.querySelector(".phone");$(e).intlTelInput({autoPlaceholder:"off",initialCountry:"au",preferredCountries:["au"],separateDialCode:!0})}},e.prototype.isNumberOnly=function(e){var t=(e=e||window.event).which?e.which:e.keyCode;return!(t>31&&(t<48||t>57))},e.prototype.activateLabel=function(){this.activeLabel=!0},e.prototype.deactivateLabel=function(){this.activeLabel=!1},e.prototype.render=function(){var e=this;return t("div",{class:"ins-input-tel-wrap "+(this.responsiveView?"responsive":"")},t("label",{class:this.activeLabel?"active":""},this.label),t("div",{class:"row-col-container clearfix"},t("div",{class:"col-container column-1"},t("input",{type:"tel",class:"phone",onFocus:function(){return e.activateLabel()},onBlur:function(){return e.deactivateLabel()}})),t("div",{class:"col-container column-2"},t("input",{type:"text",class:"ins-form-field",name:this.areaCode,placeholder:this.areacodePlaceholder,value:this.areacodeValue,onKeyPress:function(t){return e.isNumberOnly(t)},onFocus:function(){return e.activateLabel()},onBlur:function(){return e.deactivateLabel()}})),t("div",{class:"col-container column-3"},t("input",{type:"text",class:"ins-form-field",name:this.phoneNumber,placeholder:this.phonenumPlaceholder,value:this.phonenumValue,onKeyPress:function(t){return e.isNumberOnly(t)},onFocus:function(){return e.activateLabel()},onBlur:function(){return e.deactivateLabel()}}))))},Object.defineProperty(e,"is",{get:function(){return"ins-input-tel"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeLabel:{state:!0},areaCode:{type:String,attr:"area-code",mutable:!0},areacodePlaceholder:{type:String,attr:"areacode-placeholder",mutable:!0},areacodeValue:{type:String,attr:"areacode-value",mutable:!0},insInputTelEl:{elementRef:!0},label:{type:String,attr:"label",mutable:!0},phoneNumber:{type:String,attr:"phone-number",mutable:!0},phonenumPlaceholder:{type:String,attr:"phonenum-placeholder",mutable:!0},phonenumValue:{type:String,attr:"phonenum-value",mutable:!0},responsiveView:{state:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".ins-input-tel-wrap label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\";margin-bottom:2px}.ins-input-tel-wrap label.active{color:#1e86e3}.ins-input-tel-wrap .ins-form-field,.ins-input-tel-wrap input{border:1px solid #e4e6ec;-webkit-box-shadow:none;box-shadow:none;color:#8c94a4;font-family:\"Open Sans\";font-size:14px;padding:8px;border-radius:4px}.ins-input-tel-wrap .ins-form-field:hover,.ins-input-tel-wrap input:hover{border-color:#8c94a4}.ins-input-tel-wrap .ins-form-field:focus,.ins-input-tel-wrap input:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-input-tel-wrap .ins-form-field.ins-form-field,.ins-input-tel-wrap input.ins-form-field{color:#0a0a0a;padding:8px;border-radius:4px}.ins-input-tel-wrap .intl-tel-input input,.ins-input-tel-wrap .intl-tel-input.separate-dial-code input{opacity:0;width:1px;padding:0!important;position:absolute;left:0;top:0}.ins-input-tel-wrap .intl-tel-input .flag-container,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .flag-container{padding:0;position:relative}.ins-input-tel-wrap .intl-tel-input .flag-container .selected-flag,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .flag-container .selected-flag{font-size:14px;background:#fff;border:solid 1px #eee;height:auto;padding:8px 6px;border-radius:4px;outline:0;width:94px!important;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s}.ins-input-tel-wrap .intl-tel-input .flag-container .selected-flag:hover,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .flag-container .selected-flag:hover{border-color:#8c94a4}.ins-input-tel-wrap .intl-tel-input .flag-container .selected-flag:focus,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .flag-container .selected-flag:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-input-tel-wrap .intl-tel-input .flag-container:hover .selected-flag,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .flag-container:hover .selected-flag{background-color:#fff}.ins-input-tel-wrap .intl-tel-input .selected-dial-code,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .selected-dial-code{padding-left:25px}.ins-input-tel-wrap .intl-tel-input .country-list,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .country-list{font-size:14px;margin-left:0;margin-top:6px;border-radius:4px;border-color:#e4e6ec}.ins-input-tel-wrap .intl-tel-input .country-list .divider,.ins-input-tel-wrap .intl-tel-input.separate-dial-code .country-list .divider{padding:0;margin:0;border-color:#eee}.ins-input-tel-wrap .col-container{float:left}.ins-input-tel-wrap .col-container.column-2{width:50px;margin:0 8px}.ins-input-tel-wrap .col-container.column-3{width:calc(100% - 162px)}.ins-input-tel-wrap .col-container .iti-arrow{border-top:4px solid #e4e6ec!important}.ins-input-tel-wrap .icon-caret-down{color:#8c94a4;font-size:16px;position:absolute;top:calc(50% - 8px);right:10px}\@media only screen and (max-width:400px){.ins-input-tel-wrap .col-container{float:left}.ins-input-tel-wrap .col-container.column-2{width:calc(100% - 104px);margin:0;margin-left:8px}.ins-input-tel-wrap .col-container.column-3{width:100%;display:block;float:none}}"},enumerable:!0,configurable:!0}),e}();e.InsInputTel=n,Object.defineProperty(e,"__esModule",{value:!0})});