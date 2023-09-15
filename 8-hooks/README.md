# React Hooks

- React 16.8 버전에서 도입된 기능으로, 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle)와 같은 React 기능을 보다 쉽게 사용할 수 있도록 해준다.

## useState

- 상태를 관리하는데 사용

```js
import { useState } from "react";
const App = () => {
    // useState Hook을 사용하여 counter 상태 변수와 setCounter 상태 업데이트 함수를 생성
    // 상태 업데이트 함수를 호출하면 해당 상태를 업데이트하고 컴포넌트가 다시 렌더링
  const [counter, setCounter] = useState(0);
    return (
        <div>
                 <h1>Total clicks: {counter}</h1>
                 <button onClick={() => setCounter(counter + 1)}>Click!</button>
                 </div>   
    );
};

```