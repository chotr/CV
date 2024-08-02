import { ref } from "./mockElement.js";

export default function UploadAvt() {
  const click = document.querySelector(".userInfo-avt");
  const imgAvt = document.querySelector(".userInfo-avt");
  const listavt = document.querySelectorAll(".choose-avt .avt-list .avt-item");
  const buttonSubmit = document.querySelector(".choose-avt .btn-submit");
  const formAvt = document.querySelector(".choose-avt");

  const setAvt = (img) => {
    if (imgAvt) {
      imgAvt.querySelector("img").src = img;
    }
  };

  click?.addEventListener("click", () => {});

  listavt.length > 0 &&
    listavt.forEach((ele) => {
      ele.addEventListener("click", () => {
        const img = ele.querySelector("img");
        buttonSubmit?.addEventListener("click", () => {
          setAvt(img.src);

          $(formAvt).removeClass("open");
        });
      });
    });

  ////////////////////////////////////////////////////////
  const Upload = document.querySelector(".upload-img");
  const wrap = Upload?.querySelector(".upload-img-ct");
  const btnUpload = Upload?.querySelector(".upload-img-add");
  const input = Upload?.querySelector("input");
  const total = Upload?.querySelector(".total");
  const maxLength = total?.getAttribute("data-max-quan") || 3;
  const button = Upload?.querySelector(".link-btn");
  let fileCount = 0;

  btnUpload?.addEventListener("click", () => {
    input.click();
  });

  button?.addEventListener("click", () => {
    input.click();
  });
  const dataTransfer = new DataTransfer();

  input?.addEventListener("change", (e) => {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      if (fileCount < maxLength) {
        const file = files[i];
        dataTransfer.items.add(file);
        fileCount++;

        const imgItem = document.createElement("div");
        imgItem.classList.add("upload-img-item");

        const imgInner = document.createElement("div");
        imgInner.classList.add("upload-img-inner");

        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.addEventListener("click", () => {
          imgItem.remove();
          fileCount--;
          const dataList = dataTransfer.items;
          for (let j = dataList.length - 1; j >= 0; j--) {
            if (dataList[j].getAsFile() === file) {
              dataList.remove(j);
            }
          }
          input.files = dataTransfer.files;
        });

        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.alt = "";

        imgInner.appendChild(closeBtn);
        imgInner.appendChild(img);
        imgItem.appendChild(imgInner);
        wrap.appendChild(imgItem);
      }
    }
    input.files = dataTransfer.files;
  });
}
