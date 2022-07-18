import React from 'react';
import styles from "../../scss/_textStyle.module.scss"

const Button = ({
    color,
    children,
}) => {
    return(
        <button
            className = {styles.button}
            style={{
                backgroundColor: color,
                borderRadius: '4px',
                color: '#fff',
                padding: '0.6rem',
            }}
        >
            {children}
        </button>
    )
};


export default Button