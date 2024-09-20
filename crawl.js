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

async function fetchAndParseHTML(url) {
    let response
    try {
        response = await fetch(url)

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

        return await response.text(); // Return HTML body
        
    } catch (error) {
        console.log(error.message);
        return null; // Return null in case of errror
    }

}


async function crawlPage(baseURL, currentURL = baseURL, pages = {}) {
    console.log(`Crawling: ${currentURL}`)
    if (new URL(currentURL).hostname !== new URL(baseURL).hostname) {
        return pages;
    }

    const normalizedURL = normalizeURL(currentURL);

    if (pages[normalizedURL]) {
        pages[normalizedURL]++;
        return pages;
    }

    pages[normalizedURL] = 1;

    const htmlBody = await fetchAndParseHTML(currentURL); // Await result of fetch API
    if (!htmlBody) return pages;
    
    const foundURLs = getURLsFromHTML(htmlBody, baseURL); // pass base url if needed for relative urls
    
    for (const url of foundURLs) {
        pages = await crawlPage(baseURL, url, pages); // Recursively crawl each found URL
    }

    // console.log(pages);
    return pages;
}


