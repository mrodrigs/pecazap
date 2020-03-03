import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 310px;
  padding: 15px 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #23a394;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 10px 0;
`;

export const Search = styled.input`
  height: 38px;
  background-color: #23a394;
  border: 0;
  border-radius: 4px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  :hover {
    cursor: pointer;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 0;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  color: #fff;
  font-family: 'Lato';
  font-size: 12px;
`;
