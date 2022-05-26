import React, { FC } from 'react';
import { FigureCreator } from './figure_creator/FigureCreator';
import './styles/global.css'


const App: FC = () => {

  return (
    <div>
      <FigureCreator backgroundColor='#123eaf'/>
    </div>
  );
}

export default App
