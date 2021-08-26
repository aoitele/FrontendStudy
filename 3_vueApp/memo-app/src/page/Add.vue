<template>
  <div>
    <EditorView @add="add" />
  </div>
</template>
<script>
import EditorView from "../components/EditorView.vue";

export default {
  components: { EditorView },
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  methods: {
    add(data){
        console.log(data)
      this.$store.commit("addMemo", data);
      this.$router.push({ name: "items" });
    },
  },
};
</script>
