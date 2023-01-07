import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../image/bg.mp4';
import camera from '../image/camera.png';
import PhotoboothPage from './PhotoboothPage';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  return (
    <HomePageContainer>
      <Background loop autoPlay>
        <source src={bg} type="video/mp4" />
      </Background>
      <Title>NEWJEANS.KR</Title>
      <Camera
        src={camera}
        onClick={() => {
          setModal(!modal);
        }}
      />
      <ModalContainer>
        {modal === true ? <PhotoboothPage /> : null}
      </ModalContainer>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Background = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: 30px;
  left: 50px;
  color: white;
  font-size: 30px;
  font-weight: 600;
`

const Camera = styled.img`
  position: absolute;
  top: 379px;
  left: 100px;
  width: 274px;
  height: 165px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 400px;
`;

export default HomePage;
