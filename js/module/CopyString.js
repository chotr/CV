export default function CopyString() {
  const ListCopy = document.querySelectorAll(".copy-js");
  const noti = document.querySelector(".invite-noti")

  ListCopy.forEach((item) => {
    // const copyBtn = item.querySelector(".copy-js-click")
    // const copyText = item.querySelector(".copy-js-data")

    // copyBtn?.addEventListener("click", () => {
    //     copyText?.select()
    //     copyText?.setSelectionRange(0, 99999)
    //     navigator.clipboard.writeText(copyText.value).then(() => {
    //         console.log("Text copied to clipboard");
    //         alert("Copied the text: " + copyText.value);
    //     }).catch(err => {
    //         console.error("Failed to copy text: ", err);
    //         alert("Failed to copy text.");
    //     });
    // })

    const copyBtn = item.querySelector(".copy-js-click");
    const copyText = item.querySelector(".copy-js-data");

    copyBtn.addEventListener("click", () => {
      if (copyText.tagName === "INPUT" || copyText.tagName === "TEXTAREA") {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard
          .writeText(copyText.value)
          .then(() => {
            console.log("Text copied to clipboard: ", copyText.value);
            noti?.classList.add("show")
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      } else {
        const range = document.createRange();
        range.selectNodeContents(copyText);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          document.execCommand("copy");
          console.log("Text copied to clipboard: ", copyText);
          noti?.classList.add("show")
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }

        selection.removeAllRanges();
      }
    });
  });
}
