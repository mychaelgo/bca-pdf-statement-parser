# BCA PDF statement parser

## Credit Card

Convert BCA Credit Card PDF to JSON array of transactions

### Limitation (Credit Card)

1. Can't get non IDR transactions

### How to use (Credit Card)

1. Put credit card statement in `data/credit-card`
   - 🚨 PDF file must be unencrypted (password protection must be removed!)
2. Take a look `example/cc.js`
3. Run `npm run example:cc`
4. You will see JSON output like this

```json
[
    {
        date: '10-SEP',
        description: 'WWW.SHOPEE.CO.I*512528924JAKARTA BARAT',
        amount: 58000
    },
    {
        date: '06-SEP',
        description: 'GRAB* A-5D3EM3MGWHP4     SOUTH JAKARTA',
        amount: 21000
    }
]
```

## E-statement

Known as `Mutasi rekening` in BCA internet banking

Convert BCA e-Statement PDF to JSON array of transactions

### Limitation (E-statement)

In development

### How to use (E-statement)

In Development
