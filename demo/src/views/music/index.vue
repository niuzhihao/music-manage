<template>
    <div class="musiclist">
        <div class="tit">
            <span>音乐列表</span><button @click="isopenalert">添加</button>
        </div>
        <ul class="list">
            <li>
                <span>歌手</span>
                <span>图片</span>
                <span>歌手</span>
                <span>是否上架</span>
                <span>操作</span>
            </li>
            <List v-for="(item,index) of muisclist" :key="index" :index="index" :item="item"></List>
        </ul>
        <Alert v-if="openalert" :isopen="meme"></Alert>
    </div> 
</template>
<script>
import {mapMutations,mapState} from 'vuex'
import List from '@/components/List'
import Alert from '@/components/Alert'
export default {
    data () {
        return {
            openalert:false
        }
    },
    created () {
        this.api.list.listmusic().then(res=>{
            console.log(res.data.data)
            this.getmuisclist(res.data.data)
        })
    },
    methods:{
       ...mapMutations(['getmuisclist']),
       isopenalert(){
           this.openalert=true
       },
       meme(){
           this.openalert=false
       }
    },
    components:{
        List,Alert
    },
    computed:{
        ...mapState(['muisclist']),
    }
}
</script>
<style lang="stylus" scoped>
    .musiclist{
        
        width 600px
        margin 0 auto
        display flex;
        flex-direction column
        .tit{
            width 100%
            height 50px
            display flex;
            justify-content space-between
            span,button{
                display flex;
                justify-content center
                align-items center
            }
        }
        .list{
            width 100%
            li{
                width 100%
                height 45px
                display flex
                justify-content center
                align-items center;
                span{
                    width 100%
                    height 100%
                    display flex;
                    justify-content center
                    align-items center
                }
            }
        }
    }
</style>