<template>
  <div>
    <Signin />
  </div>
</template>

<script lang="ts">
import Signin from "@/components/Signin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Signin,
  },
})
export default class SigninView extends Vue {}
</script>
