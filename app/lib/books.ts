export type Book = {
  id: string;
  image: string;
  backImage?: string;
  year: string;
  category:
    | "Constitutional Law"
    | "Criminal Law"
    | "Memoir"
    | "Translation"
    | "Human Rights"
    | "Legal Ethics"
    | "Linguistics & Reference";
  title: string;
  description: string;
  publisher?: string;
  isbn?: string;
  pages?: string;
  edition?: string;
  coauthor?: string;
  isForthcoming?: boolean;
  type?: "book" | "mimeograph";
};

export const books: Book[] = [
  {
    id: "to-the-hague-from-nabinene",
    image: "/author.png",
    year: "2023",
    category: "Memoir",
    title: "To The Hague from Nabinene",
    description:
      "A personal and judicial memoir tracing the journey from rural Nabinene in Uganda through American legal education to the bench of the International Criminal Court and the Special Tribunal for Lebanon.",
    publisher: "Dorrance Publishing Co., Pittsburgh, PA, USA",
    isbn: "979-88925-340-2 / eISBN 97-88925-840-7",
    pages: "416 pages",
    type: "book",
  },
  {
    id: "constitutional-law-in-botswana",
    image: "/Const.png",
    year: "2017",
    category: "Constitutional Law",
    title: "Constitutional Law in Botswana",
    description:
      "A comprehensive authority on the constitutional architecture of Botswana, examining the separation of powers, judicial review, executive authority, and human rights protections under the Botswana constitution.",
    publisher: "Wolters Kluwer International Encyclopaedia of Laws",
    pages: "340 pages",
    type: "book",
  },
  {
    id: "criminal-law-in-uganda",
    image: "/crime.png",
    year: "2015",
    category: "Criminal Law",
    title: "Criminal Law in Uganda",
    edition: "3rd Edition",
    description:
      "A leading treatise on substantive criminal law in Uganda, covering the Uganda Penal Code, statutory interpretation, the elements of criminal responsibility, defenses, and the jurisprudence of the Ugandan courts.",
    publisher: "Wolters Kluwer, The Netherlands",
    isbn: "978-90-654-4937-5",
    pages: "410 pages",
    type: "book",
  },
  {
    id: "criminal-law-in-botswana",
    image: "/crime.png",
    year: "2015",
    category: "Criminal Law",
    title: "Criminal Law in Botswana",
    edition: "3rd Edition",
    description:
      "The definitive reference text on the Botswana Penal Code, exploring doctrine, defenses, liability of parties, and seminal judicial authorities.",
    publisher: "Wolters Kluwer, The Netherlands",
    isbn: "978-90-411-3621-3",
    pages: "394 pages",
    type: "book",
  },
  {
    id: "eddundiro-lya-bawansolo",
    image: "/wansolo.png",
    year: "2025",
    category: "Translation",
    title: "Eddundiro Lya Bawansolo",
    description:
      "A masterful Luganda translation of George Orwell's political allegorical masterpiece Animal Farm, bringing world literature into indigenous African linguistic expression.",
    publisher: "Kampala, Uganda",
    isbn: "978-9913-615-48-8",
    type: "book",
  },
  {
    id: "eddembe-lyaffe",
    image: "/dembe.png",
    year: "2024",
    category: "Human Rights",
    title: "Eddembe Lyaffe",
    edition: "2nd Edition",
    description:
      "Meaning 'Our Rights', this seminal treatise in Luganda explains constitutional and international human rights and features Luganda translations of key United Nations human rights instruments. Originally published with DANIDA support.",
    publisher: "Nabinene Emporium Ltd., Kampala, Uganda",
    type: "book",
  },
  {
    id: "ntuuka-e-hague-okuva-e-nabinene",
    image: "/nabinene.png",
    year: "2024",
    category: "Memoir",
    title: "Ntuuka E Hague Okuva E Nabinene",
    description:
      "The Luganda language edition of the author's autobiographical reflection, chronicling the formative influences of village life, legal training, and international judicial service.",
    publisher: "Kampala, Uganda",
    type: "book",
  },
  {
    id: "legal-ethics-in-botswana",
    image: "/Const.png",
    year: "2004",
    category: "Legal Ethics",
    title: "Legal Ethics in Botswana: Cases and Materials",
    coauthor: "with Kholisani Solo",
    description:
      "Essential guide and casebook on professional responsibility, duty of counsel, fiduciary duties to clients, and integrity in the administration of justice.",
    publisher: "University of Botswana Department of Law",
    isbn: "99912-949-5-3",
    pages: "448 pages",
    type: "book",
  },
  {
    id: "criminal-procedure-in-botswana",
    image: "/crime.png",
    year: "1998",
    category: "Criminal Law",
    title: "Criminal Procedure in Botswana: Cases and Materials",
    edition: "2nd Edition",
    description:
      "A comprehensive sourcebook covering police powers, bail, indictments, trial management, evidence rules, and appeals in the courts of Botswana.",
    publisher: "Pula Press, Gaborone",
    isbn: "99912-61-61-3",
    pages: "506 pages",
    type: "book",
  },
  {
    id: "twejjukanye-oluganda",
    image: "/twejukanye.png",
    year: "2001",
    category: "Linguistics & Reference",
    title: "Twejjukanye Oluganda [Luganda Language Grammar]",
    description:
      "An authoritative scholarly study of Luganda grammar, syntax, orthography, and usage for scholars, students, and practitioners of the language.",
    publisher: "University of Botswana",
    isbn: "99912-950-0-3",
    pages: "150 pages",
    type: "book",
  },
  {
    id: "english-luganda-law-dictionary",
    image: "/englug.png",
    backImage: "/magezi.png",
    year: "1993",
    category: "Linguistics & Reference",
    title: "English - Luganda Law Dictionary",
    edition: "1st Ed. 1993 (4th Edition Forthcoming)",
    description:
      "Pioneering lexicon bridging common law legal terminology with indigenous Luganda vocabulary; indexed in The African Book Publishing Record.",
    publisher: "Magezi Muliro / University of Botswana",
    isbn: "978-9970-445-56-1 / 99912-0-082-7",
    pages: "149 pages",
    type: "book",
  },
  {
    id: "juliyo-kayisaali",
    image: "/author.png",
    year: "Forthcoming",
    isForthcoming: true,
    category: "Translation",
    title: "Juliyo Kayisaali",
    coauthor: "with Medadi E. Ssentanda",
    description:
      "A literary Luganda translation of William Shakespeare's Julius Caesar, rendering classical drama and political rhetoric in evocative Luganda idiom.",
    publisher: "Forthcoming",
    type: "book",
  },
  {
    id: "antigone-translation",
    image: "/author.png",
    year: "1989",
    category: "Translation",
    title: "Antigone: A Greek Play by Sophocles",
    description:
      "Luganda translation of Sophocles' ancient Greek tragedy, interrogating the enduring tensions between state decrees, divine justice, and moral conscience.",
    publisher: "Marianum Press, Kampala, Uganda",
    pages: "63 pages",
    type: "book",
  },
  {
    id: "international-protection-of-refugees",
    image: "/Const.png",
    year: "1975",
    category: "Human Rights",
    title: "The International Protection of Refugees",
    description:
      "Doctoral dissertation submitted to New York University School of Law (J.S.D.), examining international conventions, non-refoulement, and refugee status determination.",
    publisher: "New York University School of Law",
    pages: "379 pages",
    type: "mimeograph",
  },
  {
    id: "police-powers-and-rights-uganda",
    image: "/crime.png",
    year: "1973",
    category: "Criminal Law",
    title: "Police Powers and the Rights of the Individual in Uganda",
    description:
      "Early foundational monograph on arrest, search, detention powers, and constitutional safeguards in Uganda.",
    publisher: "Makerere University, Kampala, Uganda",
    pages: "134 pages",
    type: "mimeograph",
  },
];

export function searchBooks(query: string, category?: string) {
  const normalizedQuery = query.trim().toLowerCase();

  let filtered = books;

  if (category && category !== "all") {
    filtered = filtered.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (!normalizedQuery) {
    return filtered;
  }

  return filtered.filter((book) =>
    [
      book.title,
      book.category,
      book.year,
      book.description,
      book.publisher ?? "",
      book.isbn ?? "",
      book.coauthor ?? "",
    ].some((value) => value.toLowerCase().includes(normalizedQuery)),
  );
}
