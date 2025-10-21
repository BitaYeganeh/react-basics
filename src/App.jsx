import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Card name="Maria" title="CEO" age="29" />
        <Card name="Kati" title="Developer" age="25" />
        <Card name="Karin" title="Designer" age="45" />
      </main>
      <Footer />
    </div>
  );
}

export default App;