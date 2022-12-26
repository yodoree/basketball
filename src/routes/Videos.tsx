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
  const { type, id } = useParams();
  console.log(id);
  return (
    <Container>
      {type === "workout" ? (
        <VideoList>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/q6K5FQghqCw`}
                state={{ name: "1번째 연습" }}
              >
                1번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/sxPCM6KdqtA`}
                state={{ name: "2번째 연습" }}
              >
                2번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/OML5Cpg-LJg`}
                state={{ name: "3번째 연습" }}
              >
                3번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/rlfzhYVclAU`}
                state={{ name: "4번째 연습" }}
              >
                4번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/dl4ocmK5gbg`}
                state={{ name: "5번째 연습" }}
              >
                5번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/7OIesgL-p1I`}
                state={{ name: "6번째 연습" }}
              >
                6번째 연습
              </Link>
            </Video>
          </VideoContainer>

          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/BSsBFrBon4g`}
                state={{ name: "7번째 연습" }}
              >
                7번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/E5B-He6-UJ8`}
                state={{ name: "우측 풀영상" }}
              >
                우측 풀영상
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/ATZ8nSYoUXY`}
                state={{ name: "좌쪽 풀영상" }}
              >
                좌측 풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/vw-FpNpmB5g`}
                state={{ name: "8번째 연습" }}
              >
                8번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/EYj7qF7T5zM`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/sNnmsgeoRIg`}
                state={{ name: "9번째 연습" }}
              >
                9번째 연습
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/4mucUVrmQE0`}
                state={{ name: "10번째 연습" }}
              >
                10번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/q3Koi5N6rHs`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/BUdClYSboUg`}
                state={{ name: "11번째 연습" }}
              >
                11번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/cMrov4csijY`}
                state={{ name: "풀영상" }}
              >
                풀영상
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/lNKBvcuosdc`}
                state={{ name: "14번째 연습" }}
              >
                14번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/F0ukuz7chQg`}
                state={{ name: "1번째 연습경기" }}
              >
                1번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/TS4HjYjdmPA`}
                state={{ name: "15번째 연습" }}
              >
                15번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/84qZUbJi7wA`}
                state={{ name: "2번째 연습경기" }}
              >
                2번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/BVBH-sjcKd0`}
                state={{ name: "3번째 연습경기" }}
              >
                3번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/lFqo8-c7pcE`}
                state={{ name: "4번째 연습경기" }}
              >
                4번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/RpvqAgxwNak`}
                state={{ name: "5번째 연습경기" }}
              >
                5번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/c2LYRYQlaXM`}
                state={{ name: "7번째 연습경기" }}
              >
                7번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/lQlS001gpSY`}
                state={{ name: "8번째 연습경기" }}
              >
                8번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/vo9fGS4Kkeo`}
                state={{ name: "수비 연습" }}
              >
                수비 연습
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/bp1EKWwJr4w`}
                state={{ name: "수비 연습2" }}
              >
                수비 연습2
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/qVtFWvPZDTs`}
                state={{ name: "수비 연습3" }}
              >
                수비 연습3
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/Z3dgyBEWMPo`}
                state={{ name: "9번째 연습경기" }}
              >
                9번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/6nd71auJrMo`}
                state={{ name: "10번째 연습경기" }}
              >
                10번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/v6vNDU_6SMk`}
                state={{ name: "11번째 연습경기" }}
              >
                11번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/VRt4ISR5Oao`}
                state={{ name: "12번째 연습경기" }}
              >
                12번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/gtwUoMzzuxI`}
                state={{ name: "29번째 연습" }}
              >
                29번째 연습
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/N0lV8QHI_KQ`}
                state={{ name: "13번째 연습경기" }}
              >
                13번째 연습경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/NzSbRD6kIfE`}
                state={{ name: "30번째 운동" }}
              >
                30번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/JbLDt5wisSE`}
                state={{ name: "31번째 운동" }}
              >
                31번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/Vk58hRsXb3U`}
                state={{ name: "32번째 운동" }}
              >
                32번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/LxrrOH59VGE`}
                state={{ name: "33번째 운동" }}
              >
                33번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/XnNwgmKdSjA`}
                state={{ name: "34번째 운동" }}
              >
                34번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/fpvj4yvS9mU`}
                state={{ name: "35번째 운동" }}
              >
                35번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/ATiKeedCTN8`}
                state={{ name: "36번째 운동" }}
              >
                36번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/5_-eHPfTYBE`}
                state={{ name: "37번째 운동" }}
              >
                37번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/H2bBpGfOijc`}
                state={{ name: "38번째 운동" }}
              >
                38번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/6a4wq7P4uu8`}
                state={{ name: "39번째 운동" }}
              >
                39번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/-J9OXCqY63A`}
                state={{ name: "40번째 운동" }}
              >
                40번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/9To9etbK9iE`}
                state={{ name: "41번째 운동" }}
              >
                41번째 운동
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/fpU-rn_gtkA`}
                state={{ name: "42번째 운동" }}
              >
                42번째 운동
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/fELNSiXzU8Q`}
                state={{ name: "포켓드리블" }}
              >
                포켓드리블 기본
              </Link>
            </Video>
            <Video>
              <Link
                to={`/videos/${type}/${id}/sdJVc4gopYg`}
                state={{ name: "포켓드리블 연계" }}
              >
                포켓드리블 연계
              </Link>
            </Video>
          </VideoContainer>
        </VideoList>
      ) : type === "competition" ? (
        <VideoList>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/OEQov7CLc8I`}
                state={{ name: "1경기" }}
              >
                1경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/Tr-RCVBFNfw`}
                state={{ name: "2경기" }}
              >
                2경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/tKtrnq6s1sc`}
                state={{ name: "3경기" }}
              >
                3경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/sRkB6ZM1EWg`}
                state={{ name: "4경기" }}
              >
                4경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/0CyAHFg4jLs`}
                state={{ name: "5경기" }}
              >
                5경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/apHJOxTqNCw`}
                state={{ name: "6경기" }}
              >
                6경기
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/U1TmGmVwHzw`}
                state={{ name: "3~4위전" }}
              >
                3~4위전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/yqqWTx0WVl8`}
                state={{ name: "결승전" }}
              >
                결승전
              </Link>
            </Video>
          </VideoContainer>
        </VideoList>
      ) : (
        <VideoList>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/cDYT7_Tqk8Q`}
                state={{ name: "1번째 교류전" }}
              >
                1번째 교류전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/CjV9nqyBVls`}
                state={{ name: "2번째 교류전" }}
              >
                2번째 교류전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/SFCgahZaxgQ`}
                state={{ name: "3번째 교류전" }}
              >
                3번째 교류전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/aiFNPYfgq_k`}
                state={{ name: "4번째 교류전" }}
              >
                4번째 교류전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/D1IwM1hsh8M`}
                state={{ name: "5번째 교류전" }}
              >
                5번째 교류전
              </Link>
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video>
              <Link
                to={`/videos/${type}/${id}/Fof68Hx1uTw`}
                state={{ name: "6번째 교류전" }}
              >
                6번째 교류전
              </Link>
            </Video>
          </VideoContainer>
        </VideoList>
      )}
    </Container>
  );
}

export default Videos;
