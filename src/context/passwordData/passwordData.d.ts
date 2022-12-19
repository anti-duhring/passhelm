import { TPassword } from "../../constants/password";

export type TPasswordDataContext = {
    passwordData: TPassword;
    setPasswordData: React.Dispatch<React.SetStateAction<TPassword>>;
    onChangeProperty: (property: string, value: string) => void;
    handleChosenCategory: (category: TPassword['category']) => void;
}