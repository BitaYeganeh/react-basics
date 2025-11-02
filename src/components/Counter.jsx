const Counter = ({count, setCount}) => {

    // const handleBackgroundColor = () => {
    //     if (count === 0) {
    //         return "grey"
    //     } else if ( count > 0) {
    //         return "green"
    //     } else if (count <0){
    //         return "red"
    //     }
    //     }

       const handleBackgroundColor = () => {
        switch (true) {
            case count === 0:
                 return "blue";
            case count > 0:
                return "green";
            case count < 0:
                return "red";
           
        }
       } ;



    return(
        <div className="buttons">
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        {/* <div style={{backgroundColor: count > 0 ? "GREEN" : "RED" }}>
        {count}
        </div> */}
        <div style={{ backgroundColor : handleBackgroundColor ()}}>{count}</div>
        </div>
    );

};
export default Counter;