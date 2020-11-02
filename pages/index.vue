<template>
  <div>
    <li class="list-none" v-for="resource in resources" :key="resource.name">
      <span>{{ resource.icon }}</span>
      <span>{{ resource.amount }}</span>
      <button @click="increment(resource.name)" class="p-1 border rounded-lg">
        +
      </button>
    </li>
  </div>
</template>

<script>
export default {
  methods: {
    increment(resource) {
      this.$store.commit('incrementResource', resource)
      console.log('Resource incremented: ', resource)
    },
  },
  computed: {
    resources() {
      return this.$store.state.resources
    },
  },
}
</script>
