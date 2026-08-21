const hargaNasigoreng = 12000;
const hargaTeh = 3000;
const hargabakso = 15000;
let stokNasigoreng = 7;
let stokBakso = 4;
let stokTeh = 9;
let total = 0;
function menu(){
  alert("1.nasi goreng:" + hargaNasigoreng + "\n" + "2.Teh:" + hargaTeh + "\n" + "3.bakso:" + hargabakso)
};
menu();
function belimakanan(){
  let pilihan = prompt("menu:\n1.nasi goreng\n2.Teh\n3.bakso\n4.keluar");
  if (pilihan !== "1" && pilihan !== "nasi goreng" &&
    pilihan !== "2" && pilihan !== "teh" &&
    pilihan !== "3" && pilihan !== "bakso"){
    alert("pesanan tidak valid");
    return false
}
  let jumlah = parseInt(prompt("jumlah:"))
  if (pilihan == 4 || pilihan == "keluar" || pilihan == null ){
    return false;
  }
  
  if (pilihan == 1 || pilihan == "nasi goreng"){
    if (jumlah >= stokNasigoreng){
      alert("stock abis")
    }
    else if(jumlah <= stokNasigoreng){
      alert("sukses" + "\ntotal:" + hargaNasigoreng*jumlah)
    }
  }
  else if (pilihan == 2 || pilihan == "Teh"){
    if (jumlah >= stokTeh){
      alert("stock abis")
    }
    else if(jumlah <= stokTeh){
      alert("sukses" + "\ntotal:" + hargaTeh*jumlah)
    }
  }
  else if (pilihan == 3 || pilihan == "bakso"){
    if (jumlah >= stokBakso){
      alert("stock abis")
    }
    else if(jumlah <= stokBakso){
      alert("sukses" + "\ntotal:" + hargabakso*jumlah)
    }
  }
}
belimakanan()