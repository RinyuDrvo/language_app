<template>
  <div class="language-add">
    <LanguageAddForm
      class="language-add__form"
      :languageAddEvent="addLanguage"
      v-model="language"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LanguageAddForm from "@/components/molecules/LanguageAddForm.vue";
import { LanguageModule } from "@/store/modules/LanguageStore";
import { ROUTER_NAMES } from "@/constants/routerNames";
import { Validation, ValidationErrors } from "@/utils/validationUtils";

@Component({
  components: {
    LanguageAddForm,
  },
})
export default class LanguageAdd extends Vue {
  /** エラーモーダル表示 */
  @Prop({ required: true })
  dialog!: (errorMessages: ValidationErrors) => Promise<unknown>;

  /** 追加する言語 */
  private language = "";

  /** バリデーションUtil */
  private validation = new Validation();

  mounted() {
    // バリデーション情報のリセット
    this.validation.reset();
  }

  /** バリデート */
  validate(): boolean {
    // 入力値の有無
    this.validation.emptyInput<string>(this.language);
    // 言語重複の有無
    this.validation.redundantLanguage(LanguageModule.languages, this.language);

    // エラー時モーダル表示
    if (this.validation.isErrors) {
      this.dialog(this.validation.validationErrors);

      // バリデーション情報のリセット
      this.validation.reset();

      return false;
    }

    return true;
  }

  /** 言語追加 */
  addLanguage() {
    // バリデーション実行
    if (!this.validate()) return;

    LanguageModule.add(this.language);
    this.$router.push({ name: ROUTER_NAMES.LANGUAGE_LIST });
  }
}
</script>

<style scoped lang="scss">
</style>
