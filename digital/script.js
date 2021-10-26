const clock = () => {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  const [h, m, s] = new Date().toLocaleTimeString().split(":");

  hourElement.innerHTML = h < 10 ? `0${h}` : h;
  minuteElement.innerHTML = m < 10 ? `0${m}` : m;
  secondElement.innerHTML = s < 10 ? `0${s}` : s;
};

setInterval(clock, 1000);
