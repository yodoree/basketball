import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2016/11/29/03/01/backboard-1866968_1280.jpg");
  background-size: cover;
  background-position: bottom 200px;
  height: 100vh;
`;

const Container = styled.div`
  padding: 0px 10px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const VideoList = styled.ul``;

const Video = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;

  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 20px;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Videos() {
  return (
    <Container>
      <Header>
        <Title>농구연습팀</Title>
      </Header>
      <VideoList>
        <Video>
          <Link to="/videos/q6K5FQghqCw" state={{ name: "첫번째 연습" }}>
            첫번째 연습
          </Link>
        </Video>

        <Video>
          <Link to="/videos/sxPCM6KdqtA" state={{ name: "두번째 연습" }}>
            두번째 연습
          </Link>
        </Video>

        <Video>
          <Link to="/videos/OML5Cpg-LJg" state={{ name: "세번째 연습" }}>
            세번째 연습
          </Link>
        </Video>

        <Video>
          <Link to="/videos/rlfzhYVclAU" state={{ name: "네번째 연습" }}>
            네번째 연습
          </Link>
        </Video>

        <Video>
          <Link to="/videos/dl4ocmK5gbg" state={{ name: "다섯번째 연습" }}>
            다섯번째 연습
          </Link>
        </Video>

        <Video>
          <Link to="/videos/7OIesgL-p1I" state={{ name: "여섯번째 연습" }}>
            여섯번째 연습
          </Link>
        </Video>
      </VideoList>
    </Container>
  );
}

export default Videos;
