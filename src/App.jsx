import Header from './components/Header';
import Footer from './components/Footer';
import Traslado from './components/Traslado';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="w-100" style={{maxWidth: '600px'}}>
          <Traslado />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
