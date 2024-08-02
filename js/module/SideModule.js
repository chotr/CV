export default function SideModule() {
  const sidebarList = document.querySelectorAll(".sideJS")

  if (sidebarList) {
    sidebarList.forEach((ele,i)=> {
      const open = ele.querySelector(".side-open-js")
      const close = ele.parentElement.querySelector(".side-close")
      const overlay = ele.parentElement.querySelector(".side-overlay")
      const sidebar = ele.parentElement.querySelector(".side-fixed")
  
      open.addEventListener("click", () => {
        sidebar.classList.add("open")
        overlay.classList.add("open")
        document.body.style.overflow = "hidden"
      })
  
      close.addEventListener("click", () => {
        sidebar.classList.remove("open")
        overlay.classList.remove("open")
        document.body.style.overflow = "auto"
      })
  
      overlay.addEventListener("click", () => {
        sidebar.classList.remove("open")
        overlay.classList.remove("open")
        document.body.style.overflow = "auto"
      })

    })
  }

  const filter = document.querySelectorAll(".filterJs")

  if (filter.length > 0) {
    filter.forEach((ele, i) => {
      const listType = ele.querySelectorAll(".filterBoxJS");

      if (listType.length > 0) {
        listType.forEach((ele1, j) => {
          if(ele1.querySelector(".recheck-item.active")) {
            $(ele1.querySelector(".filter-sub")).slideDown(350);
            ele1.querySelector(".filterTypeJS").classList.add("show")
          }

          if (ele1.querySelector(".filterTypeJS.show")) {
            $(ele1.querySelector(".filter-sub")).slideDown(350);
          }

          ele1.querySelector(".filterTypeJS").addEventListener("click", () => {
            ele1.querySelector(".filterTypeJS").classList.toggle("show")
            $(ele1.querySelector(".filter-sub")).slideToggle(350);
          })
        })
      }

    })
    
  }

  const sidebar = document.querySelector(".product-content-con .side-fixed")

  if (sidebar) {
    const open = document.querySelector(".proFilter-cate-open")
    const close = sidebar.parentElement.querySelector(".side-close")
    const overlay = sidebar.parentElement.querySelector(".side-overlay")

    open.addEventListener("click", () => {
      sidebar.classList.add("open")
      overlay.classList.add("open")
      document.body.style.overflow = "hidden"
    })

    close.addEventListener("click", () => {
      sidebar.classList.remove("open")
      overlay.classList.remove("open")
      document.body.style.overflow = "auto"
    })

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open")
      overlay.classList.remove("open")
      document.body.style.overflow = "auto"
    })
  }

}