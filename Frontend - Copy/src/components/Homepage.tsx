// import Navigation from './Navigation';
// import HeroSection from './HeroSection';
// import SectionCard from './SectionCard';
// import EmergencyCard from './EmergencyCard';
// import Footer from './Footer';

// interface HomepageProps {
//   onCardClick: (title: string, category: string) => void;
// }

// export default function Homepage({ onCardClick }: HomepageProps) {
//   // Section 1: ID & Document Help
//   const idDocuments = [
//     'Aadhaar Card',
//     'PAN Card',
//     'Voter ID Card',
//     'Driving License',
//     'Indian Passport',
//     'Ration Card',
//     'Birth Certificate',
//     'ABHA Card',
//     'Disability/UDID Card'
//   ];

//   // Section 2: Certification Help Desk
//   const certificates = [
//     'Bonafide Certificate',
//     'Income Certificate',
//     'Caste Certificate',
//     'Domicile Certificate',
//     'Transfer/School Leaving Certificate'
//   ];

//   // Section 3: Government Schemes Hub
//   const schemes = [
//     'National Scholarship Portal',
//     'PM–YASASVI',
//     'PM–DARSH Yojana',
//     'National Overseas Scholarship',
//     'Ambedkar Social Innovation and Incubation Mission (ASIIM)'
//   ];

//   // Section 4: Skill & Internship Support
//   const freeCourses = [
//     'SWAYAM',
//     'NPTEL',
//     'Google Skillshop & Digital Unlocked'
//   ];

//   const internships = [
//     'Internshala',
//     'AICTE Internship Portal'
//   ];

//   const resumeBuilding = [
//     'Resume Building Tools & Tips'
//   ];

//   // Section 5: APAAR ID & Academic Results
//   const academicResources = [
//     'APAAR ID',
//     'Digilocker Guide',
//     'Direct Links for CBSE/State Board Results'
//   ];

//   // Section 6: Emergency Contact Numbers
//   const emergencyContacts = [
//     { title: 'Mental Health Helpline (KIRAN)', contact: '1800-599-0019', type: 'mental' as const },
//     { title: "Women's Safety Helpline", contact: '181 / 1091', type: 'safety' as const },
//     { title: 'Cybercrime Portal', contact: 'cybercrime.gov.in', type: 'cyber' as const },
//     { title: 'Anti-Ragging Helpline', contact: '1800-180-5522', type: 'phone' as const }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
//       <Navigation />
//       <HeroSection />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Section 1: ID & Document Help */}
//         <section id="documents" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">ID & Document Help</h2>
//           </div>
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//             {idDocuments.map((doc) => (
//               <SectionCard 
//                 key={doc} 
//                 title={doc} 
//                 category="document"
//                 onClick={() => onCardClick(doc, 'ID & Document Help')}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Section 2: Certification Help Desk */}
//         <section id="certificates" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Certification Help Desk</h2>
//           </div>
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//             {certificates.map((cert) => (
//               <SectionCard 
//                 key={cert} 
//                 title={cert} 
//                 category="certificate"
//                 onClick={() => onCardClick(cert, 'Certification Help Desk')}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Section 3: Government Schemes Hub */}
//         <section id="schemes" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Government Schemes Hub</h2>
//           </div>
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//             {schemes.map((scheme) => (
//               <SectionCard 
//                 key={scheme} 
//                 title={scheme} 
//                 category="scheme"
//                 onClick={() => onCardClick(scheme, 'Government Schemes Hub')}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Section 4: Skill & Internship Support */}
//         <section id="skills" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Skill & Internship Support</h2>
//           </div>
          
//           {/* Subsection 1: Free Courses */}
//           <div className="mb-8">
//             <h3 className="text-gray-700 mb-4">Curated List of Free Courses</h3>
//             <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//               {freeCourses.map((course) => (
//                 <SectionCard 
//                   key={course} 
//                   title={course} 
//                   category="skill"
//                   onClick={() => onCardClick(course, 'Skill & Internship Support')}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Subsection 2: Internship Platforms */}
//           <div className="mb-8">
//             <h3 className="text-gray-700 mb-4">Internship Platforms</h3>
//             <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//               {internships.map((platform) => (
//                 <SectionCard 
//                   key={platform} 
//                   title={platform} 
//                   category="skill"
//                   onClick={() => onCardClick(platform, 'Skill & Internship Support')}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Subsection 3: Resume Building */}
//           <div className="mb-8">
//             <h3 className="text-gray-700 mb-4">Resume Building Help</h3>
//             <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//               {resumeBuilding.map((item) => (
//                 <SectionCard 
//                   key={item} 
//                   title={item} 
//                   category="skill"
//                   onClick={() => onCardClick(item, 'Skill & Internship Support')}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Section 5: APAAR ID & Academic Results */}
//         <section id="academic" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">APAAR ID & Academic Results</h2>
//           </div>
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//             {academicResources.map((resource) => (
//               <SectionCard 
//                 key={resource} 
//                 title={resource} 
//                 category="academic"
//                 onClick={() => onCardClick(resource, 'APAAR ID & Academic Results')}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Section 6: Emergency Contact Numbers */}
//         <section id="helplines" className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Emergency Contact Numbers</h2>
//           </div>
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
//             {emergencyContacts.map((contact) => (
//               <EmergencyCard
//                 key={contact.title}
//                 title={contact.title}
//                 contact={contact.contact}
//                 type={contact.type}
//               />
//             ))}
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </div>
//   );
// }



// src/components/Homepage.tsx

import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import SectionCard from './SectionCard';
import EmergencyCard from './EmergencyCard';
import Footer from './Footer';

// Define the structure of the data expected from the backend
interface CardData {
    _id: string; // The unique ID from MongoDB (CRITICAL)
    title: string; // The document_name
}

interface DashboardData {
    [category: string]: CardData[];
}

interface HomepageProps {
    onCardClick: (documentId: string) => void; 
}

const API_URL = 'http://localhost:5000/api/documents'; 

export default function Homepage({ onCardClick }: HomepageProps) {
    const [documents, setDocuments] = useState<DashboardData>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- API Fetching Logic ---
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: DashboardData = await response.json();
                setDocuments(data);
                
            } catch (err) {
                console.error("Error fetching documents:", err);
                setError("Failed to load documents from server. Check backend connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []); 

    // Static data for Emergency Contacts 
    const emergencyContacts = [
        { title: 'Mental Health Helpline (KIRAN)', contact: '1800-599-0019', type: 'mental' as const },
        { title: "Women's Safety Helpline", contact: '181 / 1091', type: 'safety' as const },
        { title: 'Cybercrime Portal', contact: 'cybercrime.gov.in', type: 'cyber' as const },
        { title: 'Anti-Ragging Helpline', contact: '1800-180-5522', type: 'phone' as const }
    ];

    // --- Utility function to map category names to colors/styles ---
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case 'ID & Document Help':
                return { from: 'from-blue-600', to: 'to-cyan-600' };
            case 'Certification Help Desk':
                return { from: 'from-teal-600', to: 'to-cyan-600' };
            case 'Government Schemes Hub':
                return { from: 'from-green-600', to: 'to-emerald-600' };
            case 'Skill & Internship Support':
                return { from: 'from-orange-600', to: 'to-yellow-600' };
            case 'APAAR ID & Academic Results':
                return { from: 'from-indigo-600', to: 'to-blue-600' };
            default:
                return { from: 'from-gray-500', to: 'to-gray-700' };
        }
    };
    
    // Define the order of the sections
    const orderedCategories = [
        'ID & Document Help',
        'Certification Help Desk',
        'Government Schemes Hub',
        'Skill & Internship Support',
        'APAAR ID & Academic Results'
    ];


    // --- RENDERING STATES ---
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-blue-600 text-lg">
                Loading Application Dashboard...
            </div>
        );
    }

    if (error) {
         return (
            <div className="min-h-screen text-center p-12 text-red-600">
                <h2 className="text-xl font-bold">Connection Error:</h2>
                <p>{error}</p>
                <p className='mt-4 text-gray-700'>
                    Please ensure your Node.js backend is running on <code className='bg-gray-200 p-1 rounded'>http://localhost:5000</code>.
                </p>
            </div>
        );
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
            <Navigation />
            <HeroSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Dynamically render sections based on MongoDB data */}
                {orderedCategories.map((category) => {
                    const categoryDocs = documents[category];
                    if (!categoryDocs || categoryDocs.length === 0) return null;

                    const styles = getCategoryStyles(category);

                    return (
                        <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]/g, '-')} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-1 h-8 bg-gradient-to-b ${styles.from} ${styles.to} rounded-full`}></div>
                                <h2 className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.from} ${styles.to}`}>
                                    {category}
                                </h2>
                            </div>
                            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
                                {categoryDocs.map((doc) => (
                                    <SectionCard 
                                        key={doc._id} 
                                        title={doc.title} 
                                        category="document" 
                                        onClick={() => onCardClick(doc._id)} 
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}

                {/* Section 6: Emergency Contact Numbers (Static) */}
                <section id="helplines" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Emergency Contact Numbers</h2>
                    </div>
                    <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
                        {emergencyContacts.map((contact) => (
                            <EmergencyCard
                                key={contact.title}
                                title={contact.title}
                                contact={contact.contact}
                                type={contact.type}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}