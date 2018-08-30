/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{componentDidLoad(){this.localChecked=this.checked}onCheckHandler(){this.localChecked=!this.localChecked,this.onCheckInsToggleSwitch.emit({checked:this.localChecked,value:this.value})}watchChecked(){this.localChecked=this.checked}render(){return e("div",{class:"v-switch"},e("label",{class:"ins-switch"},this.localChecked?e("input",{type:"checkbox",onChange:()=>this.onCheckHandler(),checked:!0}):e("input",{type:"checkbox",onChange:()=>this.onCheckHandler()}),e("span",{class:"ins-slider round"},e("i",null)),e("span",{class:"ins-label"},this.label)))}static get is(){return"ins-toggle-switch"}static get properties(){return{checked:{type:Boolean,attr:"checked",watchCallbacks:["watchChecked"]},label:{type:String,attr:"label"},localChecked:{state:!0},value:{type:String,attr:"value"}}}static get events(){return[{name:"onCheckInsToggleSwitch",method:"onCheckInsToggleSwitch",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-toggle-switch{display:block}ins-toggle-switch .v-switch{display:inline-block;padding:10px 10px 0 10px}ins-toggle-switch .v-switch .ins-switch{position:relative;display:inline-block;min-width:60px;height:34px}ins-toggle-switch .v-switch .ins-switch input{display:none}ins-toggle-switch .v-switch .ins-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#d6d7da;-webkit-transition:.4s;transition:.4s;margin:0;height:16px;width:40px}ins-toggle-switch .v-switch .ins-slider:hover>i:before{-webkit-transition:.4s;content:\"\";border:solid 9px #d6d7da!important;height:40px;width:40px;position:absolute;border-radius:50px;top:calc(50% - 20px);right:calc(50% - 10px);opacity:.3}ins-toggle-switch .v-switch .ins-slider:before{position:absolute;content:\"\";height:20px;width:20px;bottom:-2px;background-color:#fff;-webkit-transition:.4s;transition:.4s;-webkit-box-shadow:0 0 1px #b6b6b9;box-shadow:0 0 1px #b6b6b9}ins-toggle-switch .v-switch input:checked+.ins-slider{background-color:#e8f0f5}ins-toggle-switch .v-switch input:focus+.ins-slider{-webkit-box-shadow:0 0 1px #1f86e3;box-shadow:0 0 1px #1f86e3}ins-toggle-switch .v-switch input:checked+.ins-slider:before,ins-toggle-switch .v-switch input:checked+.ins-slider>i:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);background-color:#1f86e3}ins-toggle-switch .v-switch input:checked+.ins-slider>i:before{border:solid 10px #1e86e3!important;opacity:.1!important}ins-toggle-switch .v-switch .ins-slider.round{border-radius:34px}ins-toggle-switch .v-switch .ins-slider.round:before{border-radius:50%}ins-toggle-switch .v-switch .ins-label{font-family:Roboto,\"Open Sans\",sans-serif;display:block;padding-left:60px;margin-top:-5px;color:#8c94a4}"}}export{t as InsToggleSwitch};