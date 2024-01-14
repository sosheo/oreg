# Oreg - JavaScript Regular Expression Builder

    oreg is currently in development and is not ready for production use.
    
    Please feel free to take a look but don't bank on anything working.

Oreg is a JavaScript library designed to provide an Object-Relational Mapping (ORM) Query Builder-like interface for constructing regular expressions. This intuitive and fluent API simplifies the process of creating complex regular expressions, making your code more readable and maintainable.

## Features

- **Intuitive**: The API is designed to be intuitive and easy to use.
- **Human Readable**: Oreg is designed to make Regular Expressions more readable and maintainable.
- **Chainable Methods**: Build regular expressions using a fluent, chainable API.
- **Lightweight**: Oreg is a small library with no dependenciess

## Installation

To use Oreg in your project, install it via npm:

```bash
npm install oreg
```

Or, if you prefer using yarn:

```bash
yarn add oreg
```

## Usage

First, import Oreg into your JavaScript file:

```javascript
import { oreg } from 'oreg';
```

### Basic Example

Here's a simple example to match a string that starts with "Hello":

```javascript
const regex = oreg().startsWith("Hello").getRegexString();
console.log(regex); // Outputs: "^Hello"
```

### Advanced Example

Building a more complex regular expression:

```javascript
const regex = oreg()
    .startsWith("http")
    .chars("://")
    .anyOf([o => o.chars("www."), o => o.digits()])
    .endsWith(".com")
    .caseInsensitive()
    .getRegexString();

console.log(regex); // Outputs the corresponding regex pattern
```

## API Reference

### `startsWith(prefix: string)`

Begins the regular expression with the specified prefix.

### `endsWith(suffix: string)`

Ends the regular expression with the specified suffix.

### `anyOf(oregs: oregCallback[])`

Includes any of the specified patterns.

### `chars(chars: string)`

Includes the specified characters in the pattern.

### `digits()`

Shortcut for adding a digit pattern (`\d`).

### `caseInsensitive()`

Makes the entire regular expression case-insensitive.

### `getRegexString()`

Returns the regular expression as a string.

### `getRegexStringWithoutSlashesAndModifiers()`

Returns the regex string without slashes and modifiers.

### `getRegexStringWithoutModifiers()`

Returns the regex string without modifiers.

## Contributing

Contributions are welcome!

## License

Oreg is [MIT licensed](LICENSE.md).
