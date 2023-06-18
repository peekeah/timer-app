'use client'

import { useState } from 'react'
import DisplayBox from './components/displayBox'

export default function Home() {
  // const [{ m, s }, setTime] = useState({
  //   m: 1,
  //   s: 1
  // });
  const [pause, setPause] = useState(false)

  // useEffect(() => {
  //   if (m === 0 && s === 0) {
  //     return;
  //   }
  //   if (s === 0) {
  //     return setTime(() => ({ m: m - 1, s: 59 }));
  //   }
  //   const timer = setInterval(() => {
  //     if (!pause) {
  //       setTime(() => ({ m: m, s: s - 1 }));
  //     }
  //     clearInterval(timer);
  //   }, 1000);
  // }, [m, s, pause]);

  // const handleStart = () => {

  // }

  // const handlePause = () => {
  //   setPause(() => !pause);
  // };

  // const handleReset = () => {
  //   setPause(() => true); // stopping timer
  //   setTime(() => ({ m: 1, s: 1 })); // setting timer
  //   setPause(() => false); // starting timer again
  // };

  return (
    <main className="min-h-screen p-24">
      <div className="text-5xl text-center">Timer</div>
      <div className="flex flex-row gap-3 justify-center text-center mt-[7%] mb-5">
        <DisplayBox title="MM" value={9} pause={pause} />
        <DisplayBox title="SS" value={9} pause={pause} />
      </div>
      <div className="flex justify-center">
        <button
          className="rounded-full bg-indigo-300 h-16 w-16"
          onClick={() => setPause(!pause)}
        >
          Start
        </button>
      </div>
    </main>
  )
}
