"use strict";var toggleBtn=document.querySelector("input#toggle"),body=document.querySelector("body"),prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)"),currentTheme=localStorage.getItem("theme");console.log(localStorage),"dark"===currentTheme?(body.classList.add("dark"),toggleBtn.checked=!0):"light"===currentTheme?(body.classList.remove("dark"),body.classList.add("light"),toggleBtn.checked=!1):(prefersDarkScheme.matches&&(toggleBtn.checked=!0),prefersDarkScheme.matches||(toggleBtn.checked=!1)),toggleBtn.addEventListener("click",(function(){toggleBtn.checked&&(body.classList.add("dark"),toggleBtn.checked=!0,localStorage.setItem("theme","dark")),toggleBtn.checked||(body.classList.remove("dark"),body.classList.add("light"),toggleBtn.checked=!1,localStorage.setItem("theme","light"))}));
//# sourceMappingURL=script.js.map