import React from 'react'

import * as styled from './styles'

export default function Button(props) {
  const { title, styles } = props
  return (
    <styled.Component>
      {title ? (
        <input type="button" className={styles} value={title} />
      ) : (
        'null'
      )}
    </styled.Component>
  )
}
