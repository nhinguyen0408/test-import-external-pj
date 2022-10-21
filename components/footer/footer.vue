<template>
    <div class="footer position-fixed d-flex align-items-center justify-content-center">
        <div class="footer__container ">
            <div class="d-flex align-items-center">
                <img src="~/assets/icon/chrome.png" alt="">
                <img src="~/assets/icon/finder.png" alt="">
                <img src="~/assets/icon/appstore.png" alt="">
                
            </div>
            <div class="d-flex align-items-center justify-content-center">
                
                <img src="~/assets/icon/message.png" alt="">
                <img src="~/assets/icon/list.png" alt="">
                <!-- <ChamcongIcon /> -->
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <img src="~/assets/icon/setting.png" alt="">
                <img src="~/assets/icon/trash.png" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .footer {
        width: 100%;
        padding: 30px 25%;
        bottom: 10px;
        
        &__container{
            height: 80px;
            width: 50vw;
            background: rgba(255, 255, 255, 0.4);
            display: grid;
            grid-template-columns: 60% 20% 20%;

            & div {
                margin: 5px 0px;
                border-right: 2px solid rgba(0, 0, 0, 0.04);
            }

            & div:last-child {
                border-right: none;
            }
            & div:first-child {
                padding-left: 20px;
            }
        }
    }
    
</style>