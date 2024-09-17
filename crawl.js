import { urlToHttpOptions } from "url"
export {normalizeURL, getURLsFromHTML, crawlPage};
import { JSDOM } from 'jsdom'


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
                // convert any relative URLS to the absolute URLS
                href = new URL(href, baseURL).href
                urls.push(href)
            } catch (error) {
                console.log(`${error.message}: ${href}`)
                
            }
        }
    }

    return urls

}
async function crawlPage(currentURL) {
    console.log(`Crawling: ${currentURL}`)

   let response
    try {
        response = await fetch(currentURL)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            return
        }

        if (response.status > 399) {
            throw new Error(`Got an network error: ${response.status} ${response.statusText}`)
        }

        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('text/html')) {
            throw new Error(`Got non HTML response: ${contentType}`);
            return
            
        }
        
    } catch (error) {
        console.log(error.message);
    }

    console.log(await response.text());
    
}


