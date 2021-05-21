Button.js

import styled from "styled-components";
import { useTheme } from "../contexts/themeContext";

const Wrapper = styled.button`
  margin-top: 3rem;
`;

const Button = () => {
  const [isClicked, setIsClicked] = useTheme(); // (*)

  const handleClick = () => setIsClicked(!isClicked);

  return <Wrapper onClick={handleClick}>Click Me</Wrapper>;
};

export default Button;








Box.js
import styled from "styled-components";
import { useTheme } from "../contexts/themeContext";

const Wrapper = styled.div`
  background-color: ${(props) => (props.isClicked ? "black" : "coral")};
  // ...
`;

const Box = () => {
  const [isClicked] = useTheme(); // (*)

  return <Wrapper isClicked={isClicked}>I am a Box</Wrapper>;
};

export default Box;
