import { shuffleArray } from "./shuffleArray";

export const choiceElement = function(num: number, list: string[]){
    const choices = new Set();
    while (choices.size < num){
        choices.add(Math.floor(Math.random() * list.length));
    }
    const ret = [];
    for (let i = 0; i < list.length; i++){
        if (choices.has(i)){
        ret.push(i);
        }
    }
    // ! attention ! indexを返す
    return shuffleArray(ret);
};