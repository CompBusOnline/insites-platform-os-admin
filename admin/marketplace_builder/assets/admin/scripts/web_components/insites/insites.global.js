/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){Context.formatUrl=(e=>e.toLowerCase().replace(/ +(?= )/g,"").replace(/- | - | -| /gi,"-").replace(/-+(?=)/g,"-")),Context.addRippleEffect=((e,t)=>{let l=t.getBoundingClientRect(),o=t.querySelector(".ripple-wave");o||((o=document.createElement("span")).className="ripple-wave",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",t.appendChild(o)),o.classList.remove("show");let s=e.pageY-(l.top+window.scrollY)-o.offsetHeight/2-document.body.scrollTop,a=e.pageX-l.left-o.offsetWidth/2-document.body.scrollLeft;return o.style.top=s+"px",o.style.left=a+"px",o.classList.add("show"),!1});
})(resourcesUrl);
})("insites");