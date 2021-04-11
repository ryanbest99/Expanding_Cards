const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    removeActiveClass();
    box.classList.add("active");
  });
});

function removeActiveClass() {
  boxes.forEach(function (box) {
    box.classList.remove("active");
  });
}
