import dynamic from "next/dynamic";

const Background = dynamic(() => import("../components/Background"), { ssr: false });

import LandingPageNav from '../components/LandingPageNav'
import Canvas from "../components/Canvas";

import Dali from '../dali/Dali'

import style from '../styles/Home.module.css'

const drawData = [
  {
    tag: 'circle-1',
    type: 'circle',
    fill: true,
    fillColor: '#1a1a1a',
    radius: 20,
    x: 250,
    y: 250 
  },
  {
    tag: 'circle-2',
    type: 'circle',
    stroke: true,
    strokeColor: '#1a1a1a',
    lineWidth: 2,
    radius: 80,
    x: 250,
    y: 250
  },
  {
    tag: 'circle-3',
    type: 'circle',
    fill: true,
    fillColor: '#1a1a1a',
    radius: 10,
    x: 170,
    y: 160
  },
  {
    tag: 'circle-4',
    type: 'circle',
    stroke: true,
    strokeColor: '#1a1a1a',
    radius: 40,
    x: 170,
    y: 160
  },
  {
    tag: 'circle-5',
    type: 'circle',
    fill: true,
    fillColor: '#1a1a1a',
    radius: 10,
    x: 170,
    y: 340
  },
  {
    tag: 'circle-6',
    type: 'circle',
    stroke: true,
    strokeColor: '#1a1a1a',
    radius: 40,
    x: 170,
    y: 340
  }
];

const drawing = new Dali(drawData);

const circle = (ctx, options) => {
  const fillColor = options.fillColor || '#ffffff';
  const strokeColor = options.strokeColor || '#ffffff';
  const fill = options.fill || false;
  const stroke = options.stroke || false;
  const radius = options.radius || 10;
  const x = options.x || 10;
  const y = options.y || 10;
  const lineWidth = options.lineWidth || 2;

  if (fill == true) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()
  }

  if (stroke == true) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
};

const draw = (ctx, frameCount) => {
  /*
  drawData.forEach((element) => {
    circle(ctx, element);
  });
  */
  drawing.render(ctx, frameCount);

  const test = {
    tag: 'circle-7',
    fill: true,
    fillColor: '#c16e70',
    radius: 10,
    x: 330,
    y: 250
  }

  const dTheta = frameCount / 80;
  const dX = Math.cos(dTheta) * 80;
  const dY = Math.sin(dTheta) * 80;

  ctx.fillStyle = test.fillColor;
  ctx.beginPath();
  ctx.arc(250 - dX, 250 - dY, test.radius, 0, 2*Math.PI)
  ctx.fill()

}

export default function Home() {
  return (
    <div>
      <LandingPageNav />
      <Background />
      <section className={style.landingPage}>
        <div className={style.atomicDefinition__container}>
          <div className={style.atomicDefinition__wrapper}>
            <span className={style.atomicDefinition__main}>Atomic</span>
            <span className={style.atomicDefinition__pronunciation}>[ətämik]</span>
            <span className={style.atomicDefinition__adjective}>adj.</span>
          </div>
          <div className={style.atomicDefinition__definition}>
          of or forming a single irreducible unit or component in a larger system.
          </div>
        </div>
      </section>
      <section title="about" className={style.about}>
        <div className={style.aboutText}>
          <div className={style.aboutTextHeader}>
            Learn from first principles.
          </div>
          <div className={style.aboutTextBody}>
            Atoms are the smallest functional units of matter from which everything else is built upon.
            Atomic was built on these principles.
          </div>
        </div>
        <div className={style.aboutFigure}>
        <Canvas className={style.aboutFigureCanvas} draw={draw} />
        </div>
      </section>
      <section title="getStarted" className={style.landingPage}>

      </section>
    </div>
  );
}
