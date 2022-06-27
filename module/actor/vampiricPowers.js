'use strict'
const VAMPIRE_CONTAINER_NAME = "De los vampiros";
const GENERIC_ADVANTAGES_AND_DISADVANTAGES = "Generales";
const GENERATION = "Generación";
const HUMANITY = "Humanidad";
const DISCIPLINES_CONTAINER = 'Disciplinas'
const DISCIPLINES = ['Animalismo', 'Auspex', 'Celeridad', 'Dominación', 'Fortaleza', 'Potencia', 'Majestad', 'Pesadilla', 'Ofuscar', 'Protean', 'Vigor'];

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

function getDisciplines(ads) {
  const disciplines = new Array();
  const disciplinesContainer = getContainerByKey(ads, DISCIPLINES_CONTAINER);
  if(!disciplinesContainer) return [];
  DISCIPLINES.forEach((discipline) => {
    const disciplineFound = getContainerByKey(getContents(disciplinesContainer), discipline)
    if(disciplineFound) disciplines.push(disciplineFound);
  })
  return disciplines;
}

function getGeneration(ads) {
  return getContainerByKey(ads, GENERATION);
}

function getHumanity(ads) {
  return getContainerByKey(ads, HUMANITY);
}

function getGenericVampireAdvantagesAndDisadvantages(ads) {
  const genericContainer = getContainerByKey(ads, GENERIC_ADVANTAGES_AND_DISADVANTAGES);
  if(!genericContainer) return [];
  return getContents(genericContainer);
}

function getVampiricPowers(ads) {
  const container = getContents((getContainerByKey(ads, VAMPIRE_CONTAINER_NAME) || { contains: {} }));
  return {
    genericAdvantagesAndDisadvantages: getGenericVampireAdvantagesAndDisadvantages(container),
    generation: getGeneration(container),
    humanity: getHumanity(container),
    disciplines: getDisciplines(container),
  }
}

export {
  getVampiricPowers
}
