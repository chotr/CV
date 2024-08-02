export default function PopupModule() {
    $(document).ready(function () {
      $(".play-video").magnificPopup({
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
            body.classList.remove("no-scroll");
            document.body.classList.remove("overflow-hidden");
            $("body").css("overflow", "auto")
          });
        });
      });
    }
    
    if (popupOverlay) {
      popupOverlay.forEach((item) => {
        item.addEventListener("click", () => {
          popup.forEach((item) => {
            item.classList.remove("open");
            body.classList.remove("no-scroll");
            document.body.classList.remove("overflow-hidden");
            $("body").css("overflow", "auto")
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
                item.classList.add("open");
                $("body").css("overflow", "hidden");
                console.log("first")
              }
            });
          }
        });
      });
    }
  }