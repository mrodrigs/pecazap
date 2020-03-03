import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${props => (props.primary ? '#00A7CF' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#00A7CF')};
  height: 38px;
  padding: 0 25px;
  font-family: Lato;
  border-radius: 4px;
  border: ${props => (props.primary ? 0 : '1px solid #E5E5E5')};
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  background-position: center;
  transition: background 0.8s;
  :hover {
    background: #e1f5fe radial-gradient(circle, transparent 1%, #e1f5fe 1%)
      center/15000%;
    color: #00a7cf;
  }
  :active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
`;
