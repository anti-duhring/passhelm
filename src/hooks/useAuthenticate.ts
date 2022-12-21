import * as LocalAuthentication from 'expo-local-authentication';
import { useState, useEffect } from 'react';

type TUseAuthenticate = {
    authentication: LocalAuthentication.LocalAuthenticationResult,
    loading: boolean,
    error: any;
}

type TAuth = () => Promise<LocalAuthentication.LocalAuthenticationResult>

const useAuthenticate: () => TUseAuthenticate = () => {
    const [authentication, setAuthentication] = useState<LocalAuthentication.LocalAuthenticationResult>({ success: false, error: '', })
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    const options: LocalAuthentication.LocalAuthenticationOptions = {
        cancelLabel: 'Cancelar',
        promptMessage: 'O Passhelm requer autenticação'
    }

    const auth: TAuth = async() => {
        const authenticate = await LocalAuthentication.authenticateAsync(options)
        setLoading(false)
        
        return authenticate
    }

    useEffect(() => {
        auth()
        .then(res => setAuthentication(res))
        .catch(err => setError(err))
    },[])

    return { authentication, loading, error }
}

export default useAuthenticate