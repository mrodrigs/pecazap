import React, { useState } from 'react';

import ColoredCalendar from '../../../components/Logo/ColoredCalendar';
import ColoredWhatsapp from '../../../components/Logo/ColoredWhatsapp';
import ColoredGmail from '../../../components/Logo/ColoredGmail';
import ColoredSkype from '../../../components/Logo/ColoredSkype';
import ColoredPhone from '../../../components/Logo/ColoredPhone';
import ColoredChat from '../../../components/Logo/ColoredChat';

import { Container, IconContainer, Notification } from './styles';

function WhatsApp() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0001 11.6918C24.0001 18.1478 18.7245 23.3823 12.2162 23.3823C10.152 23.3823 8.21189 22.8541 6.52245 21.9295L0 24.0013L2.12555 17.727C1.05382 15.9659 0.436111 13.8979 0.436111 11.6905C0.436111 5.23458 5.71034 0 12.2187 0C18.7258 0.00127891 24.0001 5.23459 24.0001 11.6918ZM12.2162 1.86465C6.75393 1.86465 2.31099 6.27306 2.31099 11.6944C2.31099 13.8442 3.01184 15.8355 4.19739 17.4559L2.96068 21.1046L6.76672 19.896C8.33211 20.923 10.2044 21.5202 12.2162 21.5202C17.6784 21.5202 22.1226 17.1118 22.1226 11.6918C22.1239 6.27306 17.6784 1.86465 12.2162 1.86465ZM18.1669 14.3852C18.0928 14.2663 17.9009 14.1946 17.6132 14.0501C17.3254 13.9069 15.9033 13.2137 15.6398 13.1204C15.3738 13.0244 15.1807 12.9758 14.9888 13.2623C14.7983 13.5501 14.2445 14.1946 14.0744 14.3865C13.9069 14.5796 13.7381 14.6026 13.449 14.4619C13.16 14.3161 12.229 14.0156 11.1253 13.0398C10.2671 12.2788 9.68776 11.3414 9.52022 11.0549C9.35013 10.7684 9.50231 10.6137 9.64555 10.4704C9.77472 10.3413 9.93459 10.1354 10.0791 9.96784C10.2249 9.8003 10.2722 9.68264 10.3681 9.4908C10.4628 9.29897 10.4155 9.13271 10.3438 8.98819C10.2722 8.84367 9.69543 7.43559 9.45372 6.86136C9.21328 6.28841 8.97285 6.38305 8.80403 6.38305C8.63521 6.38305 8.44338 6.36003 8.25026 6.36003C8.05842 6.36003 7.74509 6.42909 7.48036 6.71684C7.2169 7.00332 6.47129 7.69649 6.47129 9.10713C6.47129 10.519 7.50465 11.8798 7.64917 12.0704C7.79497 12.2609 9.64811 15.2497 12.5832 16.3969C15.5209 17.5428 15.5209 17.1604 16.0503 17.1118C16.5811 17.0632 17.759 16.4199 17.9981 15.7511C18.2398 15.0796 18.2398 14.5041 18.1669 14.3852Z"
        fill="white"
      />
    </svg>
  );
}

function Gmail() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8901 3H2.10866C0.947977 3 0 3.94666 0 5.10997V19.172C0 20.3301 0.942725 21.2807 2.10866 21.2807H21.8901C23.0495 21.2807 24.0001 20.338 24.0001 19.172V5.10997C24.0001 3.9506 23.056 3 21.8901 3ZM21.5986 4.40621L12.044 13.9608L2.4067 4.40621H21.5986ZM1.40621 18.8806V5.39357L8.17859 12.1082L1.40621 18.8806ZM2.40014 19.8745L9.17646 13.0982L11.5516 15.4524C11.8261 15.7255 12.2698 15.7241 12.543 15.4497L14.8591 13.1349L21.5986 19.8745H2.40014ZM22.5939 18.8806L15.853 12.141L22.5939 5.40014V18.8806Z"
        fill="white"
      />
    </svg>
  );
}

export default function NavIcons() {
  const [selected, setSelected] = useState(1);

  function handleSetSelected(id) {
    setSelected(id);
  }

  return (
    <Container>
      <IconContainer>
        <ColoredCalendar />
      </IconContainer>
      <IconContainer
        onClick={() => handleSetSelected(1)}
        active={selected === 1}
        whatsapp
      >
        {selected === 1 ? <WhatsApp /> : <ColoredWhatsapp />}
        <Notification style={{ display: 'flex', alignSelf: 'flex-end' }}>
          1
        </Notification>
      </IconContainer>
      <IconContainer
        onClick={() => handleSetSelected(2)}
        active={selected === 2}
        gmail
      >
        {selected === 2 ? <Gmail /> : <ColoredGmail />}
      </IconContainer>
      <IconContainer>
        <ColoredSkype />
      </IconContainer>
      <IconContainer>
        <ColoredPhone />
      </IconContainer>
      <IconContainer>
        <ColoredChat />
      </IconContainer>
    </Container>
  );
}
