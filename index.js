module.exports = {
    extends: [
        './rules/possible-errors',
        './rules/limit-language-features',
        './rules/scss',
        './rules/stylistic-issues',
    ].map(require.resolve),
};
