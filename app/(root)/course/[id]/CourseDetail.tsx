"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { FaPlay, FaStar } from "react-icons/fa6";
import { IoIosNotificationsOutline, IoIosTimer } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { CiFlag1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseDetailBanner from "./CourseDetailBanner";

interface Description {
  icon: React.ReactNode;
  color: string;
  title: string;
  des: string;
}

import image1 from "../../../../assets/images/html.svg";
import image2 from "../../../../assets/images/css.svg";
import image3 from "../../../../assets/images/sass.png";
import image4 from "../../../../assets/images/figma.svg";
import image5 from "../../../../assets/images/bootstrap.svg";
import image6 from "../../../../assets/images/javascript.svg";
import image7 from "../../../../assets/images/jquery.png";
import image8 from "../../../../assets/images/gulp.svg";
import image9 from "../../../../assets/images/github.svg";
import image10 from "../../../../assets/images/api.png";
import image11 from "../../../../assets/images/react.png";
import image12 from "../../../../assets/images/redux.png";
import image13 from "../../../../assets/images/mui.svg";
import image14 from "../../../../assets/images/tailwindcss.svg";
import image15 from "../../../../assets/images/firbase.svg";
import kub from "../../../../assets/images/kub.png";

import devops1 from "../../../../assets/images/devops-image.jpg";
import devops2 from "../../../../assets/images/docker.png";
import devops3 from "../../../../assets/images/linux-computer.png";
import devops4 from "../../../../assets/images/metrics.png";

export const menuItems = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Kurslarimiz", path: "/toshkentda-dasturlash-kurslari" },
  { name: "Ustozlarimiz", path: "/ustozlarimiz" },
  { name: "Aloqa", path: "/contact" },
];
export const courses = [
  {
    id: 1,
    courses_detail: {
      detail_image: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
      ],
      detail_desc: [
        {
          detail_title: "Toshkentda Frontend kurslari",
          detail_description:
            "Biz shunday asrda yashayapmizki, undagi o‘zgarishlar kun sayin amalga oshmoqda. Kecha ishlab turgan g‘oyalar, qarashlar yoki uslublar hech qancha vaqt o‘tmasdan eskirmoqda. Zamon yangi trendlarni ommaga chiqarmoqda. Bu hamma sohaga tegishli bo‘lib qoldi. Ayniqsa, axborot kommunikatsion texnologiyalar sohasi dunyoga ko‘p yangilik va ixtirolarni bermoqda. Dasturchilarga bo‘lgan talab ortmoqda. Kompьyuterlar uchun desktop dasturlar, Internetda veb saytlar va mobil ilovalar kuni tartibimizning ajralmas qismiga aylandi. Frontend, Backend, Mobile degan iboralar tobora ko‘p qo‘llanilmoqda. Bugun Toshkentda Frontend kurslari haqida so‘z yuritamiz.",
        },
        {
          detail_title:
            "Toshkentda Frontend kurslari FinTechHub laboratoriyasida",
          detail_description:
            "Ilm olish borasida bugungi yoshlarga teng kelib bo‘lmaydi. Ular har kuni axborot oqimini qabul qilish bilan birga, IT bilimlarni ham mukammal o‘rganishmoqda. Bu albatta yaxshi, chunki bekorchilik har jihatdan bizning xalqqa to‘g‘rikelmaydigan narsa. Biror kasb ustasi bo‘lib etishish, ertaga tirikchilik uchun zamin hozirlashi haqiqatlir. Shunday ekan, IT bilimlarni olish bugunning dolzrab vazifasi hisoblanadi. Bugunga kelib, Web-dasturlash bu yo‘nalishning engrivojlangan qismi bo‘lib ulgurdi. Uni dasturchilar tilida Frontend va Backend deb atashadi. Backend asosan veb saytlarning ichki ko‘rinishi, ya’ni server tarafdan ishlasa Frontend tashqi ko‘rinishga ishlaydi.",
        },
        {
          detail_title: "Frontend haqida ma'lumot",
          detail_description:
            'Keling, bu so‘zning ma’nosini tushuntirib berishga harakat qilaylik. Frontend - bu foydalanuvchi uchun va u ko‘rib turadigan interfeys (ko‘rinish) degani. Ya’ni, veb sayt yoki mobil ilovaning inson ko‘zi ko‘rib turgan qismiga aytiladi.Dizayn, baner, navigatsiya, tugma va havolalarni bosish va hokazo. Foydalanuvchi nima ko‘rib utrgan bo‘lsa o‘sha narsa Frontend deyiladi. U mahsulot yoki xizmat turi haqidagi mantiq bilan bog‘liq bo‘ladi. Mijoz tarafida "labbay" deb,"muloqot" qiladi va server bilan aloqada bo‘lib turadi. Server bilan aloqa qismini Backend-dasturchilar yozishadi. <br />Frontend dasturchilar ishlatadigan eng asosiy mehnat qurollari - instrumentlar bu HTML, CSS va JavaScript hisoblanadi. <br />- HTML bu sahifalar tizimi ("strukturasi") va kontent uchun; <br />- CSS bu tashqi ko‘rinishni (rang, hajm, o‘lcham va hokazo )uslubiy jihatdan to‘g‘irlash uchun; <br />- JavaScript bu interfaol qo‘shimchalarni qo‘shish uchun. <br />Huddi shu asbob-uskunalari mobil ilovalarni yaratishda ham ishlatiladi. ',
        },
      ],
    },
    title: "Frontend dasturlash kurslari",
    price: "1.400.000 so'm",
    details: [
      "Haftasiga 3 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 10 oygacha",
      "Narx oyiga 1 400 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",
    ],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
  },
  {
    id: 2,
    courses_detail: {
      detail_image: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        "https://static-00.iconduck.com/assets.00/django-icon-402x512-tkdfpj8s.png",
        image1,
        image5,
        "https://t4.ftcdn.net/jpg/03/22/95/69/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhYIgLQICyLdxxt1uEcA4mTUM8-kNrMMMQA&s",
        "https://cdn-icons-png.flaticon.com/512/71/71339.png",
        "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
        "https://cdn2.iconfinder.com/data/icons/simple-flat-vegetable/512/vegetable-05-512.png",
        "https://dwglogo.com/wp-content/uploads/2017/12/1100px_Redis_Logo_01.png",
        "https://static.vecteezy.com/system/resources/thumbnails/048/701/253/small/creative-and-elegant-minimalistic-logo-design-for-technology-and-software-company-vector.jpg",
        "https://cdn.iconscout.com/icon/free/png-256/free-upwork-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-2945283.png?f=webp&w=256",
      ],
      detail_desc: [
        {
          detail_title: "Toshkentda backend kurslari",
          detail_description:
            'San’at yoki teatr sohasida "kadr ortida" yoki "sahna ortida" degan iboralar bor. Bu shunaqa narsaki, odamlar faqatgina sahnada yoki TVda ko‘ringan siymolarnigina tanishadi, xolos. O‘shalarni o‘z suyuklilari qatoriga qo‘shishadi. Aslida, asosiy ishlarni kadr ortidagi yoki sahna ortidagi fidoyi insonlar qilayotgan bo‘ladi. Rejisser, kompozitor, stilist, montajchi va hokazo. Ular haqida ko‘p ham bilaverishmaydi. Sizga aytmoqchi bo‘lgan dasturlash sohasida ham shunaqa ish qiladiganlar bo‘ladi. Ularni backend dasturchilar deb atashadi. Toshkentda backend kurslari degan mavzuda e’tiboringizga FinTechHub laboratoriyasi haqida ma’lumot berib o‘tmoqchimiz.',
        },
        {
          detail_title:
            "Toshkentda backend kurslari FinTechHub laboratoriyasidan boshlanadi",
          detail_description:
            'Dasturchi bo‘lib etishaman, degan yoshlarimiz avvalam bor o‘z yo‘nalishlarini tanlab olishlari kerak bo‘ladi. Ular Frontend va Backend dasturlashdan birini tanlashlari lozim. Bu ikki tushuncha doim bir-biri bilan juft bo‘lib yuradi. Alohida holda mavjud bo‘lmaydi. Lekin, ularning farqi bor. Keling bu farqni tushuntirib berishga harakat qilaylik. Frontend dasturchi sahifalarni dasturlaydi va verstka qiladi. Saytda ko‘zingiz tushgan barchasi: dizayn, tugmalar, varaqlash, sxemalar va hokozalar uning zimmasida bo‘ladi. Frontend dachturchining vazifasi - veb saytni sahifalash va "tiriltirish"dan iborat. barcha qurilmalarda ravon ishlashni ham ta’minlashi kerak. U uchun HTML, CSS va JavaScript tillarni bilishi shart. Backend dasturchi bo‘lsa boshqa ishni qiladi',
        },
        {
          detail_title:
            "Backend nima va u haqida tushunchalarini oddiy foydalanuvchi ko‘ra olmaydi.Aynan Backend dasturchining xizmatlari evaziga sayt o‘z vazifasini bajarayotgan bo‘ladi.Demak, ko‘rinib turibdiki, bu toifadagi dasturchisiz veb sayt ishlamaydi.",
          detail_description:
            'FinTechHub laboratoriyasida siz backend kurslariga yozilishingiz mumkin. Boshida 2 oy, keyin 3 oydan 8 oygacha barcha sir-sinoatlarni o‘zlashtirib olasiz. Sizga Python tilidan saboq berishadi. Ko‘p eshitgansiz, avvallari PHP degan dasturlash tili ancha mashhur edi.Lekin, undagi kamchiliklar, nuqsonlar va xakerlar hurujiga tez uchrashi tufayli eskirayotgani bois ko‘pchilik Python tilida dasturlashga o‘tmoqda.Bu til juda qulay va eng muhimi xavfsizlik nuqtai nazaridan ekspertlarning ijobiy baholariga sazovor bo‘ldi.Shunday esa, FinTechHub o‘quv markazida aynan shu til haqida etuk ustozlardan dars olishingiz mumkin. Qaysi ko‘rinishda darsga qatnashingiz o‘zingizga bog‘lik.Onlayn yoki offlayn, buning o‘zingiz hal qilasiz.Birinchi bepul darsga yozilib ko‘ring va saviyani o‘zingiz his eting.Toshkentda backend kurslari deb uzoqlarni izlab yurish shart emas.Metroning "Kosmonavtlar" bekatidan 100 metr masofada joylashgan zamonaviy ofisimizda sizni kutamiz.',
        },
      ],
    },
    title: "Python tilida Backend kurslari",
    price: "1.400.000 so'm",
    details: [
      "Haftasiga 3 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 10 oygacha",
      "Narx oyiga 1 400 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      "https://static-00.iconduck.com/assets.00/django-icon-402x512-tkdfpj8s.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-S4TyBXJ_oeFxmQdcldDAiFH1ZsA1pX_aw&s",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
  },
  {
    id: 3,
    courses_detail: {
      detail_image: [],
      detail_desc: [
        {
          detail_title: "Toshkentda backend kurslari",
          detail_description:
            'San’at yoki teatr sohasida "kadr ortida" yoki "sahna ortida" degan iboralar bor. Bu shunaqa narsaki, odamlar faqatgina sahnada yoki TVda ko‘ringan siymolarnigina tanishadi, xolos. O‘shalarni o‘z suyuklilari qatoriga qo‘shishadi. Aslida, asosiy ishlarni kadr ortidagi yoki sahna ortidagi fidoyi insonlar qilayotgan bo‘ladi. Rejisser, kompozitor, stilist, montajchi va hokazo. Ular haqida ko‘p ham bilaverishmaydi. Sizga aytmoqchi bo‘lgan dasturlash sohasida ham shunaqa ish qiladiganlar bo‘ladi. Ularni backend dasturchilar deb atashadi. Toshkentda backend kurslari degan mavzuda e’tiboringizga FinTechHub laboratoriyasi haqida ma’lumot berib o‘tmoqchimiz.',
        },
        {
          detail_title:
            "Toshkentda backend kurslari FinTechHub laboratoriyasidan boshlanadi",
          detail_description:
            'Dasturchi bo‘lib etishaman, degan yoshlarimiz avvalam bor o‘z yo‘nalishlarini tanlab olishlari kerak bo‘ladi. Ular Frontend va Backend dasturlashdan birini tanlashlari lozim. Bu ikki tushuncha doim bir-biri bilan juft bo‘lib yuradi. Alohida holda mavjud bo‘lmaydi. Lekin, ularning farqi bor. Keling bu farqni tushuntirib berishga harakat qilaylik. Frontend dasturchi sahifalarni dasturlaydi va verstka qiladi. Saytda ko‘zingiz tushgan barchasi: dizayn, tugmalar, varaqlash, sxemalar va hokozalar uning zimmasida bo‘ladi. Frontend dachturchining vazifasi - veb saytni sahifalash va "tiriltirish"dan iborat. barcha qurilmalarda ravon ishlashni ham ta’minlashi kerak. U uchun HTML, CSS va JavaScript tillarni bilishi shart. Backend dasturchi bo‘lsa boshqa ishni qiladi',
        },
        {
          detail_title:
            "Backend nima va u haqida tushunchalarini oddiy foydalanuvchi ko‘ra olmaydi.Aynan Backend dasturchining xizmatlari evaziga sayt o‘z vazifasini bajarayotgan bo‘ladi.Demak, ko‘rinib turibdiki, bu toifadagi dasturchisiz veb sayt ishlamaydi.",
          detail_description:
            'FinTechHub laboratoriyasida siz backend kurslariga yozilishingiz mumkin. Boshida 2 oy, keyin 3 oydan 8 oygacha barcha sir-sinoatlarni o‘zlashtirib olasiz. Sizga Python tilidan saboq berishadi. Ko‘p eshitgansiz, avvallari PHP degan dasturlash tili ancha mashhur edi.Lekin, undagi kamchiliklar, nuqsonlar va xakerlar hurujiga tez uchrashi tufayli eskirayotgani bois ko‘pchilik Python tilida dasturlashga o‘tmoqda.Bu til juda qulay va eng muhimi xavfsizlik nuqtai nazaridan ekspertlarning ijobiy baholariga sazovor bo‘ldi.Shunday esa, FinTechHub o‘quv markazida aynan shu til haqida etuk ustozlardan dars olishingiz mumkin. Qaysi ko‘rinishda darsga qatnashingiz o‘zingizga bog‘lik.Onlayn yoki offlayn, buning o‘zingiz hal qilasiz.Birinchi bepul darsga yozilib ko‘ring va saviyani o‘zingiz his eting.Toshkentda backend kurslari deb uzoqlarni izlab yurish shart emas.Metroning "Kosmonavtlar" bekatidan 100 metr masofada joylashgan zamonaviy ofisimizda sizni kutamiz.',
        },
      ],
    },
    title: "Golang tilida Backend kurslari",
    price: "1.400.000 so'm",
    details: [
      "Haftasiga 3 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 10 oygacha",
      "Narx oyiga 1 400 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [
      "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-S4TyBXJ_oeFxmQdcldDAiFH1ZsA1pX_aw&s",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",
    ],
    icon: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
  },
  {
    id: 4,
    courses_detail: {
      detail_image: [],
      detail_desc: [
        {
          detail_title: "Toshkentda DevOps kurslari",
          detail_description:
            "Zamonaviy dasturchilik dunyosida DevOps eng talabgir yo‘nalishlardan biri hisoblanadi. DevOps – bu dasturchilar (Development) va tizim administratorlari (Operations) o‘rtasidagi hamkorlikni kuchaytiruvchi yondashuv bo‘lib, dasturiy ta'minotni yaratish, test qilish va ishga tushirish jarayonlarini avtomatlashtiradi. Toshkentda DevOps kurslariga qatnashgan tinglovchilar zamonaviy IT kompaniyalarda talab qilinadigan CI/CD, Docker, Kubernetes, Linux, GitLab kabi texnologiyalarni chuqur o‘rganish imkoniyatiga ega bo‘ladilar. Bu kurslar amaliy loyihalar bilan boyitilgan va real ish tajribasini beradi.",
        },
        {
          detail_title: "DevOps kurslari FinTechHub markazida",
          detail_description:
            "FinTechHub markazida o‘tilayotgan DevOps kurslari IT sohasiga yangi kirib kelayotganlar va tajribali dasturchilar uchun ham mo‘ljallangan. Kurs davomida talabalar avtomatlashtirish vositalari, monitoring tizimlari, server konfiguratsiyasi va bulutli texnologiyalar (AWS, Azure, Google Cloud) bilan ishlashni o‘rganadilar. Har bir modul yakunida amaliy topshiriqlar va real muhitdagi sinovlar mavjud. Kursni tugatgan talabalar mustaqil tarzda dasturiy ta'minotni ishlab chiqishdan to uni serverga joylashgacha bo‘lgan barcha bosqichlarni bajarish ko‘nikmasiga ega bo‘lishadi.",
        },
        {
          detail_title: "DevOps haqida qisqacha ma'lumot",
          detail_description:
            "DevOps – bu faqatgina texnik yo‘nalish emas, balki kompaniya ichidagi ish jarayonlarini optimallashtiruvchi madaniyatdir. DevOps mutaxassislari kodni yaratishdan tortib, uni foydalanuvchigacha yetkazishgacha bo‘lgan yo‘lni avtomatlashtiradi. Bu esa kompaniyalar uchun vaqt, xarajat va sifat jihatidan katta ustunlik beradi. DevOps bo‘yicha ishlash uchun sizga Linux asoslari, dasturlash tili (odatda Python yoki Bash), tizimlarni monitoring qilish vositalari, shuningdek bulut texnologiyalaridan foydalanish qobiliyati kerak bo‘ladi. Bugungi kunda DevOps mutaxassislari bozorda juda yuqori darajada qadrlanmoqda.",
        },
      ],
    },
    title: "DevOps Engineeing dasturlash kursi",
    price: "1.800.000 so'm",
    details: [
      "Haftasiga 2 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 8 oygacha",
      "Narx oyiga 1 800 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [devops1, devops2, devops3, devops4],
    icon: "https://cdn4.iconfinder.com/data/icons/inspection/512/inspection-qa-qualify-02-512.png",
  },
  {
    id: 5,
    courses_detail: {
      detail_image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZdMC_FB3iUt9yQZujx9L8Etp5FdbP75UJQ&s",
        "https://cdn-icons-png.flaticon.com/512/80/80975.png",
        "https://cdn-icons-png.flaticon.com/512/1431/1431486.png",
        "https://png.pngtree.com/png-vector/20190811/ourlarge/pngtree-vector-server-icon-png-image_1683167.jpg",
        "https://t4.ftcdn.net/jpg/03/22/95/69/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg",
        "https://cdn-icons-png.flaticon.com/512/206/206116.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_iKKB79evbAIrE0mT1PT6U-fk2MjeU3fJQ&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",
        kub,
        "https://img.freepik.com/premium-vector/google-play-logo_578229-280.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png",
      ],
      detail_desc: [
        {
          detail_title: "Toshkentda Flutter kurslari",
          detail_description:
            "Bugungi kunda mobil ilovalarni ishlab chiqish IT sohasining eng mashhur va talabgir yo‘nalishlaridan biriga aylangan. Ayniqsa, Flutter texnologiyasi yordamida bir vaqtning o‘zida iOS va Android uchun ilovalar yaratish imkoniyati mutaxassislar orasida katta qiziqish uyg‘otmoqda. Toshkentda Flutter kurslariga qatnashib, siz zamonaviy dizaynlar yaratish, foydalanuvchi interfeysini sozlash va ilovani tez ishlaydigan holatda qurish sirlarini o‘rganasiz. Kurs davomida siz Dart dasturlash tili bilan tanishib, real loyihalar ustida ishlaysiz.",
        },
        {
          detail_title: "Flutter kurslari FinTechHub akademiyasida",
          detail_description:
            "Agar siz mobil dasturchilik yo‘nalishiga qadam qo‘ymoqchi bo‘lsangiz, FinTechHub’ning Flutter kurslari aynan siz uchun! Bu kursda siz Flutter frameworki yordamida interaktiv, tezkor va zamonaviy mobil ilovalarni yaratishni o‘rganasiz. Darslar davomida siz Dart tilining asoslari, widgetlar bilan ishlash, ilova arxitekturasi, ma’lumotlar bazasi bilan integratsiya va API bilan aloqa kabi muhim bilimlarga ega bo‘lasiz. Har bir modul amaliy mashg‘ulotlar bilan boyitilgan bo‘lib, yakunda o‘z ilovangizni yaratish imkoniyatiga ega bo‘lasiz.",
        },
        {
          detail_title: "Flutter haqida qisqacha ma'lumot",
          detail_description:
            "Flutter – bu Google tomonidan ishlab chiqilgan ochiq manbali framework bo‘lib, bir nechta platforma uchun yagona kod bazasi yordamida mobil ilovalar yaratish imkonini beradi. Flutter’ning eng katta ustunligi – uning tezkorligi, oson interfeys yaratish imkoniyati va kuchli jamiyati. Flutter dasturchilari Dart tilida kod yozadilar va bu orqali yuqori sifatli, chiroyli va funksional ilovalar yaratishadi. Agar siz zamonaviy va tezkor ishlaydigan ilovalar yaratishni istasangiz, Flutter aynan siz izlayotgan texnologiyadir.",
        },
      ],
    },
    title: "Ilova yaratadigan Mobile Flutter kurslari",
    price: "1.400.000 so'm",
    details: [
      "Haftasiga 3 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 10 oygacha",
      "Narx oyiga 1 400 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [
      "https://storage.googleapis.com/cms-storage-bucket/a9d6ce81aee44ae017ee.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRk9iJdQgPS35Xcc0OXIKvqfmBVaW4f2s1g&s",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
      "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
    ],
    icon: "https://storage.googleapis.com/cms-storage-bucket/a9d6ce81aee44ae017ee.png",
  },
  {
    id: 6,
    courses_detail: {
      detail_image: [],
      detail_desc: [
        {
          detail_title: "Toshkentda bolalar uchun Scratch kurslari",
          detail_description:
            "Zamon bilan hamnafas bo‘lgan holda bolalarimizga yoshligidan dasturlashni o‘rgatish – bu kelajak uchun eng to‘g‘ri investitsiya hisoblanadi. Bugungi kunda Scratch kabi vizual dasturlash tillari bolalar uchun dasturlash olamiga kirish eshigidir. Bu nafaqat qiziqarli, balki bolaning mantiqiy fikrlash, muammo yechish, kreativlik kabi ko‘nikmalarini ham rivojlantiradi. Toshkentdagi Scratch kurslarida bolalar interaktiv o‘yinlar, animatsiyalar va kichik dasturlar yozishni o‘rganadilar. Har bir dars ular uchun sarguzashtga boy va foydali tajriba bo‘ladi.",
        },
        {
          detail_title: "FinTechHub bolalar laboratoriyasida Scratch kurslari",
          detail_description:
            "Scratch – bu 7 yoshdan oshgan bolalar uchun mo‘ljallangan dasturlash tili bo‘lib, u orqali ular o‘z g‘oyalari asosida o‘yinlar, multfilmlar, hikoyalar yaratishi mumkin. FinTechHub bolalar laboratoriyasida bu kurslar maxsus o‘qituvchilar tomonidan qiziqarli shaklda o‘tiladi. Har bir bola mustaqil fikrlash, tartibli ishlash, kompyuterda to‘g‘ri ishlashni o‘rganadi. Bu nafaqat IT sohasiga kirish, balki shaxsiy rivojlanishning ham muhim qismidir. Kurslar yakunida bolalar o‘z loyihalarini yaratib, namoyish etish imkoniyatiga ega bo‘ladilar.",
        },
        {
          detail_title: "Scratch haqida bolalar uchun",
          detail_description:
            "Scratch – bu dasturlashga ilk qadam. U orqali bolalar matnli kod yozmasdan turib, vizual bloklar yordamida dasturlar tuzadilar. Masalan, xarakterlar (personajlar) harakat qiladi, tovush chiqaradi yoki muayyan hodisalarga javob qaytaradi. Bu uslub bolaning texnik tafakkurini o‘stiradi, sabr-toqat va diqqatni jamlashni o‘rgatadi. Scratch dasturlash oson va tushunarli bo‘lgani uchun bolalar bu darslarni o‘yin kabi qabul qiladilar. Unda ular hikoya yaratish, animatsiya qilish, matematik mantiqni o‘rganish va eng muhimi – o‘z fikrini ifoda etishni o‘rganadilar.",
        },
      ],
    },
    title: "Kids kurslari",
    price: "980.000 so'm",
    details: [
      "Haftasiga 3 kun",
      "Kuniga 2 soatdan",
      "Davomiyligi 6 oygacha",
      "Narx oyiga 1 000 000 so'm",
      "Ikkiga bo'lib to'lash mumkin",
    ],
    images: [
      "https://static-00.iconduck.com/assets.00/openai-icon-1011x1024-uztb7qme.png",
      "https://cdn-icons-png.flaticon.com/512/919/919846.png",
      "https://iconape.com/wp-content/png_logo_vector/microsoft-office-2013.png",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/919/919846.png",
  },
];

const CourseDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;

  const description: Description[] = [
    {
      icon: <IoIosTimer />,
      color: "#1888c9",
      title: "Dars soati",
      des: "2 soat",
    },
    {
      icon: <FaRegFileAlt />,
      color: "#7c4bc0",
      title: "Dars davomiyligi",
      des: Number(id) === 4 ? "8 oy" : "10 oy",
    },
    {
      icon: <RxAvatar />,
      color: "#f16101",
      title: "O'quvchilar soni",
      des: "12 ta",
    },
    {
      icon: <FaPlay />,
      color: "#1888c9",
      title: "T'alim turi",
      des: "Offline",
    },
    {
      icon: <CiFlag1 />,
      color: "#d23f3f",
      title: "Daraja",
      des: "Boshlang'ich",
    },
    {
      icon: <IoIosNotificationsOutline />,
      color: "#33a9bb",
      title: "Dars tili",
      des: "O'zbek tili",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  const findedElement = courses?.find((item) => item.id === Number(id));

  if (!findedElement) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Course not found</p>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Main Content */}
      <div className="flex justify-start w-full flex-col items-center">
        {/* Course Details Section */}
        <div className="flex items-start justify-between w-full py-[70px] px-[7%] max-w-[1440px] gap-8 flex-wrap lg:flex-nowrap">
          {/* Left Column - Course Info */}
          <div className="w-full max-w-[1000px]">
            <div>
              <h1 className="text-[38px] font-bold transition-colors duration-300 hover:text-orange-600">
                {findedElement?.title}
              </h1>
              <div className="text-orange-600 text-base flex items-center py-2.5 flex-wrap gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="transition-transform duration-200 hover:scale-125 hover:rotate-6 hover:text-orange-500"
                  />
                ))}
                <Badge variant="secondary" className="mx-5 text-sm">
                  12 ta o'quvchi
                </Badge>
              </div>
            </div>
            <img
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
              alt="Frontend course"
              className="w-full rounded-lg shadow-md mt-6"
            />
          </div>

          {/* Right Column - Price & Details */}
          <div className="flex flex-col gap-8 w-full max-w-[340px]">
            {/* Price Card */}
            <Card className="transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  Kursning narxi
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-5">
                <h1 className="text-[28px] font-semibold leading-tight">
                  {findedElement?.price}
                </h1>
                <Button
                  size="lg"
                  className="w-4/5 bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Kursni sotib olish
                </Button>
              </CardContent>
            </Card>

            {/* Details List */}
            <div className="flex flex-col w-full max-w-[340px] gap-0">
              {description?.map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border-t-0 first:border-t rounded-none first:rounded-t-lg last:rounded-b-lg"
                >
                  <CardContent className=" flex items-center gap-2">
                    <div
                      className="min-w-10 h-10 rounded-full text-xl flex items-center justify-center text-white transition-transform duration-300 hover:rotate-12 hover:scale-110"
                      style={{ backgroundColor: item?.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex gap-1  flex-wrap items-center">
                      <p className="text-base text-muted-foreground m-0">
                        {item.title}:
                      </p>
                      <span className="font-bold text-[15px]">
                        {item?.des}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Course Banner */}
        <CourseDetailBanner findedElement={findedElement} />
      </div>
    </div>
  );
};

export default CourseDetail;