<template>
  <div class="editor-view">
    <div v-if="memo">
      <label>ID:</label><input v-model="input.id" disabled />
    </div>
    <div>
      <label>内容：</label>
      <input v-model="input.text" placeholder="メモのタイトル" />
    </div>
    <div>
      <label>日付：</label>
      <input type="date" v-model="input.date" />
    </div>
    <div>
      <label>タグ：</label>
      <input v-model="input.tags" placeholder="空白区切りで指定" />
    </div>
    <div>
      <button @click="cancel" v-if="memo">戻る</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditorView",
  created() {
    this.setMemo();
  },
  props: {
    memo: Object,
  },
  data: function () {
    return {
      input: {
        text: "",
        date: "",
        tags: "",
      },
    };
  },

  computed: {
    tagsArr() {
      // input.tags の文字列を空白で区切って配列に変換する
      return this.input.tags.trim() !== ""
        ? this.input.tags.trim().split(/\s+/)
        : [];
    },
  },
  watch: {
    //memoが更新されるたびにsetMemo()を実行
    memo: "setMemo",
  },
  methods: {
    save() {
      // this.input のクローンを生成する
      const data = Object.assign({}, this.input, { tags: this.tagsArr });
      // 'add'イベントを自身にトリガーする
      this.$emit("add", data);
    },
    setMemo() {
      if (this.memo) {
        //this.inputをthis.memoで上書きする
        Object.assign(this.input, this.memo, {
          tags: this.memo.tags.join(""),
        });
      }
    },
    cancel(){
        this.$emit('cancel')
    }
  },
};
</script>
<style scoped>
input:disabled{
    border-color: transparent;
}
.editor-view {
  flex-grow: 1;
  border-radius: 2px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 10px;
}

.editor-view > div {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  background-color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.editor-view > div label {
  color: #555;
  font-size: 11px;
  min-width: 35px;
  text-align: right;
}
.editor-view > div input {
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px 5px;
  outline-offset: -4px;
  outline-width: 1px;
  border: 1px solid #b3b3b3;
}
.editor-view > div:last-of-type {
  justify-content: flex-end;
  padding: 5px 0 0;
}
.editor-view button {
  margin-left: 10px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  border: none;
  width: 100px;
  line-height: 30px;
}
</style>