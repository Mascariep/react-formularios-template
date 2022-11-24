//import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
 
const [formulario, onChange] = useForm({nome:"", idade:"", email:"", profissao:""})

  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email}, profissao: ${formulario.profissao} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          name='nome'
          id="nome"
          value={formulario.nome}
          onChange={onChange}
          //adicionar o required para ser obrigatorio o preenchimento
          required
          type="text"
          //3 letras maiusculas
          //pattern='[A-Z]{3}'
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name='idade'
          id="idade"
          value={formulario.idade}
          onChange={onChange}
          required
          type="number"
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name='email'
          id="email"
          value={formulario.email}
          onChange={onChange}
          required
          type="email"
        />

<label htmlFor="profissao">Profissão:</label>
        <Input
          name='profissao'
          id="profissao"
          value={formulario.profissao}
          onChange={onChange}
          required
          type="text"
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
