/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{val(e,t){let l={label:this.label,name:this.name,multiple:this.multiple};if(e&&"object"==typeof e&&!t);else{if(e&&!t)return this[e];if(!e||!t)return l;this[e]=t}}componentDidLoad(){window.$&&$(".ins-select-multiple-"+this.name).select2()}render(){return this.label?e("div",{class:"ins-select2"},e("label",null,this.label),e("select",null)):e("div",{class:"ins-select2"},e("select",null))}static get is(){return"ins-select2"}static get properties(){return{label:{type:String,attr:"label",mutable:!0},multiple:{type:String,attr:"multiple",mutable:!0},name:{type:String,attr:"name",mutable:!0},val:{method:!0}}}static get style(){return""}}export{t as InsSelect2};