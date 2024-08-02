import { formatPrice } from "./mockElement.js";
export default function ChargeForm() {
  const ChargeLisst = document.querySelectorAll(".charge-item");
  const chargeInput = document.querySelector(".charge-input");
  const btn = document.querySelector(".popup-Withdrawal .btn-submit");
  const priceEle = document.querySelector(".Withdrawal-ele");
  const popupWithdrawalInfo = document.querySelector(".popup-Withdrawal-info");
  const popupHint = document.querySelector('[data-popup-id="popup-hint"]');
  const bankcard = document.querySelectorAll(".payment-item");

  ChargeLisst.forEach((charge) => {
    charge.addEventListener("click", (event) => {
      const value = charge.getAttribute("data-value") || 100000;
      ChargeLisst.forEach((otherCharge) => {
        charge.classList.toggle("active", otherCharge === event.currentTarget);
      });
      ////////////////////////////////
      const input = chargeInput?.querySelector("input");
      input.value = value * 1 + input.value.replace(/\D/g, "") * 1 || 0;
      let formattedNumber = input.value.replace(/\D/g, "") * 1;
      formattedNumber = formatPrice(formattedNumber);
      input.value = formattedNumber;
    });
  });

  /////////////////////////
  const input = chargeInput?.querySelector("input");
  const button = chargeInput?.querySelector(".charge-remove");

  button?.addEventListener("click", () => {
    input.value = "";
  });

  input?.addEventListener("input", (e) => {
    let formattedNumber = e.target.value.replace(/\D/g, "") * 1;
    formattedNumber = formatPrice(formattedNumber);
    input.value = formattedNumber;
  });

  btn?.addEventListener("click", () => {
    const value = chargeInput.querySelector("input").value || 0;
    priceEle.innerHTML = value;
    value !== 0 && popupWithdrawalInfo.classList.add("open");
  });

  popupWithdrawalInfo
    ?.querySelector(".btn-submit")
    ?.addEventListener("click", () => {
      popupWithdrawalInfo.classList.remove("open");
      popupHint.classList.add("open");
    });

  popupHint?.querySelector(".btn-submit")?.addEventListener("click", () => {
    popupHint.classList.remove("open");
  });

  bankcard.forEach((item) => {
    const input = item.querySelector("input");
    item?.addEventListener("click", (e) => {
      const isActive = item.classList.contains("active");

      bankcard.forEach((otherbank) => {
        otherbank.classList.remove("active");
        otherbank.querySelector("input").checked = false;
      });

      if (!isActive) {
        item.classList.toggle("active");
        input.checked = input.checked ? false : true;
      }
    });
  });
}
