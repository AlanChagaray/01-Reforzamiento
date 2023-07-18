

export const Funciones = () => {

    const sumar = (a : number , b : number) : number => {
        return a+b;
    }

    return (
        <>
            <h2>Funciones</h2>
            <span>{ sumar(10 , 5)}</span> 
        </>
  )
}
