export default function tooltipModule() {
  try {
    const popcorn = document.querySelectorAll(".tooltipItemJs");
    const tooltip = document.querySelectorAll(".tooltipItemCtJs");
    const container = document.querySelector(".partnerSec ")
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".tooltipItemJs") &&
        !e.target.closest(".tooltipItemCtJs")
      ) {
  
        tooltip.forEach((item) => {
          $(item).addClass("hide");
        });
      }
    });
    if (popcorn.length > 0) {
      popcorn.forEach((ele, i) => {
        Popper.createPopper(ele, tooltip[i], {
          placement: "top",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 20],
              },
              preventOverflow: { boundariesElement: container },
            },
            
          ],
        });
        $(tooltip[i]).addClass("hide");
  
        ele.addEventListener("click", () => {
          tooltip.forEach((item) => {
            $(item).addClass("hide");
          });
          $(tooltip[i]).toggleClass("hide");
  
          Popper.createPopper(ele, tooltip[i], {
            placement: "top",
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 20],
                },
              },
            ],
          });
        });
      });
    }
  } catch (error) {
    console.log(error)
  }
}
