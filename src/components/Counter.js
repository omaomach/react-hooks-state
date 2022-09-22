import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);

    // setCount((currentCount) => currentCount + 1)

  }

  return <button onClick={increment}>Joash clicked me {count} times</button>;
}

export default Counter;
