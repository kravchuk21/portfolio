module.exports = function (config) {
    config.addPassthroughCopy("src/styles/");
    config.addWatchTarget("src/styles/");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
