<template>
    <div class="header-message">
        <!-- BEGIN - Button PC -->
        <div class="dropdown btn-pc">
            <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span>
                    <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="35px"
                        height="35px"
                        viewBox="0 0 23 23"
                        version="1.1"
                    >
                        <g>
                            <path
                                d="M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                            />
                        </g>
                    </svg>
                </span>
                <span class="icon-name">Messages</span>
            </button>

            <div
                class="dropdown-menu dropdown-menu-right box message-box animate slideIn"
                aria-labelledby="dropdownMenuButton"
            >
                <ul>
                    <message-item v-for="item in items" :key="item.id" v-bind:data="item"></message-item>
                </ul>
            </div>
        </div>
        <!-- END - Button PC -->

        <!-- BEGIN - Button mobile -->
        <nuxt-link to="/message" tag="button" class="btn-mobile">
            <span>
                <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="35px"
                    height="35px"
                    viewBox="0 0 23 23"
                    version="1.1"
                >
                    <g>
                        <path
                            d="M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                        />
                    </g>
                </svg>
            </span>
        </nuxt-link>
        <!-- END - Button mobile -->
    </div>
</template>

<script>
import MessageItem from "./message-item";

export default {
    name: "message-header",

    components: {
        MessageItem
    },

    data: function() {
        return {
            items: [
                {
                    id: 1,
                    message: "Message content 1"
                },
                {
                    id: 2,
                    message: "Message content 2"
                },
                {
                    id: 3,
                    message: "Message content 3"
                },
                {
                    id: 4,
                    message: "Message content 4"
                },
                {
                    id: 5,
                    message: "Message content 5"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.header-message {
    .dropdown-menu{
        margin: 0;
    }
    button {
        height: 50px;
        background-color: transparent;
        border: none;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
            margin-left: 10px;
            font-weight: 600;
            color: #fff;
            transition: all 0.3s;
            font-weight: 600;
            .icon {
                transition: all 0.3s;
                fill: #fff;
            }
        }
        &:hover {
            span {
                color: purple;
            }
            .icon {
                fill: purple;
            }
        }
    }
    .btn-mobile {
        display: none;
    }
}
.message-box {
    background-color: #fff;
    padding: 10px;
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

@media only screen and (min-width: 768px) {
    .message-box {
        width: 350px;
        max-height: 400px;
        overflow-y: scroll;
    }
    .btn-pc {
        display: block;
    }
    .btn-mobile {
        display: none;
    }
}

@media only screen and (max-width: 480px) {
    .header-message {
        width: 50px;
        button {
            span {
                margin: 0px;
            }
            .icon-name {
                display: none;
            }
        }
        .btn-pc {
            display: none;
        }
        .btn-mobile {
            display: block;
        }
    }
}
</style>