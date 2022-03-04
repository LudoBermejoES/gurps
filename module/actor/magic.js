'use strict'
const MAGIC_CONTAINER_NAME = "Magia verdadera";
const ARETE = "Arete";
const AVATAR = "Avatar";
const AWARENESS = "Consciencia";
const SPHERES_CONTAINER = 'Esferas';
const SPHERES = ['Cardinal', 'Correspondencia', 'Materia', 'Vida', 'Tiempo', 'Entropía', 'Espíritu', 'Fuerzas', 'Mente'];
const ARCANE = "Arcano";
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

function getArcane(ads) {
  return getContainerByKey(ads, ARCANE);
}
function getAdsSpheres(ads) {
  const spheres = new Array();
  const spheresContainer = getContainerByKey(ads, SPHERES_CONTAINER);
  if(!spheresContainer) return undefined;
  SPHERES.forEach((sphere) => {
    const sphereFound = getContainerByKey(spheresContainer.contains, sphere)
    if(sphereFound) spheres.push(sphereFound);
  })
  return spheres;
}

function getMagicalSkills(skills) {
  const spheres = new Array();
  const spheresContainer = getContainerByKey(skills, SPHERES_CONTAINER);
  if(!spheresContainer) return undefined;
  SPHERES.forEach((sphere) => {
    const sphereFound = getContainerByKey(spheresContainer.contains, sphere)
    if(sphereFound) spheres.push(sphereFound);
  })
  return spheres;
}

function getMagicalAdvantages(ads) {
  const container = (getContainerByKey(ads, MAGIC_CONTAINER_NAME) || { contains: {} }).contains;
  return {
    avatar: getAvatar(container),
    awareness: getAwareness(container),
    arcane: getArcane(container),
    arete: getArete(container),
    spheres: getAdsSpheres(container),
  }
}

export {
  getMagicalAdvantages,
  getMagicalSkills,
}
