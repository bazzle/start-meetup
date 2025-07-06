export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
    	"src/assets/scripts": "assets/scripts"
  	});
	return {
		dir: {
			input: "src",
			output: "_site"
		}
	};
}