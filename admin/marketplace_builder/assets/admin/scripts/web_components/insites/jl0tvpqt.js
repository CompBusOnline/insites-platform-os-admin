/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{onTextareaHandler(e){let t=e.which||e.keyCode;this.oninput.emit({value:e.target.value,keyCode:t})}render(){return this.label?e("div",{class:"ins-textarea-wrap"},e("div",{class:"ins-ta"},e("label",null,this.label),e("textarea",{placeholder:this.placeholder,name:this.name,onKeyUp:e=>this.onTextareaHandler(e),class:"ins-textarea-field"}))):e("div",{class:"ins-textarea-wrap"},e("div",{class:"ins-ta"},e("textarea",{placeholder:this.placeholder,name:this.name,onKeyUp:e=>this.onTextareaHandler(e),class:"ins-textarea-field"})))}static get is(){return"ins-textarea"}static get properties(){return{label:{type:String,attr:"label"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"}}}static get events(){return[{name:"oninput",method:"oninput",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".ins-ta{position:relative}.ins-ta textarea{-webkit-box-shadow:none;box-shadow:none;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:20px;padding:.5rem 30px .5rem .5rem}.ins-ta textarea:active,.ins-ta textarea:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-ta textarea:active+.icon-search,.ins-ta textarea:focus+.icon-search{color:#1e86e3}.ins-ta label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\",sans-serif;margin-bottom:2px}"}}export{t as InsTextarea};