import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as S}from"./assets/vendor-77e16229.js";const m=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(o.disabled=!1,u=e)}};y(m,p);o.disabled=!0;o.addEventListener("click",b);function b(){if(u){o.disabled=!0,m.disabled=!0;const t=setInterval(()=>{const n=u-new Date;if(n<=0){clearInterval(t),l(0,0,0,0);return}const{days:r,hours:i,minutes:c,seconds:d}=w(n);l(r,i,c,d)},1e3)}}function l(t,e,n,r){s.days.textContent=a(t),s.hours.textContent=a(e),s.minutes.textContent=a(n),s.seconds.textContent=a(r)}function a(t){return String(t).padStart(2,"0")}function w(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
