import { Module, VuexModule, Mutation, Action, getModule, config } from 'vuex-module-decorators';
import store from '@/store';
import { Language, Languages } from "@/models/LanguageModel";

config.rawError = true;

@Module({ dynamic: true, store: store, name: 'LanguageModule', namespaced: true })
class LanguageStore extends VuexModule {
  private _languages: Languages = [];

  /**
   * set mutation
   * @param {Language} setLanguage
   */
  @Mutation
  set(setLanguage: Language) {
    this._languages.push(setLanguage);
  }

  /**
   * remove mutation
   * @param {Language} deleteLanguage
   */
  @Mutation
  remove(deleteLanguage: Language) {
    this._languages = this._languages.filter((language) => {
      return language !== deleteLanguage;
    })
  }

  /**
   * add action
   * @param {Language} language
   */
  @Action
  async add(language: Language) {
    this.set(language);
  }

  /**
   * delete action
   * @param {Language} language
   */
  @Action
  async delete(language: Language) {
    this.remove(language);
  }

  get languages() {
    return this._languages;
  }
}

export const LanguageModule = getModule(LanguageStore);
