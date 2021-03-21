<template>
  <button
    @click.prevent="clickEvent"
    :style="{
      color: buttonStyle.color,
      backgroundColor: buttonStyle.backgroundColor,
    }"
    :disabled="isDisabled"
    class="base-button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export interface ButtonStyle {
  color: string;
  backgroundColor: string;
}

const defaultButtonStyle: ButtonStyle = {
  color: "white",
  backgroundColor: "#e4bad4",
};

@Component
export default class BaseButton extends Vue {
  // ボタンクリック時イベント
  @Prop({ required: true })
  clickEvent!: () => {};

  // disabled制御
  @Prop({ default: false })
  isDisabled!: boolean;

  // スタイル指定
  @Prop({ default: () => defaultButtonStyle })
  buttonStyle!: ButtonStyle;
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
