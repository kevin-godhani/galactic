import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from '../../utils/io';
import * as styles from "./index.module.scss";

const ImageRenderer = ({ url, width, height, containerClassName, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
        className={classnames(styles.imageContainer, { [containerClassName]: !!containerClassName })}
        ref={imgRef}
        style={{ paddingBottom: `${(height / width) * 100}%` }}
        >
        {isInView && (
            <img
                className={classnames(styles.image, { [styles.isLoaded]: !!isLoaded })}
                src={url}
                onLoad={handleOnLoad}
                draggable="false"
                alt={alt ? alt : ' '}
            />
        )}
        </div>
    );
};

export default ImageRenderer;