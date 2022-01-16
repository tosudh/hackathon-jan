let count = 0;
let id;
function throttle() {
  count++;
  clearTimeout(id);

  id = setTimeout(() => {
    window.open(
      count % 2 ? "https://github.com/" : "https://www.linkedin.com/in/",
      "_blank"
    );
    count = 0;
  }, 1000);
  btn.textContent = "Opening";
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  throttle();
});
