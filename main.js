// 1-masala sonning juft yoki toq son ekanligini aniqlovchi dastur yozing
//===============================================

// let son = 3;

// if (son % 2 === 0) {
//   console.log("juft son");
// } else {
//   console.log("toq son");
// }
// 2-masala foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring
//===============================================

//3-maslaa sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin
//===============================================

// let son = 4;

// if (son > 0) {
//   console.log(" musbat");
// } else if (son < 0) {
//   console.log(" manfiy");
// } else {
//   console.log("Son nolga teng");
// }

//4-masala   3-xonalik son kiritilsa uni sozlarda ifodalovchi dastur yozing
//===============================================
// let num = 456;
// let yuzlik = Math.floor(num / 100);
// let unlik = Math.floor((num / 10) % 10);

// let birlik = num % 10;
// let hammasi = "";

// switch (yuzlik) {
//   case 1:
//     hammasi += " bir yuz";
//     break;
//   case 2:
//     hammasi += " ikki yuz";
//     break;
//   case 3:
//     hammasi += "  uch yuz";
//     break;
//   case 4:
//     hammasi += " to'rt yuz";
//     break;
//   case 5:
//     hammasi += " besh yuz";
//     break;
//   case 6:
//     hammasi += " 0lti yuz";
//     break;
//   case 7:
//     hammasi += " yetti yuz";
//     break;
//   case 8:
//     hammasi += " sakkiz yuz";
//     break;
//   case 9:
//     hammasi += " to'qqiz yuz";
//     break;
//   default:
//     console.log("son kiriting");
// }
// switch (unlik) {
//   case 1:
//     hammasi += " o'n";
//     break;
//   case 2:
//     hammasi += " yigirma";
//     break;
//   case 3:
//     hammasi += " o'ttiz";
//     break;
//   case 4:
//     hammasi += " qirq";
//     break;
//   case 5:
//     hammasi += " ellik";
//     break;
//   case 6:
//     hammasi += " oltmish";
//     break;
//   case 7:
//     hammasi += " yetmish";
//     break;
//   case 8:
//     hammasi += " sakson";
//     break;
//   case 9:
//     hammasi += " to'qson";
//     break;
//   case 0:
//     hammasi += "o'n";
// }

// switch (birlik) {
//   case 1:
//     hammasi += " bir";
//     break;
//   case 2:
//     hammasi += " ikki";
//     break;
//   case 3:
//     hammasi += " uch";
//     break;
//   case 4:
//     hammasi += " to'rt";
//     break;
//   case 5:
//     hammasi += " besh";
//     break;
//   case 6:
//     hammasi += " olti";
//     break;
//   case 7:
//     hammasi += " yeti";
//     break;
//   case 8:
//     hammasi += "sakkiz";
//     break;
//   case 9:
//     hammasi += "to'qqiz";
//     break;

//   default:
//     console.log("faqat birxonali son kisitilsin");
// }

// 5-masala kabisa yilini aniqlovchi dastur yozing
// Foydalanuvchi biror yilni (masalan: 2024, 2025, 2100) kiritadi. Dastur ushbu yil kabisa yoki oddiy yil ekanligini aniqlashi va natijani ekranga chiqarishi kerak.Mantiqiy yechim (Algoritm):Yilni $N$ deb olsak, u quyidagi mantiqiy zanjirdan o'tishi kerak:Agar $N$ soni 400 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.Agar 400 ga bo'linmasa, lekin 100 ga qoldiqsiz bo'linsa $\rightarrow$ bu Oddiy yil (chunki 100 ga bo'linib, 400 ga bo'linmaydigan yillar, masalan 1900 yoki 2100, kabisa emas).Agar yuqoridagilarning hech biri bo'lmasa, lekin 4 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.Qolgan barcha holatlarda $\rightarrow$ Oddiy yil.
//===============================================

// console.log(hammasi);
// let yil = 2056;

// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//   console.log("kabisa yili");
// } else {
//   console.log("Oddiy yil");
// }
// 6-masala  foydalanuvchi 2ta son kiritadi ulardan eng kichigini qaytaruvchi dastur yozing bunda Math dan foydalanmang  budna || && operatorlaridan foydalaning

//===============================================

// let a = +prompt("1-sonni kiriting:");
// let b = +prompt("2-sonni kiriting:");

// let abc;
// if (a < b) {
//   abc = a;
// } else {
//   abc = b;
// }
// console.log("Eng kichik son:", kichik);
