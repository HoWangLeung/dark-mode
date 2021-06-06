import React from "react";
import styled from "styled-components";

const Outer = styled.div`
position: relative;
  /* padding: 10px 5px; */
  width: 400px;
  height: 600px;
  background: green;
  
`;

const Inner = styled.div`
width: 100%;
  height: 80%;
  background-color: red;
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: yellow;
  margin: 0px 20px;
`;
const Image = styled.img`
width: 100%;
height: 900px;

`

export default props => {
    return (
        <Outer>
            <Inner>
                <Image src={props.item.img} alt={props.item.title} />
            <p>asdadsadsasdasdasdsadsad</p>
            </Inner>
        </Outer>
    );
};