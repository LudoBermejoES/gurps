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
  const disciplines = []
  const disciplinesContainer = getContainerByKey(ads, DISCIPLINES_CONTAINER);
  if(!disciplinesContainer) return [];

  Object.keys(disciplinesContainer.contains).forEach((key) => {
    const discipline = disciplinesContainer.contains[key];
    if(discipline) disciplines.push(discipline);
  })
  return disciplines;
}

function getDisciplinesSkills(skills) {
  const disciplines = new Array();
  const disciplinesContainer = getContainerByKey(skills, DISCIPLINES_CONTAINER);
  if(!disciplinesContainer) return [];
  Object.keys(disciplinesContainer.contains).forEach((id) => {
    const disciplineFound = disciplinesContainer.contains[id]
    if(disciplineFound) {
      const discipline = { name: disciplineFound.name, skills: [] };
      Object.keys(disciplineFound.contains).forEach((skillDiscipline) => discipline.skills.push(disciplineFound.contains[skillDiscipline]) )
      disciplines.push(discipline);
    }
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
  getDisciplinesSkills,
  getVampiricPowers,
}
