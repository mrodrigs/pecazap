import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  padding: 15px 15px;
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 100%;
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
  width: 100%;
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
  margin-top: 10px;
`;

export const Text = styled.span`
  color: #fff;
  font-family: 'Lato';
  font-size: 12px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 310px;
  overflow: auto;
`;
