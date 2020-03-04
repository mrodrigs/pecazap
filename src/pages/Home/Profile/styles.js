import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.02);
  padding: 20px 20px;
`;

export const ContactActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Action = styled.button`
  height: 38px;
  width: 45%;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
`;

export const LastChats = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: 'Lato';
  font-size: 12px;
  font-weight: bold;
  color: #79accd;
`;

export const Text = styled.span`
  font-family: 'Lato';
  font-size: 12px;
  color: #000;
  text-align: justify;
`;

export const LastDate = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const Number = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
