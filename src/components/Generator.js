import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

const Move = styled.div`
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 3px;
  @media only screen and (max-width: 450px) {
    width: 75%;
    border: 1px solid #7b2ce1;
  }
`;

const Highlight = styled.b`
  color: #18e56e;
`;

const P = styled.p`
  margin: 0;
  text-align: center;
  font-size: 24px;
  color: #e518dd;
  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
const Button = styled.button`
  margin-bottom: 25px;
  padding: 20px;
  font-family: "Fugaz One", cursive;
  font-size: 18px;
  border: none;
  border-radius: 3px;
  background-color: #7b2ce1;
  color: white;
  transition: 0.3s all;
  &:hover {
    background-color: #e518dd;
    color: white;
    cursor: pointer;
    transition: 0.2s all;
  }
  &:active {
    transform: scale(0.75);
  }
  @media only screen and (max-width: 450px) {
    width: 75%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "Loading..",
      category: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      category: nextProps.category
    });
  }
  componentDidMount() {
    const moveNum = Math.floor(Math.random() * data.length + 1);
    const move = data[moveNum];

    this.setState({
      position: move.position,
      category: move.type
    });
  }
  handleClick() {
    const moveNum = Math.floor(Math.random() * data.length + 1);
    const move = data[moveNum];

    this.setState({
      position: move.position,
      category: move.type
    });
  }
  render() {
    return (
      <Container>
        <Move>
          <P><Highlight>{this.state.category}</Highlight></P> 
          <P>from</P>
          <P><Highlight> {this.state.position}</Highlight></P>
        </Move>
        <Button onClick={this.handleClick}>Challenge Me</Button>
      </Container>
    );
  }
}

export default Generator;
