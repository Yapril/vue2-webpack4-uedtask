<template>
    <div class="hello">
        <section class="text-ellipsis">
            <h2>文字截断实例</h2>
            <p class="one-line">{{oneLine}}</p>
            <p class="more-line">{{moreLine}}</p>
        </section>
        <section class="img-sprite">
            <h2>雪碧图实例</h2>
            <p class="icon-like">Like!</p>
            <p class="icon-hate">Hate!</p>
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

</style>

<script>
export default {
    data() {
        return {
            oneLine: '单行截断，单行截断单行截断单行截断单行截断单行截断单行截断单行截断',
            moreLine: '多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断多行截断，多行截断多行截断多行截断多行截断多行截断多行截断多行截断'
        }
    }
}
</script>


