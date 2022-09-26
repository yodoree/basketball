import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Li, Menu, Ul } from "../utils/styled";

const Nav = styled(Ul)``;

const NavContainer = styled(Li)``;

const NavMenu = styled(Menu)``;

function Home() {
  return (
    <Container>
      <Nav>
        <NavContainer>
          <NavMenu>
            <Link to="/videos/workout">정기연습</Link>
          </NavMenu>
        </NavContainer>

        <NavContainer>
          <NavMenu>
            <Link to="/videos/exchange">교류전</Link>
          </NavMenu>
        </NavContainer>

        <NavContainer>
          <NavMenu>
            <Link to="/videos/competition">자체 대회</Link>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Container>
  );
}

export default Home;
