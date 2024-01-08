import React from 'react'

interface ButtonProps {
  title: string
  action: any
  children?: React.ReactNode
}

const Button = ({ title, action }: ButtonProps): JSX.Element => {
  return (
    <button>{title}</button>
  )
}

export default Button
