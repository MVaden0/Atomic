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


const draw = (ctx, frameCount) => {
  
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
