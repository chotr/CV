export default function PopupModule() {
  try {
    ////base
    $(document).ready(function () {
      $(".play-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 300,
        fixedContentPos: false,
      });
    });

    //custom
    $(".vdsec-play").magnificPopup({
      // disableOn: 500,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 300,
      // preloader: false,
      fixedContentPos: false,

      callbacks: {
        open: function () {
          // When you open the
          $("body").css("overflow", "hidden");
        }, // "body" is used "overflow: hidden".

        close: function () {
          // When the window
          $("body").css("overflow", "");
        }, // "overflow" gets the initial value.
      },
    });

    $(document).ready(function () {
      $(".sidevd").magnificPopup({
        // disableOn: 500,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 300,
        // preloader: false,
        fixedContentPos: false,

        callbacks: {
          open: function () {
            // When you open the
            $("body").css("overflow", "hidden"); // window, the element
          }, // "body" is used "overflow: hidden".

          close: function () {
            // When the window
            $("body").css("overflow", ""); // is closed, the
          }, // "overflow" gets the initial value.
        },
      });
    });

    const removeJS = document.querySelectorAll(".removeJS");

    if (removeJS) {
      removeJS.forEach((pu, i) => {
        const open = pu.querySelector(".btnRemoveJS");
        const content = pu.querySelector(".contentRemoveJS");
        const over = pu.querySelector(".popup-overlay");
        const closse = pu.querySelector(".pu-close");

        $(open).click(() => {
          $(content).addClass("open");
        });

        $(closse).click(() => {
          $(content).removeClass("open");
        });

        $(over).click(() => {
          $(content).removeClass("open");
        });
      });
    }

    const popupClose = document.querySelectorAll(".popup-close");
    const popupOverlay = document.querySelectorAll(".popup-overlay");
    const body = document.getElementsByTagName("body")[0];
    const popup = document.querySelectorAll(".popup");
    if (popupClose) {
      popupClose.forEach((item) => {
        item.addEventListener("click", () => {
          popup.forEach((item) => {
            item.classList.remove("open");
            body.classList.remove("overflow-hidden");
            document.body.classList.remove("overflow-hidden");
            $("body").css("overflow", "auto");
          });
        });
      });
    }

    if (popupOverlay) {
      popupOverlay.forEach((item) => {
        item.addEventListener("click", () => {
          popup.forEach((item) => {
            item.classList.remove("open");
            body.classList.remove("overflow-hidden");
            document.body.classList.remove("overflow-hidden");
            $("body").css("overflow", "auto");
          });
        });
      });
    }

    const popupOpens = document.querySelectorAll(".popup-open");
    if (popupOpens) {
      popupOpens.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const idString = item.getAttribute("data-popup");

          if (popup) {
            popup.forEach((item) => {
              if (item.getAttribute("data-popup-id") == idString) {
                popup.forEach((pu) => {
                  pu.classList.remove("open");
                });
                $("body").css("overflow", "hidden");
                item.classList.add("open");
              }
            });
          }
        });
      });
    }

    const hovers = document.querySelectorAll(".hover");

    if (hovers) {
      hovers.forEach((ele, i) => {
        const hover1 = ele.querySelector(".circle-1");
        if (hover1) {
          const inner = ele.querySelector(".hover-inner");
          const outer = ele.parentElement;
          const t = tippy(outer, {
            content: ele.innerHTML,
            allowHTML: true,
            placement: "top-end",
            offset: [120, 0],
          });
        }

        const hover2 = ele.querySelector(".circle-2");
        if (hover2) {
          const inner = ele.querySelector(".hover-inner");
          const outer = ele.parentElement;
          const t = tippy(outer, {
            content: ele.innerHTML,
            allowHTML: true,
            placement: "left-start",
            offset: [-30, -20],
          });
        }

        const hover3 = ele.querySelector(".circle-3");
        if (hover3) {
          const inner = ele.querySelector(".hover-inner");
          const outer = ele.parentElement;
          const t = tippy(outer, {
            content: ele.innerHTML,
            allowHTML: true,
            placement: "left",
          });
        }

        const hover4 = ele.querySelector(".circle-4");
        if (hover4) {
          const inner = ele.querySelector(".hover-inner");
          const outer = ele.parentElement;
          const t = tippy(outer, {
            content: ele.innerHTML,
            allowHTML: true,
            placement: "right",
            offset: [-35, 10],
            onShow: (instance) => {
              const tooltip = instance.popper.querySelector(".tippy-content");
              tooltip.parentElement.classList.add("my-tooltip-class");
            },
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
