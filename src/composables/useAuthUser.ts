import { ref } from "vue";
import { api } from "../api/api";
import { ISuccessResponse, ILoginCredentials, IUser, EStatus } from "../models/authUser";
import { useAuthStoreStore } from "../stores/authStore";
import { AxiosResponse } from "axios";
import router from "../router";
import { bearerToken, tokenName, userStorageName } from "../helpers/consts";
import { storeToRefs } from "pinia";

const userCredentials = ref<ILoginCredentials>({
    correo: '',
    password: ''
})


const errorMessage = ref<string>('')
const useAuthUser = () => {
    const store = useAuthStoreStore();
    const { authUser: user } = storeToRefs(store)
    const onlogin = async () => {
        errorMessage.value = '';
        try {
            const response = await api.post<AxiosResponse<ISuccessResponse>>('auth/login', userCredentials.value);

            const { data, status } = response.data;
            if (status === EStatus.success) {
                onSaveToken(data.token)
                onSaveUser(data.user)
                router.push({ name: 'Dashboard' })
            }
        } catch (error: any) {
            const responseData = error?.response?.data;
            if (responseData?.status === EStatus.error) {
                errorMessage.value = responseData.message;
            }
        }

    }

    const onSaveToken = (token: string): void => {
        const fullToken = `${bearerToken}${token}`;
        api.defaults.headers.common.Authorization = fullToken;
        store.setTokenStorageName(fullToken);
        localStorage.setItem(tokenName, fullToken);
    }

    const onSaveUser = (user: IUser): void => {
        store.setAuthUser(user);
        localStorage.setItem(userStorageName, JSON.stringify(user));
    }

    const onClearStorage = (): void => {
        localStorage.clear();
        store.setAuthUser(null);
        store.setTokenStorageName('');
    }

    const getAuthToken = (): string | null => {
        return localStorage.getItem(tokenName);
    }

    const isAuthenticated = (): boolean => {
        return !!getAuthToken();
    }

    const onLogout = async () => {
        try {
            router.push({ name: 'Login' })
            onClearStorage();
        } catch (error) {
            console.log(error);
        }
    }

    return {
        onlogin,
        onLogout,
        isAuthenticated,
        userCredentials,
        errorMessage,
        user
    }
}
export default useAuthUser