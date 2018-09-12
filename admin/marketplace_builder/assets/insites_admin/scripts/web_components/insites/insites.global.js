/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){Context.formatUrl=(e=>e.toLowerCase().replace(/ +(?= )/g,"").replace(/- | - | -| /gi,"-").replace(/-+(?=)/g,"-")),Context.addRippleEffect=((e,t)=>{let l=t.getBoundingClientRect(),a=t.querySelector(".ripple-wave");a||((a=document.createElement("span")).className="ripple-wave",a.style.height=a.style.width=Math.max(l.width,l.height)+"px",t.appendChild(a)),a.classList.remove("show");let p=e.pageY-(l.top+window.scrollY)-a.offsetHeight/2,s=e.pageX-l.left-a.offsetWidth/2;return a.style.top=p+"px",a.style.left=s+"px",a.classList.add("show"),!1});
})(resourcesUrl);
})("insites");