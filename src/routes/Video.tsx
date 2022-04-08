import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
const videos = [
  "https://www.youtube.com/embed/q6K5FQghqCw",
  "https://www.youtube.com/embed/sxPCM6KdqtA",
  "https://www.youtube.com/embed/OML5Cpg-LJg",
  "https://www.youtube.com/embed/rlfzhYVclAU",
  "https://www.youtube.com/embed/dl4ocmK5gbg",
];

const Container = styled.div`
  padding: 0px 10px;
  padding-top: 10px;
  max-width: 560px;
  margin: 0 auto;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 32px;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 10px;
`;

const Back = styled.span`
  font-size: 32px;
`;

const VideoDescription = styled.p`
  margin-top: 10px;
  padding: 5px 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor}; ;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
interface RouteState {
  name: string;
}

function Video() {
  const { id } = useParams();
  const { name } = useLocation().state as RouteState;

  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
        <Link to="/">
          <Back>&larr;</Back>
        </Link>
      </TitleWrapper>
      <VideoWrapper>
        <iframe
          width="90%"
          height="35%"
          src={`${videos.filter((video) => id === video.substring(30))}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <VideoDescription>
          ✅ 자신의 피드백을 유튜브 영상 댓글에 남겨주세요! <br />
          🏆 꾸준한 피드백을 남겨주시는분께는 <br />
          👍🏼 연말에 푸짐한 상품을 드립니다!
        </VideoDescription>
      </VideoWrapper>
    </Container>
  );
}

export default Video;
