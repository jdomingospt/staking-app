import { PublicKey } from '@solana/web3.js';

export const DEFAULTS = {
  CLUSTER: 'mainnet',
  //todo these need to be PER cluster
  GEM_BANK_PROG_ID: new PublicKey(
    '4bnFSnkQCBgFjDd5ThEMKfB8yjRLDngHwAPimpPPWCf3'
  ),
  GEM_FARM_PROG_ID: new PublicKey(
    '4J2G31qw9PJHq7jbRNVexBTPjuGUuZiTMvRmqrjw8YET'
  ),
};
