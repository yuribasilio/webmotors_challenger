import styled from 'styled-components'

export const Component = styled.div`
   {
    display: flex;
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #ababab;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;

    label {
      font-size: inherit;
      font-family: inherit;
      white-space: nowrap;
    }
    select {
      width: 100%;
      border: none;
      font-family: inherit;
      font-size: inherit;
      font-weight: bold;
    }
  }
`

export default Component
