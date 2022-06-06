import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .container {
      width: 100%;
      height: 100%;
      display: block;
      justify-content: space-between;
      align-items: top;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      
      .hr-10{
        display: block;
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }

      .hr-20{
        display: block;
        width: 100%;
        height: 1px;
        margin: 20px 0;
      }

      .hr-30{
        display: block;
        width: 100%;
        height: 1px;
        margin: 30px 0;
      }

      .hr-40{
        display: block;
        width: 100%;
        height: 1px;
        margin: 40px 0;
      }

      .hr-50{
        display: block;
        width: 100%;
        height: 1px;
        margin: 50px 0;
      }

      .hr-60{
        display: block;
        width: 100%;
        height: 1px;
        margin: 60px 0;
      }

      .hr-70{
        display: block;
        width: 100%;
        height: 1px;
        margin: 70px 0;
      }

      .hr-80{
        display: block;
        width: 100%;
        height: 1px;
        margin: 80px 0;
      }

      .hr-90{
        display: block;
        width: 100%;
        height: 1px;
        margin: 90px 0;
      }

      .hr-100{
        display: block;
        width: 100%;
        height: 1px;
        margin: 100px 0;
      }

      .flex {
        display: flex;
      }

      .no-padding{
        padding: 0!important;
      }

      .no-padding-bottom{
        padding-bottom: 0!important;
      }

      .no-padding-top{
        padding-top: 0!important;
      }

      .no-padding-left{
        padding-left: 0!important;
      }

      .no-padding-right{
        padding-right: 0!important;
      }

      .content-start {
        justify-content: flex-start;
      }

      .content-center {
        justify-content: center;
      }

      .content-end {
        justify-content: flex-end;
      }

      .item-start{
        align-items: flex-start;
      }

      .item-center{
        align-items: center;
      }

      .item-end{
        align-items: flex-end;
      }
      
      .col-d-1{
        width: 8.33%;
        padding: 5px;
      }

      .col-d-2{
        width: 16.66%;
        padding: 5px;
      }

      .col-d-3{
        width: 25%;
        padding: 5px;
      }

      .col-d-4{
        width: 33.33%;
        padding: 5px;
      }

      .col-d-5{
        width: 41.66%;
        padding: 5px;
      }

      .col-d-6{
        width: 50%;
        padding: 5px;
      }

      .col-d-7{
        width: 58.33%;
        padding: 5px;
      }

      .col-d-8{
        width: 66.66%;
        padding: 5px;
      }

      .col-d-9{
        width: 75%;
        padding: 5px;
      }

      .col-d-10{
        width: 83.33%;
        padding: 5px;
      }

      .col-d-11{
        width: 91.66%;
        padding: 5px;
      }

      .col-d-12{
        width: 100%;
        padding: 5px;
      }
    }
  }
`
export default GlobalStyle
