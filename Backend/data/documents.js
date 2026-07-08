// student-saathi-backend/data/documents.js
//---1st
// const documentData = [
//     // 1. ID & Document Help
//  // 1. Aadhaar Card
//     {
//         document_name: "Aadhaar Card",
//         category: "ID & Document Help",
//         description: "Official guide for new Aadhaar enrolment, updates, and obtaining your digital or physical card.",
//         steps: "Find Enrolment Centre/Book Appointment Online → Gather ALL Necessary Documents (PoI/PoA/PoR, Originals Only) → Visit the Enrolment Centre and submit original documents for verification → Complete Biometric Data Collection (fingerprints, iris scan, photograph) → Receive Enrolment Acknowledgement Slip (EID) → Track Your Aadhaar Status Online using EID → Download e-Aadhaar or Receive Physical Card by post.",
//         required_documents: [
//             "Proof of Identity (PoI): Passport, PAN Card, Voter ID, Driving License, Govt. ID",
//             "Proof of Address (PoA): Utility bills (not older than 3 months), Ration Card, Bank Statement, Domicile Certificate",
//             "Proof of Relationship (PoR): Required only for Head of Family (HoF) based enrolments."
//         ],
//         eligibility: "Indian residents of all ages.",
//         application_fee: "Free for enrolment and mandatory updates.",
//         processing_time: "5-15 days for generation, 15-90 days for physical card delivery.",
//         official_links: [
//             { name: 'Official UIDAI Portal', url: 'https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html' },
//             { name: 'Locate Enrolment Centre', url: 'https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html' }, // Link repeated for clarity
//             { name: 'Check Aadhaar Status', url: 'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus' },
//             { name: 'Download e-Aadhaar', url: 'https://uidai.gov.in/en/contact-support/have-any-question/283-faqs/aadhaar-online-services/e-aadhaar.html' },
//             { name: 'Helpline Number (1947)', url: 'tel:1947' },
//         ],
//     },
//     // 2-- PAN card
//     {
//         document_name: "PAN Card",
//         category: "ID & Document Help",
//         description: "Permanent Account Number issued by Income Tax Dept for taxation.",
//         steps: "Fill Form 49A → upload docs → pay fee → submit → track status → receive PAN.",
//         required_documents: ["Identity proof", "address proof", "DOB proof"],
//         eligibility: "Indian citizens and NRIs.",
//         application_fee: "₹93-₹110.",
//         processing_time: "E-PAN in 2 hours, physical card 7-10 days.",
//         official_links: [
//             { name: 'Apply NSDL', url: 'https://tin.tin.nsdl.com/pan/applyPan.html' },
//             { name: 'Apply UTITSL', url: 'https://www.pan.utiitsl.com/PAN/index.jsp' },
//         ],
//     },
//     { document_name: "Voter ID Card", category: "ID & Document Help", description: "Guide to apply for or update your Electoral Photo Identity Card (EPIC).", steps: "Fill Form 6/8 online → Upload photo and address proof → Verification by BLO → Receive EPIC.", required_documents: ["Photo", "Address Proof", "DOB Proof"], official_links: [{ name: 'NVSP Portal', url: 'https://nvsp.in/' }] },
//     { document_name: "Driving License", category: "ID & Document Help", description: "Procedure for applying for a Learner's or Permanent Driving License.", steps: "Apply for Learner's License (LL) → Pass written test → Wait 30 days → Apply for Permanent DL → Pass driving test.", required_documents: ["Aadhaar", "Address Proof", "Medical Certificate"], official_links: [{ name: 'Sarathi Portal', url: 'https://parivahan.gov.in/parivahan/' }] },
//     { document_name: "Indian Passport", category: "ID & Document Help", description: "Step-by-step guide for new passport application or renewal.", steps: "Register online → Fill form → Book appointment → Pay fee → Visit PSK → Police Verification → Receive Passport.", required_documents: ["Proof of Address", "Proof of DOB"], official_links: [{ name: 'Passport Seva', url: 'https://passportindia.gov.in/' }] },
//     { document_name: "Ration Card", category: "ID & Document Help", description: "Application process for State-issued family ration cards.", steps: "Apply online via State portal → Submit documents → Field verification → Card issuance.", required_documents: ["Aadhaar of family head", "Address proof", "Surrender certificate (if migrating)"], official_links: [{ name: 'State Portal Search', url: 'https://nfsa.gov.in/StatePortal/homepage.aspx' }] },
//     { document_name: "Birth Certificate", category: "ID & Document Help", description: "Procedure to obtain or register a Birth Certificate.", steps: "Register birth within 21 days → Apply to local municipality/Panchayat → Receive certificate.", required_documents: ["Hospital/Institutional records", "Parent ID proof"], official_links: [{ name: 'CRS Portal', url: 'https://crsorgi.gov.in/web/index.php/auth/login' }] },
//     { document_name: "ABHA Card", category: "ID & Document Help", description: "Guide to creating your Ayushman Bharat Health Account (ABHA) ID.", steps: "Register via Aadhaar or Driving License → Enter personal details → Verify mobile OTP → Generate ABHA ID.", required_documents: ["Aadhaar or Driving License"], official_links: [{ name: 'ABHA Portal', url: 'https://healthid.ndhm.gov.in/' }] },
//     { document_name: "Disability/UDID", category: "ID & Document Help", description: "Application process for the Unique Disability ID (UDID) Card.", steps: "Register online → Fill disability details → Upload photo/signature → Submit form → Verification by Medical Board.", required_documents: ["Disability Certificate", "Photo", "Address Proof"], official_links: [{ name: 'UDID Portal', url: 'https://www.swavlambancard.gov.in/' }] },

//     // 2. Certification Help Desk
//     { document_name: "Bonafide Certificate", category: "Certification Help Desk", description: "Steps to request a Bonafide Certificate from the educational institution.", steps: "Write application to Principal/Head → State purpose (e.g., Passport/Scholarship) → Attach ID proof → Submission and Collection.", required_documents: ["Fee Receipt / Student ID"], official_links: [] },
//     { document_name: "Income Certificate", category: "Certification Help Desk", description: "Application procedure for obtaining an Income Certificate from the state government.", steps: "Apply via State E-District Portal or Tehsildar office → Submit proofs → Verification → Receive Certificate.", required_documents: ["Ration Card", "Salary Slips (Parents) / Income Proof", "Aadhaar"], official_links: [] },
//     { document_name: "Caste Certificate", category: "Certification Help Desk", description: "Guide for applying for a Caste Certificate (SC/ST/OBC).", steps: "Apply via E-District Portal → Fill application form → Upload proofs (old caste documents) → Verification → Certificate Issuance.", required_documents: ["Aadhaar", "Old Caste Documents", "Residence Proof"], official_links: [] },
//     { document_name: "Domicile Certificate", category: "Certification Help Desk", description: "Application steps for the Domicile/Residence Certificate.", steps: "Apply via E-District Portal → Must prove residency for defined period (e.g., 15 years) → Submit documents → Verification.", required_documents: ["Aadhaar", "Ration Card", "School Records"], official_links: [] },
//     { document_name: "Transfer/School Leaving Certificate", category: "Certification Help Desk", description: "Procedure to obtain the Transfer/Leaving Certificate from previous school/college.", steps: "Submit written application to institution office → Clear all dues/library books → Collect certificate on specified date.", required_documents: ["Clearance Certificate"], official_links: [] },

//     // 3. Government Schemes Hub
//     { document_name: "National Scholarship Portal", category: "Government Schemes Hub", description: "Guide to finding and applying for scholarships on the NSP platform.", steps: "NSP Registration → Fill all forms (Personal/Academic/Bank Details) → Apply to relevant schemes → Institution verification.", required_documents: ["Aadhaar", "Bank Passbook", "Income Certificate", "Caste Certificate"], official_links: [{ name: 'NSP Portal', url: 'https://scholarships.gov.in/' }] },
//     { document_name: "PM–YASASVI", category: "Government Schemes Hub", description: "Details and application steps for the PM-YASASVI scheme.", steps: "Check eligibility (OBC/EBC/DNT students) → Apply via official portal → Scholarship disbursement.", required_documents: ["Caste Certificate", "Income Certificate"], official_links: [{ name: 'YASASVI Portal', url: 'https://yet.nta.ac.in/' }] },
//     { document_name: "PM–DARSH Yojana", category: "Government Schemes Hub", description: "Information on the PM-DARSH Yojana scheme.", steps: "For students in SC/OBC categories to pursue higher education. Application details are usually managed through NSP or state portals.", required_documents: ["Caste/Income Certificate"], official_links: [] },
//     { document_name: "National Overseas Scholarship", category: "Government Schemes Hub", description: "Eligibility and application process for the NOS scheme.", steps: "For SC/ST students to pursue Master's/Ph.D. abroad. Check scheme guidelines and apply on the official website.", required_documents: ["Degree Certificates", "Admission Letter from Foreign University", "Caste Certificate"], official_links: [] },
//     { document_name: "Ambedkar Social Innovation and Incubation Mission (ASIIM)", category: "Government Schemes Hub", description: "Details on ASIIM for entrepreneurship support.", steps: "Targeted at SC students/graduates to promote innovation and startups. Apply via M/o Social Justice & Empowerment website.", required_documents: ["Proposal/Business Plan"], official_links: [] },

//     // 4. Skill & Internship Support
//     { document_name: "SWAYAM", category: "Skill & Internship Support", description: "Government portal offering free online courses and certifications from IITs/IIMs.", steps: "Register on SWAYAM → Enroll in desired course → Complete assignments/exams (optional fee for certificate).", required_documents: [], official_links: [{ name: 'SWAYAM Portal', url: 'https://swayam.gov.in/' }] },
//     { document_name: "NPTEL", category: "Skill & Internship Support", description: "Free online learning courses from the Indian Institutes of Technology (IITs).", steps: "Visit NPTEL website → Browse courses → Enroll and start learning.", required_documents: [], official_links: [{ name: 'NPTEL Website', url: 'https://nptel.ac.in/' }] },
//     { document_name: "Google Skillshop & Digital Unlocked", category: "Skill & Internship Support", description: "Free digital skills training courses from Google.", steps: "Create account on Skillshop → Choose course (e.g., Digital Marketing) → Complete modules and gain certification.", required_documents: [], official_links: [{ name: 'Google Skillshop', url: 'https://skillshop.exceedlms.com/' }] },
//     { document_name: "Internshala", category: "Skill & Internship Support", description: "India's largest internship and online training platform.", steps: "Register as student → Complete profile → Search and apply for internships.", required_documents: ["Resume"], official_links: [{ name: 'Internshala', url: 'https://internshala.com/' }] },
//     { document_name: "AICTE Internship Portal", category: "Skill & Internship Support", description: "Official AICTE portal connecting students to internships.", steps: "Register → Update profile → Filter internships by stream/location → Apply.", required_documents: ["Student ID", "Resume"], official_links: [{ name: 'AICTE Portal', url: 'https://internship.aicte-india.org/' }] },
//     { document_name: "Resume Building Tools & Tips", category: "Skill & Internship Support", description: "Resources to help you craft a professional resume and CV.", steps: "Use free templates (Canva/Zety) → Focus on achievements over responsibilities → Proofread carefully.", required_documents: [], official_links: [{ name: 'Resume Templates', url: 'https://www.canva.com/resumes/templates/' }] },
    
//     // 5. APAAR ID & Academic Results
//     { document_name: "APAAR ID", category: "APAAR ID & Academic Results", description: "Guide on creating and managing your APAAR ID (Automated Permanent Academic Account Registry).", steps: "Login via DigiLocker → Consent for Aadhaar verification → Generate APAAR ID.", required_documents: ["Aadhaar Card"], official_links: [{ name: 'DigiLocker/APAAR Guide', url: 'https://digilocker.gov.in/' }] },
//     { document_name: "Digilocker Guide", category: "APAAR ID & Academic Results", description: "Instructions on accessing academic documents, marksheets, and certificates via Digilocker.", steps: "Register/Login → Link Aadhaar → Fetch desired documents (e.g., CBSE Marksheet).", required_documents: ["Aadhaar Card", "Mobile Number"], official_links: [{ name: 'DigiLocker Portal', url: 'https://digilocker.gov.in/' }] },
//     { document_name: "Direct Links for CBSE/State Board Results", category: "APAAR ID & Academic Results", description: "List of official portals for checking academic results.", steps: "Select Board → Enter Roll Number and Mother's Name/Date of Birth → View Result.", required_documents: ["Roll Number"], official_links: [{ name: 'CBSE Results', url: 'https://cbseresults.nic.in/' }, { name: 'NIC Results Portals', url: 'https://results.gov.in/' }] },
// ];

// module.exports = documentData;




//2nd--
// student-saathi-backend/data/documents.js

const documentData = [
    // =======================================================
    // I. ID & Document Help (1-9)
    // =======================================================
    {
        document_name: "Aadhaar Card",
        category: "ID & Document Help",
        description: "Official guide for new Aadhaar enrolment, updates, and obtaining your digital or physical card.",
        steps: "Find Enrolment Centre or Book an Appointment Online → Gather Necessary Documents (Originals Only) → Visit the Enrolment Centre and submit documents for verification → Complete Biometric Data Collection (fingerprints, iris scan, photograph) → Receive Enrolment Acknowledgement Slip (EID) → Track Your Aadhaar Status Online using EID → Download e-Aadhaar or Receive Physical Card by post.",
        required_documents: [
            "Proof of Identity (PoI): Passport, PAN Card, Voter ID, Driving License, Government Employee ID",
            "Proof of Address (PoA): Utility bills (not older than 3 months), Ration Card, Bank Statement, Domicile Certificate",
            "Proof of Relationship (PoR): Required only for Head of Family (HoF) based enrolments"
        ],
        eligibility: "Indian residents of all ages.",
        application_fee: "Completely Free for enrolment and mandatory updates.",
        processing_time: "5-15 days for generation, physical card 15 to 90 days after enrolment.",
        official_links: [
            { name: 'Official UIDAI Portal', url: 'https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html' },
            { name: 'Check Aadhaar Status', url: 'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus' },
            { name: 'Download e-Aadhaar', url: 'https://uidai.gov.in/en/contact-support/have-any-question/283-faqs/aadhaar-online-services/e-aadhaar.html' },
            { name: 'Helpline Number (1947)', url: 'tel:1947' },
        ],
    },
    {
        document_name: "PAN Card",
        category: "ID & Document Help",
        description: "Permanent Account Number issued by Income Tax Dept for taxation and financial transactions.",
        steps: "Fill Form 49A → upload docs → pay fee → submit → track status → receive PAN.",
        required_documents: ["Identity proof", "Address proof", "DOB proof"],
        eligibility: "Indian citizens and NRIs.",
        application_fee: "₹93-₹110.",
        processing_time: "E-PAN in 2 hours, physical card 7-10 days.",
        official_links: [
            { name: 'Apply NSDL', url: 'https://tin.tin.nsdl.com/pan/applyPan.html' },
            { name: 'Track PAN Status', url: 'https://tin.tin.nsdl.com/pan/statusTrack.html' },
            { name: 'Income Tax Official Site', url: 'https://incometaxindia.gov.in/' },
            { name: 'Download Form', url: 'https://www.incometaxindia.gov.in/Pages/downloads/pan-correction-form.aspx' },
        ],
    },
    {
        document_name: "Voter ID Card",
        category: "ID & Document Help",
        description: "Electoral Photo Identity Card (EPIC) issued by the Election Commission for voting rights and identity.",
        steps: "Register on NVSP → fill form → upload docs/photos → verification → receive card.",
        required_documents: ["Proof of age and address (Aadhaar, Passport, Ration card)"],
        eligibility: "Indian citizens 18+.",
        application_fee: "Free.",
        processing_time: "30-45 days.",
        official_links: [
            { name: 'ECI Official Site', url: 'https://eci.gov.in/' },
            { name: 'NVSP Portal (For Registration)', url: 'https://www.nvsp.in/' },
        ],
    },
    {
        document_name: "Driving License",
        category: "ID & Document Help",
        description: "License to legally drive vehicles issued by the State Transport Authority (RTO/RTA).",
        steps: "Apply online/offline → submit docs → pass driving test → pay fee → receive license.",
        required_documents: ["Age proof", "Address proof", "Learner's License"],
        eligibility: "18+ (two-wheelers), 21+ (four-wheelers).",
        application_fee: "Varies by state (~₹200-₹500).",
        processing_time: "1-3 weeks.",
        official_links: [
            { name: 'Sarathi Parivahan Portal', url: 'https://parivahan.gov.in/parivahan/' },
        ],
    },
    {
        document_name: "Indian Passport",
        category: "ID & Document Help",
        description: "Official Government travel and identity document for Indian citizens.",
        steps: "Fill online application → book appointment → biometric submission at PSK → police verification → document issuance.",
        required_documents: ["Identity, address, and DOB proofs"],
        eligibility: "Indian citizens.",
        application_fee: "₹1500-₹3000 (Varies based on urgency and type).",
        processing_time: "7-30 days.",
        official_links: [
            { name: 'Passport Seva Portal', url: 'https://portal2.passportindia.gov.in/' },
        ],
    },
    {
        document_name: "Ration Card",
        category: "ID & Document Help",
        description: "Issued by State Governments for subsidized food and essential commodities under NFSA.",
        steps: "Register at state e-district portal → submit documents → verification → issuance.",
        required_documents: ["Residence proof", "Identity proof"],
        eligibility: "Varies by state and income criteria.",
        application_fee: "Usually free or nominal.",
        processing_time: "15-30 days.",
        official_links: [
            { name: 'NFSA State Portal Links', url: 'https://nfsa.gov.in/StatePortal/homepage.aspx' },
        ],
    },
    {
        document_name: "Birth Certificate",
        category: "ID & Document Help",
        description: "Official record of birth issued by the local municipality or authorized Registrar.",
        steps: "Register birth → submit hospital proof → verification → receive certificate.",
        required_documents: ["Hospital records", "Parents' ID proof"],
        eligibility: "Applicable for all births registered in India.",
        application_fee: "Nominal.",
        processing_time: "7-30 days.",
        official_links: [
            { name: 'CRS Official Portal (Registrar General)', url: 'https://crsorgi.gov.in/web/index.php/auth/login' },
        ],
    },
    {
        document_name: "ABHA Card",
        category: "ID & Document Help",
        description: "Ayushman Bharat Health Account (ABHA) ID, a national digital health identity for healthcare records.",
        steps: "Register on NDHM portal → verify Aadhaar/mobile → get Health ID.",
        required_documents: ["Aadhaar or mobile number"],
        eligibility: "Indian citizens.",
        application_fee: "Free.",
        processing_time: "Instant.",
        official_links: [
            { name: 'ABHA (NDHM) Portal', url: 'https://ndhm.gov.in/' },
        ],
    },
    {
        document_name: "Disability/UDID Card",
        category: "ID & Document Help",
        description: "Unique Disability ID (UDID) Card issued under the Rights of Persons with Disabilities Rules.",
        steps: "Apply online/offline → submit existing medical certificate/disability proof → verification by Medical Board → card issuance.",
        required_documents: ["Medical certificate", "Disability proof"],
        eligibility: "Persons with benchmark disability.",
        application_fee: "Usually free.",
        processing_time: "15-30 days.",
        official_links: [
            { name: 'UDID Portal', url: 'https://www.swavlambancard.gov.in/' },
        ],
    },

    // =======================================================
    // II. Certification Help Desk (10-14)
    // =======================================================
    {
        document_name: "Bonafide Certificate",
        category: "Certification Help Desk",
        description: "Proof of student status required for scholarships, bank accounts, and other official purposes.",
        steps: "Apply at institution or local authority → State purpose of application → Submit required documents → Receive certificate.",
        required_documents: ["Institution ID", "Admission proof", "Other documents as required by institute"],
        eligibility: "Current student of the institution.",
        application_fee: "Usually nominal or free; varies by institute.",
        processing_time: "Varies by institute.",
        official_links: [],
    },
    {
        document_name: "Income Certificate",
        category: "Certification Help Desk",
        description: "Required for fee concessions, scholarships, and various government benefits.",
        steps: "Apply via State E-District Portal or Tehsildar office → Submit proof of income and identity → Verification → Issuance.",
        required_documents: ["Income proof", "Identity proof", "Address proof"],
        eligibility: "Varies based on state/scheme criteria.",
        application_fee: "Nominal or free.",
        processing_time: "Varies by state.",
        official_links: [
            { name: 'State E-District Portals (Varies)', url: 'https://nfsa.gov.in/StatePortal/homepage.aspx' },
        ],
    },
    {
        document_name: "Caste Certificate",
        category: "Certification Help Desk",
        description: "Guide for applying for a Caste Certificate (SC/ST/OBC) for reservation benefits.",
        steps: "Apply via state portal → Fill application form → Upload proofs (community certificate) → Verification → Certificate Issuance.",
        required_documents: ["Identity proof", "Residential proof", "Community certificate"],
        eligibility: "Belonging to a recognized caste category.",
        application_fee: "Nominal or free.",
        processing_time: "Varies by state.",
        official_links: [
            { name: 'State Government Portals', url: '#' },
        ],
    },
    {
        document_name: "Domicile Certificate",
        category: "Certification Help Desk",
        description: "Proof of residence required for education quotas and various state benefits.",
        steps: "Apply online/offline → Submit residential proofs (e.g., utility bills) → Verification → Issuance.",
        required_documents: ["Address proofs", "Identity documents"],
        eligibility: "Proof of residence for the defined state period.",
        application_fee: "Nominal.",
        processing_time: "Varies by state.",
        official_links: [
            { name: 'State E-District Portals (Varies)', url: '#' },
        ],
    },
    {
        document_name: "Transfer/School Leaving Certificate",
        category: "Certification Help Desk",
        description: "Procedure to obtain the Transfer/Leaving Certificate (TC/SLC) from previous school/college.",
        steps: "Apply at school administration → Clear all dues/library books → Collect certificate on specified date.",
        required_documents: ["Admission and attendance records"],
        eligibility: "Former student of the institution.",
        application_fee: "Usually no fee or nominal.",
        processing_time: "Varies by institute.",
        official_links: [],
    },

    // =======================================================
    // III. Government Schemes Hub (15-19)
    // =======================================================
    {
        document_name: "National Scholarship Portal (NSP)",
        category: "Government Schemes Hub",
        description: "A single platform for applying to numerous Central/State/UGC schemes for financial aid from school to PhD level.",
        steps: "NSP Registration → Fill all forms (Personal/Academic/Bank Details) → Apply to relevant schemes → Institution verification.",
        required_documents: [
            "Mandatory Documents: Aadhaar card (or Enrolment number), Bank account details, Income certificate",
            "Caste & Residence Proofs: Caste certificate (if applicable), Domicile certificate (if required)",
            "Academic Documents: Educational certificates/previous marksheets, Bonafide/enrolment certificate from your institution"
        ],
        eligibility: "Varies by scheme; generally requires Indian citizenship, minimum academic marks, and family income below a specified ceiling.",
        application_fee: "Free.",
        processing_time: "Varies by scheme cycle (usually 1-3 months).",
        official_links: [
            { name: 'NSP Portal', url: 'https://scholarships.gov.in/' },
            { name: 'Student Login', url: 'https://scholarships.gov.in/Students' },
        ],
    },
    {
        document_name: "PM-YASASVI (YASASVI Scheme)",
        category: "Government Schemes Hub",
        description: "Scholarships for top-class school and college education for students from OBC, EBC, and DNT categories.",
        steps: "Check eligibility (Class 9/11) → Register and prepare for the Selection Entrance Test → Apply on the official portal → Scholarship disbursement.",
        required_documents: [
            "Identity Proofs: Aadhaar Card, Passport-size Photograph, Signature",
            "Financial & Category Proofs: Income Certificate (≤2.5 lakh), Caste Certificate (OBC/EBC/DNT), Domicile Certificate, Bank Passbook",
            "Academic Proofs: Previous Year Marksheet, School ID Card / Bonafide Certificate"
        ],
        eligibility: "Students of Class 9/11 or graduates whose parental income is below 2.5 Lakh per annum. Selection via entrance test.",
        application_fee: "Varies (often free for application, but test fee may apply).",
        processing_time: "Varies based on entrance test cycle.",
        official_links: [
            { name: 'YASASVI Portal (NTA)', url: 'https://yet.nta.ac.in/' },
        ],
    },
    {
        document_name: "PM-DAKSH Yojana",
        category: "Government Schemes Hub",
        description: "Skill development training (short-term, long-term, entrepreneurship) for target groups (SC, OBC, EBC, DNT, Safai Karamcharis) to improve employability.",
        steps: "Check eligibility (18-45 years) → Find desired skill course → Register and apply on the official portal → Complete training and receive certification.",
        required_documents: [
            "Identity Proofs: Aadhaar Card, Passport-size Photograph",
            "Category Proofs: Caste Certificate (SC/OBC/EBC/DNT), Income Certificate",
            "Supporting Proofs: Age Proof, Address Proof, Bank Passbook (first page), Education Certificate (Last passed class marksheet)"
        ],
        eligibility: "Target group individuals aged 18-45 years.",
        application_fee: "Free.",
        processing_time: "Varies based on course duration.",
        official_links: [
            { name: 'PM-DAKSH Portal', url: 'https://pmdaksh.dosje.gov.in/' },
        ],
    },
    {
        document_name: "National Overseas Scholarship (NOS)",
        category: "Government Schemes Hub",
        description: "Financial assistance for SC, ST, DNT, and similar categories to pursue Master's and Ph.D. abroad.",
        steps: "Check maximum family income and work experience eligibility → Secure admission from a foreign university → Gather extensive documents → Apply on the official portal → Selection and scholarship disbursement.",
        required_documents: [
            "Admission Documents: Offer Letter from Foreign University, GRE/GMAT/IELTS/TOEFL Scorecard, Statement of Purpose (SOP), Research Proposal (for PhD)",
            "Academic Proofs: 10th to Post-Graduation Degree & Marksheets",
            "Identity & Category Proofs: Aadhaar Card, Passport, Caste Certificate, Income Certificate"
        ],
        eligibility: "Candidates with specific work experience and a specified maximum family income.",
        application_fee: "Free to apply.",
        processing_time: "Long cycle (6-12 months).",
        official_links: [
            { name: 'NOS Official Portal', url: 'https://nosmsje.gov.in/' },
        ],
    },
    {
        document_name: "Ambedkar Social Innovation & Incubation Mission (ASIIM)",
        category: "Government Schemes Hub",
        description: "Equity funding (up to 30 Lakh) and incubation support for SC/ST youth with startup ideas in Higher Educational Institutions.",
        steps: "Develop a Startup Pitch Deck and Business Plan → Check eligibility (SC/ST youth) → Apply via VCFSC portal → Verification and Pitching to the committee → Fund disbursement.",
        required_documents: [
            "Identity Proofs: Aadhaar Card, Caste Certificate (SC/ST), Photograph, Resume/CV of Founder",
            "Academic Proofs: College/University ID Card or Bonafide, Degree Certificate, Marksheet of Last Completed Degree",
            "Startup Documents: Startup Pitch Deck, Business Plan Document, Proof of Startup Registration (if available)"
        ],
        eligibility: "SC/ST youth in Higher Educational Institutions who are pursuing or have completed a degree.",
        application_fee: "Free to apply.",
        processing_time: "Varies based on funding cycle.",
        official_links: [
            { name: 'ASIIM Portal (VCFSC)', url: 'https://vcfsc.in/asiim/' },
        ],
    },

    // =======================================================
    // IV. Skill & Internship Support (20-25)
    // =======================================================
    {
        document_name: "SWAYAM",
        category: "Skill & Internship Support",
        description: "Government portal offering free online courses and certifications (for a fee) from Class 9 to Post-Graduation across all disciplines.",
        steps: "Register on SWAYAM → Enroll in desired course → Complete assignments and learning modules → Appear for exam (optional fee for certificate).",
        required_documents: [],
        eligibility: "Free access to all residents in India.",
        application_fee: "Free for learning; optional fee for certification exam.",
        processing_time: "Varies by course duration.",
        official_links: [
            { name: 'SWAYAM Portal', url: 'https://swayam.gov.in/' },
        ],
    },
    {
        document_name: "NPTEL",
        category: "Skill & Internship Support",
        description: "Free online learning courses from 7 IITs and IISc Bangalore, specializing in Engineering and Science.",
        steps: "Visit NPTEL website → Browse courses (on NPTEL or SWAYAM) → Enroll and start learning.",
        required_documents: [],
        eligibility: "Open to all.",
        application_fee: "Free.",
        processing_time: "Varies by course duration.",
        official_links: [
            { name: 'NPTEL Website', url: 'https://nptel.ac.in/' },
        ],
    },
    {
        document_name: "Google Skillshop & Digital Unlocked",
        category: "Skill & Internship Support",
        description: "Free courses and industry-recognized certifications focused on digital skills, including Digital Marketing, Data Analytics, and AI.",
        steps: "Create an account on Skillshop → Choose course → Complete modules and assessment → Gain certification.",
        required_documents: [],
        eligibility: "Open to all.",
        application_fee: "Free.",
        processing_time: "Instant certification upon completion.",
        official_links: [
            { name: 'Google Skillshop', url: 'https://skillshop.exceedlms.com/' },
        ],
    },
    {
        document_name: "Internshala",
        category: "Skill & Internship Support",
        description: "One of India's largest internship and training platforms, connecting students and freshers with 4 lakh+ internships annually.",
        steps: "Register as a student → Complete a professional profile → Search and filter internships by field → Apply directly on the platform.",
        required_documents: ["Resume", "Completed student profile"],
        eligibility: "Open to students and freshers.",
        application_fee: "Free for application.",
        processing_time: "Varies by company recruitment cycle.",
        official_links: [
            { name: 'Internshala Portal', url: 'https://internshala.com/' },
        ],
    },
    {
        document_name: "AICTE Internship Portal",
        category: "Skill & Internship Support",
        description: "The official AICTE portal dedicated to providing mandatory and voluntary internship opportunities to students in technical institutions.",
        steps: "Register → Update profile with academic details → Filter internships by stream/location → Apply.",
        required_documents: ["Student ID", "Resume"],
        eligibility: "Students in technical institutions (AICTE affiliated colleges).",
        application_fee: "Free for application.",
        processing_time: "Varies by company recruitment cycle.",
        official_links: [
            { name: 'AICTE Internship Portal', url: 'https://internship.aicte-india.org/' },
        ],
    },
    {
        document_name: "Resume Building Tools & Tips",
        category: "Skill & Internship Support",
        description: "Key rules and guidelines to help you craft a professional, impactful resume and CV for securing jobs and internships.",
        steps: "Customize your resume for every specific job description (using keywords) → Quantify results (use numbers/metrics) → Use strong action verbs to start all bullet points → Aim for a one-page resume (if fresher) → Proofread meticulously.",
        required_documents: ["A draft of your current academic and work details"],
        eligibility: "Open to all students and professionals.",
        application_fee: "Free (using basic tools).",
        processing_time: "Self-paced.",
        official_links: [
            { name: 'Resume Templates (Example)', url: 'https://www.canva.com/resumes/templates/' },
        ],
    },

    // =======================================================
    // V. APAAR ID & Academic Results (26-28)
    // =======================================================
    {
        document_name: "APAAR ID",
        category: "APAAR ID & Academic Results",
        description: "The 'One Nation One Student ID' (12-digit permanent ID) that securely stores all verified academic documents digitally under NEP 2020.",
        steps: "Mandatory Requirement: You must have a valid Aadhaar number linked to a mobile number → (If minor, Parental Consent is required) → Process via DigiLocker (Visit portal → Sign up/Log in → Search for 'APAAR' or 'ABC ID Card' → Provide consent) → Your APAAR ID will be instantly generated.",
        required_documents: ["Aadhaar Card (linked to mobile number)"],
        eligibility: "All students from pre-primary to higher education.",
        application_fee: "Free.",
        processing_time: "Instant generation via DigiLocker.",
        official_links: [
            { name: 'DigiLocker Portal', url: 'https://www.digilocker.gov.in/' },
            { name: 'Academic Bank of Credits (ABC) Portal', url: 'https://www.abc.gov.in/' },
        ],
    },
    {
        document_name: "DigiLocker Guide: Accessing Academic Awards",
        category: "APAAR ID & Academic Results",
        description: "Instructions on accessing verified academic documents, marksheets, and certificates from CBSE/State Boards via the official government platform.",
        steps: "Register/Login with Aadhaar or registered mobile number → Verify Identity (OTP/PIN) → Navigate to 'Search Documents' → Find Your Board/University → Select the required document → Enter Details (Roll Number/Year of Passing) → Your verified certificate will be pulled and stored.",
        required_documents: ["Aadhaar Card", "Registered Mobile Number", "Roll Number/Registration Number"],
        eligibility: "Students whose Board/University is integrated with DigiLocker.",
        application_fee: "Free.",
        processing_time: "Instant pull.",
        official_links: [
            { name: 'DigiLocker Portal', url: 'https://www.digilocker.gov.in/' },
        ],
    },
    {
        document_name: "Direct Links for CBSE/State Board Results",
        category: "APAAR ID & Academic Results",
        description: "Official portals and resources for checking academic results for major boards (CBSE, State Boards).",
        steps: "Check DigiLocker for marksheets and certificates (2017 onwards) → Visit the respective board's official results website → Select Board → Enter Roll Number and required details → View Result.",
        required_documents: ["Roll Number", "Other required details (e.g., Mother's name)"],
        eligibility: "Students who appeared for the board examination.",
        application_fee: "Free.",
        processing_time: "Instant.",
        official_links: [
            { name: 'CBSE Results', url: 'https://cbseresults.nic.in/' },
            { name: 'NIC Results Portals', url: 'https://results.gov.in/' },
        ],
    },
];

module.exports = documentData;