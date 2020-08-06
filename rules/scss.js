module.exports = {
    plugins: ['stylelint-scss'],
    rules: {
        // @-each
        'scss/at-each-key-value-single-line': true,
        // @-else
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': null,
        'scss/at-else-empty-line-before': null,
        'scss/at-else-if-parentheses-space-before': 'always',
        // @-extend
        'scss/at-extend-no-missing-placeholder': true,
        // @-function
        'scss/at-function-named-arguments': null,
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': null,
        // @-if
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': null,
        'scss/at-if-no-null': true,
        // @-import
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/at-import-partial-extension-whitelist': null,
        // @-mixin
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-mixin-named-arguments': null,
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': null,
        // @-rule
        'scss/at-rule-conditional-no-parentheses': null,
        'scss/at-rule-no-unknown': null,
        // $-variable
        'scss/dollar-variable-colon-newline-after': null,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-default': null,
        'scss/dollar-variable-empty-line-after': null,
        'scss/dollar-variable-empty-line-before': null,
        'scss/dollar-variable-first-in-block': [
            true,
            {
                except: ['root'],
                ignore: ['comments', 'imports'],
            },
        ],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': null,
        // %-placeholder
        'scss/percent-placeholder-pattern': null,
        // //-comment
        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['between-comments', 'stylelint-commands'],
            },
        ],
        'scss/double-slash-comment-inline': null,
        'scss/double-slash-comment-whitespace-inside': 'always',
        // comment
        'scss/comment-no-empty': true,
        'scss/comment-no-loud': null,
        // declaration
        'scss/declaration-nested-properties': 'never',
        'scss/declaration-nested-properties-no-divided-groups': null,
        // dimension
        'scss/dimension-no-non-numeric-values': true,
        // function
        'scss/function-color-relative': true,
        'scss/function-quote-no-quoted-strings-inside': null,
        'scss/function-unquote-no-unquoted-strings-inside': null,
        // map
        'scss/map-keys-quotes': null,
        // media feature
        'scss/media-feature-value-dollar-variable': 'always',
        // operator
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        // partial
        'scss/partial-no-import': null,
        // selector
        'scss/selector-nest-combinators': 'always',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': true,
        // general/sheet
        'scss/no-dollar-variables': null,
        'scss/no-duplicate-dollar-variables': true,
        'scss/no-duplicate-mixins': true,
        'scss/no-global-function-names': true,
    },
};
