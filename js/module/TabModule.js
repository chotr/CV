export default function TabModule() {
  try {
    const tab = document.querySelectorAll(".tabJS");
    if (tab) {
      tab.forEach((t) => {
        let tBtn = t.querySelectorAll(".tabBtn");
        let tPanelList = t.querySelectorAll(".tabPanelList");
        tPanelList.forEach((ele, index) => {
          let tPanel = ele.querySelectorAll(".tabPanel");
          if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
            if (!t.classList.contains("tab-not")) {
              tBtn[0].classList.add("active");
              tPanel[0].classList.add("open");
            }

            for (let i = 0; i < tBtn.length; i++) {
              tBtn[i].addEventListener("click", showPanel);

              function showPanel(e) {
                e.preventDefault();
                for (let a = 0; a < tBtn.length; a++) {
                  tBtn[a].classList.remove("active");
                  tPanel[a].classList.remove("open");
                }
                tBtn[i].classList.add("active");
                tPanel[i].classList.add("open");
              }
            }
          }
        });
      });
    }

    const collapseList = document.querySelectorAll(".collapse-vertical");

    if (collapseList.length > 0) {
      collapseList.forEach((list) => {
        const listItem = list.querySelectorAll(".collapse-vertical-item");
        if (listItem.length > 0) {
          listItem.forEach((item) => {
            $(item).find(".collapse-vertical-content").css("display", "none");

            $(item)
              .find(".collapse-vertical-click")
              .on("click", () => {
                $(item).find(".collapse-vertical-icon").toggleClass("active");
                $(item).find(".collapse-vertical-content").slideToggle();

                listItem.forEach((otherItem) => {
                  if (otherItem !== item) {
                    $(otherItem).find(".collapse-vertical-content").slideUp();
                    $(otherItem).find(".collapse-vertical-icon").removeClass("active");
                  }
                });
              });
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
