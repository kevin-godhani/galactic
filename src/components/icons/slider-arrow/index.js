import React from "react";

const SliderArrow = ({ className }) => {
    return (
        <svg className={`slider-arrow-icon ${className ? className : ''}`} width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <circle cx="46.5" cy="46.5" r="46.5" fill="url(#paint0_linear_1245_7588)" fillOpacity="0.2"/>
            </g>
            <g>
                <circle cx="46.4219" cy="46.4106" r="36" fill="url(#paint1_linear_1245_7588)" fillOpacity="0.6"/>
            </g>
            <path className="slider-arrow-icon-path" fillRule="evenodd" clipRule="evenodd" d="M58.2444 46.3268L37.2816 46.5167L35.9258 46.5289L36.7844 45.4795L46.288 33.863L47.1454 34.3862L48.0427 34.9338L47.3791 35.7491L40.5851 44.0962L39.7334 45.1426L41.0826 45.135L57.2039 45.0438L58.2455 45.038L58.2446 46.0796L58.2444 46.3268ZM58.2444 47.7153L37.2816 47.5255L35.9258 47.5132L36.7844 48.5626L46.288 60.1791L47.1454 59.6559L48.0427 59.1083L47.3791 58.293L40.5851 49.946L39.7334 48.8995L41.0826 48.9072L57.2039 48.9983L58.2455 49.0042L58.2446 47.9626L58.2444 47.7153Z" fill="white" fillOpacity="0.6"/>
            <defs>
                <linearGradient id="paint0_linear_1245_7588" x1="70.7949" y1="11.4944" x2="20.8989" y2="82.0281" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7B64DC"/>
                    <stop offset="1" stopColor="#A46BBA"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1245_7588" x1="68.8567" y1="16.1498" x2="22.6827" y2="78.2367" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A36ABC"/>
                    <stop offset="1" stopColor="#7B64DC"/>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SliderArrow;
