let welcomeBtn = document.getElementById("welcomeBtn");
let voiceBox = document.getElementById("voiceBox");
let voiceText = document.getElementById("voiceText");
let speakBtn = document.getElementById("speakBtn");
let spicyBtn = document.querySelectorAll(".spicyBtn");
let spicyText = document.getElementById("spicyText");
let addBtn = document.querySelectorAll(".addBtn");
let plusBtn = document.querySelectorAll(".plusBtn");
let minusBtn = document.querySelectorAll(".minusBtn");
let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let total = document.getElementById("total");
let customerName = document.getElementById("customerName");
let orderBtn = document.getElementById("orderBtn");
let spicyLevel = "Mild";
// Welcome Start
welcomeBtn.addEventListener("click", () => {
  voiceBox.classList.toggle("hidden");
});
speakBtn.addEventListener("click", () => {
  let speech = new SpeechSynthesisUtterance(voiceText.value);
  speechSynthesis.speak(speech);
});
// Welcome End
// Spicy Start
spicyBtn.forEach((item) => {
  item.addEventListener("click", () => {
    spicyLevel = item.dataset.spicy;
    spicyText.innerText = "Selected: " + spicyLevel;
  });
});
// Spicy End

// Add Food Start
addBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let quantity = document.getElementById(item.dataset.quantity);
    document.getElementById(item.dataset.box).classList.remove("hidden");
    quantity.innerText = Number(quantity.innerText) + 1;
    calculateTotal();
  });
});
// Add Food End

// Quantity Start
plusBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let quantity = document.getElementById(item.dataset.quantity);
    quantity.innerText = Number(quantity.innerText) + 1;
    calculateTotal();
  });
});
minusBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let quantity = document.getElementById(item.dataset.quantity);
    if (Number(quantity.innerText) > 1) {
      quantity.innerText = Number(quantity.innerText) - 1;
    } else {
      document.getElementById(item.dataset.box).classList.add("hidden");
      quantity.innerText = 1;
    }
    calculateTotal();
  });
});
// Quantity End
// Total Start
function calculateTotal() {
  let subTotal = 0;
  document.querySelectorAll(".foodOrder").forEach((item) => {
    if (!item.classList.contains("hidden")) {
      subTotal +=
        Number(item.dataset.price) *
        Number(document.getElementById(item.dataset.quantity).innerText);
    }
  });
  let taxAmount = subTotal * 0.1;
  subtotal.innerText = "$" + subTotal.toFixed(2);
  tax.innerText = "$" + taxAmount.toFixed(2);
  total.innerText = "$" + (subTotal + taxAmount).toFixed(2);
}
// Total End
// Order Start
orderBtn.addEventListener("click", () => {
  if (customerName.value == "") {
    alert("Please enter customer name");
  } else if (total.innerText == "$0.00") {
    alert("Please add some food first");
  } else {
    alert(
      "Thank you " +
        customerName.value +
        "!\nSpicy Level: " +
        spicyLevel +
        "\nTotal: " +
        total.innerText +
        "\nYour order has been placed.",
    );
  }
});
// Order End