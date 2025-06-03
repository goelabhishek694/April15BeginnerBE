import React, { useState, useMemo } from 'react'


const generateLargeArray = () => {
    const largeArray = [];
    for(let i=0;i<100000;i++){
        largeArray.push(i);
    }
    return largeArray
}

const sumArray = (arr) => {
    console.log("calculating sum");
    return arr.reduce((acc, curr) => acc+curr, 0);
}


function LargeArraySum() {
  const [count, setCount] = useState(0);
  const largeArray = useMemo(() => generateLargeArray(), []);
  const sum = useMemo(() => sumArray(largeArray), [largeArray]);
  return (
    <>
    <h1>Sum: {sum}</h1>
    <button onClick={() => setCount(count+1)}>+</button>
    <p>Count: {count}</p>
    </>
  )
}

export default LargeArraySum