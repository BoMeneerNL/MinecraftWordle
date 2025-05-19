//IGORE: FILE WILL BE CREATED BY THE BUILD PROCESS
//@ts-ignore-next-line
import output from '../public/output.json';

type OutputItem = { date: string; word: string };

export default function getTodayWord() {
    //read public/output.json
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = `${year}-${month}-${day}`;
    //check if date is in output.json
    const dateInOutput = (output as OutputItem[]).find((item) => item.date === date);

    // You can return the word or handle undefined if not found
    return dateInOutput?.word;
}