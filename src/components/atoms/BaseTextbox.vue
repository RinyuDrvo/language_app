<template>
  <input
    class="base-textbox"
    :value="value"
    :type="inputType"
    :placeholder="placeholder"
    :id="id"
    :size="inputSize"
    :maxlength="maxLength"
    @input="updateValue"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseTextbox extends Vue {
  private value = "";

  /** 入力タイプ指定 */
  @Prop({ default: "text" })
  inputType!: string;

  /** プレースホルダー */
  @Prop({ default: "" })
  placeholder!: string;

  /** サイズ */
  @Prop({ required: true })
  inputSize!: number;

  /** 最大文字数 */
  @Prop({ default: 20 })
  maxLength!: number;

  /** labelとの連携id */
  @Prop({ required: true })
  id!: string;

  /** 入力イベント伝達 */
  private updateValue(event: Event) {
    // イベントがInputイベント以外のものであれば逃す
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    this.$emit("input", target.value);
  }
}
</script>

<style lang="scss" scoped>
$dark-cherry: #e4bad4;
$light-cherry: #f6daeb;

.base-textbox {
  padding: 0.2rem;
  border-radius: 5px;
  border: 2px solid $light-cherry;
  box-shadow: 0 0 5px 0.5px $light-cherry inset;
}

.base-textbox:focus {
  border: 2px solid $dark-cherry;
  outline: 0;
}
</style>
