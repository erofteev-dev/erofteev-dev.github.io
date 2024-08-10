const slugify = require("slugify");
const path = require("path");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");

	// Фильтр для преобразования кириллицы в латиницу
	eleventyConfig.addFilter("slug", function (input) {
		const options = {
			replacement: "-",
			remove: /[&,+()$~%.'":*?<>{}]/g,
			lower: true,
		};
		return slugify(input, options);
	});

	// Фильтр для создания URL статьи
	eleventyConfig.addFilter("articleUrl", function (fileSlug) {
		const slug = slugify(path.basename(fileSlug), {
			replacement: "-",
			remove: /[&,+()$~%.'":*?<>{}]/g,
			lower: true,
		});
		return `/${slug}/`;
	});

	// Настройка коллекции для всех статей
	eleventyConfig.addCollection("articles", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/content/**/*.md");
	});

	return {
		dir: {
			input: "src",
			output: "site",
			includes: "includes",
			layouts: "layouts",
			data: "data",
		},
		templateFormats: ["md", "njk", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
};
