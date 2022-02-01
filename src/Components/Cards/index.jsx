import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../../mock/data';
import { Btn, Card,Container, Img,Text } from './style';


export const Cards = () => {

  const navigate = useNavigate()

  return <Container>
       {
          data.map(({id,model,url})=>(
            <Card key={id}>
              <Img src={url}/>
              <Text>
                {model}
              </Text>
              <Btn onClick={()=>navigate(`/${id}`)} >
                Batafsil
              </Btn>
            </Card>

          ))
       }
  </Container>;
};
