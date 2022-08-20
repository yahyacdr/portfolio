let body=document.querySelector("body"),ani_icon=document.querySelector(".onload-animation"),main=body.querySelector("main"),footer=body.querySelector("footer"),li=main.querySelector("li"),projects_links=main.querySelector(".projects-links"),panels=projects_links.querySelectorAll(".pro-panel"),pro_panels=Array.from(projects_links.children),indicator=main.querySelectorAll(".indicators .img img"),indicators=Array.from(indicator),plus_img=main.querySelectorAll(".plus-img"),plus=Array.from(plus_img),clickables=body.querySelectorAll(".click"),clicks=Array.from(clickables),email=document.getElementById("email"),copy_panel=footer.querySelector(".copyPanel"),menu_icon=body.querySelector(".menu-icon"),nav_mobile=body.querySelector(".mobile-nav"),servicesDiv=main.querySelector("div.services"),servicesA=body.querySelectorAll("a.services"),edu=main.querySelectorAll(".education .certificates .edu"),get_call=footer.querySelector("footer > .contact .title .gradient-title"),footer_a=footer.querySelectorAll("footer > .contact .social .button .click"),aboutMe=main.querySelector(".about-me"),education=main.querySelector(".education"),projects=main.querySelector(".projects-head"),scrollButton=body.querySelectorAll(".scroll"),aboutMeImgs=aboutMe.querySelectorAll(".collection-img .col-md-10");function indexElement(){let e=document.querySelectorAll(".tabindex");e=Array.from(e),e.forEach((e=>{e.setAttribute("tabindex","0")}))}main.setAttribute("style","opacity: 0"),footer.setAttribute("style","opacity: 0"),window.onload=function(e){setTimeout((()=>{ani_icon.setAttribute("style","opacity: 0 !important;")}),1200),setTimeout((()=>{ani_icon.setAttribute("style","display: none !important"),main.removeAttribute("style"),footer.removeAttribute("style")}),1550),indexElement(),document.querySelector(".logo-i").setAttribute("href",`${location.href}`)};let listeners=[],r=0;email.addEventListener("copy",(e=>{e.preventDefault(),console.log("click"),e.clipboardData&&e.clipboardData.setData("text/plain",email.textContent)})),indicators[1].onclick=function(){r++;for(let e=0;e<pro_panels.length;e++)pro_panels[e].style.transform=`translateX(-${100*r}%)`,pro_panels[e].style.transition="transform 500ms ease 0s",r===pro_panels.length&&(r=shiftElementL(r))},indicators[0].onclick=function(){shifted=!1,r--;for(let e=0;e<pro_panels.length;e++)r<0?(shifted=shiftElementR(r),r=pro_panels.length-1):!1===shifted&&(pro_panels[e].style.transform=`translateX(${100*-r}%)`,pro_panels[e].style.transition="transform 500ms ease 0s",shifted=!1)};let shiftElementL=function(e){return pro_panels.forEach((e=>{e.style.transform="translateX(0%)"})),0},shiftElementR=function(e){return pro_panels.forEach((e=>{e.style.transform=`translateX(-${pro_panels.length-1}00%)`})),!0},click=0;edu.forEach(((e,t)=>{e.addEventListener("click",(function(){click++;let t=e.querySelector(".plus-img");click%2==0?(setTimeout((function(){t.previousElementSibling.classList.remove("active-inc"),t.previousElementSibling.classList.add("active-dec")}),500),t.classList.remove("active-for"),t.classList.add("active-bac")):(setTimeout((function(){t.previousElementSibling.classList.remove("active-dec"),t.previousElementSibling.classList.add("active-inc")}),500),t.classList.remove("active-bac"),t.classList.add("active-for"))})),e.addEventListener("mouseover",(function(){e.style.setProperty("--animation-name","fillLine")})),e.addEventListener("mouseout",(function(){e.style.setProperty("--animation-name","emptyLine")}))}));let clicksObj=[];clicks.forEach(((e,t)=>{clicksObj[t]=new Object,clicksObj[t].element=e,clicksObj[t].clicked=!1})),clicks.forEach(((e,t)=>{e.addEventListener("click",(function(e){if(clicksObj[t].element.hasChildNodes()){clicksObj[t].element.parentNode.classList.contains("email")&&(document.execCommand("copy"),copy_panel.classList.add("copy-anime"),setTimeout((()=>{copy_panel.classList.remove("copy-anime")}),650)),e.stopPropagation(),!1===clicksObj[t].clicked&&(clicksObj[t].element.classList.add("clicked"),clicksObj[t].clicked=!0);for(let e=0;e<clicks.length;e++)e!==t&&(clicksObj[e].element.classList.remove("clicked"),clicksObj[e].clicked=!1)}else{!1===clicksObj[t].clicked&&(clicksObj[t].element.classList.add("clicked"),clicksObj[t].clicked=!0);for(let e=0;e<clicks.length;e++)e!==t&&(clicksObj[e].element.classList.remove("clicked"),clicksObj[e].clicked=!1)}}),!0)})),body.addEventListener("click",(function(e){e.target.classList.contains("click")||clicks.forEach(((e,t)=>{e.classList.remove("clicked"),clicksObj[t].clicked=!1}))}));let c=0,a=Array.from(nav_mobile.children[0].children);menu_icon.addEventListener("click",(function(){c++,c%2==0?(a.forEach((e=>{e.classList.remove("tabindex")})),nav_mobile.classList.add("curtain_up"),setTimeout((()=>{main.removeAttribute("style")}),350),indexElement(),nav_mobile.removeAttribute("style"),nav_mobile.classList.remove("curtain_down")):(a.forEach((e=>{e.classList.add("tabindex")})),indexElement(),main.style.zIndex="-3",nav_mobile.classList.add("curtain_down"),setTimeout((()=>{nav_mobile.style.zIndex="1"}),380),nav_mobile.classList.remove("curtain_up"))})),scrollButton.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("about")&&aboutMe.scrollIntoView(),e.target.classList.contains("experience")&&education.scrollIntoView(),e.target.classList.contains("services")&&servicesDiv.scrollIntoView(),e.target.classList.contains("project")&&projects.scrollIntoView()}))})),get_call.addEventListener("mouseover",(function(){get_call.style.setProperty("--animation-name","stretchLineFor")})),get_call.addEventListener("mouseout",(function(){get_call.style.setProperty("--animation-name","stretchLineBac")})),footer_a.forEach((e=>{e.addEventListener("mouseover",(function(){e.style.setProperty("--animation-name","stretchALineFor")})),e.addEventListener("mouseout",(function(){e.style.setProperty("--animation-name","stretchALineBac")}))})),window.matchMedia("(min-width: 1024px)").matches&&aboutMeImgs.forEach((e=>{e.classList.contains("head-img")&&(workHome=e.querySelector(".work-home"),workHome.src="../img/Backgrounds/at-computer-top-perfect.webp"),e.classList.contains("mid-img")&&(midImg=[...e.querySelectorAll(".mid")],midImg[0].src="../img/Backgrounds/at-computer-mid-1-resized-perfect.webp",midImg[1].src="../img/Backgrounds/at-computer-mid-2-resized-perfect.webp"),e.classList.contains("foot-img")&&(workHome=e.querySelector(".hold-phone"),workHome.src="../img/Backgrounds/hold-phone-lg.webp")}));
