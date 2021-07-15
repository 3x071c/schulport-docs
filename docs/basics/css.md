---
sidebar_position: 2
---

# CSS

> `CSS` stands for Cascading Style Sheets

## Prerequisites

See the [HTML section](#html)

## Fundamentals

While HTML describes the structure and content of a webpage, CSS describes the style of HTML tags (also called HTML nodes). Pretty much every website you visit uses CSS to make their website look nicer than plain text.

`index.css`:

```css
p {
	color: green;
}
.blue {
	color: blue;
}
#red {
	color: red;
}
```

`index.html`:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Example</title>
		<link rel="stylesheet" href="index.css" />
		<!-- Reference the CSS -->
	</head>
	<body>
		<p>
			<!-- This is a paragraph -->
			Example text in green, because the CSS targets all p elements
		</p>
		<p class="blue">
			<!-- classes can belong to multiple nodes in the HTML tree -->
			Example text in blue, because the CSS targets all HTML nodes with a 'blue' class, and overrides the more
			general 'p' style
		</p>
		<p id="red">
			<!-- One id can only belong to one node in the HTML tree -->
			Example text in red, because the CSS targets all HTML nodes with a 'red' id, and overrides the more general
			'p' style
		</p>
	</body>
</html>
```

Classes are the most common way to target specific HTML nodes in CSS. They can also be used in JavaScript (see the following section).

### Learn more

[At the MDN web docs](https://developer.mozilla.org/docs/Web/CSS) | [At w3schools](https://www.w3schools.com/css/)
