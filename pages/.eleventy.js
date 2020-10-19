module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection('authors', collection => {
    return collection.getAll().filter(post => post.data.authors === 'article');
  });
}