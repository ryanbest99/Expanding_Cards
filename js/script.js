const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    console.log("clicked");
    removeActiveClass();
    panel.classList.add("active");
  });
});

const removeActiveClass = function () {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
};
