import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaSkype } from 'react-icons/fa';

import Contact from '../../../components/Contact';

import {
  Container,
  ContactActions,
  Action,
  LastDate,
  LastChats,
  Text,
  Title,
  ContactInfo,
  Number,
} from './styles';

const WhatsApp = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 16 }}
  >
    <path
      d="M24.0001 11.6918C24.0001 18.1478 18.7245 23.3823 12.2162 23.3823C10.152 23.3823 8.21189 22.8541 6.52245 21.9295L0 24.0013L2.12555 17.727C1.05382 15.9659 0.436111 13.8979 0.436111 11.6905C0.436111 5.23458 5.71034 0 12.2187 0C18.7258 0.00127891 24.0001 5.23459 24.0001 11.6918ZM12.2162 1.86465C6.75393 1.86465 2.31099 6.27306 2.31099 11.6944C2.31099 13.8442 3.01184 15.8355 4.19739 17.4559L2.96068 21.1046L6.76672 19.896C8.33211 20.923 10.2044 21.5202 12.2162 21.5202C17.6784 21.5202 22.1226 17.1118 22.1226 11.6918C22.1239 6.27306 17.6784 1.86465 12.2162 1.86465ZM18.1669 14.3852C18.0928 14.2663 17.9009 14.1946 17.6132 14.0501C17.3254 13.9069 15.9033 13.2137 15.6398 13.1204C15.3738 13.0244 15.1807 12.9758 14.9888 13.2623C14.7983 13.5501 14.2445 14.1946 14.0744 14.3865C13.9069 14.5796 13.7381 14.6026 13.449 14.4619C13.16 14.3161 12.229 14.0156 11.1253 13.0398C10.2671 12.2788 9.68776 11.3414 9.52022 11.0549C9.35013 10.7684 9.50231 10.6137 9.64555 10.4704C9.77472 10.3413 9.93459 10.1354 10.0791 9.96784C10.2249 9.8003 10.2722 9.68264 10.3681 9.4908C10.4628 9.29897 10.4155 9.13271 10.3438 8.98819C10.2722 8.84367 9.69543 7.43559 9.45372 6.86136C9.21328 6.28841 8.97285 6.38305 8.80403 6.38305C8.63521 6.38305 8.44338 6.36003 8.25026 6.36003C8.05842 6.36003 7.74509 6.42909 7.48036 6.71684C7.2169 7.00332 6.47129 7.69649 6.47129 9.10713C6.47129 10.519 7.50465 11.8798 7.64917 12.0704C7.79497 12.2609 9.64811 15.2497 12.5832 16.3969C15.5209 17.5428 15.5209 17.1604 16.0503 17.1118C16.5811 17.0632 17.759 16.4199 17.9981 15.7511C18.2398 15.0796 18.2398 14.5041 18.1669 14.3852Z"
      fill="#A7B6C2"
    />
  </svg>
);

const Email = (
  <svg
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 16 }}
  >
    <path
      d="M21.89 0.000183105H2.10865C0.947974 0.000183105 0 0.946894 0 2.11026V16.173C0 17.3312 0.942722 18.2818 2.10865 18.2818H21.89C23.0494 18.2818 24 17.339 24 16.173V2.11026C24 0.950833 23.056 0.000183105 21.89 0.000183105ZM21.5986 1.40646L12.044 10.9615L2.4067 1.40646H21.5986ZM1.40621 15.8815V2.39388L8.17857 9.10882L1.40621 15.8815ZM2.40013 16.8755L9.17643 10.0989L11.5516 12.4532C11.826 12.7263 12.2698 12.725 12.5429 12.4505L14.859 10.1356L21.5986 16.8755H2.40013ZM22.5938 15.8815L15.8529 9.14165L22.5938 2.40044V15.8815Z"
      fill="#A7B6C2"
    />
  </svg>
);

const Skype = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 16 }}
  >
    <path
      d="M16.9435 23.9999C15.891 23.9999 14.8492 23.766 13.9083 23.3235C13.2385 23.4325 12.6631 23.4843 12.1183 23.4843C5.77276 23.4843 0.609966 18.3837 0.609966 12.1149C0.609966 11.5049 0.669767 10.8697 0.794684 10.1826C0.273754 9.19517 0 8.09212 0 6.97047C0 3.12708 3.16545 0 7.05781 0C8.26844 0 9.45116 0.305664 10.501 0.887755C10.9794 0.825293 11.503 0.797385 12.1183 0.797385C15.1841 0.797385 18.0625 1.97087 20.2233 4.10254C22.3867 6.2382 23.5774 9.08354 23.5774 12.1149C23.5774 12.919 23.5229 13.5994 23.406 14.2307C23.8007 15.1091 24 16.05 24 17.0295C24 20.8729 20.8346 23.9999 16.9435 23.9999ZM14.2047 21.3659L14.4917 21.5187C15.2372 21.9161 16.0851 22.1248 16.9435 22.1248C19.8007 22.1248 22.1249 19.8389 22.1249 17.0295C22.1249 16.2334 21.9442 15.4746 21.5894 14.7742L21.4365 14.4739L21.511 14.1443C21.6412 13.5609 21.7023 12.9163 21.7023 12.1149C21.7023 6.90801 17.4033 2.67124 12.1183 2.67124C11.4578 2.67124 10.9342 2.70845 10.4691 2.78686L10.1183 2.84666L9.81661 2.65928C8.99136 2.14629 8.03721 1.87518 7.05781 1.87518C4.20066 1.87518 1.87508 4.16102 1.87508 6.97047C1.87508 7.87683 2.12093 8.76591 2.58472 9.54336L2.77209 9.857L2.69767 10.2132C2.55415 10.9095 2.48505 11.5315 2.48505 12.1149C2.48505 17.3498 6.80664 21.6091 12.1183 21.6091C12.6312 21.6091 13.192 21.5506 13.8831 21.4244L14.2047 21.3659ZM18.0465 14.5722C18.0465 13.8971 17.9136 13.3176 17.6478 12.8485C17.3821 12.3821 17.0086 11.99 16.5395 11.6857C16.0771 11.3867 15.511 11.1302 14.8558 10.9215C14.2086 10.7155 13.4777 10.5268 12.6817 10.3567C12.0518 10.2118 11.5934 10.0989 11.3209 10.0245C11.0538 9.95136 10.788 9.8477 10.5289 9.71879C10.2791 9.59519 10.0824 9.44635 9.94153 9.27757C9.80997 9.11676 9.70233 8.93071 9.70233 8.70877C9.70233 8.34463 9.94552 8.03764 10.3561 7.77051C10.7814 7.49276 11.3542 7.37846 12.0598 7.37846C12.8186 7.37846 13.3714 7.4808 13.7023 7.72931C14.0425 7.98581 14.3389 8.35127 14.5847 8.81509C14.796 9.1779 14.9874 9.4304 15.1721 9.59254C15.3701 9.76663 15.6558 9.84371 16.0199 9.84371C16.4199 9.84371 16.7615 9.71347 17.0286 9.43572C17.297 9.15929 17.4844 8.84034 17.4844 8.49082C17.4844 8.12933 17.3289 7.75456 17.1256 7.37714C16.9223 7.00369 16.602 6.64487 16.1688 6.30731C15.7395 5.97374 15.192 5.70396 14.5449 5.50328C13.9003 5.30261 13.1269 5.20293 12.2485 5.20293C11.1508 5.20293 10.1794 5.35311 9.36346 5.65479C8.53688 5.95779 7.89369 6.403 7.45515 6.9718C7.0113 7.54591 6.75083 8.21173 6.75083 8.95064C6.75083 9.72676 6.99934 10.3846 7.42193 10.9095C7.83787 11.4265 8.40532 11.8398 9.11229 12.1388C9.80199 12.4299 10.6684 12.6864 11.689 12.9043C12.4399 13.0625 13.0472 13.2113 13.4937 13.3495C13.9216 13.4811 14.2764 13.6765 14.5449 13.925C14.7987 14.1629 14.9382 14.4659 14.9382 14.8526C14.9382 15.3403 14.6844 15.7404 14.1953 16.0726C13.6944 16.4128 13.0272 16.5471 12.2153 16.5471C11.6226 16.5471 11.1429 16.5005 10.7867 16.3318C10.4306 16.1656 10.1528 15.9517 9.96146 15.6992C9.75947 15.4334 9.56944 15.0998 9.39535 14.7024C9.23987 14.3383 9.04585 14.0552 8.81861 13.8652C8.58206 13.6658 8.2897 13.5476 7.95216 13.5476C7.54153 13.5476 7.19601 13.6937 6.92492 13.9449C6.65382 14.1988 6.51561 14.5097 6.51561 14.8672C6.51561 15.4414 6.72824 16.0354 7.14684 16.6334C7.5588 17.2262 8.10498 17.7073 8.76545 18.0621C9.68904 18.5511 10.8744 18.797 12.287 18.797C13.4631 18.797 14.497 18.6163 15.3595 18.2601C16.2312 17.9013 16.9023 17.3936 17.3581 16.753C17.8153 16.1112 18.0452 15.3776 18.0465 14.5722Z"
      fill="#A7B6C2"
    />
  </svg>
);

const Edit = require('../../../assets/images/edit.png');
const Trash = require('../../../assets/images/trash.png');

const usersUrl = 'http://www.mocky.io/v2/5e5fefe83300004e0997b721';

export default function Profile() {
  const [users, setUsers] = useState([]);

  async function handleGetUsers() {
    try {
      const response = await axios.get(usersUrl);

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <Container>
      {users.length > 0 ? (
        <Contact
          profile
          name={users[0].name}
          company={users[0].company}
          pic={users[0].pic}
          picDimensions={48}
        />
      ) : null}
      <ContactActions>
        <Action>
          <img src={Edit} alt="edit" />
        </Action>
        <Action>
          <img src={Trash} alt="delete" />
        </Action>
      </ContactActions>
      <LastChats>
        <Title style={{ marginBottom: 12 }}>ÚLTIMAS CONVERSAS</Title>
        <LastDate style={{ marginBottom: 12 }}>
          <FaWhatsapp style={{ color: '#A7B6C2', marginRight: 8 }} />
          <Text>25/09/2019 (10 dias atrás)</Text>
        </LastDate>
        <LastDate style={{ marginBottom: 12 }}>
          <FaWhatsapp style={{ color: '#A7B6C2', marginRight: 8 }} />
          <Text>15/09/2019 (20 dias atrás)</Text>
        </LastDate>
        <LastDate style={{ marginBottom: 30 }}>
          <FaSkype style={{ color: '#A7B6C2', marginRight: 8 }} />
          <Text>15/06/2019 (100 dias atrás)</Text>
        </LastDate>
      </LastChats>
      {users.length > 0 ? (
        <>
          <Title>OBSERVAÇÕES</Title>
          <Text>{users[0].obs}</Text>
          <ContactInfo style={{ marginTop: 30 }}>
            {WhatsApp}
            <Number>
              <Title>WHATSAPP</Title>
              <Text>{users[0].whatsapp}</Text>
            </Number>
          </ContactInfo>
          <ContactInfo>
            {Email}
            <Number>
              <Title>EMAIL</Title>
              <Text>{users[0].email}</Text>
            </Number>
          </ContactInfo>
          <ContactInfo>
            {Skype}
            <Number>
              <Title>SKYPE</Title>
              <Text>{users[0].skype}</Text>
            </Number>
          </ContactInfo>
        </>
      ) : null}
    </Container>
  );
}
