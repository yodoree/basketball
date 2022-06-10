import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const URL = `https://www.youtube.com/embed`;

const Container = styled.div`
  padding: 0px 10px;
  padding-top: 10px;
  margin: 0 auto;
  max-width: 800px;
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

const VideoDescription = styled.p`
  margin-top: 10px;
  padding: 5px 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor}; ;
`;

const VideoView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  position: relative;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
interface RouteState {
  name: string;
}

function Video() {
  const { videoid } = useParams();
  const { type } = useParams();
  const { name } = useLocation().state as RouteState;

  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
      </TitleWrapper>
      <VideoView>
        <iframe
          width="100%"
          height="100%"
          src={`${URL}/${videoid}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoView>
      {type === "year" ? (
        name.includes("연습경기") ? (
          <VideoDescription>
            ✅연습경기 영상입니다 <br />
            ⛹️미션을 잘 수행했는지 확인해보세요!
          </VideoDescription>
        ) : (
          <VideoDescription>
            ✅ 자신의 피드백을 유튜브 영상 댓글에 남겨주세요! <br />
            🏆 꾸준한 피드백을 남겨주시는분께는 <br />
            👍🏼 연말에 푸짐한 상품을 드립니다!
          </VideoDescription>
        )
      ) : (
        <VideoDescription>✅ {name}</VideoDescription>
      )}
    </Container>
  );
}

export default Video;
