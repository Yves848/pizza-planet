<template>
   <div class="login_wrapper">
    <form>
        <div>
            <label for="emal">Email address</label>
            <input type="email" id="email" placeholder="Enter an Email address" v-model="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password"  id="password" placeholder="Password" v-model="password">
        </div>
        <button class="btn_green" @click.prevent="signIn()">Sign In</button>
    </form>
    </div> 
</template>

<script>
import { firebaseAuth } from '../firebase';

export default {
    name: 'login',
    data()  {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async signIn() {
            try {
               await firebaseAuth.signInWithEmailAndPassword(this.email,this.password); 
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('wrong password');
                }
                else {
                    alert(errorMessage);
                }
            }
        }
    }
}
</script>