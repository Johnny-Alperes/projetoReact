import React, { useRef } from "react";

function MinhaRef() {
    const meuImputRef = useRef(null);

    const focarNoImput = () => {
        meuImputRef.current.focus();

    };

    return (
        <>
            <input ref={meuImputRef} type="text"/>
            <button onClick={focarNoImput}>Focar no input</button>
        </>
    );
}

export default MinhaRef;