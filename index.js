// AddEventListener for memory storage .
document.getElementById("memory8GB").addEventListener("click", function () {
  const memory = document.getElementById("extraMemoryCost");
  const shows = (memory.innerText = 0);
  memory.innerText = shows;
  calculate();
});
document.getElementById("memory64GB").addEventListener("click", function () {
  const memory = document.getElementById("extraMemoryCost");
  const shows = (memory.innerText = 100);
  memory.innerText = shows;
  calculate();
});

// AddEventListener for Solid State Drive (SSD).
document
  .getElementById("solidStateDrive256GB")
  .addEventListener("click", function () {
    const Device256 = document.getElementById("extraSSDCost");
    const ExtraCost = (Device256.innerText = 0);
    calculate();
  });
document
  .getElementById("solidStateDrive512GB")
  .addEventListener("click", function () {
    const Device512 = document.getElementById("extraSSDCost");
    const Device512Value = (Device512.innerText = 0);
    const Device512Cherge = Device512Value + 100;
    Device512.innerText = Device512Cherge;
    calculate();
  });
document
  .getElementById("solidStateDrive1TB")
  .addEventListener("click", function () {
    const Device = document.getElementById("extraSSDCost");
    const DeviceValue = (Device.innerText = 0);
    const DeviceCherge = DeviceValue + 180;
    Device.innerText = DeviceCherge;
    calculate();
  });

// // AddE ventListener for delevary cost
document.getElementById("free-delevary").addEventListener("click", function () {
  const delevary = document.getElementById("extraDelevaryCost");
  const ExtraCherge = parseInt(delevary.innerText);
  let ExtraMoney = ExtraCherge - 20;
  delevary.innerText = ExtraMoney;
  calculate();
});
document.getElementById("cost-delevary").addEventListener("click", function () {
  const delevary = document.getElementById("extraDelevaryCost");
  const ExtraCherge = parseInt(delevary.innerText);
  if (ExtraCherge < 1) {
    const ExtraMomey = ExtraCherge + 20;
    delevary.innerText = ExtraMomey;
  }
  calculate();
});
// Function for calculate all prices.
function calculate() {
  const memory = document.getElementById("extraMemoryCost");
  const ExtraMemoryCherge = parseInt(memory.innerText);

  const Storage = document.getElementById("extraSSDCost");
  const ExtraStorageCherge = parseInt(Storage.innerText);

  const delevary = document.getElementById("extraDelevaryCost");
  const ExtraDelevaryCherge = parseInt(delevary.innerText);

  // total price calculation
  const price = document.getElementById("totalPrice");
  const totalPrice =
    ExtraMemoryCherge + ExtraStorageCherge + ExtraDelevaryCherge + 1299;
  price.innerText = totalPrice;
  // After discount finally total payment .
  const payment = document.getElementById("finall-price");
  const Total =
    ExtraMemoryCherge + ExtraStorageCherge + ExtraDelevaryCherge + 1299;
  payment.innerText = Total;
}

// PromoCode apply button
const totalValue = document.getElementById("totalPrice");
const finallVale = document.getElementById("finall-price");

document.getElementById("submit-button").addEventListener("click", function () {
  const promo = document.getElementById("promo-code");
  const Promocode = promo.value;
  if (Promocode == "stevekaku") {
    const totalMoney = parseInt(totalValue.innerText);
    const decrease = totalMoney * 0.2;
    finallVale.innerText = totalMoney - decrease;
  }
  promo.value = "";
});
