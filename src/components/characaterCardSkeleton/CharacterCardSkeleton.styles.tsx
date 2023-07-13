import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const SkeletonCardContainer = styled.div`
  background-color: #f9faf7;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid gray;
  margin: 10px;
  padding: 1vh;
  flex-basis: 20%;
  position: relative;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkeletonImage = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #ccc;
  margin-top: -50%;
`;

export const SkeletonName = styled.div`
  margin-top: 15px;
  width: 80%;
  height: 20px;
  background-color: #ccc;
`;

export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 10vh;
`;