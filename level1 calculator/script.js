const inputElement = document.getElementById("screen");

inputElement.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    inputElement.value = eval(inputElement.value);
  }
});

