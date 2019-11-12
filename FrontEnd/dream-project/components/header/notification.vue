<template>
    <div class="header-notification">
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
                                d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z"
                            />
                            <rect id="Rectangle-23" x="10" y="16" width="4" height="4" rx="2" />
                        </g>
                    </svg>
                </span>
                <span class="icon-name">Notifications</span>
            </button>
            <div
                class="dropdown-menu dropdown-menu-center box noti-box animate slideIn"
                aria-labelledby="dropdownMenuButton"
            >
                <ul>
                    <notification-item v-for="item in items" :key="item.id" v-bind:data="item"></notification-item>
                </ul>
            </div>
        </div>
        <!-- END - Button PC -->

        <!-- BEGIN - Button mobile -->
        <nuxt-link to="/notification" tag="button" class="btn-mobile">
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
                            d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z"
                        />
                        <rect id="Rectangle-23" x="10" y="16" width="4" height="4" rx="2" />
                    </g>
                </svg>
            </span>
        </nuxt-link>
        <!-- END - Button mobile -->
    </div>
</template>

<script>
import NotificationItem from "./notification-item";

export default {
    name: "notification-header",
    components: {
        NotificationItem
    },
    data: function() {
        return {
            items: [
                {
                    id: 1,
                    message: "Notification 1"
                },
                {
                    id: 2,
                    message: "Notification 2"
                },
                {
                    id: 3,
                    message: "Notification 3"
                },
                {
                    id: 4,
                    message: "Notification 4"
                },
                {
                    id: 5,
                    message: "Notification 5"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.header-notification {
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
.noti-box {
    background-color: #fff;
    padding: 10px;
    border: 0px;
}

@media only screen and (min-width: 768px) {
    .noti-box {
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
    .header-notification {
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