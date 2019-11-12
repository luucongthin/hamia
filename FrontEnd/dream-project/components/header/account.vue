<template>
    <div class="header-account">
        <div class="dropdown" v-if="$auth.$state.loggedIn">
            <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <div class="avata">
                    <!-- <img src="~/assets/images/avatar.jpg" alt="avata" /> -->
                    <img :src="$auth.user.picture.data.url" alt="avata" />
                </div>
                <span class="username">{{$auth.user.name}}</span>
            </button>
            <div
                class="dropdown-menu dropdown-menu-right box account-menu animate slideIn"
                aria-labelledby="dropdownMenuButton"
            >
                <a class="dropdown-item" href="#">Dashboard</a>
                <a class="dropdown-item" href="#">Activity</a>
                <a class="dropdown-item" href="#">My items</a>
                <a class="dropdown-item" @click="$auth.logout()">Sign out</a>
            </div>
        </div>

        <div v-else>
            <nuxt-link to="/account/login" class="btn btn-danger" tag="button">Login</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "account-header"
};
</script>

<style lang="scss" scoped>
.header-account {
    .dropdown {
        margin: 0;
        button {
            height: 50px;
            background-color: transparent;
            border: none;
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            .avata {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 3px solid #fff;
                overflow: hidden;
                text-align: center;
                padding: 0;
                transition: all 0.3s;
                img {
                    height: inherit;
                    width: inherit;
                    object-fit: cover;
                }
            }
            span {
                margin-left: 10px;
                font-weight: 600;
                transition: all 0.3s;
            }

            &:hover {
                // .avata {
                //     border: 3px solid purple;
                // }
                span {
                    color: purple;
                }
            }
        }
    }
}
.account-menu {
    background-color: #fff;
    padding: 10px 0;
    //position: absolute;
    border: 0px;
    a {
        color: #000;
        padding: 10px 25px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            background-color: transparent;
            color: purple;
        }
    }
}

@media only screen and (max-width: 480px) {
    .header-account {
        .dropdown {
            button {
                span {
                    display: none;
                }
            }
        }
    }
}
</style>