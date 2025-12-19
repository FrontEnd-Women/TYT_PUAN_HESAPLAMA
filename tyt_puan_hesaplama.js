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


/*
let turkceDoğruSayisi, turkceYanlisSayisi=0;
let MatDoğruSayisi, MatYanlisSayisi=0;
let fenDoğruSayisi, fenYanlisSayisi=0;
let sosyalDoğruSayisi, sosyalYanlisSayisi=0;
let okulpuani=0;
let SabitPuan=100;
let yeniSatir="\r\n";
let Mesaj ="TYT Puan Uygulamasına Hoşgeldiniz..."+
yeniSatir+"1: Puan Hesapla"+yeniSatir+"2: Çıkış Yap";

let secim =prompt(Mesaj);
switch(secim){
    case "1":
        okulpuani=Number(prompt("Okul Puanını Giriniz :"));
        turkceDoğruSayisi=Number(prompt("Türkçe Doğru Sayısını Giriniz :"));
        turkceYanlisSayisi=Number(prompt("Türkçe Yanlış Sayısını Giriniz :"));

        MatDoğruSayisi=Number(prompt("Matematik Doğru Sayısını Giriniz :"));
        MatYanlisSayisi=Number(prompt("Matematik Yanlış Sayısını Giriniz :"));

        fenDoğruSayisi=Number(prompt("Fen Doğru Sayısını Giriniz :"));
        fenYanlisSayisi=Number(prompt("Fen Yanlış Sayısını Giriniz :"));

        sosyalDoğruSayisi=Number(prompt("Sosyal Doğru Sayısını Giriniz :"));
        sosyalYanlisSayisi=Number(prompt("Sosyal Yanlış Sayısını Giriniz :"));

        let dogruSayisi=turkceDoğruSayisi+MatDoğruSayisi+fenDoğruSayisi+sosyalDoğruSayisi;
        let yanlisSayisi=turkceYanlisSayisi+MatYanlisSayisi+fenYanlisSayisi+sosyalYanlisSayisi;
        let KalanDogruSayisi=dogruSayisi-(yanlisSayisi/4);
        let puan=(KalanDogruSayisi*4)+okulpuani+SabitPuan;
        alert("TYT Puanınız : "+puan)
        break;
    case "2":
        alert("Başarılı Bir Şekilde Çıkış Yaptınız...")
        break;
    default:
        alert("Geçerli Bir Değer Giriniz!")
        break;        
}
*/

/*
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
    */


//Harf sayısı  bulma

/* bana ne lazım
1 tane fonksiyon
1 tane metin
kullanıcıdan harf almak
*/

let text="Bugün JavaScriptte birsürü proje yaptım.Çok eğlenceliydi.";
let harf=prompt("Bir harf giriniz :");
let sonuc=found(harf);
alert("Harf sayısı : "+ sonuc);
function found(harf) {
    let toplam=0;
    for(let i=0; i<text.length; i++){
        if(text.charAt(i).toLocaleLowerCase()==harf.toLocaleLowerCase()){
            toplam+=1;

        }
    }
    return toplam;
}