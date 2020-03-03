import styled from 'styled-components';

import colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${colors.secondary};
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const Services = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0px;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;
  background: #fff;
  border: 1px solid #e0e7ed;
  border-left: 0;
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
  font-family: 'Lato';
  ::placeholder {
    color: #c7d7e2;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #c7d7e2;
  border: 1px solid #e0e7ed;
  border-right: 0;
  border-radius: 4px 0 0 4px;
`;

export const Button = styled.button`
  background: #00a7cf;
  color: #fff;
  border: 1px solid #00a7cf;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  font-family: 'Lato';

  :hover {
    cursor: pointer;
  }
`;

export const Forgot = styled.a`
  color: #999999;
  text-align: center;
  font-family: 'Lato';
  margin-top: 21px;
  :hover {
    cursor: pointer;
  }
`;
