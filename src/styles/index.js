import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
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
  width: 100%;
`;
