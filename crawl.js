import { urlToHttpOptions } from "url"
export {normalizeURL};
import { JSDOM } from 'jsdom'
export {getURLsFromHTML}

function normalizeURL(fullUrl) {
    const myUrl = new URL(fullUrl)
    const hostname = myUrl.hostname
    let pathname = myUrl.pathname
    pathname = pathname.replace(/\/$/, '');     // Remove trailing slash if present
    return `${hostname}${pathname}`

}


function getURLsFromHTML(htmlBody, baseURL) {
    const dom = new JSDOM(htmlBody);
    const anchors = dom.window.document.querySelectorAll('a');
    const urls = [];

    for (const anchor of anchors) {
        if (anchor.hasAttribute('href')) {
            let href = anchor.getAttribute('href')

            try {
                href = new URL(href, baseURL).href
                urls.push(href)
            } catch (error) {
                console.log(`${error.message}: ${href}`)
                
            }
        }
    }

    return urls


}


