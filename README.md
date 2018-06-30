## TextHighlighter

simple react component for text highlight

![example](/img/Texthighlighter.example.PNG)

### install
```
$ npm install --save TextHighlighter
```

### usage
```jsx
import TextHighlighter from 'TextHighlighter';

<TextHighlighter 
  text="ABCDEFG"
  keyword="CDE"
  highlightStyle={{ backgroundColor: '#efefef' }}
/>

```

### props
```
text: PropTypes.string,
keyword: PropTypes.string,
highlightStyle: PropTypes.object
```