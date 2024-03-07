import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Plans from "./Components/Plans/Plans";

const MainWrapper = styled.div`
  background-color: #191b1d;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <MainWrapper>
      <Header />
      <Plans />
    </MainWrapper>
  );
}

export default App;
