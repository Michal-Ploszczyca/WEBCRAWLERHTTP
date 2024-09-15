import {argv, exit} from 'node:process';
import * as readline from 'node:readline'


function main() {
    if (process.argv.length < 3) {
        console.log('No website provided.')
        exit()
    };
    if (process.argv.length > 3) {
        console.log(`The number of CLI arguments is more than 1`)
        exit()
    }

    const baseURL = process.argv[2]

    console.log(`Starting crawl of: ${baseURL}`);

}


main()

