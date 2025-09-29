window.onload = function() {
      let name = prompt("Zadejte své jméno:");
      if (name && name.trim()) {
        alert("Ahoj " + name.trim() + "!");
      } else {
        alert("Ahoj!");
      }
    }