'use strict'

import {i18n} from "../../lib/utilities.js";

const ASPECTS_CONTAINER_NAME = "Idiomas";

function getContents(data) {
    if ((!data.contains) && (data.collapsed)) return data.collapsed;
    if ((data.contains) && (!data.collapsed)) return data.contains;
    if ((!data.contains) && (!data.collapsed)) return {};
    if ((Object.keys(data.contains).length > 0)) return data.contains;
    return data.collapsed;
}

function getContainerByKey(ads, keySearch) {
    const key = Object.keys(ads).filter(key => ads[key].name.toUpperCase().indexOf(keySearch.toUpperCase()) === 0)
    if (key.length) {
        return ads[key[0]];
    }
    return undefined;
}

function getLanguages(ads) {
    const container = getContents((getContainerByKey(ads, ASPECTS_CONTAINER_NAME) || {contains: {}}));
    const translated = {};
    Object.keys(container).forEach((c) => {
        const t = {
            ...container[c],
            name: container[c].name.replace('Language:', ''),
            notes: container[c].notes
                .replaceAll('Broken', i18n('GURPS.broken'))
                .replaceAll('Accented', i18n('GURPS.accented'))
                .replaceAll('Written', i18n('GURPS.written'))
                .replaceAll('Spoken', i18n('GURPS.spoken'))
                .replaceAll('Native', i18n('GURPS.native'))
        }
        translated[c] = t;
    })
  return translated;
}

export {
    getLanguages,
}

