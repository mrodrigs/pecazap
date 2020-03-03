import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 64px;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 20px;
  background-color: ${props => {
    if (props.active) {
      if (props.whatsapp) return '#25d366';
      if (props.gmail) return '#e33e1a';
    }
    return 'transparent';
  }};
  cursor: pointer;
`;
