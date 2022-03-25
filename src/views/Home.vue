<template>
  <div class="nes-container with-title mb-10">
    <p class="title">Welcome to Metazillas Farm</p>
    <p>
      Please select the options that suits you.
    </p>
  </div>
  <div class="flex flex-row">
  <div class="nes-container with-title flex-1 mr-5">
      <p class="title">New MOSC Farm</p>
      <p class="mb-5">
        Choose this if you'd like to start staking your Zillas and win $MOSC!
      </p>
      <router-link to="farmer">
        <button class="nes-btn is-primary">$MOSC Farm</button>
      </router-link>
    </div>
    <div class="nes-container with-title flex-1 ml-5">
      <p class="title">Old NCLR Farm</p>
      <p class="mb-5">
        Choose this if you have zillas staked or tokens to claim in the old NCLR farm.
      </p>
      <router-link to="old-farmer">
        <button class="nes-btn is-primary">$NCLR Farm</button>
      </router-link>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
