const fs = require('fs');
const readline = require('readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// link = './topic'
const readdir = (link) => new Promise((res, rej) => {
    fs.readdir(link, (err, data) => {
        if (err) {
            return rej('error...');
        }
        return res(data);
    })
})

const readFile = (link, code) => new Promise((res, rej) => {
    fs.readFile(link, code, (err, data) => {
        if (err) {
            rej('Ошибка...чтения');
        }
        res(data);
        return;
    })
})


async function codGotow() {
    const dataNames = await readdir('./topics');
    // console.log('Menu', dataNames);
    let num = await rl.question(`Выбери тему:\n 1-Эльбрус \n 2-Джава Скрипт\n 3-Школа\n 4-Черепашки\n`)

    let menuName = dataNames[num-1];     
    const status = await readFile(`./topics/${menuName}`, 'utf-8');
    let arr = status.split('\n').filter((item)=> {if (item !== '') return item});             

    let score = 0;
        
    for (let i=0; i < arr.length; i +=2) {
        let answer = await rl.question(`${arr[i]}\nОтвет: `)
        if (answer === arr[i+1]) {
            console.log('Правильно 🤙🏻+1\n')
            score +=1
        } else {
            console.log('Ошибочка 👎🏻-1')
            console.log(`Правильный ответ: ${arr[i+1]} \n`)
            score -=1
        }
    }
    console.log(`Ваш счет: `, score, `🎉`);
    rl.close();
}

codGotow()