import { defineStore } from 'pinia';
import { store } from '@/store'

interface UserState {
    name: string;
    email: string;
    role: string;
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        name: 'BJTT',
        email: '835349858@qq.com',
        role: 'admin',
    }),
    getters: {
        getName(): string {
            return this.name
        },
    },
    actions: {
        updateEmail(email: string) {
            this.email = email;
        }
    }
});

export function useUser() {
    return useUserStore(store);
}