import React from 'react';
import classes from './Select.module.scss';

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random().toFixed(2)}`

  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return (
            <option
              defaultValue={option.value}
              key={option.value + index}
            >
              {option.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select;