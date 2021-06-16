<template>
  <div class="list-view">
    <div v-if="hasMemo">
      <ListItem
        v-for="(memo, index) in filterMemos"
        :memo="memo"
        v-bind:key="index"
        @remove="remove"
        @select="select"
      />
    </div>
    <div v-else>表示できるメモがありません。</div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  name: "ListView",
  props: {
    memos: Array,
    count: Number,
    sort: String
  },
  components: {
    ListItem,
  },
  computed: {
      hasMemo(){
          return this.filterMemos && this.filterMemos.length !==0
      },
      filterMemos(){
         
          let memos =this.memos.concat()
         
          if(this.sort){
              switch(this.sort){
              case 'latest' :
                  memos.reverse()
          }}
          if(this.count){
              //最新のメモ３つを切り取って返す
              memos= memos.splice(0, this.count)
          }
          return memos

      }
  },
  methods: {
      remove(id){
          this.$emit('remove', id)
      },
      select(id){
          this.$emit('select', id)
      }

  }
};
</script>

<style>
.list-view {
  border-top: 1px solid #ddd;
}

</style>