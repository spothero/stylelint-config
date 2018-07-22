module.exports = {
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': null,
        'scss/at-else-empty-line-before': null,
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-pattern': null,
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': null,
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/at-import-partial-extension-whitelist': null,
        'scss/at-mixin-argumentless-call-parentheses': null,
        'scss/at-mixin-pattern': null,
        'scss/dollar-variable-colon-newline-after': null,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-before': null,
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': null,
        'scss/percent-placeholder-pattern': null,
        'scss/double-slash-comment-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands']
        }],
        'scss/double-slash-comment-inline': null,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/declaration-nested-properties': 'never',
        'scss/declaration-nested-properties-no-divided-groups': null,
        'scss/media-feature-value-dollar-variable': 'always',
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/partial-no-import': null,
        'scss/selector-no-redundant-nesting-selector': true
    }
};
