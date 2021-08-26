<template>
    <div>
        <ListView :memos="sharedState.memos" @remove="remove" :count="privateState.count" :sort="privateState.sort"/>
        <router-link :to="{name:'items'}">全て見る</router-link>
    
    </div>
</template>
<script>
import ListView from '../components/ListView.vue'

export default {
    components:{
        ListView
    },
    data(){
        return{
            privateState:{
            count:3,
            sort:'latest'   
            }
        }
    },
    computed:{
          sharedState(){
              return this.$store.state
              }
    },
    methods: {
        remove(id){
         this.$store.commit('removeMemo',id)   
        }
    }
}
</script>
