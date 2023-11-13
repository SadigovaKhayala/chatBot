// database.js
const database = {
  komputer: {
    questions: [
      "1. Kompüterin parolu dəyişmək və ya blokdan çıxartmaq",
      "2. Yeni kompüter sifariş edilməsi",
      "3. Kompüteri yenisi ilə əvəz edilməsi",
      "4. Kompüteri təmir etmək lazımdır",
    ],
    answers: [
      "Təlimatı Sizə göndəririk ..........pdf file",
      'Manage Engine sistmində "Kompüter" - "Yeni işçi üçün kompüre sifarişi" sorğusunu yaradın zəhmət olmasa.',
      'Manage Engine sistmində "Kompüter" - "Yenisi ilə əvəz olunması" sorğusunu yaradın zəhmət olmasa.',
    ],
    divs: [
      "<div>Təlimatı Sizə göndəririk ..........pdf file</div>",
      `<div>Manage Engine sistmində "Kompüter" - "Yeni işçi üçün kompüre sifarişi" sorğusunu yaradın zəhmət olmasa.</div>`,
      `<div>'Manage Engine sistmində "Kompüter" - "Yenisi ilə əvəz olunması" sorğusunu yaradın zəhmət olmasa.',</div>`,
      `<div>Manage Engine sistmində "Kompüter" - "Kompüter işləmir" sorğusunu yaradın zəhmət olmasa.</div>`,
    ],
  },
  printer: {
    questions: [
      "1. Printeri və skaneri kompüterə qoşulması",
      "2. Printerində çap etmək mümkün deyil ",
      "3.Printerdə kağız ilişib",
    ],
    answers: [
      "Təlimatı Sizə göndəririk ..........pdf file",
      'Manage Engine sistmində "Kompüter" - "Yeni işçi üçün kompüre sifarişi" sorğusunu yaradın zəhmət olmasa.',
      'Manage Engine sistmində "Kompüter" - "Yenisi ilə əvəz olunması" sorğusunu yaradın zəhmət olmasa.',
    ],

    divs: [
      "<div>Hello, I am a printer1!</div>",
      "<div>Hello, I am a printer 2</div>",
      "<div>Hello, I am a printer 3!</div>",
    ],
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
