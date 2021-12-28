//Create tag pages programatically
const path = require("path");
const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulShapesRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulShapesRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slug = slugify(tag, { lower: true });
      createPage({
        path: `/${slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
