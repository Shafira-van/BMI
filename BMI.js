let form = document.getElementById("formSubmit");
let tinggiBadan = document.getElementById("tinggiBadan");
let beratBadan = document.getElementById("beratBadan");
let paragraph = document.getElementById("paragraph");
var ket, tinggiB, beratB, bmi;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let body = {
    tBadan: tinggiBadan.value,
    bBadan: beratBadan.value,
  };

  tinggiB = body.tBadan;
  beratB = body.bBadan;

  tinggiB /= 100;
  tinggiB = Math.pow(tinggiB, 2);
  bmi = beratB / tinggiB;

  if (bmi < 18.5) {
    ket =
      "Berat dan Tinggi anda adalah " +
      beratB +
      " kg dan " +
      body.tBadan +
      " cm" +
      " dengan index BMI " +
      bmi.toFixed(1) +
      ". Level status BMI anda adalah kekurangan berat badan. Tingkatkan berat badan anda dengan berkonsultasi dengan ahli gizi.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    ket =
      "Berat dan Tinggi anda adalah " +
      beratB +
      " kg dan " +
      body.tBadan +
      " cm" +
      " dengan index BMI " +
      bmi.toFixed(1) +
      ". Level status BMI anda adalah normal. Pertahankan berat badan anda dengan makanan yang sehat dan berolahraga.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    ket =
      "Berat dan Tinggi anda adalah " +
      beratB +
      " kg dan " +
      body.tBadan +
      " cm" +
      " dengan index BMI " +
      bmi.toFixed(1) +
      ". Level status BMI anda adalah berat badan berlebih kecenderungan obesitas. Kurangi berat badan anda dengan berolahraga dan batasi asupan kalori.";
  } else if (bmi >= 30) {
    ket =
      "Berat dan Tinggi anda adalah " +
      beratB +
      " kg dan " +
      body.tBadan +
      " cm" +
      " dengan index BMI " +
      bmi.toFixed(1) +
      ". Level status BMI anda adalah obesitas. kurangi berat badan anda dengan berolahraga dan batasi asupan kalori sesuai anjuran ahli gizi anda.";
  } else {
    ket = "Anda belum menginput angka";
  }

  paragraph.innerText = ket;

  form.reset();
});
