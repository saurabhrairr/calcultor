import React, { useState } from 'react'
import "../componets/Calculator.css"

function Calculator() {
       let [result, setresult] = useState("")
       const handleclick =(e)=>
       {
                     setresult(result.concat(e.target.name))
       } 
         const clear =()=>
       {
                     setresult("")
       }
       const equal =()=>
       {
            
              setresult(eval(result).toString())

              
       }


       return (
              <>
                     <div className='container'>

                            <div className='input'>
                                   <form>
                                          <input type="text" value={result} />
                                   </form>

                            </div>
                            <div className='operation'>
                                   <button onClick={clear}>C</button>
                                   <button name='1' onClick={handleclick}>1</button>
                                   <button name='2' onClick={handleclick}>2</button>
                                   <button name='3' onClick={handleclick}>3</button>
                                   <button name='/' onClick={handleclick}>/</button>
                                   <button name='4' onClick={handleclick}>4</button>
                                   <button name='5' onClick={handleclick}>5</button>
                                   <button name='6' onClick={handleclick}>6</button>
                                   <button name='-' onClick={handleclick}>-</button>
                                   <button name='7' onClick={handleclick}>7</button>
                                   <button name='8' onClick={handleclick}>8</button>
                                   <button name='9' onClick={handleclick}> 9</button>
                                   <button name='+' onClick={handleclick}>+</button>
                                   <button name='=' onClick={handleclick}>.</button>
                                   <button name='0' onClick={handleclick}>0</button>


                                   <button name='*' onClick={handleclick}>*</button>
                                   
                                   <button name='.' onClick={equal}>=</button>
                            </div>


                     </div>
              </>
       )
}

export default Calculator
