<template>
  <div class="nes-container with-title">
    <p class="title">{{ title }}</p>
    <div class="mb-2">
      Type:
      <p class="inline-block bg-yellow-200">{{ parseRewardType(reward) }}</p>
    </div>
    <div class="mb-2">Mint: {{ parseRewardMint(reward) }}</div>

    <!--config-->
    <div class="mb-2 w-full bg-black text-white">Config:</div>
    <div v-if="parseRewardType(reward) === 'variable'">
      <div class="mb-2">
        Reward rate:
        {{
          numeral(reward.variableRate.rewardRate.n / 10 ** 15).format('0,0.0')
        }}
        tokens/s
      </div>
      <div class="mb-2">
        Accrued reward/gem:
        {{
          numeral(reward.variableRate.accruedRewardPerGem.n / 10 ** 15).format(
            '0,0.0'
          )
        }}
      </div>
      <div class="mb-2">
        Reward last updated:
        {{ parseDate(reward.variableRate.rewardLastUpdatedTs) }}
      </div>
      <div class="mb-2"></div>
    </div>
    <div v-else>
      <div class="mb-2">
        Reserved amount: {{ (reward.fixedRate.reservedAmount/ 1000000000).toFixed(3) }}
        <FixedScheduleDisplay :schedule="reward.fixedRate.schedule" />
      </div>
    </div>

    <!--funds-->
    <div class="mb-2 w-full bg-black text-white">Funds:</div>
    <div class="mb-2">Funded: {{ (reward.funds.totalFunded / 1000000000).toFixed(3) }}</div>
    <div class="mb-2">Refunded: {{ (reward.funds.totalRefunded / 1000000000).toFixed(3) }}</div>
    <div class="mb-2">Accrued: {{ (reward.funds.totalAccruedToStakers / 1000000000).toFixed(3) }}</div>

    <!--times-->
    <div class="mb-2 w-full bg-black text-white">Times:</div>
    <div class="mb-2">Duration: {{ reward.times.durationSec }} sec</div>
    <div class="mb-2">
      Reward end: {{ parseDate(reward.times.rewardEndTs) }}
    </div>
    <div class="mb-2">Lock end: {{ parseDate(reward.times.lockEndTs) }}</div>
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
    title: String,
  },
  setup() {
    // todo ideally should be using one from client, but n/a during render
    const parseRewardType = (reward: any): string => {
      //returns "variable" or "fixed"
      return Object.keys(reward.rewardType)[0];
    };

    const parseRewardConfig = (reward: any) => {
      const type = parseRewardType(reward);
      if (type === 'variable') {
        return reward.variableRate;
      } else {
        return reward.fixedRate;
      }
    };

    const parseRewardMint = (reward?: any) => {
      return `${reward.rewardMint.toBase58().substr(0, 10)}...`;
    };

    return {
      parseRewardType,
      parseRewardConfig,
      parseRewardMint,
      parseDate,
      numeral,
    };
  },
});
</script>

<style scoped></style>
