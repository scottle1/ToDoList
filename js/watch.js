const watch = document.querySelector(".watch");

function intervalWatch() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minnutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  watch.innerText = `${hours}:${minnutes}:${seconds}`
}

intervalWatch()
setInterval(intervalWatch,1000)
