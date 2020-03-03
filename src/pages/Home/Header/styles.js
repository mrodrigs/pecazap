import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);
  background: #fff;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

export const SearchBox = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  height: 38px;
  border: 0;
  width: 100%;
`;

export const SearchIcon = styled.div`
  display: flex;
  height: 38px;
  width: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
