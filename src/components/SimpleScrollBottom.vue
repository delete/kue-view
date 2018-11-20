<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SimpleScrollBottom',
  methods: {
    onScroll() {
      const {
        scrollTop,
        clientHeight,
        scrollHeight,
        offsetHeight,
      } = document.documentElement;
      const { scrollY, innerHeight } = window;

      const scrolledY = scrollY || scrollTop;
      const visible = clientHeight || innerHeight;
      const pageHeight = scrollHeight || offsetHeight;
      const bottomOfPage = visible + scrolledY >= pageHeight;

      if (bottomOfPage) {
        this.$emit('bottom');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  },
  destroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  },
};
</script>
