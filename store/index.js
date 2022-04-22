import { defineStore } from 'pinia'
import axios from '@nuxtjs/axios'


export const useAuth = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem('token') || '',
        user: {},
        isloading: false
    }),
    actions: {
        // signup user
        async userSignup(data) {
            // to use fetch api
            this.isloading = true

            const res = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const output = await res.json();
            if (output.success) {
                this.isloading = false
                alert(output.message);
                data.name = '';
                data.email = '';
                data.password = '';
            } else {
                this.isloading = false
                alert(output.message);
            }
        },
        async userLogin(data) {
            this.isloading = true

            const res = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const output = await res.json();
            if (output.success) {
                localStorage.setItem('token', output.token);
                this.token = output.token;
                alert(output.message)
                this.isloading = false

            } else {
                this.isloading = false

                alert(output.message)

            }
        },

        async getUser() {
            this.isloading = true;
            const res = await fetch('http://localhost:8000/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            const output = await res.json();
            this.isloading = false;
            this.user = output.user

        },
        userLogout() {
            this.token = '';
            this.user = '';
            localStorage.removeItem('token');

        }
    }
})