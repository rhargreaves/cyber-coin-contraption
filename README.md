# Cyber Coin Contraption [![Build & Test](https://github.com/rhargreaves/cyber-coin-contraption/workflows/Build%20&%20Test/badge.svg)](https://github.com/rhargreaves/cyber-coin-contraption/actions?query=workflow%3A%22Build+%26+Test%22 'Build & Test')

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

```sh
$ cd buyer
$ make test
```

### Run

```sh
$ cd buyer
$ make run
```
