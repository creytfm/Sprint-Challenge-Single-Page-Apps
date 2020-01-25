import styled from "styled-components";

export const ListBody = styled.div`
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
`;

export const CharCard = styled.div`
  width: 75%;
  height: 100%;
  box-shadow: 3px 5px 6px #888888;
  padding: 4%;
  border-radius: 7px;
  margin: 3% auto;
  display: flex;
  justify-content: space-between;
`;

export const CharImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 7px;
`;

export const CharName = styled.h2`
  padding-right: 7rem;
`;

export const CharSpec = styled.h3`
  padding-left: 4rem;
`;
