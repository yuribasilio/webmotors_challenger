import React from 'react'

import IconMenu from '../IconMenu'
import * as styled from './styles'

export default function MenuItem(props) {
  const { type, icon, textUp, textDown } = props

  return (
    <styled.Component>
      <div className="container">
        <div className="row">
          <div className={type}>
            <div className="col-d-3 icon">
              <IconMenu icon={icon} />
            </div>
            <div className="col-d-9">
              <span className="textUp">{textUp}</span>
              <span className="textDown">{textDown}</span>
            </div>
          </div>
        </div>
      </div>
    </styled.Component>
  )
}
