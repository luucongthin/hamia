<template>
    <div class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <p class="title">About</p>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">How it work</a></li>
                        <li><a href="#">Browse item</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <p class="title">Account</p>
                    <ul>
                        <li><a href="#">Message</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">My items</a></li>
                        <li><a href="#">Sign out</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <p class="title">App</p>
                    <ul class="fotter-get-app">
                        <li><img src="~/assets/images/icon/get-app-appstore.png" alt="app-store"></li>
                        <li><img src="~/assets/images/icon/get-app-playstore.png" alt="play-store"></li>
                    </ul>    
                </div>
                <div class="col-md-3">
                    <p class="title">Follow us</p>

                    <ul class="fotter-social">
                        <li><a href="#"><img src="~/assets/images/icon/social-facebook.png" alt=""></a></li>
                        <li><a href="#"><img src="~/assets/images/icon/social-instagram.png" alt=""></a></li>
                        <li><a href="#"><img src="~/assets/images/icon/social-twitter.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fotter-copy">
            <p>Copy right LUCI @2019</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-footer',
    data: function () {
        return {

        }
    }
    // mounted() {
    //     //console.log(this.$el);
    //     let _windowHeight = window.innerHeight;
        
    //     let _footerHeight = this.$el.clientHeight + 20;
    //     let _pageContent = document.querySelector('.page-content');
    //     let _contentHeight = _pageContent.clientHeight;

    //     let _pageHeader = document.querySelector('.page-header');
    //     let _headerHeight = _pageHeader.clientHeight + 20;

    //     var _pageHeight = _footerHeight+ _contentHeight + _headerHeight;

    //     if(_pageHeight < _windowHeight){
    //         this.$el.classList.add('fixed-footer')
    //     }
    //     console.log('_windowHeight', _contentHeight, _footerHeight);
    // }

}
</script>

<style lang="scss" scoped>
    .fixed-footer{
        position: fixed;
        bottom: 0;
    }
    .page-footer{
        background-color: #fff;
        width: 100%;
        padding: 40px 0 0 0;
        margin-top: 20px;
        .fotter-copy{
            margin-top: 30px;
            padding-top: 10px; 
            border-top: 1px solid #ccc;
            display: flex;
            justify-content: center;
        }
        .title{
            font-size: 19px;
            font-weight: 600;
        }
        ul{
            li{
                margin-bottom: 10px;
                a{
                    color: #000000b5;
                }
            }
        }
        ul.fotter-get-app{
            li{
                margin-bottom: 15px;
                img{
                    width: 140px;
                }
            }
        }
        ul.fotter-social{
            li{
                float: left;
                margin-right: 10px;
                a{
                    img{
                        width: 40px;
                    }
                }
            }
        }
    }
</style>