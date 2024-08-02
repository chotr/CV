import { formatPhoneNumber } from "./mockElement.js";

export default function ValidateForm() {
  const accBank = document.querySelector("#bankaccform");
  const bankCard = document.querySelector(".bank-item");
  const removeCard = document.querySelector(".accountSet-remove");
  const addCard = document.querySelector(".accountSet-add");
  const backCard = document.querySelector(".bank-item");
  let flag = true;

  // validate empty
  const validateEmpty = (item) => {
    const input = item.querySelector("input");
    if (input && input.value === "") {
      $(item).find(".form-require").remove();
      $(item).append(`<p class='form-require'>
          <span class='form-require-text'>This field is empty </span></p>`);
      return false;
    }
    return true;
  };

  // validate length
  const valiDateLength = (item) => {
    const input = item.querySelector("input");
    if (input) {
      const min = item.getAttribute("data-input-min-require") || 2;
      const max = item.getAttribute("data-input-max-require") || 16;

      if (input.value.length < min || input.value.length > max) {
        $(item).find(".form-require").remove();

        $(item).append(`<p class='form-require'>
            <span class='form-require-text'>The account name must be ${min} ~ ${max} character</span></p>`);

        return false;
      }

      return true;
    }
  };

  // validate phone number
  const validatePhoneNumber = (item) => {
    const input = item.querySelector("input");
    const phonePattern = /^[0-9]{11}$/;

    if (input && !phonePattern.test(input.value.replace(/\D/g, ""))) {
      $(item).find(".form-require").remove();
      $(item).append(`<p class='form-require'>
          <span class='form-require-text'>Invalid phone number</span></p>`);
      return false;
    }

    return true;
  };

  const checkForm = (form) => {
    if (form) {
      const btnSubmit = form.querySelector(".btn-submit");
      const validateLengthList = form.querySelectorAll(".validateLength");
      const validatePhoneList = form.querySelectorAll(".validatePhoneNumber");

      // formating input
      validatePhoneList.forEach((validatePhone) => {
        formatPhoneNumber(validatePhone);
      });

      btnSubmit.addEventListener("click", (event) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
        });

        // validate length list
        validateLengthList.forEach((validateLength) => {
          if (!validateEmpty(validateLength)) {
            event.preventDefault();
            flag = false;
            return false;
          }

          if (!valiDateLength(validateLength)) {
            event.preventDefault();
            flag = false;
            return false;
          }
          $(validateLength).find(".form-require").remove();
          flag = true;
        });

        // validate phone number list
        validatePhoneList.forEach((validatePhone) => {
          if (!validateEmpty(validatePhone)) {
            event.preventDefault();
            flag = false;
            return false;
          }

          if (!validatePhoneNumber(validatePhone)) {
            event.preventDefault();
            flag = false;
            return false;
          }

          $(validatePhoneList).find(".form-require").remove();
          flag = true;
        });

        if (flag) {
          const $accName = $(backCard).find(".bank-item-name");
          const $bankName = $(backCard).find(".bank-item-tt");
          const $bankNum = $(backCard).find(".bank-item-num")

          $(form).closest(".popup").removeClass("open");

          // bank form
          $(bankCard).removeClass("d-none");
          $(removeCard).removeClass("d-none");
          $(addCard).addClass("d-none");

          $("#bankaccform").on("submit", function (e) {
            e.preventDefault();

            const formData = {};
            $(this)
              .find("input, select")
              .each(function () {
                formData[this.name] = this.value;
              });

            // $.each(formData, function (key, value) {
            //   console.log(key + ": " + value);
            // });

            $accName.html(formData["realName"]);
            $bankName.html(formData["bankName"]);
            $bankNum.html(formData["accountNum"]);
            // Send data here
          });
        }
      });
    }
  };

  $(removeCard).on("click", () => {
    $(bankCard).addClass("d-none");
    $(removeCard).addClass("d-none");
    $(addCard).removeClass("d-none");
  });

  checkForm(accBank);

  // form general information
  const formGen = document.querySelectorAll(".form-gen");
  if (formGen.length > 0) {
    formGen.forEach((item) => {
      checkForm(item);
    });
  }
}
