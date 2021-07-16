---
sidebar-position: 4
---

# React

:::caution

Achtung: Dieser Abschnitt wurde noch nicht übersetzt

:::

## Prerequisites

See the [HTML section](#html)

## Fundamentals

React is a JavaScript library (= third-party script) developed by the Facebook Open Source Initiative. It was written to writing complex, interactive UI easier. Nowadays, it is often used in a framework (such as [NextJS](#nextjs)), making out the whole website. Unlike most other common library paradigms, React has gained popularity by following an HTML-in-JS approach (instead of the standard JS-in-HTML).

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
		<script src="https://unpkg.com/react/umd/react.development.js" />
		<!-- Get the React library -->
		<script src="https://unpkg.com/react-dom/umd/react-dom.development.js" />
		<!-- Get the React-DOM library, a requirement for proper development -->
		<script src="index.js" />
	</body>
</html>
```

`index.js`:

```js
ReactDOM.render(<p>This has been rendered with React!</p>, document.querySelector('body'));
```

## Learn more

[At the official React website](https://reactjs.org)
