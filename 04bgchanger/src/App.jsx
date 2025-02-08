import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <h1 className="text-4xl justify-center top-36 font-bold text-gray-800 mb-10">Background Color Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {["red", "green", "blue", "yellow", "black", "white", "skyblue", "violet", "brown", "lightgreen"].map((col) => (
            <button
              key={col}
              onClick={() => setColor(col)}
              className={`outline-none px-4 py-1 rounded-full shadow-lg ${col === "black" ? "text-white" : "text-black"}`}
              style={{ backgroundColor: col }}
            >
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App
