import React from "react";
import Generator from "./components/Generator";
import styled from "styled-components";
import "./styles.css";

const Header = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #7b2ce1;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h1>BJJ Horse</h1>
        </Header>
        <Generator />
        <Footer>Created by <a href="https://github.com/enriquezm">Myles Enriquez</a></Footer>
      </div>
    );
  }
}

export default App;
