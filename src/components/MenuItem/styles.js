import styled from 'styled-components'

export const Component = styled.div`
   {
    display: flex;
    display-direction: row;
    font-family: 'Roboto', sans-serif;
    .enable {
      display: flex;
      color: #ec0928;
      border-bottom: 5px solid #ec0928;
      padding: 0px 10px;
      padding-right: 25px;

      .textUp {
        color: #000;
      }
    }
    .disable {
      display: flex;
      color: #ababab;
      border-bottom: 5px solid #ababab;
      padding: 0px 10px;
      padding-right: 25px;

      .textUp {
        color: inherit;
      }
    }
    .icon {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-bottom: 6px;
    }
    .textUp {
      display: flex;
      display-direction: column;
      justify-content: left;
      align-items: left;
      font-size: 12px;
      text-transform: uppercase;
    }
    .textDown {
      display: flex;
      display-direction: column;
      justify-content: left;
      align-items: left;
      font-size: 24px;
      color: inherit;
      text-transform: uppercase;
    }
  }
`
export default Component
