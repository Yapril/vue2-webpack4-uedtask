<template>
    <div class="hello">
        <section class="text-ellipsis">
            <h2>文字截断实例</h2>
            <p class="one-line">{{oneLine}}</p>
            <p class="more-line">{{moreLine}}</p>
            <figcation class="how-to-ues">
                使用方法：<br>
                @include line-clip(行数n);
            </figcation>
        </section>
        <section class="img-sprite">
            <h2>雪碧图实例</h2>
            <p class="icon-like">Like!</p>
            <p class="icon-hate">Hate!</p>
            <figcation class="how-to-ues">
                使用方法：<br>
                @include sprite($图片名);
            </figcation>
        </section>
        <section class="center">
            <h2>水平垂直居中实例</h2>
            <figcation class="how-to-ues">
                使用方法：<br>
                @extend %-horizontal-center;
            </figcation>
            <div class="horizontal-center">
                <p>水平居中</p>
            </div>
            <figcation class="how-to-ues">
                使用方法：<br>
                @extend %-vertical-center;
            </figcation>
            <div class="vertical-center">
                <p>垂直居中</p>
            </div>
            <figcation class="how-to-ues">
                使用方法：<br>
                @extend %-absolute-center;
            </figcation>
            <div class="absolute-center">
                <p>绝对居中</p>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import '../assets/css/_lib.scss';
$blackTxt: #080808;
.hello {
    padding: 20px;

    section {
        border-bottom: 2px solid #eee;
        padding-bottom: 40px;

        h2 {
		    line-height: 114px;
		    font-size: 36px;
		    color: $blackTxt;
		    position: relative;
		    font-weight: bold;
        }
    }
}

.text-ellipsis {
    p {
        font-size: 30px;
        color: $blackTxt;
        line-height: 42px;
        margin-bottom: 20px;
    }

    .one-line {
        @include line-clip(1);
        color: #077c8b;
    }

    .more-line {
        @include line-clip(3);
        color: #af6d0a;
    }
}

.img-sprite {
    font-size: 30px;
    color: #4106ad;

    p {
        text-align: center;
        display: inline-block;
        padding-top: 128px;
        width: 128px;
        margin-right: 40px;
    }

    .icon-like {
        position: relative;

        &:before {
            @include sprite($like);
            content: '';
            @extend %-horizontal-center;
            top: 0;
        }
    }

    .icon-hate {
        position: relative;

        &:before {
            @include sprite($hate);
            content: '';
            @extend %-horizontal-center;
            top: 0;
        }
    }
}

.center {
    div {
        width: 100%;
        height: 400px;
        background: #f8ea2b;
        margin-bottom: 20px;
        position: relative;
    }

    p {
        width: 100px;
        height: 100px;
        background: #93e2e7;
        color: #077c8b;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
    }

    .horizontal-center {
        height: 100px;;
        p {
            @extend %-horizontal-center;
        }
    }

    .vertical-center {
        width: 100px;
        margin: 0 auto 20px;

        p {
            @extend %-vertical-center;
        }
    }

    .absolute-center {
        p {
            @extend %-absolute-center;
        }   
    }
}
.how-to-ues {
    display: block;
    font-size: 28px;
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed #444;
}
</style>

<script>
console.log(window.devicePixelRatio)
export default {
    data() {
        return {
            oneLine: '单行截断，单行截断单行截断单行截断单行截断单行截断单行截断单行截断',
            moreLine: '多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断'
        }
    }
}
</script>


