import {argv, exit} from 'node:process';
import * as readline from 'node:readline'
import { crawlPage } from './crawl.js';
import { printReport } from './report.js';

async function main() {
    if (process.argv.length < 3) {
        console.log('No website provided.')
        exit()
    };
    if (process.argv.length > 3) {
        console.log(`The number of CLI arguments is more than 1`)
        exit()
    }

    const baseURL = process.argv[2]

    console.log(`starting crawl of: ${baseURL}`);
    const pages = await crawlPage(baseURL)
    printReport(pages)



}


main()

