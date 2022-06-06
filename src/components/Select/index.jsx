import React from 'react'

import * as styled from './styles'

export default function Select(props) {
  const { data, label } = props
  return (
    <styled.Component>
      <label>{label}: </label>
      <select>
        {data
          ? data.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))
          : null}
      </select>
    </styled.Component>
  )
}
