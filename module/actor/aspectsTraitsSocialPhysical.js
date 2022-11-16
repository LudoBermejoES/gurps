'use strict'
const ASPECTS_CONTAINER_NAME = 'Aspectos'
const PERSONALITY_TRAITS_CONTAINER_NAME = 'Rasgos de personalidad'
const SOCIAL_TRAITS_CONTAINER_NAME = 'Rasgos sociales'
const PHYSICAL_TRAITS_CONTAINER_NAME = 'Rasgos físicos'
const MAGICAL_TRAITS_CONTAINER_NAME = 'Rasgos mágicos'
const MAGICAL_POWERS_CONTAINER_NAME = 'Poderes mágicos'

function sortByAlternateName(object) {
  const result = {}
  const arrayToOrder = []
  Object.keys(object).forEach(key => {
    arrayToOrder.push({
      ...object[key],
      key,
    })
  })
  const orderedArray = arrayToOrder.sort((a, b) => {
    if (a.alternateName < b.alternateName) {
      return -1
    }
    if (a.alternateName > b.alternateName) {
      return 1
    }
    return 0
  })
  orderedArray.forEach(value => {
    result[value.key] = value
  })
  return result
}

function getContents(data) {
  if (!data.contains && data.collapsed) return data.collapsed
  if (data.contains && !data.collapsed) return data.contains
  if (!data.contains && !data.collapsed) return {}
  if (Object.keys(data.contains).length > 0) return data.contains
  return data.collapsed
}

function getContainerByKey(ads, keySearch) {
  const key = Object.keys(ads).filter(key => ads[key].name.toUpperCase().indexOf(keySearch.toUpperCase()) === 0)
  if (key.length) {
    return ads[key[0]]
  }
  return undefined
}

function getAspects(ads) {
  const container = sortByAlternateName(getContents(getContainerByKey(ads, ASPECTS_CONTAINER_NAME) || { contains: {} }))
  return container
}

function getPersonalityTraits(ads) {
  const container = sortByAlternateName(
    getContents(getContainerByKey(ads, PERSONALITY_TRAITS_CONTAINER_NAME) || { contains: {} })
  )
  return container
}

function getSocialTraits(ads) {
  const container = sortByAlternateName(
    getContents(getContainerByKey(ads, SOCIAL_TRAITS_CONTAINER_NAME) || { contains: {} })
  )
  return container
}

function getPhysicalTraits(ads) {
  const container = sortByAlternateName(
    getContents(getContainerByKey(ads, PHYSICAL_TRAITS_CONTAINER_NAME) || { contains: {} })
  )
  return container
}

function getMagicalTraits(ads) {
  const container = sortByAlternateName(
    getContents(getContainerByKey(ads, MAGICAL_TRAITS_CONTAINER_NAME) || { contains: {} })
  )
  return container
}

function getMagicalPowers(ads) {
  const container = sortByAlternateName(
    getContents(getContainerByKey(ads, MAGICAL_POWERS_CONTAINER_NAME) || { contains: {} })
  )
  return container
}

export { getAspects, getPersonalityTraits, getSocialTraits, getPhysicalTraits, getMagicalTraits, getMagicalPowers }
