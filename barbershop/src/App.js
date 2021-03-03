import './assets/css/App.css';
import "./assets/css/reset.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Index from "./components/index/Index";

function App() {
  return (
    <section className="container">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Navbar />
      <Index />
      <Footer />
    </section>
  );
}

export default App;
