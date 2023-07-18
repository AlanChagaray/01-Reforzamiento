interface Persona {
    nombre: string;
    edad : number;
    direccion : Direccion;
}

interface Direccion {
    ciudad : string;
    nro : number;
}

export const ObjetosLiterales = () => {

    const persona : Persona = {
        nombre : "Alan",
        edad : 31,
        direccion : {
            ciudad : "Los Polvorines",
            nro : 2601
        }
    }

  return (
    <div>ObjetosLiterales
        <code>
            <pre>
                {JSON.stringify(persona, null , 2)}
            </pre>
        </code>
    </div>
  )
}

export default ObjetosLiterales