---
sidebar_label: 'Further Documentation'
sidebar_position: 2
---

# Further Documentation

`// highlight-next-line` and `// highlight-start` etc. are called "magic comments", because they will be parsed and removed, and their purposes are to add metadata to the next line, or the section that the pair of start- and end-comments enclose.

You can declare custom magic comments through theme config. For example, you can register another magic comment that adds a `code-block-error-line` class name:

```mdx-code-block
<Tabs>
<TabItem value="docusaurus.config.js">
```

```js
module.exports = {
  themeConfig: {
    prism: {
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        // highlight-start
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
        // highlight-end
      ],
    },
  },
};
```

```mdx-code-block
</TabItem>
<TabItem value="src/css/custom.css">
```

```css
.code-block-error-line {
  background-color: #ff000020;
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
  border-left: 3px solid #ff000080;
}
```

```mdx-code-block
</TabItem>
<TabItem value="myDoc.md">
```

````md
In JavaScript, trying to access properties on `null` will error.

```js
const name = null;
// This will error
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```
````

```mdx-code-block
</TabItem>
</Tabs>
```

```mdx-code-block
<BrowserWindow>
```

In JavaScript, trying to access properties on `null` will error.

```js
const name = null;
// This will error
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```

```mdx-code-block
</BrowserWindow>
```
