import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Li, Menu, Ul } from "../utils/styled";
import { useParams } from "react-router";

const Nav = styled(Ul)``;

const NavContainer = styled(Li)``;

const NavMenu = styled(Menu)``;

function VideosNav() {
  const { type } = useParams();
  return (
    <Container>
      <Nav>
        {type === "competition" ? (
          <NavContainer>
            <NavMenu>
              <Link to="/videos/competition/1">
                제 1회 Team W.E배 2 on 2 대회
              </Link>
            </NavMenu>
          </NavContainer>
        ) : type === "workout" ? (
          <NavContainer>
            <NavMenu>
              <Link to="/videos/workout/2022">2022년</Link>
            </NavMenu>
          </NavContainer>
        ) : (
          <NavContainer>
            <NavMenu>
              <Link to="/videos/exchange/2022">2022년</Link>
            </NavMenu>
          </NavContainer>
        )}
      </Nav>
    </Container>
  );
}

export default VideosNav;
