<template>
  <div class="home">
    <Home />
  </div>
</template>

<script lang="ts">
import Home from "@/components/Home.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home,
  },
})
export default class HomeView extends Vue {}
</script>
