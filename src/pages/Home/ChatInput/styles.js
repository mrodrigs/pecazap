import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
  background: #fff;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Input = styled.input`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #999999;
  border: 0;
  background: transparent;
  width: 80%;
`;
