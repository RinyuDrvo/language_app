<template>
  <form class="language-add-form">
    <label for="language" class="language-add-form__label">language</label>
    <BaseTextbox
      class="language-add-form__textbox"
      id="language"
      v-model="language"
      :inputType="'text'"
      :inputSize="20"
      :maxLength="20"
    />
    <BaseButton :clickEvent="onClickAdd" class="language-add-form__button"
      >ADD</BaseButton
    >
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import BaseButton from "@/components/atoms/BaseButton.vue";
import BaseTextbox from "@/components/atoms/BaseTextbox.vue";

@Component({
  components: {
    BaseTextbox,
    BaseButton,
  },
})
export default class LanugageAddForm extends Vue {
  private language = "";

  /** 言語登録クリックイベント */
  @Prop({ required: true })
  languageAddEvent!: () => Promise<unknown>;

  /** クリックイベントで親コンポーネントに入力情報を渡す */
  private onClickAdd() {
    this.languageAddEvent();
  }

  /** フォーム入力情報の更新 */
  private updateValue() {
    this.$emit("input", this.language);
  }

  /** 子コンポーネント入力の検知 */
  @Watch("language", { immediate: true, deep: true })
  onChangeForm() {
    this.updateValue();
  }
}
</script>

<style lang="scss" scoped>
.language-add-form {
  padding: 1rem 10rem;
  width: 30rem;

  &__label {
    display: block;
    color: gray;
  }

  &__textbox {
    margin-bottom: 1rem;
  }

  &__button {
    margin-left: 1rem;
  }
}
</style>
