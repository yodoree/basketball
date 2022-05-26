import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bolder;
  color: ${(props) => props.theme.accentColor};
`;

function Header() {
  return (
    <HeaderLayout>
      <Title>
        <Link to="/">Team Work Ethic</Link>
      </Title>
    </HeaderLayout>
  );
}

export default Header;
