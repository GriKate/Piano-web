export default {
  data() {
    return {
      isShown: false,
      modals: {
        modal: false,
        auth: false,
        reg: false,
        userinfo: false,
        libForm: false,
      },
      modal: false,
    };
  },
  watch: {
    isShown() {
      this.$emit('shown', this.isShown);
    },
  },
  methods: {
    show(name) {
      this.isShown = true;
      this.change(name);
    },
    close() {
      this.isShown = false;
    },
    change(name) {
      for (const a in this.modals) {
        this.modals[a] = false;
        if (a === name) {
          this.modals[a] = true;
        }
      }
    },
  },
};
