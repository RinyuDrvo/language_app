<template>
  <Dialog :isShowModal="value">
    <h1>Error</h1>
    <p>{{ errorMessage }}</p>
    <button @click="onClick">CLOSE</button>
  </Dialog>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import Dialog from "@/components/organisms/Dialog.vue";

@Component({
  components: {
    Dialog,
  },
})
export default class AuthErrorDialog extends Vue {
  @Prop({ required: true }) errorMessage!: string;
  @Prop({ required: true }) value!: boolean;

  @Emit("input") onClick() {
    return false;
  }
}
</script>
