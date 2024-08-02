export default function CheckModule() {
  const reCheckBlocks = document.querySelectorAll(".recheck-block");

  if (reCheckBlocks) {
    reCheckBlocks.forEach((item) => {
      const recheckItems = item.querySelectorAll(".recheck-item");
      if (recheckItems) {
        recheckItems.forEach((item) => {
          const input = item.querySelector(".recheck-input");
          if (input.checked) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }
  document.addEventListener("click", (e) => {
    const reCheckBlock = e.target.closest(".recheck-block");
    const reCheckItem = e.target.closest(".recheck-item");
    var event = new Event("change");
    if (reCheckBlock) {
      const reCheckItems = reCheckBlock.querySelectorAll(".recheck-item");
      const reCheckInputs = reCheckBlock.querySelectorAll(".recheck-input");

      if (reCheckItem) {
        const input = reCheckItem.querySelector(".recheck-input");

        if (input.type == "radio") {
          if (input.checked == true) {
            input.checked = false;
            reCheckItem.classList.remove("active");
            return;
          }

          reCheckItems.forEach((item) => {
            item.classList.remove("active");
          });
          reCheckInputs.forEach((item) => {
            item.checked = false;
          });
          input.checked = true;
          if (input.checked == true) {
            reCheckItem.classList.add("active");
          }
        }
        if (input.type == "checkbox") {
          if (input.checked == true) {
            input.checked = false;
            reCheckItem.classList.remove("active");
          } else {
            input.checked = true;
            reCheckItem.classList.add("active");
          }
          input.dispatchEvent(event);
        }
      }
    }

    const removeCheck = e.target.closest(".recheck-remove");

    if (removeCheck) {
      if (reCheckBlock) {
        const reCheckItems = reCheckBlock.querySelectorAll(".recheck-item");
        const reCheckInputs = reCheckBlock.querySelectorAll(".recheck-input");

        reCheckItems.forEach((item) => {
          item.classList.remove("active");
        });
        reCheckInputs.forEach((item) => {
          item.checked = false;
          item.dispatchEvent(event);
        });
      }
    }
  });

  const whist = document.querySelector(".whist");

  if (whist) {
    const btn = whist.querySelector(".whist-btn");
    const num = btn.querySelector(".num");
    const checkbox = whist.querySelectorAll(".recheck-input");
    const setNum = () => {
      num.innerHTML = whist.querySelectorAll(".recheck-item.active").length;

      if (whist.querySelectorAll(".recheck-item.active").length > 0) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    };

    setNum();
    checkbox.forEach((ele, i) => {
      ele.addEventListener("change", () => {
        setNum();
      });
    });

    // btn.addEventListener("click", () => {
    //   const active = whist.querySelectorAll(".recheck-item.active");
    //   active.forEach((ele, i) => {
    //     ele.closest(".pro-item").remove();
    //     btn.classList.remove("active");
    //     num.innerHTML = 0;
    //     // console.log(ele.closest('.pro-item'))
    //   });
    // });
  }
}
