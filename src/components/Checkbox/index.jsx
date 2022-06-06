import React from 'react'

import * as styled from './styles'

export default function Checkbox(props) {
  const { data } = props
  return (
    <styled.Component>
      {data
        ? data.map((item, index) => (
            <div key={index} className="option">
              <input
                type="checkbox"
                name={item.name}
                value={item.value}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))
        : null}
    </styled.Component>
  )
}
