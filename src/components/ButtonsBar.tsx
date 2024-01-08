import React from 'react'
import Button from './Button'
const ButtonsBar = (): JSX.Element => {
  return (
    <>
      <Button
        title="regla"
        action="LoL" />
      <Button
        title={'Corte'}
        action={undefined}
      />
    </>
  )
}

export default ButtonsBar
