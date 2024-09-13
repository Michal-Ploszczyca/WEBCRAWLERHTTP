test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('normalize URL extra slash', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('normalize URL standard path', () => {
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('normalize URL extra paths', () => {
    expect(normalizeURL('http://blog.boot.dev/path/torrents')).toBe('blog.boot.dev/path/torrents');
});

test('normalizeURL hash query', () => {
    expect(normalizeURL('https://nodejs.org/api/url.html#urlhostname')).toBe('nodejs.org/api/url.html');
});

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })

  test('normalizeURL http', () => {
    const input = 'http://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })

  test('normalizeURL protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  })

  test('getURLsFromHTML ', () => {
    const inputBody = '<a href="/path"><span>Go to Boot.dev</span></a>'
    const inputBaseURL =  'https://boot.dev'
    const actual = getURLsFromHTML(inputBody, inputBaseURL)
    const expected = ["https://boot.dev/path"]
    expect(actual).toEqual(expected)
  })

  test('getURLsFromHTML absolute', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = [ 'https://blog.boot.dev/' ]
    expect(actual).toEqual(expected)
  })

test('get URLsFromHTML relative', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
    const actual  =getURLsFromHTML(inputBody, inputURL)
    const expected = ['https://blog.boot.dev/path/one']
    expect(actual).toEqual(expected)
})

test('get URLsFromHTML both', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
    const actual  =getURLsFromHTML(inputBody, inputURL)
    const expected = ['https://blog.boot.dev/path/one', 'https://other.com/path/one']
    expect(actual).toEqual(expected)
})

import { test, expect } from "@jest/globals";
import { getURLsFromHTML, normalizeURL } from "./crawl.js";
import { JSDOM } from 'jsdom'
