const retunError = () => {
  const error = new Error("MockElement used");
  console.log("The Element is not defined.", "\nStack Trace: ", error.stack);
};

export const formatPrice = (price) => {
  const numericPrice = price.toString().replace(/[^0-9]/g, "");
  return numericPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatPhoneNumber = (validatePhone) => {
  if (validatePhone) {
    $(validatePhone)
      .find("input")
      .on("input", (event) => {
        const $input = $(event.target);
        let phoneNum = $input.val();

        let formattedNumber = phoneNum.replace(/\D/g, "");
        formattedNumber = formattedNumber.replace(
          /(\d{3})(\d{1,4})?(\d{1,4})?/,
          function (match, p1, p2, p3) {
            let result = p1;
            if (p2) result += "-" + p2;
            if (p3) result += "-" + p3;
            return result;
          }
        );
        $input.val(formattedNumber);
      });
  }
};

export const mockElement = new Proxy(
  {},
  {
    get(_target, _prop) {
      return () => {
        retunError();
      };
    },
  }
);

export const ref = (element) => {
  const result = document.querySelectorAll(element);
  return result.length === 0
    ? mockElement
    : result.length === 1
    ? result[0]
    : result;
};
