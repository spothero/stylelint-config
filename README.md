# @spothero/stylelint-config: SpotHero's Base Stylelint Configuration
This module provides your project with an extendable base stylelint configuration to develop applications adhering to SpotHero's CSS/Sass coding standards. It also adds [Prettier](https://prettier.io/) support for Sass development.

## Installation
`npm install @spothero/stylelint-config @spothero/prettier-config -D`

## Usage
Create a `stylelint` key in your `package.json` file and extend this configuration:

```
{
    "stylelint": {
        "extends": [
            "@spothero/stylelint-config",
            "stylelint-prettier/recommended"
        ]
    }
}
```

Lastly, set up the Prettier configuration according to the [usage guide](https://github.com/spothero/prettier-config#usage).
