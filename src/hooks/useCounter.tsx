import { useState } from "react"

export const useCounter = (inicial : number = 10) => {
    const [valor, setValor] = useState(inicial)

    const acumulador  = (numero : number) => {
        setValor(valor + numero);
    }

  return {
    valor,
    acumulador
  }
}
