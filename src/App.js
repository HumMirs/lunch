import "./App.css";
import FirstContainer from "./components/first_container/first_container";
import FooterContainer from "./components/footer-container/footer_container";
import Main from "./components/main/main";
import SecondContainer from "./components/second_container/second_container";

function App() {
  return (
    <div className="App">
      <Main />
      <FirstContainer />
      <SecondContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
