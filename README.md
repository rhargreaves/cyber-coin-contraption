# Cyber Coin Contraption [![Test & Deploy](https://github.com/rhargreaves/cyber-coin-contraption/workflows/Test%20&%20Deploy/badge.svg)](https://github.com/rhargreaves/cyber-coin-contraption/actions 'Build & Test')

Buys some of that internet money, bit-by-bit 💸 💸 💸

## Getting Started

### Environment

To run tests or run in sandbox mode, you can just set:

* `BUYER_CB_SANDBOX_API_KEY`
* `BUYER_CB_SANDBOX_API_SECRET`
* `BUYER_CB_SANDBOX_PASSPHRASE`
* `BUYER_CB_USE_SANDBOX=true`

Otherwise, to run for reals and spend **real money**:

* `BUYER_CB_API_KEY`
* `BUYER_CB_API_SECRET`
* `BUYER_CB_PASSPHRASE`
* `BUYER_CB_USE_SANDBOX=false`

### Testing

Tests are hardwired to run against the sandbox. They will never run against the production Coinbase API.

```sh
$ cd buyer
$ make test
```

### Run

Will run against the real or sandbox API as determined by `BUYER_CB_USE_SANDBOX`.

```sh
$ cd buyer
$ make run
```
