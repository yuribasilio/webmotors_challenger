import styled from 'styled-components'

export const Component = styled.div`
   {
    cursor: pointer;

    .btn-transparent {
      background-color: transparent;
      border: 2px solid #e2b309;
      color: #e2b309;
      font-size: 14px !important;
      padding: 10px 25px;
      margin-bottom: 10px;
      &:hover {
        color: #c99e07;
        border-color: #c99e07;
      }
    }
    .btn-red {
      width: 100%;
      background-color: #ec0928;
      border: 0;
      font-size: 18px !important;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      font-size: 14px;
      padding: 20px 40px;
      &:hover {
        background-color: #d40b26;
      }
    }
    .btn-clear {
      width: 100%;
      background-color: transparent;
      border: 0;
      font-size: 15px !important;
      color: #ababab;
      font-size: 14px;
      padding: 20px 40px;
    }
    .red {
      color: #ec0928;
    }
  }
`

export default Component
