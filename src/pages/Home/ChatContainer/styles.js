import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f5f8fa;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 20px;
  overflow-x: hidden;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Divider = styled.div`
  margin-bottom: 21px;
  height: 0;
  width: 100%;
  border: 1px solid #dddddd;
  display: flex;
  align-self: center;
`;

export const Date = styled.div`
  font-family: Lato;
  font-size: 15px;
  color: #636466;

  background: #dbf3f8;
  min-height: 44px;
  min-width: 325px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  margin-bottom: 44px;
  margin-top: 21px;

  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Name = styled.span`
  color: #636466;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  font-weight: bold;
`;

export const Time = styled.span`
  color: #636466;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
`;

export const MessageTriangle = styled.div`
  border-style: solid;
  border-width: 16px 0 0 16px;
  border-color: transparent transparent transparent #ffffff;
`;

export const MessageContainer = styled.div`
  width: 50%;
  min-height: 100px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px 10px 10px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  padding: 20px 20px;
`;

export const FriendMessage = styled.div`
  width: 50%;
  min-height: 100px;
  background: #cbffe0;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px 0px 10px 10px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  padding: 20px 20px;
  display: flex;
  align-self: flex-end;
`;

export const FriendContactInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 12px;
`;

export const FriendMessageTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 16px 16px;
  border-color: transparent transparent #cbffe0 transparent;
`;
