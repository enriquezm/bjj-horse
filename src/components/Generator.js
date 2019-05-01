import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.b`
  color: #18e56e;
`;

const Move = styled.p`
  font-size: 24px;
  color: #e518dd;
`;
const Button = styled.button`
  font-family: "Fugaz One", cursive;
  font-size: 18px;
  margin-bottom: 25px;
  padding: 10px;
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
        <Button onClick={this.handleClick}>Challenge Me</Button>
        <Move>
          <Highlight>{this.state.category}</Highlight> from
          <Highlight> {this.state.position}</Highlight>
        </Move>
      </Container>
    );
  }
}

export default Generator;
