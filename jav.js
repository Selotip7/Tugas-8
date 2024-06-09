// function validasiNama() {

//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// };

function f(){

}

function get() {
  const gen3 = myForm.sel[myForm.sel.selectedIndex].text;
  
}

function submit() {
  let x = document.getElementById("nama");
  const nim = document.getElementById("number");
  const emails = document.getElementById("email");
  const nim2 = nim.value.toString().length;
   const gen = document.querySelector("#gen").value;
  const nomor = document.getElementById("tel").value;
  const alamat = document.getElementById("alamat").value;

  const email = "gmail.com";
  var validasiHuruf = /^[a-zA-Z ]+$/;
  var validnim = /^[0-9]+$/;
  var validnmr = /^[0-9]+$/;

  // for (var i = 0; i < gen.length; i++) {
  //   if (gen[i].checked) {
  //     gen1 = gen[i];
  //     break;
  //   }
  // }

  

  if (x.value == "" || nim.value == "" || emails.value=="" || gen == "" || nomor == "" || alamat == "") {
    alert("Form tidak boleh ada yang kosong");
  } else if (!x.value.match(validasiHuruf)) {
    alert("Nama harus dengan huruf");
  } else if (!nim.value.match(validnim)) {
    alert("Nim harus dengan angka");
  } else if (nim2 != 10) {
    alert("Nim harus berjumlah 10");
  } else if (!emails.value.endsWith(email)) {
    alert('Format email harus " gmail.com "');
  } else if (myForm.sel.selectedIndex == 0) {
    alert("Silahkan Pilih Jenis kelamin");
  } else if(!nomor.match(validnmr)){
    alert("Nomor harus dengan angka");
  }else {
    alert("Anda Berhasil mendaftar");
    alert("Hi, selamat datang "+x.value);
    alert("Berikut adalah data anda : \nNama                : "+x.value+
                                     "\nNim                   : "+nim.value+
                                     "\nEmail                 : "+emails.value+
                                     "\nJenis Kelamin    : "+gen+
                                     "\nNo telpon         : "+nomor+
                                     "\nAlamat              : "+alamat )
  } 


}

form.addEventListener("submit", (e) => {
  submit();

  e.preventDefault();
});
