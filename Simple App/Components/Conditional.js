const Conditional =()=>{
const flag = true;
    return (
        <div>
        {flag ? <h2>This site is secure</h2>: <p>Flag is false</p>}
        <button>Click Me to learn more</button>
        </div>
    )
}