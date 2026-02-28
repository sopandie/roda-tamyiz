const gameData = {
  kolom1: [
    {
      text: "بِ",
      correct: "dengan",
      options: ["seperti", "dengan", "untuk", "dari"],
    },
    {
      text: "كَ",
      correct: "seperti",
      options: ["seperti", "dengan", "untuk", "dari"],
    },
    {
      text: "لِ",
      correct: "untuk",
      options: ["di atas", "seperti", "untuk", "dengan"],
    },
    {
      text: "لَ",
      correct: "untuk",
      options: ["hingga", "dari", "untuk", "dengan"],
    },
    {
      text: "إِلَى",
      correct: "kepada",
      options: ["hingga", "kepada", "di atas", "di dalam"],
    },
    {
      text: "عَلَى",
      correct: "di atas",
      options: ["untuk", "dari", "di dalam", "di atas"],
    },
    {
      text: "مِنْ",
      correct: "dari",
      options: ["untuk", "dari", "seperti", "di dalam"],
    },
    {
      text: "فِي",
      correct: "di dalam",
      options: ["seperti", "dengan", "di dalam", "di atas"],
    },
    {
      text: "عَنْ",
      correct: "dari",
      options: ["di dalam", "seperti", "untuk", "dari"],
    },
    {
      text: "حَتَّى",
      correct: "hingga",
      options: ["hingga", "di dalam", "di atas", "dari"],
    },
  ],

  kolom2_5: [
    {
      text: "يَا",
      correct: "wahai",
      options: ["dengan", "seperti", "untuk", "wahai"],
    },
    {
      text: "اِلَّا",
      correct: "kecuali",
      options: ["seperti", "kecuali", "untuk", "dari"],
    },
    {
      text: "لَا",
      correct: "tidak ada",
      options: ["tidak ada", "kecuali", "untuk", "dengan"],
    },
    {
      text: "اِنَّ",
      correct: "sesungguhnya",
      options: ["tetapi", "semoga", "andaikan", "sesungguhnya"],
    },
    {
      text: "اَنَّ",
      correct: "sesungguhnya",
      options: ["semoga", "andaikan", "sesungguhnya", "seakan"],
    },
    {
      text: "كَأَنَّ",
      correct: "seakan",
      options: ["semoga", "andaikan", "sesungguhnya", "seakan"],
    },
    {
      text: "لٰكِنَّ",
      correct: "tetapi",
      options: ["seakan", "tetapi", "seperti", "di dalam"],
    },
    {
      text: "لَعَلَّ",
      correct: "semoga",
      options: ["semoga", "andaikan", "seakan", "sesungguhnya"],
    },
    {
      text: "لَيْتَ",
      correct: "andaikan",
      options: ["semoga", "andaikan", "seakan", "sesungguhnya"],
    },
  ],

  kolom6_7: [
    {
      text: "كَانَ",
      correct: "adalah",
      options: ["dengan", "adalah", "bukan", "tiada"],
    },
    {
      text: "لَيْسَ",
      correct: "bukan",
      options: ["dengan", "adalah", "bukan", "tiada"],
    },
    {
      text: "اَنْ",
      correct: "hendaknya",
      options: ["supaya", "sesungguhnya", "tidak akan", "hendaknya"],
    },
    {
      text: "لَنْ",
      correct: "tidak akan",
      options: ["supaya", "sesungguhnya", "tidak akan", "hendaknya"],
    },
    {
      text: "اِذَنْ",
      correct: "kalau demikian",
      options: ["kalau demikian", "supaya", "sesungguhnya", "hingga"],
    },
    {
      text: "كَيْ",
      correct: "supaya",
      options: ["supaya", "tidak akan", "hingga", "kalau demikian"],
    },
    {
      text: "لِ",
      correct: "supaya",
      options: ["supaya", "tidak akan", "hingga", "kalau demikian"],
    },
    {
      text: "حَتّٰى",
      correct: "hingga",
      options: ["semoga", "tidak akan", "kalau demikian", "hingga"],
    },
  ],

  kolom8_10: [
    {
      text: "لَا",
      correct: "janganlah",
      options: ["janganlah", "tidak ada", "hendaklah", "bukan"],
    },
    {
      text: "لَمْ",
      correct: "tidak",
      options: ["tidak ada", "jika tidak", "tidak", "hendaklah"],
    },
    {
      text: "لَمَّا",
      correct: "tidak",
      options: ["bukan", "janganlah", "jika", "tidak"],
    },
    {
      text: "لِ",
      correct: "hendaklah",
      options: ["supaya", "wahai", "janganlah", "hendaklah"],
    },
    {
      text: "وَلْ",
      correct: "hendaklah",
      options: ["supaya", "tidak akan", "hendaklah", "wahai"],
    },
    {
      text: "فَلْ",
      correct: "hendaklah",
      options: ["supaya", "tidak akan", "hendaklah", "wahai"],
    },
    {
      text: "اِنْ",
      correct: "jika",
      options: ["maka", "jika", "apa", "siapa"],
    },
    {
      text: "مَنْ",
      correct: "siapa",
      options: ["jika", "apa", "tidak", "siapa"],
    },
    {
      text: "مَا",
      correct: "apa",
      options: ["jika", "apa", "tidak", "siapa"],
    },
    {
      text: "اَيْنَمَا",
      correct: "ke manapun",
      options: ["di manapun", "bagaimanapun", "ke manapun", "siapapun"],
    },
    {
      text: "حَيْثُمَا",
      correct: "di manapun",
      options: ["di manapun", "ke manapun", "bagaimanapun", "siapapun"],
    },
    {
      text: "مَهْمَا",
      correct: "bagaimanapun",
      options: ["di manapun", "bagaimanapun", "ke manapun", "siapapun"],
    },


  ],
  kolom11_12: [
    {
      text: "اِلَّا",
      correct: "kecuali",
      options: ["tidak ada", "janganlah", "kecuali", "bukan"],
    },
    {
      text: "اَلَّا",
      correct: "hendaknya jangan",
      options: ["kecuali", "hendaknya jangan", "sekali-kali jangan", "sungguh"],
    },
    {
      text: "كَلَّا",
      correct: "sekali-kali jangan",
      options: ["kecuali", "hendaknya jangan", "sekali-kali jangan", "sungguh"],
    },
    {
      text: "يَا",
      correct: "wahai",
      options: ["wahai", "jika", "janganlah", "hendaklah"],
    },
    {
      text: "يَااَيُّهَا",
      correct: "wahai",
      options: ["jika", "hendaklah", "wahai", "supaya"],
    },
    {
      text: "يَااَيَّتُهاَ",
      correct: "wahai",
      options: ["supaya", "tidak akan", "hendaklah", "wahai"],
    },
  ],
  kolom13: [
    {
      text: "وَ",
      correct: "dan",
      options: ["jika", "atau", "dan", "maka"],
    },
    {
      text: "اَوْ",
      correct: "atau",
      options: ["atau", "maka", "adapun", "bahkan"],
    },
    {
      text: "فَ",
      correct: "maka",
      options: ["sehingga", "bahkan", "maka", "adapun"],
    },
    {
      text: "اَمْ",
      correct: "atau",
      options: ["jika", "atau", "dan", "maka"],
    },
    {
      text: "اَمَّا",
      correct: "adapun",
      options: ["atau", "maka", "adapun", "bahkan"],
    },
    {
      text: "ثُمَّ",
      correct: "kemudian",
      options: ["semoga", "kemudian", "tiada", "jika"],
    },
    {
      text: "بَلْ",
      correct: "bahkan",
      options: ["bahkan", "semoga", "akan tetapi", "hingga"],
    },
    {
      text: "حَتّٰى",
      correct: "sehingga",
      options: ["kemudian", "tiada", "maka", "sehingga"],
    },
    {
      text: "لٰكِنْ",
      correct: "akan tetapi",
      options: ["bahkan", "atau", "bahkan", "akan tetapi"],
    },
  ],
  kolom14_17: [
    {
      text: "لَ",
      correct: "sungguh",
      options: ["dengan", "seperti", "untuk", "sungguh"],
    },
    {
      text: "قَدْ",
      correct: "sungguh",
      options: ["sungguh", "kecuali", "untuk", "dari"],
    },
    {
      text: "لَقَدَْ",
      correct: "sungguh",
      options: ["tidak ada", "sungguh", "untuk", "dengan"],
    },
    {
      text: "سَ",
      correct: "akan",
      options: ["akan", "sejelek-jelek", "bukan", "sebaik-baik"],
    },
    {
      text: "سَوْفَ",
      correct: "akan",
      options: ["sebaik-baik", "sejelek-jelek", "bukan", "akan"],
    },
    {
      text: "مَا",
      correct: "bukan",
      options: ["sungguh", "akan", "bukan", "sebaik-baik"],
    },
    {
      text: "لَا",
      correct: "bukan",
      options: ["sungguh", "akan", "bukan", "sebaik-baik"],
    },
    {
      text: "نِعْمَ",
      correct: "sebaik-baik",
      options: ["sebaik-baik", "sejelek-jelek", "akan", "bukan"],
    },
    {
      text: "بِـئْسَ",
      correct: "sejelek-jelek",
      options: ["sebaik-baik", "sejelek-jelek", "akan", "bukan"],
    },
  ],
  kolom18: [
    {
      text: "اِذْ",
      correct: "jika",
      options: ["ketika", "jika", "jika tidak", "adapun"],
    },
    {
      text: "اِذَا",
      correct: "jika",
      options: ["adapun", "ketika", "jika", "dengan"],
    },
    {
      text: "اِذَنْ",
      correct: "jika",
      options: ["ketika", "ketika", "dengan", "jika"],
    },
    {
      text: "اِمَّا",
      correct: "jika tidak",
      options: ["akan", "mengapa tidak", "walaupun", "jika tidak"],
    },
    {
      text: "اَمَّا",
      correct: "adapun",
      options: ["adapun", "ketika", "jika", "walaupun"],
    },
    {
      text: "لَمَّا",
      correct: "ketika",
      options: ["adapun", "jika", "ketika", "walaupun"],
    },
    {
      text: "لَوْ",
      correct: "walaupun",
      options: ["adapun", "jika", "ketika", "walaupun"],
    },
    {
      text: "لَوْلَا",
      correct: "mengapa tidak",
      options: ["jika", "mengapa tidak", "walaupun", "ketika"],
    },
    {
      text: "لَوْمَا",
      correct: "mengapa tidak",
      options: ["mengapa tidak", "walaupun", "jika", "adapun"],
    },
  ],
  kolom19: [
    {
      text: "اَ",
      correct: "apakah",
      options: ["ingatlah", "siapakah", "apakah", "di mana"],
    },
    {
      text: "اَلَا",
      correct: "ingatlah",
      options: ["siapakah", "apakah", "di mana", "ingatlah"],
    },
    {
      text: "اَيُّ",
      correct: "siapakah",
      options: ["siapakah", "di mana", "apakah", "kapan"],
    },
    {
      text: "اَيْنَ",
      correct: "di mana",
      options: ["berapa", "kapan", "bagaimana", "di mana"],
    },
    {
      text: "مَا",
      correct: "apakah",
      options: ["mengapa", "kapan", "apakah", "akan"],
    },
    {
      text: "مَنْ",
      correct: "siapakah",
      options: ["berapa", "kapan", "apakah", "siapakah"],
    },
    {
      text: "مَتٰى",
      correct: "kapan",
      options: ["kapan", "berapa", "di mana", "walaupun"],
    },
    {
      text: "كَمْ",
      correct: "berapa",
      options: ["bagaimana", "ingatlah", "berapa", "bukan"],
    },
    {
      text: "كَيفَ",
      correct: "bagaimana",
      options: ["walaupun", "bagaimana", "ingatlah", "berapa"],
    },
    {
      text: "هَلْ",
      correct: "apakah",
      options: ["kapan", "apakah", "akan", "bukan"],
    },
    {
      text: "مَاذَا",
      correct: "apakah",
      options: ["kapan", "ingatlah", "apakah", "bukan"],
    },
    {
      text: "لِمَا",
      correct: "mengapa",
      options: ["bagaimana", "berapa", "mengapa", "kapan"],
    },
    {
      text: "لِمَاذَا",
      correct: "mengapa",
      options: ["siapakah", "apakah", "berapa", "mengapa"],
    },
  ],
  kolom20: [
    {
      text: "قَبْلَ",
      correct: "sebelum",
      options: ["sesudah", "sebelum", "selain", "di atas"],
    },
    {
      text: "بَعْدَ",
      correct: "sesudah",
      options: ["di bawah", "di samping", "sesudah", "sebelum"],
    },
    {
      text: "غَيْرَ",
      correct: "selain",
      options: ["selain", "setiap", "beserta", "dengan"],
    },
    {
      text: "دُوْنَ",
      correct: "selain",
      options: ["akan", "di atas", "di samping", "selain"],
    },
    {
      text: "اَمَامَ",
      correct: "di depan",
      options: ["sebaik-baik", "di sisi", "bukan", "di depan"],
    },
    {
      text: "وَرَاءَ",
      correct: "di belakang",
      options: ["di belakang", "akan", "bukan", "sebaik-baik"],
    },
    {
      text: "خَلْفَ",
      correct: "di belakang",
      options: ["sungguh", "akan", "bukan", "di belakang"],
    },
    {
      text: "فَوْقَ",
      correct: "di atas",
      options: ["sebaik-baik", "sejelek-jelek", "di atas", "bukan"],
    },
    {
      text: "تَحْتَ",
      correct: "di bawah",
      options: ["sebaik-baik", "di bawah", "akan", "bukan"],
    },
    {
      text: "جَانِبَ",
      correct: "di samping",
      options: ["di samping", "sejelek-jelek", "di samping", "bukan"],
    },
    {
      text: "حَوْلَ",
      correct: "di sekitar",
      options: ["sebaik-baik", "sejelek-jelek", "di sekitar", "bukan"],
    },
    {
      text: "كُلَّ",
      correct: "setiap",
      options: ["sebaik-baik", "setiap", "akan", "bukan"],
    },
    {
      text: "مَعَ",
      correct: "beserta",
      options: ["sebaik-baik", "sejelek-jelek", "akan", "beserta"],
    },
    {
      text: "عِنْدَ",
      correct: "di sisi",
      options: ["sebaik-baik", "di sisi", "akan", "bukan"],
    },
    {
      text: "بَيْنَ",
      correct: "di antara",
      options: ["Di Antara", "di antara", "akan", "bukan"],
    },
  ],
  kolom21: [
    {
      text: "اَلَّذِي",
      correct: "yang",
      options: ["seperti", "yang", "orang-orang yang", "dari"],
    },
    {
      text: "اَلَّذَانِ",
      correct: "yang",
      options: ["yang", "dengan", "untuk", "orang-orang yang"],
    },
    {
      text: "اَلَّذِيْنَ",
      correct: "orang-orang yang",
      options: ["yang", "seperti", "untuk", "orang-orang yang"],
    },
    {
      text: "اَلَّتِي",
      correct: "yang",
      options: ["hingga", "dari", "yang", "orang-orang yang"],
    },
    {
      text: "اَلَّتَانِ",
      correct: "yang",
      options: ["hingga", "yang", "di atas", "di dalam"],
    },
    {
      text: "اَلَّاتِي",
      correct: "orang-orang yang",
      options: ["untuk", "yang", "orang-orang yang", "di atas"],
    },
    {
      text: "اَلَّائِي",
      correct: "orang-orang yang",
      options: ["yang", "dari", "seperti", "orang-orang yang"],
    },
    {
      text: "مَا",
      correct: "apa yang",
      options: ["yang", "apa yang", "di dalam", "di atas"],
    },
    {
      text: "مَنْ",
      correct: "siapa yang",
      options: ["siapa yang", "seperti", "yang", "dari"],
    },
  ],
  kolom22: [
    {
      text: "ذٰلِكَ",
      correct: "itu",
      options: ["seperti", "itu", "untuk", "mereka itu"],
    },
    {
      text: "ذٰلِكُمَا",
      correct: "itu",
      options: ["itu", "dengan", "mereka itu", "dari"],
    },
    {
      text: "ذٰلِكُمْ",
      correct: "itu",
      options: ["mereka itu", "itu", "untuk", "dengan"],
    },
    {
      text: "تِلْكَ",
      correct: "itu",
      options: ["hingga", "dari", "untuk", "itu"],
    },
    {
      text: "تِلْكُمَا",
      correct: "itu",
      options: ["hingga", "itu", "di atas", "di dalam"],
    },
    {
      text: "تِلْكُمْ",
      correct: "itu",
      options: ["itu", "dari", "di dalam", "di atas"],
    },
    {
      text: "اُولٓئِكَ",
      correct: "mereka itu",
      options: ["untuk", "dari", "mereka itu", "di dalam"],
    },
  ],
  kolom23: [
    {
      text: "هٰذَا",
      correct: "ini",
      options: ["seperti", "itu", "ini", "mereka ini"],
    },
    {
      text: "هٰذَانِ",
      correct: "ini",
      options: ["itu", "dengan", "mereka ini", "ini"],
    },
    {
      text: "هٰؤُلٓاءِ",
      correct: "mereka ini",
      options: ["mereka ini", "itu", "untuk", "dengan"],
    },
    {
      text: "هٰذِهِ",
      correct: "ini",
      options: ["hingga", "dari", "untuk", "itu"],
    },
    {
      text: "هٰتَانِ",
      correct: "ini",
      options: ["hingga", "ini", "di atas", "di dalam"],
    },
    {
      text: "هٰؤُلٓاءِ",
      correct: "mereka ini",
      options: ["mereka ini", "dari", "di dalam", "di atas"],
    },
  ],
  kolom24: [
    {
      text: "هُوَ",
      correct: "dia (L-1)",
      options: ["dia (L-2)", "dia (L-1)", "dia (W-1)", "dia (W-2)"],
    },
    {
      text: "هُمَا",
      correct: "dia (L-2)",
      options: ["kamu (W-2)", "kamu (L-2)", "dia (L-1)", "dia (L-2)"],
    },
    {
      text: "هُمْ",
      correct: "mereka (L)",
      options: ["mereka (W)", "mereka (L)", "dia (L-1)", "dia (L-2)"],
    },
    {
      text: "هِيَ",
      correct: "dia (W-1)",
      options: ["dia (L-2)", "dia (L-1)", "dia (W-1)", "dia (W-2)"],
    },
    {
      text: "هُمَا",
      correct: "dia (W-2)",
      options: ["dia (W-2)", "dia (W-1)", "mereka (W)", "mereka (L)"],
    },
    {
      text: "هُنَّ",
      correct: "mereka (W)",
      options: ["dia (W-2)", "dia (W-1)", "mereka (W)", "mereka (L)"],
    },
    {
      text: "اَنْتَ",
      correct: "kamu (L-1)",
      options: ["kamu (W-1)", "kamu (W-2)", "kalian (L)", "kamu (L-1)"],
    },
    {
      text: "اَنْـتُمَا",
      correct: "kamu (L-2)",
      options: ["kamu (W-1)", "dia (W-2)", "kalian (L)", "kamu (L-2)"],
    },
    {
      text: "اَنْـتُمْ",
      correct: "kalian (L)",
      options: ["kalian (W)", "mereka (L)", "kalian (L)", "mereka (W)"],
    },
    {
      text: "اَنْتِ",
      correct: "kamu (W-1)",
      options: ["kamu (W-1)", "kamu (W-2)", "kamu (L-1)", "kamu (L-2)"],
    },
    {
      text: "اَنْـتُمَا",
      correct: "kamu (W-2)",
      options: ["kamu (W-1)", "kamu (W-2)", "dia (W-2)", "dia (L-2)"],
    },
    {
      text: "اَنْـتُنَّ",
      correct: "kalian (W)",
      options: ["kalian (L)", "mereka (L)", "kalian (W)", "mereka (W)"],
    },
    {
      text: "اَنَا",
      correct: "saya",
      options: ["saya", "kami", "kalian (W)", "kalian (L)"],
    },
    {
      text: "نَحْنُ",
      correct: "kami",
      options: ["saya", "kami", "mereka (L)", "mereka (W)"],
    },
  ],
  kolom25: [    {
      text: "هُ/هِ",
      correct: "dia (L-1)",
      options: ["dia (L-2)", "dia (L-1)", "dia (W-1)", "dia (W-2)"],
    },
    {
      text: "هُمَا/هِمَا",
      correct: "dia (L2)",
      options: ["kamu (L1)", "kamu (L2)", "dia (L1)", "dia (L2)"],
    },
    {
      text: "هُمْ/هِمْ",
      correct: " mereka (L)",
      options: ["kalian(L)", "kalian(P)", "mereka (L)", " mereka (P)"],
    },
    {
      text: "هَا",
      correct: "dia (P1)",
      options: ["dia (P1)", " dia (P2)", "kamu(L1)", "kamu(L2)"],
    },
    {
      text: "هُمَا/هِمَا",
      correct: "dia (L2/P2)",
      options: ["dia (L2/P2)", "dia (P2)", "mereka (L)", "mereka (P)"],
    },
    {
      text: "هُنَّ/هِنَّ",
      correct: "mereka (P)",
      options: ["kalian (L)", "kalian (P)", "mereka (L)", "mereka (P)"],
    },
    {
      text: "كَ",
      correct: "kamu (L1)",
      options: ["kalian (L)", "kamu (L2)", "kamu (L1)", "kalian (P)"],
    },
    {
      text: "كُمَا",
      correct: "kamu (L2/P2)",
      options: ["kamu (L2/P2)", "dia (L2/P2)", "kalian (P)", "kalian (L)"],
    },
    {
      text: "كُمْ",
      correct: "kalian (L)",
      options: ["kalian (P)", "kalian (L)", "mereka (P)", "mereka (L)"],
    },
    {
      text: "كِ",
      correct: "kamu (P1)",
      options: ["kamu (P1)", "kamu (P2)", "kamu (L1)", "kamu (L2)"],
    },
    {
      text: "كُنَّ",
      correct: "kalian (P)",
      options: ["mereka (L)", "mereka (P)", "kalian (L)", "kalian (P)"],
    },
    {
      text: "ـيْ/ـيَ/نِى",
      correct: "saya",
      options: ["kami", "saya", "mereka", "dia"],
    },
    {
      text: "نَا ",
      correct: "kami",
      options: ["saya", "kami", "dia", "mereka"],
    },
],
  kolom26: [    {
      text: "اِيَّاهُ",
      correct: "hanya kepadanya (L1)",
      options: ["hanya kepadanya (P1)", " hanya kepadanya (L2)", "hanya kepadanya (L1)", " hanya kepadanya (P2)"],
    },
    {
      text: "اِيَّاهُمَا",
      correct: " hanya kepadanya (L2/P2)",
      options: ["hanya kepadanya (L1)", " hanya kepadanya (P1)", " hanya kepadanya (L1/P1)", " hanya kepadanya (L2/P2)"],
    },
    {
      text: "اِيَّاهُمْ",
      correct: "hanya kepada mereka (L)",
      options: ["hanya kepada mereka (P)", " hanya kepada mereka (L)", " hanya kepada kalian (P)", " hanya kepada kalian (L)"],
    },
    {
      text: "اِيَّاهَا",
      correct: "hanya kepadanya (P1)",
      options: ["hanya kepadanya (L1)", " hanya kepadanya (L2)", " hanya kepadanya (P1)", " hanya kepadanya (P2)"],
    },
    {
      text: "اِيَّاهُنَّ",
      correct: " hanya kepada mereka (P)",
      options: ["hanya kepada mereka (P)", " hanya kepada mereka (L)", " hanya kepada kalian (P)", " hanya kepada mereka (L)"],
    },
    {
      text: "اِيَّاكَ",
      correct: "hanya kepadamu (L1)",
      options: ["hanya kepadamu (P1)", " hanya kepadamu (L1)", " hanya kepadamu (P2)", " hanya kepadamu (L2)"],
    },
    {
      text: "اِيَّاكُمَا",
      correct: " hanya kepadamu (L2/P2)",
      options: ["hanya kepadamu (L1/P1)", " hanya kepadamu (L2/P2)", " hanya kepada mereka (L)", " hanya kepada mereka (P)"],
    },
    {
      text: "اِيَّاكُمْ",
      correct: "hanya kepada kalian (L)",
      options: ["hanya kepada mereka (P)", " hanya kepada mereka (L)", " hanya kepada kalian (P)", " hanya kepada kalian (L)"],
    },
    {
      text: "اِيَّاكِ",
      correct: "hanya kepadamu (P1)",
      options: ["hanya kepadamu (P1)", " hanya kepadamu (P2)", " hanya kepadaku (L1)", " hanya kepadaku (P1)"],
    },
    {
      text: "اِيَّاكُنَّ",
      correct: "hanya kepada kalian (P)",
      options: ["hanya kepada kalian (L)", " hanya kepada mereka (P) ", "hanya kepada kalian (P)", " hanya kepada mereka (L) "],
    },
    {
      text: "اِيَّايَ",
      correct: "hanya kepadaku",
      options: ["hanya kepadaku", " hanya kepadamu", "hanya kepada kalian", " hanya kepada mereka"],
    },
    {
      text: "اِيَّانَا",
      correct: "hanya kepada kami",
      options: ["hanya kepada kamu", " hanya kepadaku", " hanya kepada kami", " hanya kepada mereka"],
    },
],
};
