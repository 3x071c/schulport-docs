---
sidebar-position: 3
---

# JS

> `JS` stands for JavaScript

:::caution

Achtung: Dieser Abschnitt wurde noch nicht übersetzt

:::

## Prerequisites

See the [HTML section](#html)

## Fundamentals

JavaScript adds interactivity to websites. It allows modification of HTML nodes (also called `DOM` for Document Object Model) and CSS at runtime, often in response to events such as a click on a button.

`index.js`:

```js
document.querySelector('p').style.color = 'orange'; // changes the CSS 'p' style from 'green' to 'orange'
```

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
	</head>
	<body>
		<p>Example text in orange, because the JS overrides the CSS targeting all p elements</p>
		<p class="blue">
			Example text in blue, because the CSS targets all HTML nodes with a 'blue' class, and overrides the more
			general 'p' style
		</p>
		<p id="red">
			Example text in red, because the CSS targets all HTML nodes with a 'red' id, and overrides the more general
			'p' style
		</p>
		<script src="index.js" />
		<!-- Embed the JS -->
	</body>
</html>
```

## Learn more

[At the MDN web docs](https://developer.mozilla.org/docs/Web/JavaScript) | [At w3schools](https://www.w3schools.com/js/)
