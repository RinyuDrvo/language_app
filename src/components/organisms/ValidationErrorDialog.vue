<template>
  <Dialog :isShowModal="value">
    <h1>Validation Error</h1>
    <p v-for="errorMessage in errorMessages" :key="errorMessage">
      {{ errorMessage }}
    </p>
    <button @click="onClick">CLOSE</button>
  </Dialog>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import Dialog from "@/components/organisms/BaseDialog.vue";

@Component({
  components: {
    Dialog,
  },
})
export default class ValidationErrorDialog extends Vue {
  @Prop({ required: true }) errorMessages!: string[];
  @Prop({ required: true }) value!: boolean;

  @Emit("input") onClick() {
    return false;
  }
}
</script>
