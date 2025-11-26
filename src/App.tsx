import "./App.css";
import Header from "./components/Header/Header";
import AmoutMe from "./components/AmoutMe/AmoutMe";
import Services from "./components/Services/Services";
import Feedback from "./components/Feedback/Feedback";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Header />
      <AmoutMe />
      <Services />
      <Feedback />
      <Faq />
      <Footer />
      <Modal />
    </>
  );
}

export default App;
