<template>
  <div>
    <ListView :memos="sharedState.memos" @remove="remove" @select="select" />
    <router-view
      class="layout-items-right"
      :memo="selectMemo"
      @add="update"
      @cancel="cancel"
    ></router-view>
  </div>
</template>
<script>
import ListView from "../components/ListView";

export default {
  components: {
    ListView,
  },
  methods: {
    remove(id) {
      this.$store.commit("removeMemo", id);
    },
    select(id) {
      this.$router.push({ name: "edit", params: { id } });
    },
    update(data) {
      this.$store.commit("updateMemo", data);
      this.$router.push({ name: "items" });
    },
    cancel() {
      this.$router.push({ name: "items" });
    },
  },
  computed: {
    //選択したメモをmemosの中から探して返す
    sharedState() {
      return this.$store.state;
    },
    selectMemo() {
      let memo;
      if (this.$route.params.id !== undefined) {
        const { id } = this.$route.params;

        memo = this.sharedState.memos.find((memo) => {
          return memo.id === id;
        });
      }

      return memo;
    },
  },
};
</script>
<style scoped lang="scss">
.layout-items {
  display: flex;
  &-left {
    flex-grow: 1;
    overflow: scroll;
  }
  &-right {
    border-left: 1px solid #bbb;
  }
}
</style>