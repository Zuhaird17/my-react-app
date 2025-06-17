

export function App() {


  return (
    <>
     <div className="flex">
        <div className="w-3/12 bg-red-300 h-32 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the red box!")}>Click!</div>
        <div className="w-4/12 bg-green-300 h-32 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
         onClick={() => alert("You clicked the green box!")}>Click!</div>
        <div className="w-5/12 bg-blue-300 h-32 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the blue box!")}>Click!</div>
      </div>

      <div className="flex">
        {/* Purple Box */}
        <div className="w-1/12 bg-purple-700 h-64 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the purple box!")}>Click!</div>

        {/* Right column (Teal on top, Pink + New box below) */}
        <div className="w-11/12 flex flex-col">
          {/* Teal box */}
          <div className="h-32 bg-teal-600 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
          onClick={() => alert("You clicked the teal box!")}>Click!</div>

          {/* Pink and new box side by side */}
          <div className="flex">
            <div  className="w-6/12 h-32 bg-pink-500 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
              onClick={() => alert("You clicked the pink box!")}>Click!</div>
            <div className="w-6/12 h-32 bg-yellow-400 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
              onClick={() => alert("You clicked the yellow box!")}>Click!</div> {/* New box */}
          </div>
        </div>
      </div>
       <div className="flex">
        <div className="w-3/12 h-32 bg-sky-400 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the sky box!")}>Click!</div>
       <div className="w-4/12 h-32 	bg-rose-400 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
       onClick={() => alert("You clicked the rose box!")}>Click!</div>
       <div className="w-5/12 h-32 bg-emerald-400 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the emerald box!")}>Click!</div>
       </div>
       <div className="flex">
        <div className="w-6/12 h-32 	bg-indigo-500 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
        onClick={() => alert("You clicked the indigo box!")}>Click!</div>
       <div className="w-6/12 h-32 bg-amber-300 cursor-pointer flex items-center justify-center text-white font-bold text-xl"
       onClick={() => alert("You clicked the indigo box!")}>Click!</div>
       </div>
    </>
  )
}
