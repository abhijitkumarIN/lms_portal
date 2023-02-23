import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img from './mr-eshan.png';
export default function Feedback() {
    return (
        <div>
            <div className='bg-[#f7f9fb] lg:px-36 md:px-11 px-2 mt-12 pb-12  '>
                <section className='text-center  mb-4 '>
                    <h2 className='text-3xl text-primarybg font-semibold '>
                        What Our Students Have To Say?
                    </h2>
                    <p className='text-[#77838f]'>Listen from our graduates.</p>
                </section>
                <div className='grid grid-cols-12 gap-5 '>
                    {
                        Array(3, 4, 4).map((i, index) => (
                            <div className='  col-span-4 lg:px-5 md:px-2 px-0 py-6 ' key={index}>
                                <AnimationOnScroll animateIn="animate__fadeIn nimate__delay-4s">
                                    <div className=' border bg-white border-[#e7e7ec] animation-all  hover:drop-shadow-lg rounded-md ' style={{ boxShadow: " rgba(149, 157, 165, 0.15) 0px 3px 6px 0px" }}>
                                        <div className=' '>
                                            <div className='flex pt-5 pl-5 items-center'>
                                                <div className=''>
                                                    <img className='w-[70px] rounded-full h-[70px]' src='https://www.izaanschool.com/assets/img/avatars/paulGrossman.jpg' />
                                                </div>
                                                <div className='pl-3 '>
                                                    <p className='text-primarybg'>Mozammel Sarkar</p>
                                                    <p className='text-[#77838f] text-sm '>DevOps Engineer</p>
                                                </div>
                                            </div>
                                            <section className='mt-4 p-4 '>
                                                <p className='text-[#77838f]  '> 
                                                A very effective platform to get the required IT skills to reach your goal in the IT world, led by a very, very enthusiastic mentor Jahidul. He follows his unique teaching technique and creates an environment where everyone plays a part as a mentor and helps each other understand topics—highly recommended if you want to be a part of the IT world. I have done QA course and after serving as QA, I returned to do DevOps course. So now I am successfully working as DevOps Engineer. 
                                                </p>
                                            </section>
                                        </div>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
