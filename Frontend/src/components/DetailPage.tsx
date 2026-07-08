// import { ArrowLeft } from 'lucide-react';
// import logoImage from 'figma:asset/810552ca9745b6a88ade1563b20f7b74c876dbea.png';

// interface DetailPageProps {
//   title: string;
//   category: string;
//   onBack: () => void;
// }

// export default function DetailPage({ title, category, onBack }: DetailPageProps) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
//       {/* Header */}
//       <nav className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={onBack}
//                 className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span>Back to Home</span>
//               </button>
//             </div>
//             <img 
//               src={logoImage} 
//               alt="StudentSathi Logo" 
//               className="h-12 w-auto"
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Category Badge */}
//         <div className="mb-6">
//           <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full">
//             {category}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-8">
//           {title}
//         </h1>

//         {/* Empty space for future content */}
//         <div className="min-h-[400px]">
//           {/* Content will be loaded from MongoDB */}
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/DetailPage.tsx

// import { useState, useEffect } from 'react';
// import { ArrowLeft, Clock, DollarSign, FileText } from 'lucide-react';

// interface Link {
//     name: string;
//     url: string;
// }

// interface DocumentDetails {
//     _id: string;
//     document_name: string;
//     category: string;
//     description: string;
//     steps: string;
//     required_documents: string[]; 
//     application_fee: string;
//     processing_time: string;
//     official_links: Link[];
//     eligibility?: string; 
// }

// interface DetailPageProps {
//     documentId: string; // The MongoDB ID is now the main prop
//     onBack: () => void;
// }

// const API_BASE_URL = 'http://localhost:5000/api/documents'; 

// export default function DetailPage({ documentId, onBack }: DetailPageProps) {
//     const [document, setDocument] = useState<DocumentDetails | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // --- DATA FETCHING LOGIC ---
//     useEffect(() => {
//         const fetchDocument = async () => {
//             try {
//                 // Fetch the specific document using the ID
//                 const response = await fetch(`${API_BASE_URL}/${documentId}`);
                
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch document details');
//                 }

//                 const data: DocumentDetails = await response.json();
//                 setDocument(data);
                
//             } catch (err) {
//                 console.error("Error fetching document:", err);
//                 setError("Could not load document details. Please ensure the backend is running.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDocument();
//     }, [documentId]); 

//     // Function to safely render steps by splitting by '→'
//     const renderSteps = (stepsString: string) => {
//         if (!stepsString) return <li>Steps are not yet available for this document.</li>;

//         return stepsString.split('→').map((step, index) => (
//             <li key={index} className="mb-3 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-md">
//                 {step.trim()}
//             </li>
//         ));
//     };

//     // --- RENDERING STATES (Loading/Error/Not Found) ---

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center text-blue-600 text-lg">
//                 Loading Document Guide...
//             </div>
//         );
//     }

//     if (error || !document) {
//         return (
//             <div className="min-h-screen text-center p-12 text-red-600">
//                 <h2 className="text-xl font-bold">{error ? "Connection/Fetch Error" : "Document Not Found"}</h2>
//                 <p>{error || "The requested document could not be found."}</p>
//                 <button onClick={onBack} className="mt-4 text-blue-600 hover:underline">
//                     Go Back
//                 </button>
//             </div>
//         );
//     }
    
//     // --- FINAL RENDER ---

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
//             {/* Header */}
//             <nav className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
//                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                      <div className="flex items-center justify-between h-20">
//                          <button
//                              onClick={onBack}
//                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
//                          >
//                              <ArrowLeft className="w-5 h-5" />
//                              <span>Back to Home</span>
//                          </button>
//                          <div className="text-xl font-bold text-blue-800">Student Saathi</div> 
//                      </div>
//                  </div>
//             </nav>

//             {/* Content Container */}
//             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
//                 {/* Category & Title */}
//                 <div className="mb-6">
//                     <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                         {document.category}
//                     </span>
//                 </div>
//                 <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
//                     {document.document_name}
//                 </h1>
//                 <p className="text-lg text-gray-600 mb-8 border-b pb-6">
//                     {document.description}
//                 </p>

//                 {/* KEY INFO BADGES */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-4 bg-white rounded-xl shadow-lg border border-blue-100">
//                     <div className="flex items-center gap-3">
//                         <DollarSign className="w-6 h-6 text-green-500" />
//                         <div>
//                             <p className="text-sm text-gray-500">Application Fee</p>
//                             <p className="font-semibold text-gray-800">{document.application_fee || 'Not Applicable'}</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <Clock className="w-6 h-6 text-indigo-500" />
//                         <div>
//                             <p className="text-sm text-gray-500">Processing Time</p>
//                             <p className="font-semibold text-gray-800">{document.processing_time || 'Varies'}</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FileText className="w-6 h-6 text-yellow-600" />
//                         <div>
//                             <p className="text-sm text-gray-500">Eligibility</p>
//                             <p className="font-semibold text-gray-800">{document.eligibility || 'Check Official Site'}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 1. REQUIRED DOCUMENTS SECTION */}
//                 <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
//                     <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-3">
//                         Required Documents
//                     </h2>
//                     <ul className="list-disc space-y-2 pl-5 text-gray-700">
//                         {document.required_documents.length > 0 ? (
//                             document.required_documents.map((doc, index) => (
//                                 <li key={index}>{doc}</li>
//                             ))
//                         ) : (
//                             <li>No specific documents listed. Please check the official guide.</li>
//                         )}
//                     </ul>
//                 </div>

//                 {/* 2. STEP-BY-STEP GUIDE */}
//                 <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
//                     <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-3">
//                         Step-by-Step Application Guide
//                     </h2>
//                     <ol className="text-gray-700 space-y-3">
//                          {/* Renders steps by splitting the string saved in MongoDB */}
//                         {renderSteps(document.steps)}
//                     </ol>
//                 </div>
                
//                 {/* 3. OFFICIAL LINKS */}
//                 <div className="p-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-2xl">
//                     <h2 className="text-2xl font-bold text-white mb-6">
//                         Official Links & Resources
//                     </h2>
//                     <div className="flex flex-wrap gap-4">
//                         {document.official_links.map((link, index) => (
//                             <a 
//                                 key={index} 
//                                 href={link.url} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }


//3rd---
// src/components/DetailPage.tsx

// 

import { useState, useEffect } from "react";
import { ArrowLeft, Clock, DollarSign, FileText } from "lucide-react";

interface Link {
  name: string;
  url: string;
}

interface DocumentDetails {
  _id: string;
  document_name: string;
  category: string;
  description: string;
  steps: string;
  required_documents: string[];
  application_fee: string;
  processing_time: string;
  official_links: Link[];
  eligibility?: string;
}

interface DetailPageProps {
  documentId: string;
  onBack: () => void;
  onUnauthorized?: () => void; // 👈 redirect to login
}

const API_BASE_URL = "http://localhost:5000/api/documents";

export default function DetailPage({
  documentId,
  onBack,
  onUnauthorized,
}: DetailPageProps) {
  const [document, setDocument] = useState<DocumentDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          onUnauthorized?.();
          return;
        }

        const response = await fetch(`${API_BASE_URL}/${documentId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ AUTH HEADER
          },
        });

        if (response.status === 401 || response.status === 403) {
          localStorage.clear();
          onUnauthorized?.();
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch document details");
        }

        const data: DocumentDetails = await response.json();
        setDocument(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load document. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [documentId, onUnauthorized]);

  const renderSteps = (stepsString: string) => {
    if (!stepsString)
      return <li>Steps are not available for this document.</li>;

    return stepsString.split("→").map((step, index) => (
      <li
        key={index}
        className="mb-3 pl-6 relative before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full"
      >
        {step.trim()}
      </li>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-600 text-lg">
        Loading Document Guide...
      </div>
    );
  }

  if (error || !document) {
    return (
      <div className="min-h-screen text-center p-12 text-red-600">
        <h2 className="text-xl font-bold">Error</h2>
        <p>{error || "Document not found."}</p>
        <button
          onClick={onBack}
          className="mt-4 text-blue-600 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="text-xl font-bold text-blue-700">
            Student Saathi
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
          {document.category}
        </span>

        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          {document.document_name}
        </h1>

        <p className="text-gray-600 mt-4 border-b pb-6">
          {document.description}
        </p>

        {/* Info */}
        <div className="grid md:grid-cols-3 gap-6 my-10 bg-white p-6 rounded-xl shadow">
          <InfoCard
            icon={<DollarSign className="text-green-500" />}
            label="Application Fee"
            value={document.application_fee || "Not Applicable"}
          />
          <InfoCard
            icon={<Clock className="text-indigo-500" />}
            label="Processing Time"
            value={document.processing_time || "Varies"}
          />
          <InfoCard
            icon={<FileText className="text-yellow-500" />}
            label="Eligibility"
            value={document.eligibility || "Check official site"}
          />
        </div>

        {/* Required Docs */}
        <Section title="Required Documents">
          <ul className="list-disc pl-6 space-y-2">
            {document.required_documents.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </Section>

        {/* Steps */}
        <Section title="Step-by-Step Application Guide">
          <ol>{renderSteps(document.steps)}</ol>
        </Section>

        {/* Links */}
        <Section title="Official Links">
          <div className="flex flex-wrap gap-4">
            {document.official_links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700"
              >
                {link.name}
              </a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

/* Reusable Components */
const Section = ({ title, children }: any) => (
  <div className="bg-white p-8 rounded-xl shadow mb-10">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
    {children}
  </div>
);

const InfoCard = ({ icon, label, value }: any) => (
  <div className="flex gap-3 items-center">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
