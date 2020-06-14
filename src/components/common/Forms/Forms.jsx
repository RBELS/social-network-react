import React from 'react';
import s from './Forms.module.css'

export const Input = ({ input, meta, ...props }) => {
    let hasError =  meta.error && meta.touched && !meta.active;

    let errorClass = hasError ? s.error : "";

    return (
        <div className={s.div + " " + errorClass} >
            <input className={s.input} {...input} {...props} />
            { hasError && <span className={s.errorSpan}>{meta.error}</span> }
            { meta.asyncValidating && <span className={s.validatingSpan}>Validating...</span> }
        </div>
    );
}
