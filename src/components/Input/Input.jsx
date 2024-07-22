import React from 'react'

const Input = ({ idInput, nameLabel, register, typename = 'text' }) => {
  return (
    <fieldset>
      <label htmlFor={idInput}>{nameLabel}</label>
      <input id={idInput} type={typename} {...register({ register })} />
    </fieldset>
  )
}

export default Input
