import React from 'react'

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styled from './styles'

export default function Link(props) {
  const { title, link, icon } = props
  return (
    <styled.Component>
      <a href={link}>
        {icon ? <FontAwesomeIcon icon={faCaretRight} /> : null}
        <span>{title}</span>
      </a>
    </styled.Component>
  )
}
