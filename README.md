## TextHighlighter

simple react component for text highlight

![example](/img/Texthighlighter.example.PNG)

### install
```
$ npm install --save react-simple-text-highlighter
```

### usage
```jsx
import TextHighlighter from 'react-simple-text-highlighter';

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