const state={
    memos:require('./memos.json')
}

const util ={
    findIndex(memos, id){
       return memos.findIndex((memo) => {
        return memo.id === id;
        })
    }
}


const mutations={
    nextId() {
        return (
          //memosの中のメモで一番大きいidに１を足した値を取得する。
          //reduce()は、配列の各要素に対して、関数を実行する。accumlatorは現在実行している要素までの累積値。初めは初期値が入る（ここでは０）
          //一番初めは配列が空のため、関数は実行されずに、returnで１が返却されている＝一番最初の状態のnextId。
          state.memos.reduce((accumulator, currentValue) => {
            return accumulator < currentValue.id ? currentValue.id : accumulator;
          }, 0) + 1
        );
      },
    addMemo(state,newMemo) {
      newMemo.id = mutations.nextId();
      state.memos.push(newMemo);
    },
    removeMemo(state,id) {
      const index = util.findIndex(state.memos, id)
      state.memos.splice(index, 1);
    },
    updateMemo(state,newData) {
      const id =newData.id;
      const index=util.findIndex(state.memos, id)
      state.memos.splice(index, 1,newData)
    },
  
}

export default {
    state,
    mutations
}