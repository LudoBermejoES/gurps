'use strict'

function getGroupedSkills(skills) {
  if(!skills) return [];
  const groups = {};
  Object.keys(skills).forEach(sk => {
    const category = skills[sk].category;
    if(!groups[category]) {
      groups[category] = {};
    }
    groups[category][sk] = skills[sk];
  })

  return groups;
}

export {
  getGroupedSkills,
}
