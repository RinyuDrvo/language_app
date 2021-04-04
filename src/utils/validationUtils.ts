import { Language, Languages } from "@/models/LanguageModel";

export type ValidationError = string;
export type ValidationErrors = ValidationError[];

export class Validation {
  private _validationErrors: ValidationErrors;

  constructor(initValidationErrors?: ValidationErrors) {
    this._validationErrors = initValidationErrors || [];
  }

  /**
   * バリデーションエラーの初期化
   */
  public reset(): void {
    this._validationErrors = [];
  }

  /**
   * エラーの有無
   * @return {boolean}
   */
  public get isErrors(): boolean {
    return 0 < this._validationErrors.length;
  }

  /**
   * エラーを取得
   * @return {ValidationErrors}
   */
  public get validationErrors(): ValidationErrors {
    return this._validationErrors;
  }

  /**
   * エラーを追加
   * @param {ValidationError}
   */
  private addError(validationError: ValidationError) {
    this._validationErrors.push(validationError);
  }

  /**
   * 入力内容の有無
   * @param {T} input - 入力値
   */
  public emptyInput<T>(input?: T) {
    if (!input) this.addError('Empty input');
  }

  /**
   * 言語重複の有無
   * @param {Languages} existLanguages - 既存に登録されている言語
   * @param {Language} addLanguage - 新たに登録する言語
   */
  public redundantLanguage(existLanguages: Languages, addLanguage: Language) {
    const isRedundant = existLanguages.includes(addLanguage);
    if (isRedundant) this.addError('Redundant language');
  }
}
