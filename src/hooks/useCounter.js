import useCounter from "../hooks/useCounter";


const Counter = () => {
    const [count, setCount] = useCounter();

    return (
        <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <div>{count}</div>
        </div>
    );
};

export default useCounter;