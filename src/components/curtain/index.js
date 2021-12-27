import React, { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Curtain = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={`curtain`} />
    );
});

export default Curtain;