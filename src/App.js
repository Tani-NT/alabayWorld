import './App.css';
import History from './components/History';
import Slider from './components/Slider';
import Vision from './components/Vision';

function App() {
  return (
    <div>
      <main className="landingPage fixed bg-cover w-full h-[100vh] bg-fixed bg-[url('./image/mainBG.png')]">
        <h1 id="mainHeading" className="font-[cheese] absolute tracking-tight -top-[1.5%] left-[5.5%] text-center uppercase">Welcome to Alabay world</h1>
        <h1 className="font-[cheese] font-extrabold tracking-tight text-[9.5vw]  text-center uppercase">Welcome to Alabay world</h1>
        <div className='bg-[#181C27] mt-[16vw] w-full h-[25vh] px-[4.8vw] py-[1vw]'>
          <p className='text-white font-[cheese] text-[3.5vw] leading-[3.3vw] text-center'>where the <span>legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span>Join us</span> in celebrating the <span>strength</span>, <span>loyalty</span>, and <span>heritage</span> of the Alabay breed.</p>
        </div>
      </main>
      <div className="history absolute top-[92%] flex items-center justify-center overflow-y-auto ">
          <div className="w-full mx-[4vw] min-h-[100vh] bg-[#FFC700] rounded-lg">
              <div className="flex items-center justify-center">
                <div className='w-[7vw] mt-[1.5vw] h-[.9vw] rounded-md bg-zinc-300'></div>
              </div>
              <History/>
              <Vision/>
          </div>
      </div>
      <div className="w-full h-full absolute top-[210%]">
        <Slider/>
      </div>
    </div>
  );
}

export default App;
