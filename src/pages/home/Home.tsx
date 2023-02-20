import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import TopBanner from './components/TopBanner';
import DatailBanner from './components/DatailBanner';
import CouseList from './components/CouseList';
import ApplyBanner from './components/ApplyBanner';
import Feedback from './components/Feedback';
export default function Home() {
  return (
    <React.Fragment>
      <div className='bg-[#f0fdf8]'>
      <TopBanner />
      <DatailBanner />
      </div>
      <CouseList/>
      <ApplyBanner/>
      <Feedback/>
    </React.Fragment>
  )
}
