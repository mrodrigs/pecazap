import styled from 'styled-components';

import colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  background-color: ${colors.primary};
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 10px);
  background-color: ${colors.secondary};
  margin-top: 10px;
  border-radius: 20px 0 0 0;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
