export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  location: string;
  note?: string;
}

export interface CareerEntry {
  period: string;
  role: string;
  institution: string;
  location: string;
  category: "judicial" | "academic" | "practice" | "un";
  description?: string;
  cases?: string[];
}

export interface ProfessionalActivity {
  year: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  category: "practice" | "trial_observer" | "special_mission" | "expert_consultant";
}

export interface SpeakingEngagement {
  year: string;
  title: string;
  event: string;
  organizerOrVenue: string;
  location: string;
  date?: string;
}

export interface Membership {
  period: string;
  role: string;
  organization: string;
}

export interface Award {
  year: string;
  title: string;
  institution: string;
  location: string;
  description?: string;
}

export interface ExternalExamination {
  period: string;
  institution: string;
  location: string;
  role: "examiner" | "assessor" | "doctorate_committee" | "referee";
  details?: string;
}

export const PERSONAL_DATA = {
  name: "Judge Daniel David Ntanda Nsereko",
  shortName: "Daniel David Ntanda Nsereko",
  titles: "Judge · Professor of Law · International Jurist · Author",
  nationality: "Ugandan",
  email: "nserekoddn@gmail.com",
  summary:
    "Distinguished Ugandan jurist, legal scholar, and author with over five decades of service across international criminal tribunals, constitutional and criminal law, legal education, and human rights advocacy.",
};

export const STATS = [
  { value: "50+", label: "Years in Law & Academia" },
  { value: "ICC & STL", label: "International Tribunals" },
  { value: "14+", label: "Books & Monographs" },
  { value: "39", label: "Peer-Reviewed Articles" },
  { value: "4", label: "Earned Law Degrees" },
];

export const EDUCATION: EducationEntry[] = [
  {
    period: "1973—1975",
    degree: "Doctor of Juridical Science (J.S.D.)",
    institution: "New York University School of Law",
    location: "New York, NY, U.S.A.",
    note: "Doctoral dissertation: The International Protection of Refugees (379 pages)",
  },
  {
    period: "1971",
    degree: "Master of Laws (LL.M.)",
    institution: "New York University School of Law",
    location: "New York, NY, U.S.A.",
  },
  {
    period: "1972",
    degree: "Certificate in International Law",
    institution: "Hague Academy of International Law",
    location: "The Hague, The Netherlands",
  },
  {
    period: "1970",
    degree: "Master of Comparative Jurisprudence (M.C.J.)",
    institution: "Howard University School of Law",
    location: "Washington, D.C., U.S.A.",
  },
  {
    period: "1968",
    degree: "Bachelor of Laws (LL.B.)",
    institution: "University of East Africa",
    location: "Dar Es Salaam, Tanzania",
  },
];

export const PROFESSIONAL_STATUS = [
  {
    period: "1972—present",
    title: "Advocate of the High Court of Uganda",
    description: "Admitted to the Ugandan Bar with continuous rights of audience before superior courts.",
  },
  {
    period: "2007—2008",
    title: "List of Counsel, International Criminal Court (ICC)",
    description: "Eligible for appointment to represent accused persons or victims before the ICC.",
  },
];

export const CAREER_HISTORY: CareerEntry[] = [
  {
    period: "2012—2023",
    role: "Judge, Appeals Chamber",
    institution: "Special Tribunal for Lebanon (STL)",
    location: "The Hague, The Netherlands",
    category: "judicial",
    description: "Served as Judge of the Appeals Chamber and Judge Rapporteur in landmark international criminal proceedings and staff appeals.",
    cases: [
      "Prosecutor v. Ayyash et al., Decision on Appeal by Counsel for Mr Merhi Against Trial Chamber's 'Decision on Trial Management and Reasons on Joinder' (21 May 2014)",
      "Prosecutor v. Ayyash et al., Decision on Defence Appeals Against Trial Chamber's 'Decision on Alleged Defects in the Form of the Amended Indictment' (5 August 2013)",
      "Prosecutor v. Ayyash et al., Decision on Defence Appeals against Trial Chamber's 'Decision on Reconsideration of the Trial In Absentia Decision' (1 November 2012)",
      "Judge of Staff Appeal across 9 major administrative and disciplinary disputes (2012—2019)",
    ],
  },
  {
    period: "2012—2018",
    role: "Member, Advisory Committee on Nominations of Judges",
    institution: "International Criminal Court (ICC)",
    location: "The Hague, The Netherlands",
    category: "judicial",
    description: "Appointed by the Assembly of States Parties to evaluate and advise on qualifications of judicial candidates to the ICC.",
  },
  {
    period: "2009—2010",
    role: "President, Appeals Division",
    institution: "International Criminal Court (ICC)",
    location: "The Hague, The Netherlands",
    category: "judicial",
    description: "Led the Appeals Division during a seminal period in developing ICC jurisprudence on admissibility, jurisdiction, and victims' rights.",
  },
  {
    period: "2007—2012",
    role: "Judge, Appeals Division",
    institution: "International Criminal Court (ICC)",
    location: "The Hague, The Netherlands",
    category: "judicial",
    description: "Acted as Presiding Judge and Appeals Chamber Judge in high-profile situations and cases regarding Darfur, Kenya, DRC, and Uganda.",
    cases: [
      "Situation in Darfur, Sudan (Prosecutor v. Abdallah Banda Abakaer Nourain & Saleh Mohammed Jerboa Jamus) — Translation of witness statements appeals",
      "Situation in the Republic of Kenya — Appeal of the Government of Kenya under Article 93(10) and Rule 194 (4 July 2011)",
      "Prosecutor v. Ruto et al. & Prosecutor v. Muthaura et al. — Kenya Admissibility Challenge under Article 19(2)(b) (20 June 2011)",
      "Prosecutor v. Germain Katanga & Mathieu Ngudjolo Chui — Appeal on Unlawful Detention and Stay of Proceedings (12 July 2010)",
      "Prosecutor v. Germain Katanga & Mathieu Ngudjolo Chui — Admissibility Appeal (2—5 September 2009)",
      "Prosecutor v. Joseph Kony (Lord's Resistance Army) — Appeal against Admissibility Decision under Article 19(1) (16 September 2009)",
    ],
  },
  {
    period: "1996—2007",
    role: "Professor of Law",
    institution: "University of Botswana",
    location: "Gaborone, Botswana",
    category: "academic",
    description: "Taught Public International Law, International Criminal Law, Human Rights Law, Criminal Law, and Evidence.",
  },
  {
    period: "1993—1994",
    role: "Walter S. Owen Visiting Professor of Law",
    institution: "University of British Columbia, Faculty of Law",
    location: "Vancouver, Canada",
    category: "academic",
    description: "Distinguished visiting professorship teaching International Law of Human Rights.",
  },
  {
    period: "1992—1996",
    role: "Associate Professor of Law",
    institution: "University of Botswana",
    location: "Gaborone, Botswana",
    category: "academic",
  },
  {
    period: "1985—1993",
    role: "Head, Department of Law",
    institution: "University of Botswana",
    location: "Gaborone, Botswana",
    category: "academic",
    description: "Provided eight years of foundational leadership expanding the law curriculum and research profile.",
  },
  {
    period: "1984—1992",
    role: "Senior Lecturer in Law",
    institution: "University of Botswana",
    location: "Gaborone, Botswana",
    category: "academic",
  },
  {
    period: "1983—1984",
    role: "Expert Consultant",
    institution: "United Nations Centre for Social Development and Humanitarian Affairs (CSDHA)",
    location: "New York, NY, U.S.A.",
    category: "un",
    description: "Crime Prevention and Criminal Justice Branch. Participated in drafting the UN Declaration of Basic Principles of Justice for Victims of Crime and Abuse of Power.",
  },
  {
    period: "1983",
    role: "Social Affairs Officer",
    institution: "United Nations Centre for Social Development and Humanitarian Affairs",
    location: "New York, NY, U.S.A.",
    category: "un",
  },
  {
    period: "1978—1982",
    role: "Full-time Private Law Practitioner",
    institution: "Private Legal Practice",
    location: "Kampala, Uganda",
    category: "practice",
    description: "Litigated complex civil, criminal, and commercial cases leading to precedent-setting appellate decisions.",
  },
  {
    period: "1975—1978",
    role: "Senior Lecturer in Law",
    institution: "Makerere University",
    location: "Kampala, Uganda",
    category: "academic",
  },
  {
    period: "1971—1975",
    role: "Lecturer in Law",
    institution: "Makerere University",
    location: "Kampala, Uganda",
    category: "academic",
  },
  {
    period: "1968",
    role: "Pupil Advocate",
    institution: "Kiwanuka & Co., Advocates",
    location: "Kampala, Uganda",
    category: "practice",
  },
];

export const PROFESSIONAL_ACTIVITIES: ProfessionalActivity[] = [
  {
    year: "1972—2007",
    role: "Private Law Practitioner & Consultant",
    organization: "Ssendege, Senyondo & Co., Advocates and Solicitors / Private Bar",
    location: "Kampala, Uganda",
    category: "practice",
    description:
      "Represented clients in criminal and civil cases in Magistrates' Courts, the High Court, and the Court of Appeal. Major clients included a development bank, insurance company, and the SDA Church; precedent-setting decisions.",
  },
  {
    year: "1998",
    role: "Head of Delegation",
    organization: "Amnesty International",
    location: "Lesotho",
    category: "special_mission",
    description:
      "Led investigation into allegations of human rights and humanitarian law violations and inspected prison conditions following the South African and Botswana military intervention.",
  },
  {
    year: "1996",
    role: "Trial Observer",
    organization: "Amnesty International",
    location: "Ethiopia",
    category: "trial_observer",
    description:
      "Observed the criminal trial of over 50 defendants of the former Government of Ethiopia charged with genocide and crimes against humanity; prepared comprehensive confidential report.",
  },
  {
    year: "1991",
    role: "Mission Delegate & Report Author",
    organization: "Amnesty International",
    location: "Swaziland",
    category: "special_mission",
    description:
      "Served on two-person mission investigating human rights abuses and inspecting prison conditions. Authored the mission's official findings.",
  },
  {
    year: "1990",
    role: "Trial Observer",
    organization: "Amnesty International",
    location: "Swaziland",
    category: "trial_observer",
    description:
      "Observed trial of approximately 10 defendants charged with offences of a political character in the context of international fair trial standards.",
  },
  {
    year: "2007",
    role: "Independent Legal Expert",
    organization: "Minority Rights Group International",
    category: "expert_consultant",
    description:
      "Authored expert legal opinion in a matter pending before the African Commission on Human and Peoples' Rights.",
  },
  {
    year: "2007",
    role: "Expert Delegate on Crime of Aggression",
    organization: "Assembly of States Parties to the Rome Statute (5th Resumed Session)",
    location: "New York, NY",
    category: "expert_consultant",
    description:
      "Participated as expert on the definition and conditions for exercise of jurisdiction over the Crime of Aggression.",
  },
  {
    year: "2004—2006",
    role: "Legal Advisor & Working Group Expert",
    organization: "Special Working Group on the Crime of Aggression",
    location: "Princeton University, NJ",
    category: "expert_consultant",
    description:
      "Served as Legal Advisor to the Uganda Government Delegation (2004, 2005) and NGO Coalition expert (2006) on the Crime of Aggression.",
  },
  {
    year: "2004",
    role: "Expert Legal Advisor",
    organization: "Office of the Prosecutor, International Criminal Court",
    location: "The Hague, The Netherlands",
    category: "expert_consultant",
    description:
      "At the request of the ICC Chief Prosecutor, wrote an expert legal opinion on the interpretation and scope of key provisions of the Rome Statute.",
  },
  {
    year: "2004",
    role: "Expert Participant",
    organization: "Transitional Codes for Post-Conflict Criminal Justice Project (USIP & Irish Centre for Human Rights)",
    location: "Abuja, Nigeria",
    category: "expert_consultant",
    description:
      "Roundtable of African Experts on model transitional criminal justice frameworks.",
  },
  {
    year: "1999—2002",
    role: "Co-Leader & Expert Delegate",
    organization: "Preparatory Commission for the International Criminal Court (PrepCom)",
    location: "New York, NY",
    category: "expert_consultant",
    description:
      "Participated in 5th through 9th sessions of PrepCom; co-led Coalition team on the Crime of Aggression and advised Uganda delegation at the 1st Assembly of States Parties.",
  },
  {
    year: "1999",
    role: "Expert Consultant",
    organization: "International Criminal Tribunal for Rwanda (ICTR)",
    location: "Arusha, Tanzania",
    category: "expert_consultant",
    description:
      "Prepared formal legal opinion addressing complex international criminal law questions in ongoing ICTR trials.",
  },
  {
    year: "1998",
    role: "Expert Delegate",
    organization: "Diplomatic Conference of Plenipotentiaries on the Establishment of an ICC (Rome Conference)",
    location: "Rome, Italy",
    category: "expert_consultant",
    description:
      "Participated in the historic conference negotiating and adopting the Rome Statute of the International Criminal Court.",
  },
  {
    year: "1995",
    role: "Rapporteur",
    organization: "United Nations Crime Prevention and Criminal Justice Branch",
    location: "Vienna, Austria",
    category: "expert_consultant",
    description:
      "Elected rapporteur for Expert Group Meeting on 'Victims of Crime and Abuse of Power in the International Setting'; formulated comprehensive plan of action.",
  },
  {
    year: "1995",
    role: "Expert Committee Member",
    organization: "Association Internationale de Droit Pénal / Max Planck Institute",
    location: "Freiburg, Germany",
    category: "expert_consultant",
    description:
      "Reviewed and drafted proposed amendments to the Draft Statute for an International Criminal Court.",
  },
  {
    year: "1985",
    role: "UN Expert Consultant",
    organization: "United Nations Criminal Justice Reform for Namibia Project",
    location: "Rome, Italy",
    category: "expert_consultant",
    description:
      "Drafted comprehensive blueprint and plans for restructuring the post-independence criminal justice system of Namibia.",
  },
  {
    year: "1975—1985",
    role: "Expert Consultant",
    organization: "UN Congresses on Prevention of Crime and Treatment of Offenders",
    location: "Milan, Caracas, The Hague, Addis Ababa, Lusaka",
    category: "expert_consultant",
    description:
      "Contributed to global and regional preparatory congresses leading to landmark UN declarations on victim rights and criminal justice standards.",
  },
];

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    year: "2016",
    title: "The Irrelevance of Head-of-State Immunity in International Criminal Law",
    event: "17th Session of the Salzburg School of International Law and Human Rights",
    organizerOrVenue: "Salzburg University",
    location: "Salzburg, Austria",
    date: "5 August 2016",
  },
  {
    year: "2016",
    title: "Criminal Liability of Legal Persons in International Criminal Law",
    event: "17th Session of the Salzburg School of International Law and Human Rights",
    organizerOrVenue: "Salzburg University",
    location: "Salzburg, Austria",
    date: "4 August 2016",
  },
  {
    year: "2016",
    title: "No Peace Without Justice: Accountability Matters",
    event: "Rotary International Peace Conference",
    organizerOrVenue: "Rotary International",
    location: "Ontario, CA, USA",
    date: "14—15 January 2016",
  },
  {
    year: "2015",
    title: "The Role of Lawyers before International Courts: The Case of the Special Tribunal for Lebanon",
    event: "CCBE Conference on International Courts",
    organizerOrVenue: "Council of Bars and Law Societies of Europe (CCBE)",
    location: "The Hague, The Netherlands",
    date: "23 April 2015",
  },
  {
    year: "2015",
    title: "Justice and the International Criminal Tribunals",
    event: "Distinguished Public Lecture",
    organizerOrVenue: "Friedensau Adventist University",
    location: "Berlin, Germany",
    date: "16 March 2015",
  },
  {
    year: "2015",
    title: "The Evolution of the Status of the Individual under International Law",
    event: "Hague Summit on International Law & Human Rights",
    organizerOrVenue: "Hague Summit",
    location: "The Hague, The Netherlands",
    date: "4—5 February 2015",
  },
  {
    year: "2014",
    title: "Obwenkanya Obw'obutonde mu Litulica Omuganda [Natural Justice in Luganda Literature]",
    event: "Public Lecture",
    organizerOrVenue: "Institute of Languages, Makerere University",
    location: "Kampala, Uganda",
    date: "6 October 2014",
  },
  {
    year: "2014",
    title: "The Law's Response to the Plight of Victims of Trauma in the Context of International Criminal Justice",
    event: "Conference on Trauma and Resilience",
    organizerOrVenue: "International Trauma Institute",
    location: "Berlin, Germany",
    date: "July 2014",
  },
  {
    year: "2014",
    title: "The Relationship between the African Union and the International Criminal Court",
    event: "International Seminar",
    organizerOrVenue: "International Criminal Law Society",
    location: "Rabat, Kingdom of Morocco",
    date: "June 2014",
  },
  {
    year: "2013",
    title: "The Evolution of International Criminal Law and the International Criminal Court in Context",
    event: "Special Parliamentary Address",
    organizerOrVenue: "Parliament of Uganda",
    location: "Kampala, Uganda",
    date: "September 2013",
  },
  {
    year: "2013",
    title: "The International Legal System and its Relevance to the Rule of Law in Africa",
    event: "Benedicto Kiwanuka Memorial Lecture",
    organizerOrVenue: "Foundation for African Development, Makerere University",
    location: "Kampala, Uganda",
    date: "14 November 2013",
  },
  {
    year: "2013",
    title: "Religious Tolerance, Sustainable Development and the Law in Africa",
    event: "All-Africa Religious Liberty Congress",
    organizerOrVenue: "International Religious Liberty Association",
    location: "Yaoundé, Cameroon",
    date: "6—10 August 2013",
  },
  {
    year: "2013",
    title: "Atrocity Crimes, Peace and Justice",
    event: "Annual Postgraduate Convention",
    organizerOrVenue: "Loma Linda University School of Medicine",
    location: "Loma Linda, CA, USA",
    date: "3 March 2013",
  },
  {
    year: "2012",
    title: "Appraising the Work of the ICC in its First Decade: Challenges and Ways Forward",
    event: "The Rome Statute: Ten Years After and Ahead",
    organizerOrVenue: "University of Copenhagen Faculty of Law",
    location: "Copenhagen, Denmark",
    date: "14 November 2012",
  },
  {
    year: "2012",
    title: "Promoting Religious Freedom in Secularity: A Legal Perspective",
    event: "World Congress of Religious Freedom",
    organizerOrVenue: "International Religious Liberty Association",
    location: "Punta Cana, Dominican Republic",
    date: "April 2012",
  },
  {
    year: "2011",
    title: "Calling African Female Lawyers",
    event: "ICC Registrar Outreach Campaign",
    organizerOrVenue: "Imperial Resort Beach Hotel",
    location: "Entebbe, Uganda",
    date: "6 May 2011",
  },
  {
    year: "2011",
    title: "The ICC: An Overview of Basic Features and Recent Developments",
    event: "Faculty Lecture Series",
    organizerOrVenue: "University of KwaZulu-Natal Faculty of Law",
    location: "Durban, South Africa",
    date: "10 May 2011",
  },
  {
    year: "2011",
    title: "Crimes against Humanity and State Responsibility to Prevent",
    event: "Forging a Convention on Crimes Against Humanity",
    organizerOrVenue: "Whitney R. Harris World Law Institute, Brookings Institution",
    location: "Washington, D.C.",
    date: "11—12 March 2011",
  },
  {
    year: "2010",
    title: "New Perspectives after the Kampala Review Conference and African Issues",
    event: "12th Salzburg Law School on International Criminal Law",
    organizerOrVenue: "Salzburg Law School",
    location: "Salzburg, Austria",
    date: "12—20 August 2010",
  },
  {
    year: "2010",
    title: "The Post-Colonial African State and Impunity",
    event: "Africa and the Future of International Criminal Justice Conference",
    organizerOrVenue: "Wits School of Law",
    location: "Johannesburg, South Africa",
    date: "14—16 July 2010",
  },
  {
    year: "2009",
    title: "Children in Armed Conflict and the International Criminal Court",
    event: "10th International Conference of Chief Justices of the World",
    organizerOrVenue: "City Montessori School",
    location: "Lucknow, India",
    date: "11—14 December 2009",
  },
  {
    year: "2009",
    title: "Africa and the ICC",
    event: "Parliamentary Workshop",
    organizerOrVenue: "Parliamentarians for Global Action",
    location: "Kampala, Uganda",
    date: "30 June 2009",
  },
  {
    year: "2009",
    title: "The ICC Six Years On",
    event: "Future of International Criminal Justice Conference",
    organizerOrVenue: "West Point Center for the Rule of Law, US Military Academy",
    location: "West Point, NY",
    date: "15—17 April 2009",
  },
  {
    year: "2008",
    title: "Trial Proceedings at the International Criminal Court",
    event: "International Conference on the ICC",
    organizerOrVenue: "Philippine Judicial Academy & Italian Embassy",
    location: "Manila, Philippines",
    date: "25—26 September 2008",
  },
  {
    year: "2005",
    title: "The Relationships between the International Criminal Court and the UN Security Council",
    event: "7th Session of Salzburg Law School",
    organizerOrVenue: "Salzburg Law School",
    location: "Salzburg, Austria",
    date: "8—10 August 2005",
  },
  {
    year: "2004",
    title: "The Crime of Genocide in International Law",
    event: "ICC Training Course for African Government Officials",
    organizerOrVenue: "University of Nottingham & University of Cape Town",
    location: "Cape Town, South Africa",
    date: "28 June—3 July 2004",
  },
  {
    year: "2003",
    title: "Prosecutorial Discretion before National and International Tribunals",
    event: "Guest Lecture Series",
    organizerOrVenue: "Office of the Prosecutor, International Criminal Court",
    location: "The Hague, The Netherlands",
    date: "19 December 2003",
  },
];

export const MEMBERSHIPS: Membership[] = [
  {
    period: "2006—2008",
    role: "Member, Advisory Committee",
    organization: "War Crimes Research Office, American University, Washington, DC",
  },
  {
    period: "2006",
    role: "Member, International Advisory Board",
    organization: "International Doctorate School of Excellence, University of Cologne, Germany",
  },
  {
    period: "2005—present",
    role: "Member, Editorial Board",
    organization: "University of Botswana Law Journal",
  },
  {
    period: "2004—present",
    role: "Member",
    organization: "East African Law Society",
  },
  {
    period: "1972—present",
    role: "Member",
    organization: "Uganda Law Society",
  },
  {
    period: "1988—present",
    role: "Member of the Board",
    organization: "International Society for the Reform of Criminal Law",
  },
  {
    period: "1990—present",
    role: "Member of the Editorial Board",
    organization: "Criminal Law Forum: An International Journal (Springer)",
  },
  {
    period: "1986—1990",
    role: "Member of the Editorial Board",
    organization: "Journal of Violence, Aggression and Terrorism",
  },
  {
    period: "1985—present",
    role: "Member of the Editorial Council",
    organization: "Journal of Church and State (Oxford University Press)",
  },
  {
    period: "1975—1980",
    role: "Member of the Executive Committee",
    organization: "Uganda Red Cross Society",
  },
  {
    period: "1975—1980",
    role: "Member of the Law Council (Executive Committee)",
    organization: "Uganda Law Society",
  },
];

export const AWARDS: Award[] = [
  {
    year: "2006",
    title: "Visiting Scholar",
    institution: "Max Planck Institute for Foreign and International Criminal Law",
    location: "Freiburg, Germany",
    description: "Conducted advanced research into comparative criminal liability of organizational and military leaders.",
  },
  {
    year: "1996",
    title: "Medal of Honour for Human Rights & Criminal Law Reform",
    institution: "International Society for the Reform of Criminal Law",
    location: "Vancouver, Canada",
    description: "Awarded in recognition of outstanding contributions to international human rights and criminal law reform globally.",
  },
  {
    year: "1995",
    title: "Visiting Scholar",
    institution: "Max Planck Institute for Foreign and International Criminal Law",
    location: "Freiburg, Germany",
  },
  {
    year: "1982",
    title: "Research Fellow",
    institution: "Institute of International Law & International Relations, Hague Academy of International Law",
    location: "The Hague, The Netherlands",
  },
];

export const EXTERNAL_EXAMINATIONS: ExternalExamination[] = [
  {
    period: "2015",
    institution: "University of Pretoria",
    location: "Pretoria, South Africa",
    role: "doctorate_committee",
    details: "Assessed the quality of a doctoral thesis submitted for the degree of Doctor of Laws (LL.D.).",
  },
  {
    period: "2010—2011",
    institution: "University of Amsterdam",
    location: "Amsterdam, The Netherlands",
    role: "doctorate_committee",
    details: "Served on Doctorate Committee assessing Doctor of Laws dissertation.",
  },
  {
    period: "2003—2006",
    institution: "University of Swaziland",
    location: "Kwaluseni, Swaziland",
    role: "examiner",
    details: "External examiner maintaining academic standards, approving examination papers, and checking scripts.",
  },
  {
    period: "1998—2002",
    institution: "University of Dar Es Salaam",
    location: "Dar Es Salaam, Tanzania",
    role: "examiner",
  },
  {
    period: "2000",
    institution: "University of Dar Es Salaam",
    location: "Dar Es Salaam, Tanzania",
    role: "assessor",
    details: "Detailed assessment of publications for promotions to the ranks of Associate Professor and Full Professor.",
  },
  {
    period: "1994",
    institution: "University of Lagos",
    location: "Akoka, Yaba, Nigeria",
    role: "assessor",
    details: "Detailed professorial promotion assessment.",
  },
  {
    period: "1992—1993",
    institution: "National University of Lesotho",
    location: "Roma, Lesotho",
    role: "examiner",
  },
  {
    period: "1991—1993",
    institution: "University of Zambia",
    location: "Lusaka, Zambia",
    role: "examiner",
  },
  {
    period: "1987—1990",
    institution: "University of Nairobi",
    location: "Nairobi, Kenya",
    role: "examiner",
  },
];
