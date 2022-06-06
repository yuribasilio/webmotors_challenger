import React from 'react'

import Button from '../Button'
import MenuItem from '../MenuItem'
import * as styled from './styles'

export default function Header() {
  const itemMenu = [
    {
      type: 'enable',
      textUp: 'Comprar',
      textDown: 'Carros',
      icon: 'carro'
    },
    {
      type: 'disable',
      textUp: 'Comprar',
      textDown: 'Motos',
      icon: 'moto'
    }
  ]

  return (
    <styled.Component>
      <div className="container">
        <div className="row">
          <div className="col-d-4 flex">
            <img src="/images/logo.png" className="logo" alt="WebMotos" />
          </div>
        </div>
        <div className="row">
          <div className="col-d-4 flex no-padding-bottom">
            {itemMenu.map((item, index) => (
              <MenuItem
                key={index}
                type={item.type}
                textUp={item.textUp}
                textDown={item.textDown}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="col-d-8 flex content-end">
            <Button title="Vender meu carro" styles="btn-transparent" />
          </div>
        </div>
      </div>
    </styled.Component>
  )
}
