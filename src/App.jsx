import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import './styles/layout.css';

const App = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content">
        <HeroSection/>
        {/* Add your actual content sections here */}
      </main>
    </div>
  );
};

export default App;
