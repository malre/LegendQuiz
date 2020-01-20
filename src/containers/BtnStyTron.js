import { styled } from "styletron-react";
import THEME from "./theme";

export default () => {
  const Card = styled("div", {
    padding: THEME.sizing[3],
    backgroundColor: THEME.colors.positive[0]
  });
};

class BtnStyTron extends React.Component {
  constructor() {
    this.state = {
      isActive: false
    };
  }
  render() {
    const Button = styled("button", props => ({
      padding: "0.5em 1em",
      color: props.$isActive ? "#fff" : "#000",
      background: props.$isActive ? "#276ef1" : "none",
      fontSize: "1em",
      borderRadius: "4px",
      border: "1px solid #aaa",
      ":hover": {
        background: props.$isActive ? "green" : "yellow"
      }
    }));
    const { isActive } = this.state;
    return (
      <Button
        $isActive={isActive}
        onClick={() => {
          this.setState(prev => ({ isActive: !prev.isActive }));
        }}
      >
        It is {isActive ? "on" : "off"}!
      </Button>
    );
  }
}export default BtnStyTron;