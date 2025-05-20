const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, 'input.json');
const outputFilePath = path.join(__dirname, 'public', 'output.json');
const inputData = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));
const shuffledData = inputData.sort(() => Math.random() - 0.5);
const startDate = new Date();

const outputData = shuffledData.map((item, index) => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + index);
  return {
    word: (typeof item === 'string' ? item : item.word).toLowerCase(), // adjust if input is array of strings or objects
    date: date.toISOString().split('T')[0]
  };
});

fs.writeFileSync(outputFilePath, JSON.stringify(outputData, null, 2), 'utf8');
