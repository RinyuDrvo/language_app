import { Module, VuexModule, Mutation, Action, getModule, config } from 'vuex-module-decorators';
import * as Firebase from '@/service/FirebaseService';
import store from '@/store';
import { RegistParams, LoginParams } from '@/models/UserModel';

config.rawError = true;

@Module({ dynamic: true, store: store, name: 'AuthModule', namespaced: true })
class Auth extends VuexModule {
  user = ''

  @Mutation
  setUser(user: string) {
    this.user = user;
  }

  @Action
  async signUp(params: RegistParams) {
    return await Firebase.signUp(params.email, params.password)
      .then((userCredential) => {
        const setParam = userCredential.user?.email || '';
        this.setUser(setParam);
      })
  }

  @Action
  async signIn(params: LoginParams) {
    return await Firebase.signIn(params.email, params.password)
      .then((userCredential) => {
        const setParam = userCredential.user?.email || '';
        this.setUser(setParam);
      })
  }

}

export const AuthModule = getModule(Auth);
