function ubahTulisan(){
  
  let nodeRestu = document.getElementById("nama");
  nodeRestu.innerHTML = "<marquee>BACOD ( BANDUNG CODERS )</marquee>";

}


function ambilNama(){
  let namaDepan = document.getElementById("namaDepan");
  let namaBelakang = document.getElementById("namaBelakang");

  let namaLengkap = namaDepan.value + " " + namaBelakang.value;

  console.log( namaLengkap );

}


function nambahClass(){
  let logo = document.getElementById("logo");
  
  logo.classList.add("b-logo-merah");
}

function hapusClass(){
  let logo = document.getElementById("logo");
  
  logo.classList.remove("b-logo-merah");
}

function sembunyikan(){
  let logo = document.getElementById("logo");
  
  logo.classList.add("none");
  
}