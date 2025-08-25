import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ThemeToggle />
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <div className="col">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
