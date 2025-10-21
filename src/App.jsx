import './App.css'
import Crad from "./components/Card";
import Footer from "./components/Footer"
import Header from "./components/Header"

function Header() {
  return (
    <div class="header">
      <h1>Logo</h1>
    </div>
  )
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

function Footer(){
  return(
    <div class="footer">
      <h1>Copyrights</h1>
    </div>
  )
}

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
