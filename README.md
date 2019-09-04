# @spothero/stylelint-config: SpotHero's Base Stylelint Configuration
This module provides your project with an extendable base stylelint configuration to develop applications adhering to SpotHero's CSS/Sass coding standards. It also adds [Prettier](https://prettier.io/) support for Sass development.

## Installation
`npm install @spothero/stylelint-config prettier -D`

## Usage
Create a `.stylelintrc` file in your project's root and add the following:

```
{
    "extends": ["@spothero/stylelint-config", "stylelint-prettier/recommended"]
}

```

Create a `.prettierrc` file in your project's root and add the following:
```
{
    "bracketSpacing": false,
    "endOfLine": "lf",
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "overrides": [
        {
            "files": "*.json",
            "options": {
                "tabWidth": 2
            }
        },
        {
            "files": "*.scss",
            "options": {
                "singleQuote": false
            }
        }
    ]
}
```

Optionally, add a `.prettierignore` file in your project's root with the below:
```
*.md
```

This will ignore formatting on `.md` files which may be annoying and possibly cause display issues.
