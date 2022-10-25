import React from 'react';
import styles from "../../scss/_markdown.module.scss"

const TextColor = ({
    color,
    children,
}) => {
    return(
        <div
            className = {styles.TextColor}
            style={{
                color: color,
            }}
        >
            {children}
        </div>
    )
};


export default TextColor


