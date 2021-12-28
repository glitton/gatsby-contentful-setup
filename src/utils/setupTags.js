// helper function to put tags in an array and in alphabetical order
const setupTags = shapesRecipes => {
  const allTags = {};
  shapesRecipes.forEach(shapeRecipe => {
    shapeRecipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    // sort in alphabetical order
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });
  return newTags;
};

export default setupTags;
