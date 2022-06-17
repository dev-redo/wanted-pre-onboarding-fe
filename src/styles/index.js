import styled from 'styled-components';

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 45rem;
  position: relative;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  } ;
`;

export const Base = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const ValidatorInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding-left: 0.5rem;
  font-size: 1rem;
`;
