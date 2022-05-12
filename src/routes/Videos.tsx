import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
`;

const Header = styled.header`
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

const VideoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Video = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  width: 100%;
  margin-right: 5px;
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
        <Title>Team Work Ethic</Title>
      </Header>
      <VideoList>
        <VideoContainer>
          <Video>
            <Link to="/videos/q6K5FQghqCw" state={{ name: "1번째 연습" }}>
              1번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/sxPCM6KdqtA" state={{ name: "2번째 연습" }}>
              2번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/OML5Cpg-LJg" state={{ name: "3번째 연습" }}>
              3번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/rlfzhYVclAU" state={{ name: "4번째 연습" }}>
              4번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/dl4ocmK5gbg" state={{ name: "5번째 연습" }}>
              5번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/7OIesgL-p1I" state={{ name: "6번째 연습" }}>
              6번째 연습
            </Link>
          </Video>
        </VideoContainer>

        <VideoContainer>
          <Video>
            <Link to="/videos/BSsBFrBon4g" state={{ name: "7번째 연습" }}>
              7번째 연습
            </Link>
          </Video>
          <Video>
            <Link to="/videos/E5B-He6-UJ8" state={{ name: "우측 풀영상" }}>
              우측 풀영상
            </Link>
          </Video>
          <Video>
            <Link to="/videos/ATZ8nSYoUXY" state={{ name: "좌쪽 풀영상" }}>
              좌측 풀영상
            </Link>
          </Video>
        </VideoContainer>
        <VideoContainer>
          <Video>
            <Link to="/videos/vw-FpNpmB5g" state={{ name: "8번째 연습" }}>
              8번째 연습
            </Link>
          </Video>
          <Video>
            <Link to="/videos/EYj7qF7T5zM" state={{ name: "풀영상" }}>
              풀영상
            </Link>
          </Video>
        </VideoContainer>
        <VideoContainer>
          <Video>
            <Link to="/videos/sNnmsgeoRIg" state={{ name: "9번째 연습" }}>
              9번째 연습
            </Link>
          </Video>
        </VideoContainer>
        <VideoContainer>
          <Video>
            <Link to="/videos/4mucUVrmQE0" state={{ name: "10번째 연습" }}>
              10번째 연습
            </Link>
          </Video>
          <Video>
            <Link to="/videos/q3Koi5N6rHs" state={{ name: "풀영상" }}>
              풀영상
            </Link>
          </Video>
        </VideoContainer>
      </VideoList>
    </Container>
  );
}

export default Videos;
