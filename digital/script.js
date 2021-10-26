const clock = () => {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  const [h, m, s] = new Date().toLocaleTimeString().split(":");

  hourElement.innerHTML = h;
  minuteElement.innerHTML = m;
  secondElement.innerHTML = s;
};

setInterval(clock, 1000);
