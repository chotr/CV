export default function Select2Module() {
  try {
    $(document).ready(function () {
      // $(".select2js").select2({
      //   placeholder: "Loại công trình",
      //   // allowClear: true,
      // });

      // $(".select2js").select2({
      //   placeholder: {
      //     id: "-1", // the value of the option
      //     text: "Select an option",
      //   },
      //   // allowClear: true
      // });

      // $(".select2js").each(function (i, v) {
      //   var placeholder = $(this).attr("data-placeholder");
      //   $(this).select2({
      //     width: "100%",
      //     placeholder: placeholder,
      //     // dropdownCssClass: 'my-class-dropdown'
      //   });
      // });
    });
  } catch (error) {
    console.log(error);
  }
}
