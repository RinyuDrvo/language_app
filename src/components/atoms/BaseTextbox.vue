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

  // 入力タイプ指定
  @Prop({ default: "text" })
  inputType!: string;

  // プレースホルダー
  @Prop({ default: "" })
  placeholder!: string;

  // サイズ指定
  @Prop({ required: true })
  inputSize!: number;

  // 最大文字数指定
  @Prop({ default: 20 })
  maxLength!: number;

  // labelとの連携id指定
  @Prop({ required: true })
  id!: string;

  private updateValue(event: Event) {
    // イベントがInputイベント以外のものであれば逃す
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    this.$emit("input", target.value);
  }
}
</script>

<style lang="scss" scoped>
.base-textbox {
  padding: 0.2rem;
  border-radius: 5px;
  border: 2px solid #f6daeb;
  box-shadow: 0 0 5px 0.5px #f6daeb inset;
}

.base-textbox:focus {
  border: 2px solid #e4bad4;
  outline: 0;
}
</style>
