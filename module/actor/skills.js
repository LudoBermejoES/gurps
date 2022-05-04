'use strict'

function getGroupedSkills(skills) {
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
