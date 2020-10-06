import React, { useState } from 'react';

function Index() {
  const [state, setState] = useState("");
  const dataButon = [];
  [9,8,7,6,5,4,3,2,1,0,".","%"].forEach((item) => {
    dataButon.push(
      <button 
        onClick={e => setState(state + e.target.value)}
        value={item}
        key={item}
      > 
        {item}
      </button>
    )
  });
  
  const result = () => {
    try{
      setState( 
        String(eval(state)).length > 3 &&
        String(eval(state)).includes(".")
          ? String(eval(state).toFixed(4))
          : String(eval(state))
        )
        console.log(String(eval(state)).length)
    }catch(err){
      console.error(err)
    }
  }

  return (     
    <>
      <h1>Calculator</h1>
      <section>
        <div>
          <div>{state}</div>
          <div>{dataButon}</div>
          <button onClick={() => setState(state.substr(0, state.length -1))}>Clear</button>
          <button onClick={() => setState("")}>AC</button>
          <button onClick={e => setState(state + e.target.value)} value="+">+</button>
          <button onClick={e => setState(state + e.target.value)} value="-">-</button>
          <button onClick={e => setState(state + e.target.value)} value="*">*</button>
          <button onClick={e => setState(state + e.target.value)} value="/">/</button>
          <button onClick={result} value="=">=</button>
        </div>
      </section>
    </>
  );
}

export default Index;