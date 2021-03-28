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

@Component({
  components: {
    BaseButton,
  },
})
export default class LanguageList extends Vue {
  languages = ["C", "Java", "PHP", "Ruby"];

  deleteButtonStyle: ButtonStyle = {
    color: "gray",
    backgroundColor: "#ddd",
  };

  /** 削除ボタン */
  onClickDelete(item: string) {
    this.languages = this.languages.filter((language) => {
      return language !== item;
    });
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
