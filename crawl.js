import { urlToHttpOptions } from "url"

function normalizeURL(fullUrl) {
    const myUrl = new URL(fullUrl)
    const hostname = myUrl.hostname
    let pathname = myUrl.pathname
    pathname = pathname.replace(/\/$/, '');     // Remove trailing slash if present
    return `${hostname}${pathname}`

}


export {normalizeURL};


