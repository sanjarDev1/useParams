import styled from "styled-components";

export const Container =  styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap:20px;
`

export const Card = styled.div`
background-color: indigo;
width: 250px;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:10px;
`

export const Img =styled.img`
width: 80%;
height: 120px;
`

export const Text = styled.div`
color: white;
`
export const Btn = styled.button`
border: none;
width: 80px;
height: 30px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

:active{
    background-color: red;
    transform: scale(0.97);
}
` 
