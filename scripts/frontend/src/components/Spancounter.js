import { useEffect, useState } from 'react';

function Spancounter(props) {
    const inc = ((+props.end) - (+props.start)) / (+props.durationinseconds * 1000);
    var add = 1;
    if (inc > 1) {
        add = inc;
    }
    const inctimes = ((+props.durationinseconds * 1000) / ((+props.end) - (+props.start)));
    var addtimes = inctimes;
    if (inctimes < 1) {
        addtimes = 1;
    }
    const [counter, setCounter] = useState(+props.start);
    useEffect(() => {
        if (counter < +props.end) {
            setTimeout(() => {
                setCounter(counter + Math.ceil(add));
            }, addtimes);
        }
        else {
            setCounter(+props.end);
        }
    }, [counter])
    return (
        <span>{counter}</span>
    )
}

export default Spancounter
