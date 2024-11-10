import React from 'react'


function Alert(props) {
    const capitalize = (word)=>{
      if(word === "danger"){
        word = "error"
      }
        const lower = word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);//make first letter capital and then add all chars except first one.
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}
        </div>
  )
}

export default Alert