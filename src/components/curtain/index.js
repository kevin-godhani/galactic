import React, { forwardRef } from "react";

const Curtain = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={`curtain`} />
    );
});

export default Curtain;