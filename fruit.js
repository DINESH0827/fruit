const button = document.querySelector("button");

button.addEventListener("click", displayFruitStats);

let resultDiv = document.createElement("div");
resultDiv.id = "result";
document.getElementById("wrapper").appendChild(resultDiv);

function displayFruitStats() {
  const input = document.querySelector("#input");
  const fruits = input.options[input.selectedIndex].value;

  let Availability = "";

  let Color = "";
  let Nutrients = "";

  switch (fruits) {
    case "Apple":
      Availability = "during Rainy";
      Color = "Red and Green";
      Nutrients = "Vitamin C and Dietary Fiber";
      break;

    case "Banana":
      Availability = "during Winter";
      Color = "Yellow and Red";
      Nutrients = "Potassium and Vitamin B6";
      break;

    case "Orange":
      Availability = "during Monsoon";
      Color = "Orange";
      Nutrients = "Vitamin C and Folate";
      break;

    case "Grapes":
      Availability = "during Spring";
      Color = "Green and Purple";
      Nutrients = "Antioxidants";
      break;
  }

  let text = `The fruit ${fruits} is typically available ${Availability}. It comes in various colors such as ${Color}. It is rich in nutrients including ${Nutrients}`;

  resultDiv.innerdHTML=text;
}