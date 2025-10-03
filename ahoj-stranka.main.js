const input = document.querySelector("#name");
const button = document.querySelector("#greetBtn");

button.addEventListener("click", () => {
  const name = input.value.trim();

  if (name) {
    alert(`Ahoj ${name}!!!`);
  } else {
    alert("Prosím, zadejte své jméno.");
  }
});