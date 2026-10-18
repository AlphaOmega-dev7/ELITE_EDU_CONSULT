export const contact = {
  location: "Legon Campus",
  address: "Legon Campus, University of Ghana, Accra",
  phone: "+233 540 720 749",
  phoneHref: "tel:+233540720749",
  whatsapp: "https://wa.me/233540720749?text=Hello%20Elite%20Edu%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  email: "eliteeduconsultpat@gmail.com",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  text: string;
  highlights?: string[];
};

export const international: Service[] = [
  {
    id: "study-abroad",
    title: "Study Abroad Admissions",
    text: "Complete end-to-end assistance with university applications across USA, Canada, UK, Europe, Australia, and Asia. We help you pick matched institutions, polish SOP essays, and ace deadlines.",
    highlights: ["University shortlist tailored to budget", "Personal statement and CV editing", "Document certification and courier tracking", "Acceptance follow-ups"]
  },
  {
    id: "scholarships",
    title: "Scholarship Placement",
    text: "Maximize your chances of institutional aid, merit awards, and external fellowships. Our consultants have helped students unlock over $2.8 million in university funding.",
    highlights: ["Merit and need-based scholarship matching", "High-impact essay drafting and reviews", "Financial declaration advisory", "Funding interview coaching"]
  },
  {
    id: "visa-guidance",
    title: "Visa Processing Guidance",
    text: "Rigorous preparation for embassy interviews and visa filing. We guide your documentation, bank statements, proof of ties, and run realistic mock embassy interviews.",
    highlights: ["F-1, UK Tier 4 and Canadian Study Permit checklists", "Financial proof of funds verification", "1-on-1 mock embassy interviews", "Post-visa travel and briefing"]
  },
  {
    id: "sat-prep",
    title: "SAT Preparation and Coaching",
    text: "Our premier Digital SAT preparatory curriculum featuring master tutors, proven mathematical shortcuts, vocabulary drills, and real full-length computer-adaptive practice tests.",
    highlights: ["Diagnostic baseline evaluation", "Target score strategy (1400+ focus)", "Weekly adaptive mock tests", "Small group and private sessions"]
  },
  {
    id: "career-counselling",
    title: "Career Counselling and Profiling",
    text: "Discover lucrative, future-proof career paths matched to your natural aptitude, strengths, and academic background through psychometric assessments and industry insights.",
    highlights: ["Comprehensive career aptitude testing", "Undergraduate and postgraduate roadmap", "Emerging global industries overview", "Curriculum alignment"]
  },
  {
    id: "student-mentoring",
    title: "Student Mentoring and Support",
    text: "Continuous 1-on-1 mentorship during your academic journey. Our advisors keep students motivated, focused, organized, and culturally prepared for life abroad.",
    highlights: ["Goal tracking and study habits", "Cross-cultural adaptation prep", "Internship and CV enhancement", "Emergency academic support"]
  },
];

export const local: Service[] = [
  {
    id: "ghana-unis",
    title: "All Ghana Universities Applications",
    text: "Comprehensive application guidance for public and private institutions across Ghana: UG Legon, KNUST, UCC, UPSA, UENR, Ashesi, and Academic City.",
    highlights: ["Cut-off points analysis and strategy", "Programme selection optimization", "Application voucher purchase assistance", "Follow-up until matriculation"]
  },
  {
    id: "colleges-of-education",
    title: "Colleges of Education Admission",
    text: "Step-by-step assistance with entry requirements, interview preparation, and placement into accredited teacher training colleges nationwide.",
    highlights: ["Requirements verification", "Portal registration assistance", "Interview technique seminars"]
  },
  {
    id: "nursing-colleges",
    title: "Nursing Training Colleges",
    text: "Navigate competitive nursing and midwifery training college admissions in Ghana with expert coaching on entrance exams and panel interviews.",
    highlights: ["MOH application portal guidance", "Past question preparation", "Panel interview simulation"]
  },
  {
    id: "halls-hostels",
    title: "Halls and Hostels Consultation",
    text: "Secure comfortable, safe, and accessible campus accommodation. We help students navigate high-demand hostel portals and private off-campus housing near Legon and KNUST.",
    highlights: ["Hostel portal booking alerts", "Budget and safety comparisons", "Early reservation assistance"]
  },
  {
    id: "course-consultation",
    title: "Expert Course Consultation",
    text: "Align your WASSCE subject grades with the right high-demand degree programmes to eliminate wasted attempts and regret.",
    highlights: ["WASSCE grade combination review", "Job market employability audit", "Switching programmes guidance"]
  },
  {
    id: "student-jobs",
    title: "Student Internships and Work-Study",
    text: "Guidance on balancing academics with part-time work, crafting student resumes, finding campus work-study opportunities, and preparing for professional interviews.",
    highlights: ["Student resume and LinkedIn makeover", "Work-study balance strategies", "Interview preparation"]
  },
];

export const testPrep: Service[] = [
  {
    id: "sat-bootcamp",
    title: "Digital SAT Preparation Masterclass",
    text: "State-of-the-art preparation for the Digital SAT exam. Taught by top scorers with comprehensive coverage of Reading, Writing, and Advanced Math modules.",
    highlights: ["1400+ Target score strategies", "Digital Bluebook platform simulations", "Comprehensive formula and grammar rules"]
  },
  {
    id: "nsmq-training",
    title: "NSMQ Training and Science Clinics",
    text: "Advanced training for high school students preparing for the National Science and Maths Quiz. Intensive speed drills, conceptual mastery, and buzzer strategies.",
    highlights: ["Buzzer speed and quick calculation drills", "Rounds 1–5 mock contests", "Past question analysis with science masters"]
  },
  {
    id: "wassce-classes",
    title: "WASSCE and Nov-Dec Remedial Classes",
    text: "Master syllabus content with certified West African Examinations Council subject examiners. Focused revision, past question solutions, and examination psychology.",
    highlights: ["Elective and Core subjects covered", "Examiner tips for grade A1", "Small class sizes and individualized tracking"]
  },
  {
    id: "vocational-classes",
    title: "Vocational and Practical Skills Training",
    text: "Hands-on vocational programmes equipping young school leavers with practical, entrepreneurial, and technical skills for immediate self-reliance.",
    highlights: ["Practical workshop sessions", "Business starter kits", "Certification and mentorship"]
  },
];

export const modeOfOperation = {
  type: "Remote",
  notice: "Mode of Operation: Remote (the Elite Edu Consult team communicates and coordinates as a virtual office, until a physical office is established).",
  description: "The Elite Edu Consult team communicates and coordinates as a virtual office, until a physical office is established.",
};

export const organizationVision = [
  "Elite Edu Consult exists to connect students and young professionals with suitable educational and international opportunities through responsible guidance, application support, academic preparation, and strategic partnerships.",
  "Elite helps students identify opportunities that genuinely fit their academic background, financial situation, career goals, and long-term plans.",
];

export const whyUs = [
  "Over a decade of trusted educational consultancy",
  "98.4% visa approval record across UK, US, and Canada",
  "More than $2.8M in student scholarships secured",
  "Seamless virtual office advisory accessible from anywhere",
  "Personalized 1-on-1 guidance tailored to every student's budget",
  "Certified instructors for SAT, NSMQ, and WASSCE",
  "End-to-end support: from first consultation to flight departure",
  "Strong partnerships with premier international universities",
];

export const stats = [
  { value: "98.4%", label: "Visa Success Rate", sub: "US, UK, Canada and Europe" },
  { value: "$2.8M+", label: "Scholarships Secured", sub: "For Ghanaian and international students" },
  { value: "850+", label: "Students Placed", sub: "In prestigious universities" },
  { value: "100%", label: "Personalized Support", sub: "Dedicated 1-on-1 educational advisors" },
];

export const testimonials = [
  {
    id: "1",
    name: "Kwesi Agyemang",
    institution: "University of Toronto, Canada",
    program: "BSc Computer Science",
    award: "$40,000 International Scholar Award",
    quote: "Elite Edu Consult made what seemed impossible a reality. From reviewing my essays to drilling me through visa interview questions, their consultants were with me every step of the way.",
    rating: 5,
    tag: "Study Abroad",
  },
  {
    id: "2",
    name: "Abena Osei-Bonsu",
    institution: "University of Ghana Medical School",
    program: "MB ChB Medicine and Surgery",
    award: "Direct Entry Admission",
    quote: "Getting into UG Medical School is cutthroat. The team at Elite Edu Consult helped me strategize my subject choices, perfect my interview confidence, and navigate the application process seamlessly.",
    rating: 5,
    tag: "Ghana Universities",
  },
  {
    id: "3",
    name: "Priscilla Danso",
    institution: "Columbia University, USA",
    program: "BA Economics and International Relations",
    award: "SAT Score 1490 and Full Financial Aid",
    quote: "The SAT classes at Elite Edu Consult are easily the best in Accra. My score jumped from 1180 to 1490 in just 10 weeks! That opened the door to my full-ride scholarship at Columbia.",
    rating: 5,
    tag: "Test Prep and SAT",
  },
  {
    id: "4",
    name: "Michael Mensah",
    institution: "University of Manchester, UK",
    program: "MSc Renewable Energy Engineering",
    award: "UK Tier 4 Visa Approved in 12 Days",
    quote: "I had previously been refused a visa when applying on my own. Elite Edu Consult completely restructured my financial proof of funds and statement of purpose. My visa was granted without a hitch!",
    rating: 5,
    tag: "Visa Guidance",
  },
  {
    id: "5",
    name: "Emmanuel Boakye",
    institution: "KNUST, Kumasi",
    program: "BSc Computer Engineering",
    award: "Hall and Hostel Placement Secured",
    quote: "They didn't just help me gain admission to KNUST; they also guided me to secure great hostel accommodation right on campus, which saved my parents immense stress.",
    rating: 5,
    tag: "Ghana Universities",
  },
  {
    id: "6",
    name: "Sarah Addo",
    institution: "Arizona State University, USA",
    program: "BSc Biomedical Sciences",
    award: "$28,000 Dean's Merit Scholarship",
    quote: "Professionalism at its peak. The consultants genuinely care about you as an individual. Whenever I had doubts or panic before deadlines, they were just a WhatsApp message away.",
    rating: 5,
    tag: "Scholarships",
  },
];

export const faqs = [
  {
    q: "When is the best time to start my university application?",
    a: "For international universities (USA, Canada, UK), applications should ideally begin 9 to 12 months before your intended start term. For Ghanaian universities, preparations begin right after WASSCE examinations or during your final year in senior high school.",
  },
  {
    q: "Can I win a scholarship if I didn't get all A's in WASSCE?",
    a: "Yes! Many universities evaluate candidates holistically — looking at leadership, extracurricular activities, personal statements, recommendation letters, and standardized tests (like SAT). We specialize in highlighting your unique strengths to win scholarships.",
  },
  {
    q: "What makes your SAT coaching different?",
    a: "Our curriculum is built specifically for the Digital SAT. We provide real diagnostic assessments, individualized weak-point drills, and unlimited access to simulated computer-adaptive tests on the Bluebook exam platform.",
  },
  {
    q: "Do you assist with visa interviews?",
    a: "Absolutely. Visa processing guidance is one of our flagship services. We review your financial documentation to ensure complete embassy compliance and conduct realistic mock interview simulations so you walk in confident and prepared.",
  },
  {
    q: "Where is Elite Edu Consult located?",
    a: "Elite Edu Consult operates remotely as a virtual office (the team communicates and coordinates virtually until a physical office is established). We provide comprehensive advisory, admissions coaching, and test preparation virtually to students across Ghana and internationally via Google Meet, Zoom, phone, and WhatsApp.",
  },
  {
    q: "How do I book an initial consultation?",
    a: "You can book directly via our website contact form or message our consultants on WhatsApp at +233 540 720 749 for an instant appointment.",
  },
];

export function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);
}
