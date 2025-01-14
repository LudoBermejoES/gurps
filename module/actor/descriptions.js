'use strict'
const DESCRIPTIONS_CONTAINER_NAME = "Descripciones";

function getContents(data) {
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

function getDescriptions(ads) {
  const container = getContents((getContainerByKey(ads, DESCRIPTIONS_CONTAINER_NAME) || { contains: {} }));
  return container;
}

export {
  getDescriptions,
}
