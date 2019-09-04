<template>
    <div class="alert">
        <div>歌名<input type="text" v-model="music_name"></div>
        <div>歌手<input type="text" v-model="singer_name"></div>
        <div>上传图片<input type="file"></div>
        <div>是否上架<input type="checkbox" v-model='isup'></div>
        <button @click='submitmusic'>提交</button>
        <button @click='isopen'>取消</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['isopen'],
    data () {
        return{
            music_name:'',
            singer_name:'',
            pic:'aa',
            isup:''  
        }
    },
    methods:{
        ...mapMutations(['addmuisclist']),
        submitmusic(){
            this.api.list.addlistmusic({music_name:this.music_name,singer_name:this.singer_name,pic:this.pic,isup:this.isup}).then(res=>{
                console.log(res)
                if(res.data.code===1){
                    this.$message({
                        message: '恭喜你，添加成功',
                        type: 'success'
                    });
                    this.isopen()
                    this.addmuisclist({id:new Date().getTime,music_name:this.music_name,singer_name:this.singer_name,pic:this.pic,isup:this.isup})
                }else{
                    this.$message.error(res.data.message);
                }
            })
            
        }
    }
}
</script>
<style lang="stylus" scoped>
    .alert{
            width 400px
            height 300px
            position absolute
            left 37%
            top 27%
            background-color red
            display flex;
            flex-direction column
            div{
                width 100%
                height 15%
                display flex
                justify-content center
                align-items center
            }
            button{
                width 22%
                height 10%
            }
        }
</style>