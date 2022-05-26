import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 10px;
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
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
