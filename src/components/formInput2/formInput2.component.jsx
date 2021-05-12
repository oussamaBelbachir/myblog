import React ,{useState}from 'react'
import './formInput2.styles.scss';


 
function FormInput2({ mod,clear,textarea,errors,re, label, ...otherProps }) {

    const [shrink , setShrink] = useState("");

    const check = (e,test) => {
            setShrink(e.target.value);
    }

    return (
        <div className={`groupDiv ${errors[label]?.message ? "error" : ""}`}>
       

        {
            textarea ? (<textarea className="form-input"  onInput={check} {...otherProps} {...re}
            />) : <input className={`form-input ${otherProps.disabled ? "disabled" : ""}`}  onInput={check} {...otherProps} {...re}
            />
        }
       
 
        <label className={`${shrink || mod ? 'shrink' : ''} form-input-label`}>{label}</label>
        {errors[label]?.message && <p className="pError">{errors[label]?.message}</p>}
        </div>
    )
}


export default FormInput2
