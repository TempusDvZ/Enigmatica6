onEvent('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:stick_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'eidolon:ingot_' + material,
            'eidolon:nugget_' + material,
            'eidolon:block_' + material,
            'thermal:' + material + '_block',
            'appliedenergistics2:' + material.replace('certus_', '') + '_ore',
            'appliedenergistics2:' + material + '_crystal',
            'appliedenergistics2:' + material + '_dust',
            'appliedenergistics2:' + material.replace('certus_', '') + '_block',
            'biggerreactors:' + material + '_ingot',
            'biggerreactors:' + material + '_dust',
            'biggerreactors:' + material + '_block',
            'biggerreactors:' + material.replace('um', 'te') + '_ore',
            'tmechworks:' + material + '_ore',
            'tmechworks:' + material + '_block',
            'tmechworks:' + material + '_ingot',
            'tmechworks:' + material + '_nugget',
            'silents_mechanisms:' + material + '_ore',
            'silents_mechanisms:' + material + '_block',
            'silents_mechanisms:' + material + '_dust',
            'silents_mechanisms:' + material + '_ingot',
            'silents_mechanisms:' + material + '_nugget'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
