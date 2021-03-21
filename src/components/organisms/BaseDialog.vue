<template>
  <dialog id="dialog">
    <slot />
  </dialog>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  get dialog(): HTMLDialogElement {
    return document.getElementById("dialog") as HTMLDialogElement;
  }

  @Prop({ required: true }) isShowModal!: boolean;

  @Watch("isShowModal")
  onChangeShowStatus(newVal: boolean) {
    newVal ? this.dialog.showModal() : this.dialog.close();
  }
}
</script>
