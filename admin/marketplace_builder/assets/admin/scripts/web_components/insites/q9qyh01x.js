/*! Built with http://stenciljs.com */
const{h:s}=window.insites;class e{constructor(){this.label=""}render(){return s("div",{class:"ins-styleguide-wrap"},s("div",{class:"ins-styleguide-label-wrap"},this.label),s("div",{class:"ins-styleguide-cont"},s("div",{class:"ins-styleguide-actual-slot-wrap"},s("slot",{name:"actual"})),s("div",{class:"ins-styleguide-code-slot-wrap"},s("slot",{name:"code"}))))}static get is(){return"ins-styleguide"}static get properties(){return{label:{type:String,attr:"label",mutable:!0}}}static get style(){return"ins-styleguide:nth-of-type(even) .ins-styleguide-wrap{background-color:#f1f1f1}ins-styleguide .ins-styleguide-wrap{padding:.9375rem}ins-styleguide .ins-styleguide-wrap .ins-styleguide-label-wrap{padding-top:.9rem;font-size:14px;font-weight:600}ins-styleguide .ins-styleguide-wrap .ins-styleguide-cont{display:table;table-layout:fixed;width:100%}ins-styleguide .ins-styleguide-wrap .ins-styleguide-actual-slot-wrap,ins-styleguide .ins-styleguide-wrap .ins-styleguide-code-slot-wrap{width:30%;-webkit-box-sizing:border-box;box-sizing:border-box;display:table-cell;padding:1em;overflow:auto;vertical-align:top}ins-styleguide .ins-styleguide-wrap .ins-styleguide-code-slot-wrap{width:70%}ins-styleguide .ins-styleguide-wrap .ins-styleguide-actual-slot-wrap::-webkit-scrollbar{width:7px;height:7px}ins-styleguide .ins-styleguide-wrap .ins-styleguide-actual-slot-wrap::-webkit-scrollbar-track{box-shadow:none;-webkit-box-shadow:none}ins-styleguide .ins-styleguide-wrap .ins-styleguide-actual-slot-wrap::-webkit-scrollbar-thumb{background-color:#c4c4c4;border-radius:16px;outline:0}ins-styleguide .ins-styleguide-wrap:hover{background-color:#f1f1f1}ins-styleguide .ins-styleguide-wrap:after{content:'';display:block;clear:both}\@media (max-width:1024px){ins-styleguide .ins-styleguide-actual-slot-wrap,ins-styleguide .ins-styleguide-code-slot-wrap{width:100%;float:none}ins-styleguide .ins-styleguide-wrap .ins-styleguide-actual-slot-wrap,ins-styleguide .ins-styleguide-wrap .ins-styleguide-code-slot-wrap{width:100%;display:block;padding:1em 0}}\@media (max-width:768px){ins-styleguide.m-overflow-initial .ins-styleguide-actual-slot-wrap{overflow:initial}}\@media (max-width:414px){ins-styleguide .ins-styleguide-wrap,ins-styleguide .ins-styleguide-wrap:hover,ins-styleguide:nth-of-type(even) .ins-styleguide-wrap{padding:0;background-color:unset}}"}}export{e as InsStyleguide};