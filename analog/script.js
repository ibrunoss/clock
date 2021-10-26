const clock = () => {
  const hourElement = document.querySelector("#hour span");
  const minuteElement = document.querySelector("#minute span");
  const secondElement = document.querySelector("#second span");

  const date = new Date();
  const deg = 6;
  const h = date.getHours() * 30,
    m = date.getMinutes() * deg,
    s = date.getSeconds() * deg;

  hourElement.style.transform = `rotateZ(${h + m / 12}deg)`;
  minuteElement.style.transform = `rotateZ(${m}deg)`;
  secondElement.style.transform = `rotateZ(${s}deg)`;
};

setInterval(clock, 1000);
