const pdfFilePath = './data/credit-card/cc-sample.pdf';
const cc = require('../src/credit_card');

(async () => {
    const text = await cc.extractBCACreditCardStatement(pdfFilePath);
    console.log(text);
})();