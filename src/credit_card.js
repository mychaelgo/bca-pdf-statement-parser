const fs = require('fs');;
const pdf = require('pdf-parse');

// Function to extract text from a PDF file
async function extractTextFromPDF(pdfFilePath) {
    try {
        const dataBuffer = fs.readFileSync(pdfFilePath);
        const data = await pdf(dataBuffer);

        return data.text;
    } catch (error) {
        console.error('Error reading PDF:', error);
        throw error;
    }
}

const convertTextToTransaction = (text) => {
    // Define regular expressions for extracting transaction data
    const transactionRegex = /(\d{2}-[A-Z]{3})(\d{2}-[A-Z]{3})([A-Z\s].+)(ID)([0-9,.]+)$/gm;

    // Initialize an array to store the extracted transactions
    const transactions = [];

    // Match and extract transaction data from the text
    let match;
    while ((match = transactionRegex.exec(text)) !== null) {
        const date = match[1];
        const description = match[3].trim();
        const amount = parseFloat(match[5].replace(/\./g, ''));


        // Create a transaction object and push it to the transactions array
        const transaction = {
            date,
            description,
            amount,
        };

        transactions.push(transaction);
    }

    return transactions;
};

const extractBCACreditCardStatement = async (pdfFilePath) => {
    const text = await extractTextFromPDF(pdfFilePath);
    const transactions = convertTextToTransaction(text);
    return transactions;
};

module.exports = {
    extractBCACreditCardStatement,
};