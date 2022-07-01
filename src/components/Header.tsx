import { Link } from "react-router-dom";
import styled from "styled-components";

import logoImg from "../img/logo.png";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function Header() {
  return (
    <HeaderLayout>
      <Link to="/">
        <img src={logoImg} height="100%" />
      </Link>
    </HeaderLayout>
  );
}

export default Header;
