import { useState } from "react" 

export default function Counter() {
const [count, setCount] = useState(0)
return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count +1)}>+1</button>
    </>
    )
}


// +1 in line 8 is what is on the button. it's what the button says.
//line 4 we set count = to 0