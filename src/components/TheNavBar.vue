<template>
  <nav class="bg-black flex flex-row justify-center align-middle custom-height">
    <img src="../assets/metazillas-logo.png">
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavButton from '@/components/NavButton.vue';

export default defineComponent({
  components: { NavButton },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);

    const menu = [
      { name: '/', url: '/' },
      { name: 'FARM MANAGER', url: '/manager' },
      { name: 'FARMER', url: '/farmer' },
    ];

    return {
      menu,
      path,
    };
  },
});
</script>

<style scoped>
.active {
  @apply bg-white text-black;
}

.more {
  @apply px-10 py-3 text-white
  hover:bg-white hover:text-black;
  outline: none;
}

.custom-height{
  height: 80px;
  align-items: center;
  background: #191548;
}

</style>
