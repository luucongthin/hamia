<template>
    <div class="page-login">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            name="username"
                            id="username"
                            v-model="username"
                        />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            v-model="password"
                        />
                    </div>

                    <b-btn @click="loginLocal" variant="primary" block>Login</b-btn>
                </div>

                <div class="col-md-6">
                    <div v-for="s in strategies" :key="s.key" class="mb-2">
                        <b-btn
                            @click="$auth.loginWith(s.key)"
                            block
                            :style="{background: s.color}"
                            class="login-button"
                        >Login with {{ s.name }}</b-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-button {
    border: 0;
}
</style>

<script>
export default {
    data: function() {
        return {
            username: "admin",
            password: "admin",
            error: null
        };
    },
    computed: {
        strategies: () => [
            { key: "google", name: "Google", color: "#4284f4" },
            { key: "facebook", name: "Facebook", color: "#3c65c4" }
        ]
        // redirect() {
        //     return (
        //         this.$route.query.redirect &&
        //         decodeURIComponent(this.$route.query.redirect)
        //     );
        // },
        // isCallback() {
        //     this.$route.query.callback
        // }
    },
    methods: {
        async loginLocal() {
            this.error = null;

            return this.$auth
                .loginWith("local", {
                    data: {
                        username: this.username,
                        password: this.password,
                        page: "admin"
                    }
                })
                .catch(e => {
                    this.error = e + "";
                });
        }
    }
};
</script>
