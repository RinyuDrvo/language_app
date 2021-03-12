<template>
  <div>
    <Signup />
  </div>
</template>

<script lang="ts">
import Signup from "@/components/pages/Signup.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Signup,
  },
})
export default class SignupView extends Vue {}
</script>
