import './Card.module.css';
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"


function App() {
  return (
    <>
      <div>
        <Header />
        <div className="card-container">
        <Card name="Maria" title="CEO" age="29" />
        <Card name="Kati" title="Developer" age="25" />
        <Card name="Karin" title="Designer" age="45" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
