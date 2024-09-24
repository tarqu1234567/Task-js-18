let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");
let submitBtn = document.querySelector("#form_buttom");
let aplicans = document.querySelector("#aplicans");




submitBtn.addEventListener("click", () => {
    let tarek_value = "";
    let isAnyInputEmpty = false;

    for (let input of inputs) {
        if (input.value.trim() === "") {
            isAnyInputEmpty = true;
            break;
        }
        tarek_value += input.value + " ";
    }

    if (isAnyInputEmpty) {
        alert("يجب ملء جميع الحقول");
    } else {
        // حفظ البيانات في localStorage
        localStorage.setItem("formData", tarek_value);

        // عرض رسالة تأكيد
        alert("تم حفظ البيانات بنجاح");

        // عرض البيانات في وحدة التحكم (اختياري)
        console.log(tarek_value);
    }
});