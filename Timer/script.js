let res = {}

let first;

let interval = setInterval(reload, 5000);

let date = {
  'fdtto': `${document.querySelector('span#fdtto').innerText}`
}

function reload(){
  date.realtime = document.querySelectorAll('span.time')[0].innerText;
  
  // console.log(date.realtime);                         

  date.fdtto = Number(date.fdtto);

  console.log(`Отправная точка: ${date.fdtto}`);

  date.realtime = Number(date.realtime);

  console.log(`реальное время: ${date.realtime}`);

  res.day = `${((date.realtime - date.fdtto) / 60 / 60 / 24).toFixed(0)}`;

  first = document.querySelector('span#first');

  console.log(first);

  first.innerText = `\n\nМы вмефти: ${res.day} д`;

}

/*
console.log(date.D);

date.D = Number(date.D);

console.log(date.D);

date.D = date.D - 10;

console.log('-10');

console.log('=');

console.log(date.D);
*/
