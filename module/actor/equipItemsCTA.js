async function addOrRemoveItem(token, textureData, actor, name, r, id) {
    if(await window.CTA.hasAnim(token, name)) {
        CTA.removeAnimByName(token, name);
        return;
    }

    window.CTA.addAnimation(token, textureData, actor, name, r, id)
}

function cloak(token, id) {
    const textureData = {
        texturePath: 'icons/equipment/back/cloakcollared-red-gold.webp',
        scale: '0.5',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Cloack', null, id);
}

function arrow(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Arrow_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Arrow', null, id);
}


function bullet(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/bullet.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Bullet', null, id);
}


function longbow(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Longbow_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Longbow', null, id);
}


function walterPPK(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/Walter%20PPK.png',
        scale: '0.5',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'WalterPPK', null, id);
}

function sIGSauerP226(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/SIG_P226.png',
        scale: '0.5',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'WalterPPK', null, id);
}

function expandableBaton(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/extensible-baton.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'ExpandableBaton', null, id);
}

function imiUzi(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/imi_uzi.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'ImiUzi', null, id);
}


function katana(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Ludo/Armas%20modernas/Katana.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Katana', null, id);
}

function shuriken(token, id) {
    const textureData = {
        texturePath: 'icons/skills/ranged/shuriken-thrown-orange.webp',
        scale: '0.5',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Shuriken', null, id);
}

function pistolCrossbow(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Crossbow_Hand_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Pistol Crossbow', null, id);
}

function rapier(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Combat/Weapons/Swords/Rapier_A_01_1x1.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Rapier', null, id);
}

function mace(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Mace_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Mace', null, id);
}

function knife(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Dagger_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Dagger', null, id);
}

function throwingKnife(token, id) {
    const textureData = {
        texturePath:
            'moulinette/images/custom/Forgotten-Adventures/Combat/Weapons/Special/Throwing_Knife_Metal_Gray_Black_A_1x1.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'ThrowingKnife', null, id);
}

function shortSword(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Weapons/Shortsword_01.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 0,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Shortsword', null, id);
}

function smallShield(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Combat/Weapons/Shields/Shield_Metal_Gray_B_1x1.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Shield', null, id);
}

function mediumShield(token, id) {
    const textureData = {
        texturePath: 'moulinette/images/custom/Forgotten-Adventures/Combat/Weapons/Shields/Shield_Metal_Gray_A_1x1.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Shield', null, id);
}

function largeShield(token, id) {
    const textureData = {
        texturePath:
            'moulinette/images/custom/Forgotten-Adventures/Combat/Weapons/Shields/Shield_Metal_Gray_Gold_C_1x1.png',
        scale: '1',
        speed: 0,
        multiple: 1,
        rotation: 'static',
        xScale: 1,
        yScale: 0.5,
        belowToken: false,
        radius: 2,
        opacity: 1,
        tint: 16777215,
        equip: false,
        lock: true,
    };
    addOrRemoveItem(token, textureData, false, 'Shield', null, id);
}

export function clearEquipment(token) {
    window.CTA.removeAll(token, false);
}

export async function clearAmmunition(name, token) {
    const nameToLook = name.toUpperCase();
    if (nameToLook.includes('REFLEX BOW')) {
        window.CTA.removeAnimByName(token.id, 'Arrow');
    } else if (nameToLook.includes('REGULAR BOW')) {
        window.CTA.removeAnimByName(token.id, 'Arrow');
    } else if (nameToLook.includes('THROWING KNIFE')) {
        window.CTA.removeAnimByName(token.id, 'ThrowingKnife');
    } else if (nameToLook.includes('SHURIKEN')) {
        CTA.removeAnimByName(token.id, 'Shuriken');
    } else if (nameToLook.includes('WALTHER PPK')) {
        CTA.removeAnimByName(token.id, 'Bullet');
    } else if (nameToLook.includes('SIG-SAUER P226')) {
        CTA.removeAnimByName(token.id, 'Bullet');
    } else if (nameToLook.includes('IMI UZI')) {
        CTA.removeAnimByName(token.id, 'Bullet');
    }
}

export async function addAmmunition(name, token, id) {
    const nameToLook = name.toUpperCase();
    if (nameToLook.includes('REFLEX BOW')) {
        await arrow(token, id);
    } else if (nameToLook.includes('REGULAR BOW')) {
        await arrow(token, id);
    } else if (nameToLook.includes('THROWING KNIFE')) {
        await throwingKnife(token, id);
    }
}

export async function drawEquipment(name, token, id) {
    const nameToLook = name.toUpperCase();
    if (nameToLook.includes('PISTOL CROSSBOW')) {
        await pistolCrossbow(token, id);
    } else if (nameToLook.includes('SHORTSWORD')) {
        await shortSword(token, id);
    } else if (nameToLook.includes('RAPIER')) {
        await rapier(token, id);
    } else if (nameToLook.includes('LARGE SHIELD')) {
        await largeShield(token, id);
    } else if (nameToLook.includes('SMALL SHIELD')) {
        await smallShield(token, id);
    } else if (nameToLook.includes('MEDIUM SHIELD')) {
        await mediumShield(token, id);
    } else if (nameToLook.includes('MACE')) {
        await mace(token, id);
    } else if (nameToLook.includes('REFLEX BOW')) {
        await longbow(token, id);
        setTimeout(() => arrow(token, id), 500);
    } else if (nameToLook.includes('REGULAR BOW')) {
        await longbow(token, id);
        setTimeout(() => arrow(token, id), 500);
    } else if (nameToLook.includes('BOW')) {
        await longbow(token, id);
        setTimeout(() => arrow(token, id), 500);
    } else if (nameToLook.includes('THROWING KNIFE')) {
        await throwingKnife(token, id);
    } else if (nameToLook.includes('KNIFE')) {
        await knife(token, id);
    }  else if (nameToLook.includes('CLOAK')) {
        await cloak(token, id);
    } else if (nameToLook.includes('KATANA')) {
        await katana(token, id);
    } else if (nameToLook.includes('SHURIKEN')) {
        await shuriken(token, id);
    } else if (nameToLook.includes('WALTHER PPK')) {
        await walterPPK(token, id);
        setTimeout(() => bullet(token, id), 500);
    } else if (nameToLook.includes('SIG-SAUER P226')) {
        await sIGSauerP226(token, id);
        setTimeout(() => bullet(token, id), 500);
    } else if (nameToLook.includes('IMI UZI')) {
        await imiUzi(token, id);
        setTimeout(() => bullet(token, id), 500);
    } else if (nameToLook.includes('EXPANDABLE BATON')) {
        await expandableBaton(token, id);
    }
}

export async function getEquippedItems(tokenDocument) {
    return window.CTA.getEquippedItems(token);
}
