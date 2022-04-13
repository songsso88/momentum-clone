const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); 입력 초마다 실행
// setTimeout(sayHello, 5000);기다렸다가 한번 만 실행

getClock();
setInterval(getClock, 1000);
