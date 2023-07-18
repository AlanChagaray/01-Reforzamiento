
export const TiposBasicos = () => {
    const nombre : string = "Alan";
    const edad : number = 31;
    const activo : boolean = false;

    const poderes : string[]=[];
    poderes.push("Volar");
    poderes.push("Velocidad");
    poderes.push("Fuerza");

  return (
    <>
    <div>TiposBasicos</div>
    {nombre}, {edad}, { activo ? "Esta activo" : "Inactivo" }
    <hr />
    {poderes.join(', ')}
    </>
  )
}

