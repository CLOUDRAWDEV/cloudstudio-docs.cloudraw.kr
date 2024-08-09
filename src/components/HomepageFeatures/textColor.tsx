import React from 'react';
import styles from "/src/scss/_markdown.module.scss"

const TextColor = ({
    color,
    children,
}) => {
    return(
        <span
            className = {styles.TextColor}
            style={{
                color: color,
            }}
        >
            {children}
        </span>
    )
};


export default TextColor


