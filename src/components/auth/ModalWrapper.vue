<template>
  <div v-if="isShown" class="modal__container">
    <div class="shadow"></div>
    <Auth
      v-on-clickaway="hide"
      v-if="modalName.auth"
      @close="$emit('close')"
      @change="change"
    />
    <Registry
      v-on-clickaway="hide"
      v-if="modalName.reg"
      @close="$emit('close')"
      @change="change"
    />
    <UserInfo
      v-on-clickaway="hide"
      v-if="modalName.userinfo"
      @close="$emit('close')"
      @change="change"
    />
    <LibraryForm
      v-on-clickaway="hide"
      v-if="modalName.libForm"
      @close="$emit('close')"
      @change="change"
    />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Auth from './Auth';
import Registry from './Registry';
import UserInfo from './UserInfo';
import LibraryForm from '../library/libraryForm.vue';

export default {
  name: 'ModalWrapper',
  components: { Auth, Registry, UserInfo, LibraryForm },
  mixins: [clickaway],
  model: {
    prop: 'isShown',
    event: 'show',
  },
  props: {
    isShown: { type: Boolean, default: false },
    // eslint-disable-next-line vue/require-default-prop
    modalName: Object,
  },
  methods: {
    hide() {
      this.$emit('show', false);
    },
    change(name) {
      this.$emit('change', name);
    },
  },
};
</script>

<style scoped></style>
