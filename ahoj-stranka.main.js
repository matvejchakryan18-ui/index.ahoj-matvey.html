function greet() {
      let name = document.getElementById("name").value;
      if (name.trim()) {
        alert("Ahoj " + name + "!!!");
      } else {
        alert("Prosím, zadejte své jméno.");
      }
    }