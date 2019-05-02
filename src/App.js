import React from "react";
import Generator from "./components/Generator";
import styled from "styled-components";
import "./styles.css";

const Header = styled.div`
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 450px) {
    font-size: 24px;
    padding: 0 10px;
    text-align: center;
    p {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 451px max-width: 768px) {
    font-size: 36px;
    padding: 0 10px;
    text-align: center;
    p {
      font-size: 36px;
    }
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #7b2ce1;
  }
  @media only screen and (min-width: 451px max-width: 768px) {
    font-size: 50px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h1>BJJ Horse</h1>
          <p>First to spell CHOKE loses.</p>
        </Header>
        <Generator />
        <Footer>Created by <a href="https://github.com/enriquezm">Myles Enriquez</a></Footer>
      </div>
    );
  }
}

export default App;
