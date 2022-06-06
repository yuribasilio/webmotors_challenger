import styled from 'styled-components'

export const Component = styled.div`
   {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color: #000;
    display: flex;

    .option {
      display: flex;
      margin-right: 10px;

      input {
        display: none;
      }

      input + label:before {
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 0;
        background-color: #fff;
        border: 1px solid #ababab;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 3px;
    }

    input:checked + label:before {
      background: url('/images/check-solid.svg') no-repeat;
      background-position: center;
      background-size: 10px 10px;
    }

  }
`

export default Component
