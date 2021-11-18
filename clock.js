
let data = new Date;
let soat =document.querySelector('.hour');
setInterval(()=> soat.innerHTML = data.getSeconds(), 1000)
console.log(data.toLocaleDateString())