import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ThemeToggle />
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <Dashboard />
        </div>    
      </div>
      <Footer />
    </div>
  );
}

export default App
