<template>
  <div class="nes-container with-title">
    <p class="title">{{ title }}</p>
    <div class="mb-2">Total accrued rewards: {{ (reward.accruedReward/1000000000).toFixed(3) }}</div>
    <div class="mb-2">Total claimed rewards: {{ (reward.paidOutReward/1000000000).toFixed(3) }}</div>
    <div v-if="parseRewardType(farmReward) === 'variable'">
      <div class="mb-2 w-full bg-black text-white">Variable reward:</div>
      <div class="mb-2">
        Last recorded accrued reward per gem:
        {{
          numeral(
            reward.variableRate.lastRecordedAccruedRewardPerGem.n / 10 ** 15
          ).format('0,0.0')
        }}
      </div>
    </div>
    <div v-else>
      
      <div class="mb-2">
        Staking begins: {{ parseDate(reward.fixedRate.beginStakingTs) }}
      </div>
      <div class="mb-2">
        Last updated: {{ parseDate(reward.fixedRate.lastUpdatedTs) }}
      </div>
     
      <div class="mb-2 bg-black text-white">Rewards: 20 MOSC / Zilla / day</div>
      <div class="mb-2 bg-black text-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FixedScheduleDisplay from '@/components/gem-farm/FixedScheduleDisplay.vue';
import { parseDate } from '@/common/util';
import numeral from 'numeral';

export default defineComponent({
  components: { FixedScheduleDisplay },
  props: {
    reward: Object,
    farmReward: Object,
    title: String,
  },
  setup() {
    const parseRewardType = (reward: any): string => {
      //returns "variable" or "fixed"
      return Object.keys(reward.rewardType)[0];
    };

    return {
      parseRewardType,
      parseDate,
      numeral,
    };
  },
});
</script>

<style scoped></style>
