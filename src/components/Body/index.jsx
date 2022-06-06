import React from 'react'

import Button from '../Button'
import Checkbox from '../Checkbox'
import Link from '../Link'
import Select from '../Select'
import * as styled from './styles'

export default function Body() {
  const mockData = [
    {
      id: 1,
      name: 'Option 1',
      value: 'option-1'
    },
    {
      id: 2,
      name: 'Option 2',
      value: 'option-2'
    }
  ]

  const typeCar = [
    {
      id: 1,
      name: 'Novo',
      value: 'new',
      checked: 'checked'
    },
    {
      id: 2,
      name: 'Usado',
      value: 'used',
      checked: null
    }
  ]

  return (
    <styled.Component>
      <div className="container">
        <div className="row">
          <div className="col-d-12 no-padding-top">
            <div className="content">
              <div className="hr-10" />
              <div className="row">
                <div className="col-d-12">
                  <Checkbox data={typeCar} />
                </div>
              </div>
              <div className="row">
                <div className="col-d-6 flex">
                  <div className="col-d-8 no-padding">
                    <Select label="Raio" data={mockData} />
                  </div>
                  <div className="col-d-4 no-padding">
                    <Select label="Raio" data={mockData} />
                  </div>
                </div>
                <div className="col-d-6 flex no-padding">
                  <div className="col-d-7">
                    <Select label="Marcas" data={mockData} />
                  </div>
                  <div className="col-d-5">
                    <Select label="Modelos" data={mockData} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-d-6 flex no-padding">
                  <div className="col-d-6">
                    <Select label="Ano Desejado" data={mockData} />
                  </div>
                  <div className="col-d-6">
                    <Select label="Faixa de Preço" data={mockData} />
                  </div>
                </div>
                <div className="col-d-6">
                  <Select label="Versão" data={mockData} />
                </div>
              </div>
              <div className="hr-20" />
              <div className="row">
                <div className="col-d-6">
                  <Link title="Busca Avançada" icon="yes" link="#" />
                </div>
                <div className="col-d-6 flex no-padding">
                  <div className="col-d-5">
                    <Button title="Limpar Filtros" styles="btn-clear" />
                  </div>
                  <div className="col-d-7">
                    <Button title="ver ofertas" styles="btn-red" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </styled.Component>
  )
}
