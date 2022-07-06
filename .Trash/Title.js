import React from 'react'
import Paragraph from './Paragraph'

const bold = {
  fontWeight: 'bold',
  display: 'block'
}

const Title = ({title, subtitle, paragraph}) => {
  
  return (
    <>
      <span style={bold}>{title}</span>
      <span>{subtitle}</span>
      <Paragraph paragraph={paragraph} />
    </>
  )
}

export default Title