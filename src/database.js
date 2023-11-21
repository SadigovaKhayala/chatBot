// database.js
const database = {
  komputer: {
    questions: [
      "1.Yeni komputerin sifarişi.",
      "2. Mövcud komputerin yenisi ilə əvəz olunması.",
      "3. Komputerinin təmirə göndərilməsi.",
      "4. Komputerin Ram yaddaşının artırılması.",
      "5. Komputerə SSD yaddaşının əlavə edilməsi .",
      "6. Komputerə giriş parolunun dəyişdirilməsi və ya unblock edilməsi.",
      "7. Yeni əməliyyat sisteminin quraşdırılması (komputerin format edilməsi).",
      "8. Digər müraciətlər. ",
    ],
    answers: [
      "Yeni komputer sifarişi üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur.",
      "Mövcud komputerin yenisi ilə əvəz olunması  üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur.",
      "Komputerinin təmirə göndərilməsi  üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur.",
      "Komputerin Ram yaddaşının artırılması  üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur.",
      "Komputerə SSD yaddaşının əlavə edilməsi  üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur.",
      "Komputerə giriş parolunun dəyişdirilməsi və ya unblock edilməsi üçün izahlı pdf təlimatı göndərildi. ",
      "Yeni əməliyyat sisteminin quraşdırılması (komputerin format edilməsi) üçün sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur. ",
      "Digər kateqoriyalı müraciət üçün aşağıdakı linkdən bizə yazın.",
    ],
    links: {
      1: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=18304&requestServiceId=307",
      2: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=1801&requestServiceId=307  ",
      3: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=364&requestServiceId=307",
      4: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=689&requestServiceId=307",
      5: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templ**ates&module=serviceRequest&reqTemplate=1802&requestServiceId=307",
      7: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=741&requestServiceId=307",
    },
    mails: {
      8: true,
    },
  },
  printer: {
    questions: [
      "1.Yeni printerin sifarişi.",
      "2.Mövcud printerin yenisi ilə əvəz olunmasıı.",
      "3.Printerin təmirə göndərilməsi.",
      "4.Printerin kompyuterə qoşulması",
      "5.Printerin fiziki olarak quraşdırılması.",
      "6.Printerdə olan nasazlıq(Kağızın ilişməsi, Çapa getmir və s.)",
      " 7. Digər müraciətlər. ",
    ],
    answers: [
      "Təlimatı Sizə göndəririk ..........pdf file",
      "Təlimatı Sizə göndəririk ..........pdf file",
      "Təlimatı Sizə göndəririk ..........pdf file",
      "Printerin kompyuterə qoşulması üçün  sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur. ",
      " Printerin fiziki olarak quraşdırılması üçün  sorgu linki aşağıda qeyd edilmişdir. Linkə click edərək sorğu yaratmağınız xahiş olunur. ",
      "Təlimatı Sizə göndəririk ..........pdf file",
    ],
    links: {
      4: "https://newsupport.abb-bank.az/WorkOrder.do?woMode=newWO&from=Templates&module=serviceRequest&reqTemplate=339&requestServiceId=304",
    },

    mails: {
      7: true,
    },
  },
  email: {
    questions: [
      "1. Email dolub və arxiv etmək lazımdır.",
      "2. Email qəbul edə bilmirəm.",
      "3. Email qrupuna əlavə olunması lazımdır.",
    ],
    answers: [
      "Təlimatı Sizə göndəririk ..........pdf file",
      'Manage Engine sistmində "Kompüter" - "Yeni işçi üçün kompüre sifarişi" sorğusunu yaradın zəhmət olmasa.',
      'Manage Engine sistmində "Kompüter" - "Yenisi ilə əvəz olunması" sorğusunu yaradın zəhmət olmasa.',
    ],

    divs: [
      "<div>Hello, I am a email1!</div>",
      "<div>Hello, I am a email 2</div>",
      "<div>Hello, I am a email 3!</div>",
    ],
  },
};

export default database;
