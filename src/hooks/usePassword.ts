import { AuthContext } from "../context/auth";
import { apiService } from "../service/api.service";
import useFetchPasswords from "./useFetchPasswords";
import { useContext } from 'react';
import { ToastAndroid } from "react-native";
import * as Clipboard from 'expo-clipboard';

const usePassword = () => {
    const { userData, setAllPasswords } = useContext(AuthContext);
    const { fetch } = useFetchPasswords();

    const remove = async(passwordID: string | number) => {
        const api = new apiService({});
        await api.deletePassword(passwordID);

        fetch({ userID: userData.id })
            .then(res => {
                setAllPasswords(res.data)
                ToastAndroid.showWithGravity(
                    'Conta deletada com sucesso',
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                );
            })
            .catch(err => {
                console.error(err);
                ToastAndroid.showWithGravity(
                    `Erro ao deletar conta: ${err}`,
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                );
            });
    }

    const copy = (password: TPassword) => {
        new Promise(async(resolve, reject) => {
            try {
                await Clipboard.setStringAsync(password.password)
                resolve({ success: true });
            } catch (err) {
                reject({ error: err })
            }
        }).then(() => {
            ToastAndroid.showWithGravity(
                `Senha copiada para área de transferência`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
        }).catch((err) => {
            ToastAndroid.showWithGravity(
                `Erro ao copiar senha: ${err}`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
        });
    }

    return { remove, copy }
}

export default usePassword;