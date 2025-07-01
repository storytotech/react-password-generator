import { useState,useRef,useEffect,useCallback} from 'react'

import "./index.css"
function App() {


// let change = useRef()

//  const handleclick = ()=>{
  
//  change.current.style.backgroundColor = "red"
//  }
  let passwordref = useRef()
 const [length, setLength] = useState(6);
 const [number,setnumber] = useState(false);
 const [special,setspecial] = useState(false);
 const [input,setinput] = useState('')
const handleclick = useCallback(() => {
  const numbers = "123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let chars = lowerCase + upperCase;
    if (number) chars += numbers;
    if (special) chars += specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
     let newc = chars.charAt(Math.floor(Math.random() * chars.length));
     password += newc
    }
    
    setinput(password);
  }, [length, number, special]);

useEffect(()=>{
handleclick()
},[handleclick])
const handlepassword =useCallback(()=>{
  window.navigator.clipboard.writeText(passwordref.current.value)
  passwordref.current?.select()
},[input])
  return (
    <>
{/* <div className="flex gap-4 mt-4">
  <button className="text-xl bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition" 
  ref = {change}>
    Change
  </button>

  <button
    onClick={handleclick}
    className="text-xl bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
  >
    Click
  </button>
</div> */}



 <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl shadow-2xl space-y-6">
  <h2 className="text-2xl font-bold text-center text-indigo-700">
    Password Generator
  </h2>

  Text Input
  <input
    type="text"
    readOnly
    ref={passwordref}
    value={input} 
    placeholder="Enter your name"
    className="w-full px-4 py-2 border border-indigo-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />

  Range Input with label and value preview 
  <div>
    <label className="block text-sm font-medium text-indigo-700 mb-1">
     Length:{length}
    </label>
    <input
      type="range"
      min={6}
      max={100}
      placeholder='length'
      value={length}
      onChange={(e)=>{setLength(Number(e.target.value))}}
      className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
    />
  </div> 

  Checkboxes
  <div className="space-y-2">
    <label className="flex items-center space-x-3">
      <input type="checkbox" className="w-5 h-5 accent-indigo-600" 
      checked={number}
      onChange={(e)=>{setnumber(e.target.checked)}}
      
      />
      <span className="text-indigo-800 font-medium">Number</span>
    </label>

    <label className="flex items-center space-x-3">
      <input type="checkbox" className="w-5 h-5 accent-indigo-600"
      checked={special}
      onChange={(e)=>{setspecial(e.target.checked)}}
      
      />
      
      <span className="text-indigo-800 font-medium">Special Char</span>
    </label>
  </div>

  Submit Button
  <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
  onClick={handlepassword}
  >
  Copy
  </button>
</div>

    </>
  )
}

export default App
