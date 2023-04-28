const { 
    getAllRecipes,
    getRecipeById,
    searchRecipeName,
    createRecipe
} =
    require("../controllers/recipesController");



const getRecipesHandler = async (req, res) => {
    const { title } = req.query;
    try {

        const results = title
            ? await searchRecipeName(title)
            : await getAllRecipes();
        res.status(200).json(results);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



const getRecipeHandler = async (req, res) => {
    const { id } = req.params;
    let source = isNaN(id) ? 'db' : 'api'
    try {
        const recipe = await getRecipeById(id, source);
        res.status(200).json(recipe);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};



const createRecipeHandler = async (req, res) => {

    const { title, image, summary, healtScore, instructions, diets } = req.body
    try {
        if(!title || !image || !summary || !healthScore ||!instructions ) throw new Error('missing information')
        const newRecipe = await createRecipe(title, image, summary, healtScore, instructions);
        await newRecipe.addDiets(diets)

        res.status(201).json(newRecipe);
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


module.exports = {
    getRecipesHandler,
    getRecipeHandler,
    createRecipeHandler,
};