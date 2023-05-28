<template>
  <slideout-panel v-model="isShown"> Premium tab content.... </slideout-panel>
</template>

<script>
import tabMixin from '@/mixins/tabMixin';

export default {
  name: 'Premium',
  mixins: [tabMixin],
};
</script>

<style scoped></style>
