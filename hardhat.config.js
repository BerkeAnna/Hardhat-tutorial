const GANACHE_PRIVATE_KEY = "0x06e3c3660325e7ea92a56a4c2aaa8f94f6d5e2a31760a58ffe24ca352c088c1f";

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [GANACHE_PRIVATE_KEY], // Privát kulcs tömbként megadva
    },
  },
};
