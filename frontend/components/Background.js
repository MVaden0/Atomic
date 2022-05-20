import React from "react";

import style from '../styles/Background.module.css'

import { settings, SCALE_MODES } from "pixi.js";
import { Stage, Graphics, Container, useTick } from "@inlet/react-pixi";
import {KawaseBlurFilter} from '@pixi/filter-kawase-blur';
import perlinNoise3d from 'perlin-noise-3d'


// pixi scale interpolation
settings.SCALE_MODE = SCALE_MODES.LINEAR;

const Inner = () => {
  // z parameter time
  //const [z, setZ] = React.useState(0);
  const z = React.useRef(0)

  // parameters
  const width = React.useRef(window.innerWidth);
  const height = React.useRef(window.innerHeight);

  const resolution = React.useRef(10);
  const increment = React.useRef(0.025);

  const cols = React.useRef(1 + width.current / resolution.current);
  const rows = React.useRef(1 + height.current / resolution.current);

  // fast gaussian blur
  const blurFilter = React.useRef(new KawaseBlurFilter(20, 10));

  // perlin instance
  const perlin = React.useRef(new perlinNoise3d());

  /*
  useTick(() => {
    setZ(z + 0.004);
  });
  */

  const draw = React.useCallback((graphics) => {
    let xOff = 0;

    graphics.clear();

    graphics.beginFill(0x68D89B);

    for (let i = 0; i < cols.current; i++) {
      xOff += increment.current;
      let yOff = 0;
      for (let j = 0; j < rows.current; j++) {
        const noise = perlin.current.get(xOff, yOff, z.current);

        if (noise > 0.4 && noise < 0.43) {
          graphics.drawRect(
            i * resolution.current, 
            j * resolution.current, 
            resolution.current,
            resolution.current);
        }


        yOff += increment.current;
      }
    }
    
    graphics.endFill();
  });
  
  return (
    <Container position={[0, 0]} filters={[blurFilter.current]}>
      <Graphics
        preventRedraw={true}
        draw={draw}
      />
    </Container>
  );
};


const Background = () => {
  return (
    <div className={style.canvas}>
    <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0x1a1a1a, resolution: 1, autoDensity: false}}>
      <Inner />
    </Stage>
    </div>
  )
};

export default Background;