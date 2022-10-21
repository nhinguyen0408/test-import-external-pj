<template>
    <div>
        <div class="header">
            <div class="d-flex justify-content-between align-items-center ">
                <div class="d-flex justify-content-center align-items-center">
                    <img src="~/assets/img/logo-app.png" alt="">
                    <h5 class="text-light p pl-3">
                        Công ty cổ phần Công Nghệ Cao IDT 
                    </h5>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="~/assets/img/avatar.png" alt="">
                    <div class="pl-3">
                        <p class="text-light p font-weight-bold">
                            Nguyễn Thị Bill
                        </p>
                        <small class="text-light text-small p">
                            Giám đốc công nghệ
                        </small>
                    </div>
                </div>
            </div>
            <div class="header__input position-relative">
                
                <input type="text" name="" id="" placeholder="Tìm kiếm...">
                <img src="~/assets/icon/search.png" class="position-absolute search__icon" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.header {
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 30px 25%;
    height: 90px;
}
.header .p {
    margin-bottom: 0px !important;
}
.header__input input{
    width: 100%;
    height: 45px;
    border: 1px solid #C7C9D9;
    border-radius: 8px;
    margin: 20px 0px;
    padding-left: 30px;
}
.search__icon{
    top: 35px;
    left: 10px;
}
</style>