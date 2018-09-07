/*! Built with http://stenciljs.com */
insites.loadBundle("d3xd4kbr",["exports"],function(e){var t=window.insites.h,i=function(){function e(){this.imgType="picture",this.buttonColor="blue"}return e.prototype.val=function(e,t){var i={imgType:this.imgType,buttonColor:this.buttonColor};if(e&&"object"==typeof e&&!t)console.log("this is json");else{if(e&&!t)return this[e];if(!e||!t)return i;this[e]=t}},e.prototype.componentDidLoad=function(){this.modal=this.insImagepicker.querySelector(".modal"),this.hiddeninput=this.insImagepicker.querySelector(".hidden-input")},e.prototype.initCropper=function(){var e=this;this.image=this.insImagepicker.querySelector(".image"),this.cropper=new Cropper(this.image,{aspectRatio:1,crop:function(){e.base64=this.cropper.getCroppedCanvas({width:"120",height:"120"}).toDataURL()},ready:function(){e.base64=this.cropper.getCroppedCanvas({width:"120",height:"120"}).toDataURL()}})},e.prototype.displayImage=function(e){var t=(e.target||window.event.srcElement).files,i=this;if(FileReader&&t&&t.length){var s=new FileReader;s.onload=function(){i.ImageElement=i.insImagepicker.querySelector(".image"),i.ImageElement.src=s.result,i.insImagepicker.querySelector(".upload").classList.remove("show"),i.insImagepicker.querySelector(".save").classList.add("show"),i.initCropper()},s.readAsDataURL(t[0])}},e.prototype.exportImage=function(e){e.preventDefault(),this.ImageElement=this.insImagepicker.querySelector(".profile"),this.ImageElement.src=this.base64,this.insImagepicker.querySelector(".img-placeholder").classList.remove("show"),this.ImageElement.classList.add("show"),this.closeModal(e)},e.prototype.openModal=function(){this.modal.classList.add("show")},e.prototype.closeModal=function(e){e.preventDefault(),this.modal.classList.remove("show")},e.prototype.addImage=function(){this.hiddeninput.click()},e.prototype.render=function(){return t("div",{class:"image-picker"},t("div",{class:"inline-block"},t("div",{class:"img-placeholder show",onClick:this.openModal.bind(this)},t("span",null,"Drag and drop the file or add an image")),t("img",{src:"",alt:"",class:"profile",onClick:this.openModal.bind(this)})),t("div",{class:"inline-block"},t("span",null,"JPG or PNG, at least 300px"),t("ins-button",{label:"CHANGE "+this.imgType,size:"small",outlined:!0,color:this.buttonColor,onClick:this.openModal.bind(this)})),t("div",{class:"modal"},t("ins-backdrop",null,t("ins-card",{steady:!0},t("div",{class:"image-preview"},t("div",{class:"label-content"},t("i",{class:"icon-image"}),t("h4",null,"Add ",this.imgType)),t("img",{src:"",alt:"",class:"image"})),t("div",{class:"controllers"},t("ins-button",{label:"CANCEL",outlined:!0,onClick:this.closeModal.bind(this),class:"cancel show"}),t("ins-button",{label:"SAVE",solid:!0,onClick:this.exportImage.bind(this),class:"save"}),t("ins-button",{label:"CHOOSE A FILE",solid:!0,onClick:this.addImage.bind(this),class:"upload show"}),t("input",{type:"file",class:"hidden-input",onChange:this.displayImage.bind(this)}))))))},Object.defineProperty(e,"is",{get:function(){return"ins-image-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{base64:{state:!0},buttonColor:{type:String,attr:"button-color",mutable:!0},cropper:{state:!0},hiddeninput:{state:!0},image:{state:!0},ImageElement:{state:!0},imgType:{type:String,attr:"img-type",mutable:!0},insImagepicker:{elementRef:!0},modal:{state:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".image-picker{margin-bottom:30px}.image-picker .img-placeholder{margin-right:35px;margin-bottom:0;border-radius:50%;border:1px solid #e4e6ec;width:120px;height:120px;display:none;position:relative;cursor:pointer}.image-picker .img-placeholder span{width:100px;text-align:center;padding-top:35px;padding-left:16px;margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.image-picker .profile{border-radius:50%;width:120px;height:120px;margin-right:35px;display:none}.image-picker button{border:1px solid #8c94a4!important;opacity:.3;border-radius:3px!important}.image-picker button span{color:#8c94a4;font-family:\"Open Sans\",sans-serif;font-size:10px;font-weight:600;letter-spacing:.5px;line-height:14px;margin-bottom:0}.image-picker span{font-family:'Open sans',sans-serif;color:#8c94a4;display:block;font-size:12px;margin-bottom:12px}.image-picker .inline-block{display:inline-block;vertical-align:middle}.image-picker .clearfix::after{display:table;content:' ';-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;clear:both}.image-picker .show{display:block!important}.image-picker .modal{display:none}.image-picker .modal ins-card .ins-card-wrap.steady{position:fixed;margin-left:-250px;margin-top:-250px;left:50%;top:50%;z-index:9999;width:500px;-webkit-box-shadow:none;box-shadow:none;height:auto}.image-picker .modal ins-card .ins-card-wrap.steady .controllers{float:right}.image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button{display:none;padding-right:5px;padding-left:5px}.image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button:first-of-type{padding-left:0}.image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button:last-of-type{padding-right:0}.image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button.show{display:inline-block!important}.image-picker .modal ins-card .ins-card-wrap.steady .controllers .hidden-input{display:none}.image-picker .modal ins-card .ins-card-wrap.steady .controllers .show button{border:1px solid #1e86e3!important;opacity:1}.image-picker .modal ins-card .ins-card-wrap.steady .controllers .show button span{color:#1e86e3;letter-spacing:1px;font-family:\"Open Sans\",sans-serif!important;font-weight:600!important;font-size:14px;cursor:pointer;text-transform:uppercase;line-height:16px}.image-picker .modal ins-card .ins-card-wrap.steady .controllers .save button span,.image-picker .modal ins-card .ins-card-wrap.steady .controllers .upload button span{color:#fff}.image-picker .modal ins-card .ins-card-wrap.steady .image-preview{border:1px dashed #8c94a4;margin:0 auto 30px;min-height:100px;width:452px;z-index:1;border-radius:5px;text-align:center;position:relative}.image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content{color:#8c94a4;position:absolute;z-index:0;width:100%}.image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content h4{font-family:'Open sans',sans-serif;font-size:16px;margin-top:20px}.image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content i{font-size:40px;top:15px;position:relative}.image-picker .modal ins-card .ins-card-wrap.steady .icon-close-1{position:absolute;top:23px;right:23px;font-size:16px;font-weight:700;cursor:pointer}.cropper-crop-box span,.cropper-line.line-s{margin-bottom:0}"},enumerable:!0,configurable:!0}),e}();e.InsImagePicker=i,Object.defineProperty(e,"__esModule",{value:!0})});