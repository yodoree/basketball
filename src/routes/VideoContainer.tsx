import { Link } from "react-router-dom";
import { useParams } from "react-router";
import styled from "styled-components";
import { Container, Li, Menu, Ul } from "../utils/styled";

const Nav = styled(Ul)``;

const NavContainer = styled(Li)``;

const NavMenu = styled(Menu)``;

function VideoContainer() {
  const { type } = useParams();
  console.log(type);
  return (
    <Container>
      <Nav>
        {type === "year" ? (
          <NavContainer>
            <NavMenu>
              <Link to="/videos/year/2022">2022년</Link>
            </NavMenu>
          </NavContainer>
        ) : (
          <NavContainer>
            <NavMenu>
              <Link to="/videos/tournament/1">
                제 1회 Team W.E배 2 on 2 대회
              </Link>
            </NavMenu>
          </NavContainer>
        )}
      </Nav>
    </Container>
  );
}

export default VideoContainer;
