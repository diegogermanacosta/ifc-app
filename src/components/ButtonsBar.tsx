import React from 'react'
import Button from './Button'
const ButtonsBar = (): JSX.Element => {
  function lol (): void {
    console.log('LOL')
  }
  return (
    <>
      <Button
        title="Regla"
        action={lol} />
      <Button
        title={'Corte'}
        action={lol}
      />
    </>
  )
}

export default ButtonsBar
