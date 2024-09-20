// function to print a rpeort of the pages object
function printReport(pages) {
    console.log(`Report is starting...`);
    const sortedPages = sortPages(pages);
    for (const [url, count] of sortedPages) {
        console.log(`Found ${count} internal links to ${url}`);
    }  
}

// Function to sort pages by the number of inbound links (descending)
function sortPages(pages) {
    const pagesArray = Object.entries(pages); // Converts Obj to array [url, count]
    return pagesArray.sort((a, b) => b[1] -a[1]);

}

export {printReport, sortPages};