module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "src",      // This sets the input directory to "src"
            includes: "_includes", // This continues to look for the "_includes" folder within "src"
        },
    };
};
