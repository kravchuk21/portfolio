const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
    config.addPassthroughCopy("src/styles/");
    config.addWatchTarget("src/styles/");
    config.addPassthroughCopy("src/projects/**/*.(jpg)");

    config.addPlugin(syntaxHighlight);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
            layouts: "layouts",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
