!function(){"use strict";var t=document.getElementById("balance"),e=document.getElementById("money-plus"),n=document.getElementById("money-minus"),a=document.getElementById("list"),o=document.getElementById("form"),u=document.getElementById("text"),c=document.getElementById("amount"),r=JSON.parse(localStorage.getItem("transactions")),i=null!==localStorage.getItem("transactions")?r:[];function l(t){var e=t.amount<0?"-":"+",n=document.createElement("li");n.classList.add(t.amount<0?"minus":"plus"),n.innerHTML="\n    ".concat(t.text," <span>").concat(e).concat(Math.abs(t.amount),'</span> <button class="delete-btn" id="delete-btn" onclick="removeTransaction(').concat(t.id,')">x</button>\n  '),a.appendChild(n)}function m(){var a=i.map((function(t){return t.amount})),o=a.reduce((function(t,e){return t+e}),0).toFixed(2),u=a.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),c=(-1*a.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);t.innerText="¥".concat(o),e.innerText="¥".concat(u),n.innerText="¥".concat(c)}a.innerHTML="",i.forEach(l),m(),o.addEventListener("submit",(function(t){if(t.preventDefault(),""===u.value.trim()||""===c.value.trim())alert("Please add a text and amount");else{var e={id:Math.floor(1e8*Math.random()),text:u.value,amount:+c.value};i.push(e),l(e),m(),localStorage.setItem("transactions",JSON.stringify(i)),u.value="",c.value=""}}))}();
//# sourceMappingURL=main.js.map