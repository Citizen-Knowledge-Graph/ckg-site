const nunjucks = require("nunjucks");
const path = require("path");

module.exports = function(eleventyConfig) {
    // Set up a Nunjucks environment
    const nunjucksEnvironment = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path.join(__dirname, "src/_includes"))
    );

    eleventyConfig.addPairedShortcode("includeTemplate", function(content, template) {
        return nunjucksEnvironment.render(template, { content: content });
    });

    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addPassthroughCopy("images");

    // Default path for local development
    let rootPath = "/";

    // If environment is production, change the path
    if(process.env.ELEVENTY_ENV === "production") {
        rootPath = "/ckg-site/";
    }

    // Pass the stylesheet path to your templates
    eleventyConfig.addShortcode("rootPath", function() {
        return rootPath;
    });

    return {
        dir: {
            input: "src",      // This sets the input directory to "src"
            includes: "_includes", // This continues to look for the "_includes" folder within "src"
        },
    };
};
