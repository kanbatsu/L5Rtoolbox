export const TRAITS = (location) => {
    switch (location) {
        case 'FR':
            return {
                Perception: 'Perception',
                Awareness: 'Intuition',
                Strength: 'Force',
                Stamina: 'Constitution',
                Willpower: 'Volonté',
                Intelligence: 'Intelligence',
                Reflexes: 'Réflexes',
                Agility: 'Agilité',
                Void: 'Vide',
                usedVoid: 'Points de vides utilisés'
            };
        default:
            return {
                Perception: 'Perception',
                Awareness: 'Awareness',
                Strength: 'Strength',
                Stamina: 'Stamina',
                Willpower: 'Willpower',
                Intelligence: 'Intelligence',
                Reflexes: 'Reflexes',
                Agility: 'Agility',
                Void: 'Vide',
                usedVoid: 'Void points used'
            }
    }
};

export const SIDE_POINTS = (location) => {
    switch (location) {
        case 'FR':
            return {
                Honor: 'Honneur',
                Glory: 'Gloire',
                Status: 'Statut',
                Taint: 'Souillure',
            };
        default:
            return {
                Honor: 'Honor',
                Glory: 'Glory',
                Status: 'Status',
                Taint: 'Taint',
            }
    }
};