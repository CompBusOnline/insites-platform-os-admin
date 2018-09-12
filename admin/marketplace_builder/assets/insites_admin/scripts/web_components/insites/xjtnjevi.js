/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{val(t,e){let a={name:this.name,value:this.value,min:this.min,max:this.max,label:this.label};if(t&&"object"==typeof t&&!e);else{if(t&&!e)return this[t];if(!t||!e)return a;this[t]=e}}componentDidLoad(){if(window.$){this.watchMax(),this.watchMin();let t=$(".ins-date-"+this.name),e=$(".ins-picker-"+this.name),a=$(".ins-init-"+this.name),i=this,s=$.datepicker._defaults.monthNames,n=$.datepicker._defaults.dayNamesShort;a.datepicker({firstDay:1,monthNamesShort:s,dayNamesMin:n}).on("change",function(){let e=$(this).datepicker("getDate"),a=$.datepicker.formatDate("yy-mm-dd",e);t.val(a),i.onDateChangeHandler(a)}).on("focusout",function(){setTimeout(function(){e.removeClass("show")},100)}),$(window).on("click",function(t){$(t.target).hasClass("ui-icon")||$(t.target).hasClass("ui-corner-all")||$(t.target).closest(".ins-datepicker__"+i.name).length||e.hasClass("show")&&e.removeClass("show")}),this.value&&a.datepicker("setDate",new Date(this.value)).trigger("change"),this.min&&a.datepicker("option","minDate",new Date(this.minState)),this.max&&a.datepicker("option","maxDate",new Date(this.maxState))}}watchMin(){this.minState=this.min}watchMax(){this.maxState=this.max}toggleDropdown(){let t=$(".ins-picker-"+this.name);t.hasClass("show")?t.removeClass("show"):t.addClass("show")}onDateChangeHandler(t){let e=this.name;this.onDateChange.emit({name:e,value:t})}render(){return this.label?t("div",{class:`ins-datepicker ins-datepicker__${this.name}`},t("div",{class:"dropdown"},t("label",null,this.label),t("input",{type:"date",class:`ins-datepicker__date ins-date-${this.name}`,required:!0,onClick:()=>this.toggleDropdown()}),t("div",{class:`dropdown-content ins-picker-${this.name}`},t("div",{class:"ins-datepicker__dropdown"},t("div",{class:`ins-datepicker__init ins-init-${this.name}`}))))):t("div",{class:`ins-datepicker ins-datepicker__${this.name}`},t("div",{class:"dropdown"},t("input",{type:"date",class:`ins-datepicker__date ins-date-${this.name}`,required:!0,onClick:()=>this.toggleDropdown()}),t("div",{class:`dropdown-content ins-picker-${this.name}`},t("div",{class:"ins-datepicker__dropdown"},t("div",{class:`ins-datepicker__init ins-init-${this.name}`})))))}static get is(){return"ins-datepicker"}static get properties(){return{el:{elementRef:!0},label:{type:String,attr:"label",mutable:!0},max:{type:String,attr:"max",mutable:!0,watchCallbacks:["watchMax"]},maxState:{state:!0},min:{type:String,attr:"min",mutable:!0,watchCallbacks:["watchMin"]},minState:{state:!0},name:{type:String,attr:"name",mutable:!0},val:{method:!0},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"onDateChange",method:"onDateChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-datepicker .ins-datepicker{position:relative}ins-datepicker .ins-datepicker__dropdown{font-size:14px;-webkit-box-shadow:0 2px 4px 0 rgba(15,21,38,.14),1px 1px 3px 0 rgba(140,148,164,.2);box-shadow:0 2px 4px 0 rgba(15,21,38,.14),1px 1px 3px 0 rgba(140,148,164,.2);padding:7px;min-width:240px;cursor:pointer;background-color:#fff}ins-datepicker .ins-datepicker__dropdown.active{display:block;top:45px}ins-datepicker .ins-datepicker__dropdown>div{color:#8c94a4;padding:7px 15px;margin:5px 0}ins-datepicker .ins-datepicker__date{-webkit-box-shadow:none;box-shadow:none;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:5px;padding:.5rem 30px .5rem .5rem;width:100%}ins-datepicker .ins-datepicker__date:active,ins-datepicker .ins-datepicker__date:focus{border-color:#1f86e3;-webkit-box-shadow:none;box-shadow:none}ins-datepicker .ins-datepicker__date:hover{border:1px solid #8c94a4}ins-datepicker .ins-datepicker__date:active+.icon-search,ins-datepicker .ins-datepicker__date:focus+.icon-search{color:#1f86e3}ins-datepicker .ins-datepicker__date::-webkit-calendar-picker-indicator,ins-datepicker .ins-datepicker__date::-webkit-inner-spin-button{display:none;-webkit-appearance:none}ins-datepicker .ins-datepicker__init{background-color:#fafbfc;text-align:center;display:inline-block;margin:0}ins-datepicker .ins-datepicker__init .ui-widget.ui-widget-content{border:none;background:0 0;font-family:\"Open Sans\",sans-serif}ins-datepicker .ins-datepicker__init .ui-state-default{border:none;background:0 0;font-size:10px;color:#8c94a4;padding-top:5px;padding-bottom:5px;text-align:center}ins-datepicker .ins-datepicker__init .ui-datepicker th{font-weight:400;font-size:.625rem;border-bottom:1px solid #e9e9e9;color:#8c94a4}ins-datepicker .ins-datepicker__init .ui-datepicker tbody,ins-datepicker .ins-datepicker__init .ui-datepicker thead,ins-datepicker .ins-datepicker__init .ui-datepicker tr{background:0 0;border:none}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-title{font-weight:400;color:#505568;margin:0;padding:0 10px}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-header{border:0;background:0 0}ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-year{width:37%;margin-left:8px}ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-month{width:auto}ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-month,ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-year{height:24px;font-size:.75rem;padding-top:0;padding-bottom:0;border:1px solid #e4e6ec;border-radius:2px}ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-month:focus,ins-datepicker .ins-datepicker__init .ui-datepicker select.ui-datepicker-year:focus{-webkit-box-shadow:none;box-shadow:none}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next,ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev{opacity:.5;-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next-hover,ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev-hover{background:0 0!important;border:none!important;top:2px}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next span,ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev span{background:0 0!important}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next span:hover,ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev span:hover{border-color:#a0a0a0}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev-hover{left:2px}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-prev span{border-left:4px solid #333;border-top:4px solid #333;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);cursor:pointer}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next-hover{right:2px}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-datepicker-next span{border-right:4px solid #333;border-top:4px solid #333;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer}ins-datepicker .ins-datepicker__init .ui-datepicker .ui-state-disabled.ui-datepicker-next span,ins-datepicker .ins-datepicker__init .ui-datepicker .ui-state-disabled.ui-datepicker-prev span{opacity:.3!important}ins-datepicker .ins-datepicker__init .ui-state-active,ins-datepicker .ins-datepicker__init .ui-widget-content .ui-state-active{border:1px solid #1f86e3;background:#1f86e3;color:#fff}ins-datepicker .ins-datepicker__init .ui-state-range-selected{background:#e3eef9}ins-datepicker .dropdown{position:relative}ins-datepicker .dropdown label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\",sans-serif;margin-bottom:2px}ins-datepicker .dropdown .dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;overflow:auto;-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,.2);box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}ins-datepicker .dropdown .show{display:block;z-index:100}"}}export{e as InsDatepicker};