/*
let timer = [2, 5, 9]
setTimeout(() => { console.log('.')
}, (timer[0]) * 1000);

setTimeout(() => { console.log('.')
}, (timer[1]) * 1000);

setTimeout(() => { console.log('.')
}, (timer[2]) * 1000);

*/

let timer = process.argv.slice(2);
timer = timer.map(x => x*1000);
timer = timer.filter(x => x > 0); //An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past

for (let time of timer) {
  if (time !== NaN) {
     setTimer(time);
  }
}; 
function setTimer(time) {
  return setTimeout (() => {console.log('.')},
  time)
};