import styled from '@emotion/styled';

export const ContainerSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 45px;
  margin-top :200px;
  animation: loadingAnimation 1s infinite ease-in-out;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const TitleSkeleton = styled.div`
  width: 500px;
  height: 80px;
  background-color: #ccc;
  margin-bottom: 16px;
  animation: loadingAnimation 1s infinite ease-in-out;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const ImageSkeleton = styled.div`
  width:450px;
  height: 450px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 16px;
  animation: loadingAnimation 1s infinite ease-in-out;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const DescriptionSkeleton = styled.div`
  width: 200px;
  height: 16px;
  background-color: #ccc;
  margin-bottom: 10px;
  animation: loadingAnimation 1s infinite ease-in-out;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const BackButtonSkeleton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  justify-content: flex-start;
  width: 120px;
  height: 32px;
  background-color: #ccc;
  margin-bottom: 16px;
  animation: loadingAnimation 1s infinite ease-in-out;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const ArrowIconSkeleton = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  margin-right: 8px;
`;

export const BackTextSkeleton = styled.div`
  width: 80px;
  height: 16px;
  background-color: #ccc;
`;

export const NavContainerSkeleton = styled.div`
  width: 100%;
  padding: 20px;
`;

