import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode';

export function Login(){

    const onSuccess = (credentialResponse: CredentialResponse)=>{
        if (credentialResponse.credential){
            const decoded: any = jwtDecode(credentialResponse.credential) // eslint-disable-line @typescript-eslint/no-explicit-any
            console.log('Login success!', decoded)
        }else{
            console.log('No credentials received')
        }
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                onSuccess={onSuccess}
                onError={()=>console.log('Login failed!')}
            />
        </div>
    )
}