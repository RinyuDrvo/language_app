<template>
  <div class="language-list">
    <h1 class="language-list__title">LANGUAGE LIST</h1>
    <li
      v-for="language in languages"
      :key="language"
      class="language-list__item"
    >
      {{ language }}
      <BaseButton
        :clickEvent="() => onClickDelete(language)"
        :buttonStyle="deleteButtonStyle"
        class="language-list__item--button"
        >DELETE</BaseButton
      >
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton, { ButtonStyle } from "@/components/atoms/BaseButton.vue";
import { LanguageModule } from "@/store/modules/LanguageStore";
import { COLORS } from "@/constants/colors";

@Component({
  components: {
    BaseButton,
  },
})
export default class LanguageList extends Vue {
  // 言語ストアから初期化
  languages = LanguageModule.languages;

  deleteButtonStyle: ButtonStyle = {
    color: COLORS.GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
  };

  /** 削除ボタン */
  onClickDelete(language: string) {
    // 削除アクション
    LanguageModule.delete(language);
    // 言語リスト更新
    this.languages = LanguageModule.languages;
  }
}
</script>

<style scoped lang="scss">
.language-list {
  padding: 1rem 10rem;
  width: 30rem;
  &__item {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
}
</style>
