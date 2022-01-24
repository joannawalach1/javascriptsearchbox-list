const mainInput = document.querySelector(".input");
const colors = document.getElementById("colors");
const li = document.getElementsByClassName("li");
const reset = mainInput.getElementsByTagName("button");

mainInput.addEventListener("keyup", function () {
  const filter = mainInput.value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none"; 
    }
  }
});

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    mainInput.value = li[i].textContent;
    colors.style.display = "none"; 
  }) 
}
