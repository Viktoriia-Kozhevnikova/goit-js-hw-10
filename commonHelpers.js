import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as b}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null,l=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(b.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(n.disabled=!1,u=t)}};y(c,S);n.disabled=!0;n.addEventListener("click",p);function p(){u&&(n.disabled=!0,c.disabled=!0,l=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(l),q();return}const{days:o,hours:r,minutes:i,seconds:d}=w(t);D(o,r,i,d)},1e3))}function D(e,t,o,r){s.days.textContent=a(e),s.hours.textContent=a(t),s.minutes.textContent=a(o),s.seconds.textContent=a(r)}function a(e){return String(e).padStart(2,"0")}function w(e){const d=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:m,minutes:f,seconds:h}}function q(){c.disabled=!1,n.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map