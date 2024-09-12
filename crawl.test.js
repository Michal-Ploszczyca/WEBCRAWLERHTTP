test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path/torrents')).toBe('blog.boot.dev/path/torrents');
});

test('cheks if normalized url is: blog.boot.dev/path', () => {
    expect(normalizeURL('http://blog.boot.dev/path/torrents/')).toBe('blog.boot.dev/path/torrents');
});

import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";