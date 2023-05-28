<template>
  <slideout-panel v-model="isShown">
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Sign up" active>
        <h3 class="p-4 sign-title">Create Your Account</h3>
        <div>
          <b-row class="justify-content-center socials">
            <b-col bc>
              <b-img
                :src="require('@/assets/icloud.png')"
                alt="icloud"
                class="soc"
              />
              <b-img
                :src="require('@/assets/facebook.png')"
                alt="icloud"
                class="soc p-4"
              />
              <b-img
                :src="require('@/assets/google.png')"
                alt="icloud"
                class="soc"
              />
            </b-col>
          </b-row>
        </div>
        <b-container>
          <b-row align-h="center">
            <b-col cols="6" class="login-form">
              <b-form>
                <b-form-group
                  id="input-username-group"
                  label-align="left"
                  label="Username"
                  label-for="input-username"
                >
                  <b-form-input
                    id="input-username"
                    type="text"
                    placeholder="Enter username"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-email-gtoup"
                  label-align="left"
                  label="Email"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    type="email"
                    placeholder="Email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-pass"
                  label-align="left"
                  label="Password"
                  label-for="input-pass"
                >
                  <b-form-input
                    id="input-pass"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="pt-30"
                  >Sign up</b-button
                >
              </b-form>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="Sign in">
        <h3 class="p-4 sign-title">Welcome back</h3>
        <b-container>
          <b-row align-h="center">
            <b-col cols="6" class="login-form">
              <b-form>
                <b-form-group
                  id="input-email-gtoup"
                  label-align="left"
                  label="Email"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    type="email"
                    placeholder="Email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-pass"
                  label-align="left"
                  label="Password"
                  label-for="input-pass"
                >
                  <b-form-input
                    id="input-pass"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="pt-30">
                  Sign up</b-button
                >
              </b-form>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </slideout-panel>
</template>

<script>
import tabMixin from '@/mixins/tabMixin';

export default {
  name: 'Login',
  mixins: [tabMixin],
};
</script>

<style scoped></style>
