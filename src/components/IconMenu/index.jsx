import React from 'react'

import { faCarSide, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconMenu(props) {
  const { icon } = props
  if (icon === 'carro') {
    return <FontAwesomeIcon icon={faCarSide} />
  }
  return <FontAwesomeIcon icon={faMotorcycle} />
}
