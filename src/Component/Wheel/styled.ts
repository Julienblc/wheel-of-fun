import { animated } from "@react-spring/web";
import styled from "styled-components";

export const StyledArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid black;
  margin-bottom: -25px;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Wheel = styled(animated.div)`
  width:500px;
	height:500px;
	background-color: #ccc;
	border-radius:50%;
	border:15px solid #dde;
	position: relative;
	overflow: hidden;
  margin-bottom: 32px;

  div {
    height:50%;
    width:200px;
    position: absolute;
    clip-path: polygon(100% 0 , 50% 100% , 0 0 );
    transform:translateX(-50%);
    transform-origin:bottom;
    text-align:center;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    font-size:20px;
    font-weight:bold;
    font-family:sans-serif;
    color:#fff;
    left:135px;
    padding-top: 10px;
  }
`