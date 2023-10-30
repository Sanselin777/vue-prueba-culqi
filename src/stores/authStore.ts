import { defineStore } from 'pinia'
import { IUser } from '../models/authUser';
import { userStorageName, tokenName } from '../helpers/consts';
export type AuthStoreState = {
    authUser: IUser | null;
};

export const useAuthStoreStore = defineStore('authStore', {
    state: () =>
    ({
        authUser: JSON.parse(localStorage.getItem(userStorageName) ?? 'null') as IUser | null,
        tokenStorage: localStorage.getItem(tokenName) ?? '',
    }),
    getters: {},
    actions: {
        setAuthUser(user: IUser | null) {
            this.authUser = user;
        },
        setTokenStorageName(token: string) {
            this.tokenStorage = token;
        },

    },
})

