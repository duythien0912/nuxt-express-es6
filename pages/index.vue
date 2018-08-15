{{{{raw}}}}
<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
{{{{/raw}}}}

<script>
import axios from '~/plugins/axios'
export default {
  async asyncData ({ error }) {
    const dataaxios = await axios
      .get('/api/users')
      .catch(e => {
        console.log(e)
        error({
          statusCode: 404,
          message: 'Post not found'
        })
      })
    console.log(dataaxios)
    return {
      users: dataaxios ? dataaxios.data : []
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
</style>
