import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <div button onClick={() =>setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"red"}}>Red</div>
          <div button onClick={() =>setColor("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"green"}}>Green</div>
          <div button onClick={() =>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"blue"}}>Blue</div>
          <div button onClick={() =>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</div>
          <div button onClick={() =>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</div>
          <div button onClick={() =>setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>White</div>
          <div button onClick={() =>setColor("skyblue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"skyblue"}}>Sky-blue</div>
          <div button onClick={() =>setColor("violet")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"violet"}}>Violet</div>
          <div button onClick={() =>setColor("brown")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"brown"}}>Brown</div>
          <div button onClick={() =>setColor("lightgreen")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lightgreen"}}>Light-green</div>
        </div>
        </div>
    </div>
  )
}

export default App
