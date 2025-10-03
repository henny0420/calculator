import { useState } from 'react'

import './App.css'

function App() {
 

  const [inputBefore, setInputBefore] = useState([])
  const [inputAfter, setInputAfter] = useState([])
  const [isOperator, setIsOperator] = useState(false)
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(0)

  const handle_val = (ev) => {

    if (isOperator === false) {
      setInputBefore((prev) => [...prev, ev.target.value])
    }

    else if (isOperator === true) {
      setInputAfter((prev) => [...prev, ev.target.value])
    }

    return;
  }

  const handle_operator = (ev) => {
    setIsOperator(true)
    setOperator(ev.target.value)
  }

  const handle_result = () => {

    let res = Number(inputBefore.join(''))
    let res1 =Number(inputAfter.join(''))
    if (operator === '/') {

      let ans = res / res1
      setResult(ans)

    }
    if (operator === '+') {

      let ans = res + res1
      setResult(ans)

    }
    if (operator === '-') {

      let ans = res - res1
      setResult(ans)

    }
    if (operator === 'X') {

      let ans = res * res1
      setResult(ans)

    }

    console.log(res);

    setIsOperator(false)

  }

  const handle_clear = () => {

    setResult(0)
    setIsOperator(false)
    setInputAfter([])
    setInputBefore([])
    setOperator('')

  }

  console.log(isOperator);

  console.log(inputBefore);
  console.log(inputAfter);
  console.log(operator);



  return (
    <>


      <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm mx-auto bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 p-6 space-y-6">

          <div className="bg-black/20 rounded-lg p-4 text-right">
            <input
              type="text"
              id="display"
              className="w-full bg-transparent text-white text-5xl font-semibold border-none outline-none text-right"
              // value={result || inputBefore.join('') || inputAfter.join('') }
              value={
  result !== 0 
    ? result 
    : (isOperator ? inputAfter.join('') : inputBefore.join(''))
}
              readOnly
            />
          </div>

          <div className="grid grid-cols-4 gap-4">

            <button

              onClick={handle_clear}
              className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-8 border-0 rounded-2xl text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 col-span-2"
            >
              C
            </button>
            <button
              className="calculator-button text-2xl font-bold bg-white/10 hover:bg-white/20 text-white p-5 rounded-lg"
              value={'/'}
              onClick={handle_operator}
            >/</button>
            <button
              value={'X'}
              className="calculator-button text-2xl font-bold bg-white/10 hover:bg-white/20 text-white p-5 rounded-lg"
              onClick={handle_operator}

            >*</button>

            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={7}
              onClick={handle_val}
            >7</button>
            <button

              className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={8}
              onClick={handle_val}
            >8</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={9}
              onClick={handle_val}
            >9</button>
            <button className="calculator-button text-2xl font-bold bg-white/10 hover:bg-white/20 text-white p-5 rounded-lg"
              value={'-'}
              onClick={handle_operator}
              >-</button>

            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={4}
              onClick={handle_val}
            >4</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={5}
              onClick={handle_val}
            >5</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={6}
              onClick={handle_val}
            >6</button>
            <button className="calculator-button text-2xl font-bold bg-white/10 hover:bg-white/20 text-white p-5 rounded-lg"
              value={'+'}
              onClick={handle_operator}
            >+</button>

            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={1}
              onClick={handle_val}
            >1</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={2}
              onClick={handle_val}
            >2</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
              value={3}
              onClick={handle_val}
            >3</button>
            <button
              className="calculator-button text-2xl font-bold bg-sky-500/50 hover:bg-sky-500/70 text-white p-5 rounded-lg row-span-2"
              onClick={handle_result}
            >=</button>

            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg col-span-2"
            value={0}
            onClick={handle_val}
            >0</button>
            <button className="calculator-button text-2xl font-bold bg-white/5 hover:bg-white/10 text-white p-5 rounded-lg"
            value={'.'}
            onClick={handle_val}
            >.</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App