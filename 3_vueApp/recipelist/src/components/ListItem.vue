<template>
  <div class="list-item" @click="select(memo.id)">
    <div>
      <span>id</span>:
      <span>{{ memo.id }}</span>
    </div>
    <div>
      <span>text</span>:
      <span>{{ memo.text }}</span>
    </div>
    <div>
      <span>date</span>:
      <span>{{ memo.date }}</span>
    </div>
    <div>
      <span>tags</span>:
      <span>
        <span v-for="(tag, index) in memo.tags" v-bind:key="index">{{
          tag
        }}</span>
      </span>
    </div>
    <div>
      <button @click="remove(memo.id)">削除</button>
    </div>
  </div>
</template>
  
 <script>
export default {
  name: "ListItem",
  props: {
    memo: Object,
  },
  methods: {
      remove(id){
          this.$emit('remove', id)
      },
      select(id){
        this.$emit('select',id)
      }
  }
};
</script>
<style>
.list-item {
  position: relative;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
}

.list-item:nth-of-type(2n + 1) {
  background-color: #f6f6f6;
}

.list-item > div > span:nth-of-type(1) {
  display: inline-block;
  min-width: 26px;
}

.list-item > div span:nth-of-type(2) span {
  font-size: 10px;
  background-color: #555;
  color: #fff;
  padding: 3px 5px;
  position: relative;
  margin-right: 5px;
}

.list-item > div:nth-of-type(5) button {
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: tomato;
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
}
.list-item:hover > div:nth-of-type(5) button {
  display: block;
}
</style>