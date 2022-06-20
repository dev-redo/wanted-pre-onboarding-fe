import styled from 'styled-components';

export const BackGround = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  position: relative;
  margin: 0 auto;
  @media (max-width: 320px) {
    max-width: 100%;
  }
`;

export const Base = styled(Container)`
  display: flex;
  background-color: white;
  border: 1px solid #e4e4e4;
`;
