import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: ${props =>
    props.active ? 'rgba(0, 0, 0, 0.08);' : 'transparent'};
  padding: 11px 15px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.span`
  color: ${props => (props.isProfile === true ? '#000' : '#fff')};
  font-family: 'Lato';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  display: flex;
`;

export const Company = styled.span`
  color: ${props => (props.isProfile === true ? '#7aa4d0' : '#7ad3ed ')};
  font-family: 'Lato';
  font-size: 12px;
  line-height: 16px;
`;

export const Notification = styled.div`
  height: 20px;
  width: 20px;
  background: #e33e1a;
  border: 2px solid #9dd0c9;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #fff;
  margin-right: 10px;
`;
