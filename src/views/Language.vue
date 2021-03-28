<template>
  <div class="home">
    <Home />
  </div>
</template>

<script lang="ts">
import Home from "@/components/pages/Home.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home,
  },
})
export default class LanguageView extends Vue {}
</script>
