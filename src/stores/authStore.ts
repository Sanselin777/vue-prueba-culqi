import { defineStore } from 'pinia'
import { IUser } from '../models/authUser';
export type AuthStoreState = {
    authUser: IUser | null;
};

export const useAuthStoreStore = defineStore('authStore', {
    state: () =>
    ({
        authUser: null as IUser | null,
        tokenStorage: '' as string,
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

