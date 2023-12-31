# HTML To RTF (Server)
>This project convert html to rtf format the server with Node.js.
>It is based on the oziresrds/html-to-rtf awesome project (fixed issues).

## Installation
```
$ npm install html-to-rtf-node
```

## Changelog
```
* Encoding string correctly
```

## Starting
```javascript
const htmlToRtf = require('html-to-rtf-node');
const html = `
<h1>Title <span style="color:rgb(255,0,0);">with</span> tag h1<h1>
<div>
	<p style="color:#333; margin:5px;" class="test" align="center">
	    text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
	</p>
	<p style="color:rgb(255,0,0);" align="right">red paragraph => right with tag</p>
	<p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
	<table>
		<tbody>
			<tr>
                <td><mark>column 1</mark></td>
                <td>column 2</td>
				<td><mark>column 3</mark></td>
				<td>column 4</td>
			</tr>
			<tr>
				<td>content 1</td>
				<td>content 2<br></td>
				<td>content 3<br></td>
				<td>content 4<br></td>
			</tr>
		</tbody>
	</table>
</div>
`
htmlToRtf.saveRtfInFile('<Path>/<FileName>.rtf', htmlToRtf.convertHtmlToRtf(html))
```

>  Now test in your preferred text editor (wordpad, word, libreoffice, ...).
##

##### Important:
#
> You can't copy the output of terminal.
> Save the output at a file.rtf

### Allowed html tags
```html
<b>, <br>, <center>, <div>, <em>, <font>, <h1>, <h2>, <h3>, <h4>,
<h5>, <h6>, <i>, <li>, <mark>, <p>, <ol>, <s>, <span>, <sub>, <sup>,
<strong>, <table>, <td>, <th>, <tr>, <u>, <ul>
```
### Allowed style properties

> color(Hex and Rgb), font-size(px, pt), text-align

## Author

> * **Maksym Moroz**

## License
This project is licensed under the MIT License
