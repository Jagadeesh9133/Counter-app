import { Components } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
