import React from 'react'
import Paragraph from './Paragraph'

const Title = ({ title, subtitle, paragraph }) => {

  return (
    <>
    <div>Hello World</div>
    <div>{title}</div>
    <div>{subtitle}</div>
    <Paragraph paragraph={paragraph}/>
    </>
  )
}

export default Title