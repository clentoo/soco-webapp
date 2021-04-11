import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import FooterDetails from "./FooterDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Searchbar />
      <Homepage />
      <Footer />
      <FooterDetails />
    </div>
  );
}

export default App;
