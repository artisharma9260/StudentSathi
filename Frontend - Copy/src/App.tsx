// import { useState } from 'react';
// import LoginPage from './components/LoginPage';
// import Homepage from './components/Homepage';
// import DetailPage from './components/DetailPage';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [selectedCard, setSelectedCard] = useState<{ title: string; category: string } | null>(null);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleGuestLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleCardClick = (title: string, category: string) => {
//     setSelectedCard({ title, category });
//   };

//   const handleBackToHome = () => {
//     setSelectedCard(null);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {!isLoggedIn ? (
//         <LoginPage onLogin={handleLogin} onGuestLogin={handleGuestLogin} />
//       ) : selectedCard ? (
//         <DetailPage 
//           title={selectedCard.title} 
//           category={selectedCard.category}
//           onBack={handleBackToHome}
//         />
//       ) : (
//         <Homepage onCardClick={handleCardClick} />
//       )}
//     </div>
//   );
// }
// src/App.tsx

import { useState } from 'react';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';
import DetailPage from './components/DetailPage';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    // Stores the MongoDB ID of the document currently being viewed.
    const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleGuestLogin = () => {
        setIsLoggedIn(true);
    };

    // Accepts the MongoDB ID from the Homepage component.
    const handleCardClick = (documentId: string) => {
        setSelectedDocumentId(documentId);
    };

    const handleBackToHome = () => {
        // Resets the state to null to display the Homepage.
        setSelectedDocumentId(null);
    };

    return (
        <div className="min-h-screen bg-white">
            {!isLoggedIn ? (
                <LoginPage onLogin={handleLogin} onGuestLogin={handleGuestLogin} />
            ) : selectedDocumentId ? (
                // Pass the documentId to the DetailPage for fetching.
                <DetailPage 
                    documentId={selectedDocumentId} 
                    onBack={handleBackToHome}
                />
            ) : (
                // Pass the updated click handler to the Homepage.
                <Homepage onCardClick={handleCardClick} />
            )}
        </div>
    );
}