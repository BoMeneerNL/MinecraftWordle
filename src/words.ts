//IGORE: FILE WILL BE CREATED BY THE BUILD PROCESS
//@ts-ignore-next-line
import output from '../public/output.json';

type OutputItem = { date: string; word: string };

export  function getTodayWord() {
    //read public/output.json
    const date = new Date().toISOString().split('T')[0];
    //check if date is in output.json
    const dateInOutput = (output as OutputItem[]).find((item) => item.date === date);
console.log(dateInOutput);
console.log(date);
    // You can return the word or handle undefined if not found
    return dateInOutput?.word;
}
export function getAllWords() {
    //read public/output.json
    const allWords = (output as OutputItem[]).map((item) => item.word);
    return allWords;
}