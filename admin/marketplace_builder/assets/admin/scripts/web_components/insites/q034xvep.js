/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{componentDidLoad(){$("#"+this.name).tokens({source:["Mabel Neal","Scott Cooper","Maude Simpson","Leo Casey","Florence Ferguson"]})}render(){return this.label?t("div",{class:"ins-tagging-input-wrapper"},t("label",null,this.label),t("input",{type:"text",id:this.name,class:"ins-tagging-input__tags"})):t("div",{class:"ins-tagging-input-wrapper"},t("label",null),t("input",{type:"text",id:this.name,class:"ins-tagging-input__tags"}))}static get is(){return"ins-tagging-input"}static get properties(){return{label:{type:String,attr:"label"},name:{type:String,attr:"name"}}}static get style(){return"ins-tagging-input .ins-tagging-input-wrapper{position:relative}ins-tagging-input .ins-tagging-input-wrapper input{-webkit-box-shadow:none;box-shadow:none;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;color:#2c3148;margin-bottom:0;padding:.5rem;padding-right:30px;width:100%}ins-tagging-input .ins-tagging-input-wrapper input:hover{border:1px solid #8c94a4}ins-tagging-input .ins-tagging-input-wrapper label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\";margin-bottom:2px}ul.tokens-token-list{height:auto;border:1px solid #e4e6ec;border-radius:4px;cursor:text;z-index:100;margin:0;padding:0;background:#fff;list-style-type:none;clear:both;overflow:auto}div.tokens-suggestion-selector,ul.tokens-token-list{color:#e5e5e5;font-size:12px;overflow:hidden}ul.tokens-token-list>li{list-style-type:none;line-height:1.5;float:left}ul.tokens-token-list .tokens-input-text{outline:0;border:0;padding:3px 8px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none}ul.tokens-token-list .tokens-input-text:hover{border:none}ul.tokens-token-list .tokens-input-text:focus{outline:0}ul.tokens-token-list .tokens-list-token-holder{overflow:hidden;height:auto;margin:3px 0 3px 3px;padding:1px 3px;border-radius:4px;background-color:#e4e6ec;cursor:default;color:#2c3148;font-family:\"Open Sans\";font-size:14px;white-space:nowrap}ul.tokens-token-list .tokens-list-token-holder .tokens-delete-token,ul.tokens-token-list .tokens-list-token-holder p{display:inline;padding:0}ul.tokens-token-list .tokens-list-token-holder p{margin:0}ul.tokens-token-list .tokens-delete-token{cursor:pointer;margin:0 2px 0 5px;font-weight:700}div.tokens-suggestion-selector{border:1px solid #aaa;border-radius:3px;background:#555;-moz-box-shadow:0 0 5px #888;-webkit-box-shadow:0 0 5px #888;box-shadow:0 0 5px #888}div.tokens-suggestion-selector p{margin:0;padding:5px;font-weight:700}div.tokens-suggestion-selector ul{list-style-type:none;margin:0;padding:0;max-height:300px;overflow-y:auto}div.tokens-suggestion-selector ul li{border-top:1px solid #fff;border-bottom:1px solid #fff;padding:5px}div.tokens-suggestion-selector ul li.tokens-highlighted-suggestion{background:#444}div.tokens-suggestion-selector ul li:first-child{border-top:none}div.tokens-suggestion-selector ul li:last-child{border-bottom:none}"}}export{e as InsTaggingInput};