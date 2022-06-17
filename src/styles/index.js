import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  } ;
`;

export const Base = styled(Container)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ValidatorInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding-left: 0.5rem;
`;
