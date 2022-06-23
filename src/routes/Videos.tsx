import { Link } from "react-router-dom";
import { useParams } from "react-router";
import styled from "styled-components";
import { Li, Menu, Ul } from "../utils/styled";

const Container = styled.div`
  padding: 0px 10px;
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
`;

const VideoList = styled(Ul)``;

const VideoContainer = styled(Li)``;

const Video = styled(Menu)``;

function Videos() {
  const { type } = useParams();
  return (
    <Container>
      {type !== "tournament" ? (
        <VideoList>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/q6K5FQghqCw`}
                state={{ name: "1번째 연습" }}
              >
                1번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/sxPCM6KdqtA`}
                state={{ name: "2번째 연습" }}
              >
                2번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/OML5Cpg-LJg`}
                state={{ name: "3번째 연습" }}
              >
                3번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/rlfzhYVclAU`}
                state={{ name: "4번째 연습" }}
              >
                4번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/dl4ocmK5gbg`}
                state={{ name: "5번째 연습" }}
              >
                5번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/7OIesgL-p1I`}
                state={{ name: "6번째 연습" }}
              >
                6번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/BSsBFrBon4g`}
                state={{ name: "7번째 연습" }}
              >
                7번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/E5B-He6-UJ8`}
                state={{ name: "우측 풀영상" }}
              >
                우측 풀영상
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/ATZ8nSYoUXY`}
                state={{ name: "좌쪽 풀영상" }}
              >
                좌측 풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/vw-FpNpmB5g`}
                state={{ name: "8번째 연습" }}
              >
                8번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/EYj7qF7T5zM`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/sNnmsgeoRIg`}
                state={{ name: "9번째 연습" }}
              >
                9번째 연습
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/4mucUVrmQE0`}
                state={{ name: "10번째 연습" }}
              >
                10번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/q3Koi5N6rHs`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/BUdClYSboUg`}
                state={{ name: "11번째 연습" }}
              >
                11번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/cMrov4csijY`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/lNKBvcuosdc`}
                state={{ name: "14번째 연습" }}
              >
                14번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/F0ukuz7chQg`}
                state={{ name: "연습경기" }}
              >
                1번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/TS4HjYjdmPA`}
                state={{ name: "15번째 연습" }}
              >
                15번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/2022/84qZUbJi7wA`}
                state={{ name: "연습경기" }}
              >
                2번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/2022/BVBH-sjcKd0`}
                state={{ name: "연습경기" }}
              >
                3번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
        </VideoList>
      ) : (
        <VideoList>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/OEQov7CLc8I`}
                state={{ name: "1경기" }}
              >
                1경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/Tr-RCVBFNfw`}
                state={{ name: "2경기" }}
              >
                2경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/tKtrnq6s1sc`}
                state={{ name: "3경기" }}
              >
                3경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/sRkB6ZM1EWg`}
                state={{ name: "4경기" }}
              >
                4경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/0CyAHFg4jLs`}
                state={{ name: "5경기" }}
              >
                5경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/apHJOxTqNCw`}
                state={{ name: "6경기" }}
              >
                6경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/U1TmGmVwHzw`}
                state={{ name: "3~4위전" }}
              >
                3~4위전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/1/yqqWTx0WVl8`}
                state={{ name: "결승전" }}
              >
                결승전
              </Link>
            </Video>
          </VideoContainer>
        </VideoList>
      )}
    </Container>
  );
}

export default Videos;
