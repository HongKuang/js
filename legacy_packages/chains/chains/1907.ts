import type { Chain } from "../src/types";
export default {
  "chain": "BITCI",
  "chainId": 1907,
  "explorers": [
    {
      "name": "Bitci Explorer",
      "url": "https://bitciexplorer.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.bitcichain.com",
  "name": "Bitcichain Mainnet",
  "nativeCurrency": {
    "name": "Bitci",
    "symbol": "BITCI",
    "decimals": 18
  },
  "networkId": 1907,
  "rpc": [
    "https://1907.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.bitci.com"
  ],
  "shortName": "bitci",
  "slug": "bitcichain",
  "testnet": false
} as const satisfies Chain;