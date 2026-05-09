import LandingPage from "../src/pages/LandingPage.tsx";
import Background from "../src/components/Background.tsx";

const App = () => {
  return (
      <>
        <Background />
        <LandingPage onNext={() =>{alert("Envelope page!")}} />
      </>
        );
};

export default App;
