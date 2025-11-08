import React, { useState } from 'react'
import ProjectUi from './components/project-ui/ProjectUi.jsx'


const App = () => {

   const [count, setCount] = useState(0);

   function incNum(){
    setCount(count + 1);
   }

   function decNum(){
    setCount(count - 1);
   }
    
  return (
    
    <div>
      <div className='cnt'>{count}</div>
      <button onClick={incNum}>increase</button>
      <button onClick={decNum}>decrease</button>
    </div>
  )
}
export default App 
