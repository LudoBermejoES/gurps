'use strict'
const COMBAT_CONTAINER_NAME = "Combate";
const TECHNIQUE_CONTAINER_NAME = "Técnicas";

function getContents(data) {
  if(!data) return {}
  if((!data.contains) && (data.collapsed)) return data.collapsed;
  if((data.contains) && (!data.collapsed)) return data.contains;
  if((!data.contains) && (!data.collapsed)) return {};
  if((Object.keys(data.contains).length > 0)) return data.contains;
  return data.collapsed;
}

function getContainerByKey(ads, keySearch) {
  const key = Object.keys(ads).filter(key => ads[key].name.toUpperCase().indexOf(keySearch.toUpperCase()) === 0)
  if (key.length) {
    return ads[key[0]];
  }
  return undefined;
}

function getTechniques(skills) {
  if(!skills) return [];
  const combat = getContents(getContainerByKey(skills, COMBAT_CONTAINER_NAME));
  if(!combat) return [];
  const recipeesContainer = getContainerByKey(combat, TECHNIQUE_CONTAINER_NAME);
  if(!recipeesContainer) return [];
  return getContents(recipeesContainer);
}

export {
  getTechniques,
}
