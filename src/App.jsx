import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cards } from './Components/Cards';
import { Cars } from './Components/Cars';

export const App = () => {
  return  <Routes>
        <Route path='/' element={<Cards />}/>
        <Route path='/:id' element={<Cars />}/>
      </Routes>
  
};
