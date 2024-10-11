import React from 'react';
import dogImage from "../image/historyImg.png";

const History = () => {
  return (
    <div className='mt-[4vw] w-full h-[100vh] flex'>
      <div className='w-[50%] h-full'>
        <img className='w-full h-[90%] object-cover' src={dogImage} alt="dog" />
      </div>
      <div className='w-[45%] text-right'>
        <h2 className='font-[montserrat] leading-[6vw] text-[#F76902D1] font-extrabold text-[3.5vw] '>History of</h2>
        <h1 className='font-[cheese] text-[10vw] leading-[10vw] text-white font-extrabold'>ALABAY</h1>
        <p className="font-[kumbh] font-bold text-[#353535] text-[2.4vw] leading-[2.4vw]">The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
      </div>
    </div>
  );
}

export default History;
