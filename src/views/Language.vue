<template>
  <div class="home">
    <Language />
  </div>
</template>

<script lang="ts">
import Language from "@/components/pages/Language.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Language,
  },
})
export default class LanguageView extends Vue {}
</script>
