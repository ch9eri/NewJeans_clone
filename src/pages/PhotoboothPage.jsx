import React, { useState } from 'react';
import CaptureImage from '../components/photobooth/CaptureImage';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';
// 라이브러리: react-use-gesture

const PhotoboothPage = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const bindPos = useDrag((params) => {
    setPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  return (
    <div
      {...bindPos()}
      style={{
        position: 'relative',
        top: pos.y,
        left: pos.x,
      }}
    >
      <CaptureImage />
    </div>
  );
};

export default PhotoboothPage;
