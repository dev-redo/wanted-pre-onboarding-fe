import styled from 'styled-components';

export const BackGround = styled.div`
  width: 100%;
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
  }
`;

export const Base = styled(Container)`
  min-height: 100%;
  display: flex;
  background-color: white;
  border: 1px solid #e4e4e4;
`;

export const ValidatorInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: #fafafa;
  border: 1px solid ${({ error }) => (error ? 'red' : '#dbdbdb')};
  border-radius: 5px;
  padding-left: 2rem;
  font-size: 1.2rem;
`;
