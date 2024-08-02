export default function DatePickerModule() {
    let tomorrow = new Date(new Date().valueOf() + 1000 * 3600 * 24);
    let tomorrow_after = new Date(new Date().valueOf() + 2000 * 3600 * 24);
    let today = new Date();
    const openTimePicker = document.querySelector(".openTimePicker.input");
    const openTimePickerText = document.querySelector(".openTimePicker.text");
    if(openTimePicker){
        if(openTimePicker.value != ''){
            openTimePickerText.innerHTML = openTimePicker.value;
        }
    }
    $(".openTimePicker.text").daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1800,
            maxYear: parseInt(moment().format("YYYY"), 10)
        },
        function(start, end, label) {
            // var years = moment().diff(start, "years");
            // alert("You are " + years + " years old!");
        }
    );
    $(".openTimePicker").on("apply.daterangepicker", function(ev, picker) {
        console.log(picker.startDate.format("DD/MM/YYYY"));
        openTimePicker.value = picker.startDate.format("DD/MM/YYYY");
        console.log(openTimePicker.value)
        openTimePicker.setAttribute(
            "data-time",
            picker.startDate.format("DD/MM/YYYY")
        );
        $(".openTimePicker").html(picker.startDate.format("DD-MM-YYYY"));
    });

    ///////////////////

    $('input[name="birthday"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10)
      });
}