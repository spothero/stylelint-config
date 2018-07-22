module.exports = {
    rules: {
        'at-rule-blacklist': null,
        'at-rule-empty-line-before': ['always', {
            except: ['blockless-after-blockless', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['if', 'else']
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': null,
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': null,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-whitelist': null
    }
};
