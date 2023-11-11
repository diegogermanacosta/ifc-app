import React from 'react'

type ButtonProps = {
    title: string;
    action: any;
    children?: React.ReactNode;
};

const Button = ({title, action}:ButtonProps) => {
  return (
    <button>{title}</button>
  )
}

export default Button