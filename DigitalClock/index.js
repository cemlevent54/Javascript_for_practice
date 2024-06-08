var output = document.getElementById("output");
var dateOutput = document.getElementById("dateOutput");

function timeFunction() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // Ayı düzeltmek için 1 ekleyin
    var date = today.getDate();
    var weekDay = today.getDay();

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[weekDay]; // Haftanın gününü doğru almak için sadece weekDay kullanın
    month = month.toString().padStart(2, '0');
    date = date.toString().padStart(2, '0');
    let str = date + "/" + month + "/" + year + " " + day;

    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');
    output.textContent = hour + ":" + minute + ":" + second;
    dateOutput.textContent = str;

    requestAnimationFrame(timeFunction); // requestAnimationFrame kullanarak sürekli güncelleme
}

timeFunction();
// setInterval(timeFunction, 1000);