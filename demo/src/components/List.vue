<template>
    <li v-if='changelist'>
        <span>{{item.music_name}}</span>
        <span></span>
        <span>{{item.singer_name}}</span>
        <span>{{isup}}</span>
        <span><b @click="removeList(index,item.id)">删除</b><b @click='changeItem'>修改</b></span>
    </li>
    <li v-else>
        <input type="text" v-model="music_name">
        <input type="text">
        <input type="text" v-model="singer_name">
        <input type="text" v-model="isups">
        <span><b @click="removeList(index,item.id)">删除</b><b @click='changeItem'>修改</b></span>
    </li>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data () {
        return {
            changelist:true,
            music_name:this.item.music_name,
            singer_name:this.item.singer_name,
            isups:this.isup
        }
    },
    props:{
        item:Object,
        index:Number
    },
    computed:{
        isup(){
            return this.item.isup===1?"是":"否"
        }
    },
    methods:{
        ...mapMutations(['removelits']),
        removeList (index,id) {
            console.log(id)
            this.api.list.removemusic({id}).then(res=>{
                console.log(res.data)
                if(res.data.code===1){
                    this.removelits(index)
                    this.$message({
                        message: '恭喜你，删除成功',
                        type: 'success'
                    });
                }else{
                    this.$message.error(res.data.message);
                }
            })
        },
        changeItem(){
            this.changelist=!this.changelist
        }
    }
}
</script>
<style lang="stylus" scoped>
    li{
        display flex;
        span{
            width 100%
            height 100%
            display flex;
            justify-content center
            align-items center
        }
        input{
            width 90%
        }
    }
</style>