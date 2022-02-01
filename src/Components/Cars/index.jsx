import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Img } from './style';
import { data } from '../../mock/data'
export const Cars = () => {

  const {id} = useParams()
  return <>
{
  data.filter((e)=> e.id == id).map(value=>(
   <Container>
     
    <Img src={value.url} />
    <h1>Model:{value.model}</h1>
    <h3>Year:{value.year}</h3>
    <h3>Year:{value.year}</h3>
    <h3>Color:{value.color}</h3>
    <h3>Country:{value.country}</h3>


   </Container>
    
  
  ))
}
  </>;
};
