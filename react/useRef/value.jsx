// the useRef is a hook which is use to give the reference to the value or dom element without triggering the re-renders...
// 1. value: some of the value that is not require for ui but use in anyform such  value of no. of renders if the no. of renders exceeds 10,000 reload the page so there is no requirement for us to render the page again on changing value of no. of render
// 2. ref to the dom element , such as focusing any compoents


import React, { useRef } from 'react';

function ClickCounter() {
  const count = useRef(0); // like a hidden variable

  const handleClick = () => {
    count.current += 1;
    console.log('Clicked', count.current, 'times');
  };

  return <button onClick={handleClick}>Click me</button>;
}
export default ClickCounter