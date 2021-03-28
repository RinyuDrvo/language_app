import { Module, VuexModule, Mutation, Action, getModule, config } from 'vuex-module-decorators';
import store from '@/store';

config.rawError = true;

@Module({ dynamic: true, store: store, name: 'LanguageModule', namespaced: true })
class Language extends VuexModule {
  private _languages: string[] = ["C", "Java", "PHP", "Ruby", "Python"];

  @Mutation
  set(setLanguage: string) {
    this._languages.push(setLanguage);
  }

  @Mutation
  remove(deleteLanguage: string) {
    this._languages = this._languages.filter((language) => {
      return language !== deleteLanguage;
    })
  }

  /**
   * add action
   * @param {string} language
   */
  @Action
  async add(language: string) {
    this.set(language);
  }

  /**
   * delete action
   * @param {string} language
   */
  @Action
  async delete(language: string) {
    this.remove(language);
  }

  get languages() {
    return this._languages;
  }
}

export const LanguageModule = getModule(Language);
