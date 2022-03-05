'use strict'
const MAGIC_CONTAINER_NAME = "Magia verdadera";
const ARETE = "Arete";
const AVATAR = "Avatar";
const AWARENESS = "Consciencia";
const SPHERES_CONTAINER = 'Esferas';
const SPHERES = ['Cardinal', 'Correspondencia', 'Materia', 'Vida', 'Tiempo', 'Entropía', 'Espíritu', 'Fuerzas', 'Mente'];
const ARCANE = "Arcano";
const PARADIGM = "Paradigma";
const PRACTIQUE = "Práctica";
const TOOLS = "Instrumentos";
const RECIPEES = "Recetas";

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

function getArete(ads) {
  return getContainerByKey(ads, ARETE);
}

function getAvatar(ads) {
  return getContainerByKey(ads, AVATAR);
}

function getAwareness(ads) {
  return getContainerByKey(ads, AWARENESS);
}


function getParadigm(ads) {
  const container = getContainerByKey(ads, PARADIGM);
  if(!container) return [];
  const object = getContents(container);
  if(!object) return [];
  return  Object.keys(object).map((key) => object[key]);
}

function getPractique(ads) {
  const container = getContainerByKey(ads, PRACTIQUE);
  if(!container) return [];

  const object = getContents(container);
  if(!object) return [];
  return  Object.keys(object).map((key) => object[key]);
}

function getTools(ads) {
  const container = getContainerByKey(ads, TOOLS);
  if(!container) return [];
  const object = getContents(container);
  if(!object) return [];
  return  Object.keys(object).map((key) => object[key]);
}


function getArcane(ads) {
  return getContainerByKey(ads, ARCANE);
}
function getAdsSpheres(ads) {
  const spheres = new Array();
  const spheresContainer = getContainerByKey(ads, SPHERES_CONTAINER);
  if(!spheresContainer) return [];
  SPHERES.forEach((sphere) => {
    const sphereFound = getContainerByKey(getContents(spheresContainer), sphere)
    if(sphereFound) spheres.push(sphereFound);
  })
  return spheres;
}

function getRecipees(skills) {
  const recipees = new Array();
  const recipeesContainer = getContainerByKey(skills, RECIPEES);
  debugger;
  if(!recipeesContainer) return [];
  return getContents(recipeesContainer);
}

function getMagicalSkills(skills) {
  const spheres = new Array();
  const spheresContainer = getContainerByKey(skills, SPHERES_CONTAINER);
  if(!spheresContainer) return [];
  SPHERES.forEach((sphere) => {
    const sphereFound = getContainerByKey(getContents(spheresContainer), sphere)
    if(sphereFound) spheres.push(sphereFound);
  })
  return spheres;
}

function getMagicalAdvantages(ads) {
  const container = getContents((getContainerByKey(ads, MAGIC_CONTAINER_NAME) || { contains: {} }));
  return {
    avatar: getAvatar(container),
    awareness: getAwareness(container),
    arcane: getArcane(container),
    arete: getArete(container),
    paradigm: getParadigm(container),
    practique: getPractique(container),
    spheres: getAdsSpheres(container),
    tools: getTools(container),
  }
}

export {
  getMagicalAdvantages,
  getMagicalSkills,
  getRecipees,
}
