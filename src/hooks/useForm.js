import { useState } from "react"

export const useForm = (initialState) =>{
    //const [nome, setNome] = useState("")
  //const [idade, setIdade] = useState("")
  //const [email, setEmail] = useState("")

  //passando tudo para uma unica variavel
  const [formulario, setFormulario] = useState(initialState)
//   console.log(formulario)

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

//passando tudo para um unico onChange
    const onChange = (event) =>{
//        console.log(event.target.name)
        //const name = event.target.name
        //const value = event.target.value
    const {name, value} = event.target
        setFormulario({...formulario, [name]: value})
  }

  //  console.log(formulario)

return [formulario, onChange]
}