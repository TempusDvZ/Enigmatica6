onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'modularrouters:item_router',
            inputs: ['minecraft:observer', 'immersiveengineering:circuit_board', 'modularrouters:augment_core'],
            heated: true,
            id: 'modularrouters:item_router'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated().id(recipe.id);
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated().id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
