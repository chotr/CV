export default function WithdrawalFunction() {
  const storeList = document.querySelectorAll(".store-item");

  storeList.length > 0 &&
    storeList.forEach((item) => {
      item.addEventListener("click", (e) => {
        const value = item?.querySelector("input")?.value;
        storeList.forEach((item) => {
          item.classList.toggle("active", item === e.currentTarget);
        });
        console.log(value);
      });
    });
}
