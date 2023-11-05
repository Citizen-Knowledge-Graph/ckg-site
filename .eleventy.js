module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

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
