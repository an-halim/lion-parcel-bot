const axios = require('axios');
const readLine = require('readline-sync');
const BOT = require('./BOT.js');
const chalk = require('chalk');



(async () => { 
    console.log(chalk.bgBlue('LION PARCEL AUTO REGISTER'))
    console.log(chalk.bgBlue('Developed by: @an-halim'))
    console.log(chalk.blue('--------------------------------'))

    let reffID = readLine.question('[?] Submit reffID: ');
    let jumlah = readLine.question('[?] Submit amount: ');
    let sleep = readLine.question('[?] Submit sleep (seconds): ');

    let bot = new BOT(reffID, jumlah, sleep);
    await bot.run();
 })();
