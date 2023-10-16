import { encoded, translations } from './data.js'

const exceptions = ['groupId', 'service', 'formatSize', 'ca'];

function decode(encoded, listTranslations) {
    let uniqueIdSet = new Set();

    let decoded = encoded.map(item => {
        let newItem = { ...item };
        for (let key in item) {
            if (key.endsWith('Id')) {
                uniqueIdSet.add(key[key.length - 1]);
                if (exceptions.indexOf(key) === -1) {
                    newItem[key] = listTranslations[item[key]];
                }
            }
        }
        return newItem;
    });
    console.log(Array.from(uniqueIdSet));

    return decoded;
}

console.log("Let's rock")
console.log(encoded, translations)

let decoded = decode(encoded, translations);


console.log(decoded)
