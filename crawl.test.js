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

  test('normalizeURL port', () => {
    const input = 'https://blog.boot.dev:8888'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
  })
import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";