import { useReducer , useEffect} from "react"

interface AuthState {
    validado : boolean;
    token : string | null;
    ussername : string;
    name : string;
}

const initialState : AuthState = {
    validado : true,
    token : null,
    ussername : '',
    name : ''
}

type PayLoad ={
    name :string,
    ussername :string
}

type AuthAction = 
    | { type : 'logout'}
    | { type : 'login' , payload : PayLoad }

const AuthReducer = (state : AuthState, action : AuthAction): AuthState => {
    switch (action.type ) {
        case 'logout':
            return {
                validado : false,
                token : null,
                ussername : '',
                name :''
            }
        case 'login':
            const {name , ussername} = action.payload;
            return {
                validado : false,
                token : "1234",
                ussername,
                name
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [{validado, token , name}, dispatch] = useReducer(AuthReducer , initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                ussername: "achagaray",
                name : "Alan"
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }
    
    if(validado){
        return( 
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Autenticando...
            </div>        
        </>
        )
    }

  return (
    <>
    <h3>Login</h3>
    {
        (token) 
        ? (<div className="alert alert-success"> Autenticado como : {name}</div>)
        : (<div className="alert alert-danger"> No autenticado </div>)
    }
    
    {
        (token)
        ? (<button className="btn btn-danger" onClick={logout}> Logout </button>)
        : (<button className="btn btn-primary" onClick={login}> Login </button>)
    }
    
    
    </>
  )
}
