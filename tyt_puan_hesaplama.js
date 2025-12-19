/*
bana ne lazım 
1.türkçe doğru ve yanlış sayısı
2.Matematik doğru ve yanlış sayısı
3.Fen doğru ve yanlış sayısı
4.Sosyal doğru ve yanlış sayısı
Okul puanı
Devletin verdiği 100 puan
Sonuç
*/



let turkceDoğruSayisi, turkceYanlisSayisi=0;
let MatDoğruSayisi, MatYanlisSayisi=0;
let fenDoğruSayisi, fenYanlisSayisi=0;
let sosyalDoğruSayisi, sosyalYanlisSayisi=0;
let okulpuani=0;
let SabitPuan=100;
let yeniSatir="\r\n";
let Mesaj ="TYT Puan Uygulamasına Hoşgeldiniz..."+
yeniSatir+"1: Puan Hesapla"+yeniSatir+"2: Çıkış Yap";



function puanHesapla() {
    let SabitPuan = 100;

    let okulPuani = Number(document.getElementById("OBP").value) || 0;

    let turkceDogru = Number(document.getElementById("turceDogruSayisi").value) || 0;
    let turkceYanlis = Number(document.getElementById("turceYanlisSayisi").value) || 0;

    let matDogru = Number(document.getElementById("MatDogruSayisi").value) || 0;
    let matYanlis = Number(document.getElementById("MatYanlisSayisi").value) || 0;

    let fenDogru = Number(document.getElementById("FenDogruSayisi").value) || 0;
    let fenYanlis = Number(document.getElementById("FenYanlisSayisi").value) || 0;

    let sosyalDogru = Number(document.getElementById("SosyalDogruSayisi").value) || 0;
    let sosyalYanlis = Number(document.getElementById("SosyalYanlisSayisi").value) || 0;

    let dogruSayisi = turkceDogru + matDogru + fenDogru + sosyalDogru;
    let yanlisSayisi = turkceYanlis + matYanlis + fenYanlis + sosyalYanlis;
    let kalanDogru = dogruSayisi - (yanlisSayisi / 4);
    let puan = (kalanDogru * 4) + SabitPuan+ okulPuani;

    document.getElementById("sonuc").innerText = "TYT Puanınız: " + puan.toFixed(2);
}
    


