<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
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
            <router-link to="/favorite">Favorite Recipes</router-link> / 
            <a href="https://github.com/aoitele/FrontendStudy/tree/main/3_vueApp" target="_blank" rel="noopener">readme</a>
            </li>
        </ul>
        </div>
    </div>
</template>

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