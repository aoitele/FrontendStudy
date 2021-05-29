<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / clone or fork this tasks,<br>
      check out the
      <a href="https://github.com/aoitele/FrontendStudy/tree/main/3_vueApp" target="_blank" rel="noopener">github repo</a>.
    </p>
    <h3>Pages / doc</h3>
    <ul>
      <li>
        <a href="/favorite-recipes">Favorite Recipes</a> / 
        <a href="https://github.com/aoitele/FrontendStudy/tree/main/3_vueApp" target="_blank" rel="noopener">readme</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
