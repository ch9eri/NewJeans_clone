import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { BsDash } from 'react-icons/bs';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import { useRecoilState } from 'recoil';
import { modalState } from '../../states/atom';

function CaptureImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 900,
    height: 600,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  const [isOpened, setIsOpened] = useRecoilState(modalState);

  return (
    <PhotoboothContainer>
      <TitleBox>
        <BtnContainer>
          <CloseBtn onClick={() => { setIsOpened(false) }}>
            <GrFormClose />
          </CloseBtn>
          <SmallBtn>
            <BsDash />
          </SmallBtn>
          <BigBtn>
            <CgArrowsExpandLeft />
          </BigBtn>
        </BtnContainer>
        <Title>Photo Booth</Title>
      </TitleBox>
      {img === null ? (
        <>
          <Camera
            audio={false}
            mirrored={true}
            width={800}
            height={600}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
          <CamBtn onClick={capture}>
            <FaCamera />
          </CamBtn>
        </>
      ) : (
        <>
          <Img src={img} alt="screenshot" />
          <ReBtn onClick={() => setImg(null)}>
            <BiReset />
          </ReBtn>
        </>
      )}
    </PhotoboothContainer>
  );
}

const PhotoboothContainer = styled.div`
  width: 800px;
  height: 559px;
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

const TitleBox = styled.div`
  width: 800px;
  height: 28px;
  background: linear-gradient(to bottom, #d4d4d4, #a8a8a8);
  position: relative;
  display: flex;
  border-radius: 10px 10px 0px 0px;
`;

const BtnContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 5px 8px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  left: 370px;
`;

const CloseBtn = styled.div`
  background-color: #f04b4f;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
const SmallBtn = styled(CloseBtn)`
  background-color: #e1b83f;
  font-size: 17px;
`;
const BigBtn = styled(CloseBtn)`
  background-color: #33b94b;
  font-size: 10px;
`;

const Camera = styled(Webcam)`
  position: absolute;
  top: -6px;
  width: 800px;
  height: 600px;
`;

const CamBtn = styled.button`
  position: absolute;
  top: 470px;
  left: 380px;
  width: 70px;
  height: 70px;
  font-size: 35px;
  background-color: black;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: gray;
    background-color: white;
  }
  &:active {
    background-color: red;
  }
`;

const Img = styled.img``;

const ReBtn = styled(CamBtn)``;

export default CaptureImage;
