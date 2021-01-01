import "./App.css";
import Navigation from "./containers/Navigation/Navigation";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import "antd/dist/antd.css";
import "./normalize.min.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation></Navigation>
      <Footer />
    </div>
  );
}

export default App;
