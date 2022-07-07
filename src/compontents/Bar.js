const Bar = (props) => {
    const style = {
        height: props.amount * 2.5 + 'px'
    }
    return ( 
        <div tabIndex={0} className="bar">
            <div className="amount">${props.amount}</div>
            <div className="bar__block" style={style}></div>
            <div className="day">{props.day}</div>
        </div>
     );
}
 
export default Bar;