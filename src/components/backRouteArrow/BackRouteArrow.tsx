import React from "react";
import {NavContainer,BackButton,ArrowIcon, BackText} from "./BackRouteArrow.styles"
import { useRouter } from 'next/router';
interface BackRouteArrowProps {
   text:string;
  }
const BackRouteArrow  : React.FunctionComponent<BackRouteArrowProps> = ({
   text
  }) => {
    
const router = useRouter();
return(

      <NavContainer>
        <BackButton onClick={() => router.back()}>
          <ArrowIcon />
          <BackText>{text}</BackText>
        </BackButton>
      </NavContainer>)
} 

export default BackRouteArrow;