
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WinstonsGateway from './Gateway';
// Import your actual launcher component - replace this with the correct path
// If your launcher is in the document you shared, it should be something like:
// import WinstonsLauncher from './WinstonsLauncher';
// Or if it's in the same App.tsx file, you'll need to separate it into its own component

// Temporary placeholder - replace this with your actual launcher component
const WinstonsLauncher = () => {
  return <div>Your Launcher Goes Here</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Gateway is the first page */}
        <Route path="/" element={<WinstonsGateway />} />
        
        {/* Launcher is the second page (after routing) */}
        <Route path="/launcher" element={<WinstonsLauncher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;