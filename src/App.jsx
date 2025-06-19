import Sidebar from './components/Sidebar';
import './styles/layout.css';

const App = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content">
        {/* Add your actual content sections here */}
      </main>
    </div>
  );
};

export default App;
