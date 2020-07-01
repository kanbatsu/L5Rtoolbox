export const games = [
    {
        name: 'Voyage initiatique au Royaume de l\'émeraude',
        ingameStart: 1120,
        irlStart: '10 Septembre 2019',
        players: [
            {
                name: 'Asahi',
                player: 'Poupsi',
                clan: 'Lion',
                rank: 3,
                position: {
                    lat: 116,
                    lng: 200
                },
                family: 'Akodo',
                school: 'Akodo',
                function: 'Imperial_family',
                xp: 40,
                xp_total: 100,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [
                    [
                        {
                            Stamina: 3,
                            Willpower: 3
                        },
                        {
                            Reflexes: 3,
                            Awareness: 3
                        }
                    ],
                    [
                        {
                            Strength: 3,
                            Perception: 3
                        },
                        {
                            Agility: 4,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 9.5,
                    Glory: 5,
                    Status: 4.7,
                    Taint: 0
                },
                Void: 3,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '1',
                        trait: 'Awareness',
                        abilities: [
                            'Spécialisation et Capacités de Maîtrise',
                            '+3 pts de réputation'
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: 2,
                        desc: 'You have no taste for or interest in material things, and this minimalist attitude has impacted how others view you. Your School Outfit includes only weapons, armor, clothing, necessary tools of the trade for your profession (such as scroll satchel for shugenja), and nothing else. Any time you would be awarded Glory as a result of your actions, you receive only half the normal amount. Coupled with the normal restriction for Monks in gaining Glory, ascetic monk characters would only gain one quarter the normal amount of Glory. This Disadvantage is worth 3 points to Dragon or Monk characters.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: 'Ajouter 1g1 au jet de merde'
                        }
                    },
                    {
                        name: 'Ascétique',
                        type: 'Disadvantage',
                        cat: 'Mental',
                        cost: 4,
                        desc: 'You have no taste for or interest in material things, and this minimalist attitude has impacted how others view you. Your School Outfit includes only weapons, armor, clothing, necessary tools of the trade for your profession (such as scroll satchel for shugenja), and nothing else. Any time you would be awarded Glory as a result of your actions, you receive only half the normal amount. Coupled with the normal restriction for Monks in gaining Glory, ascetic monk characters would only gain one quarter the normal amount of Glory. This Disadvantage is worth 3 points to Dragon or Monk characters.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: 'Ne vaut que 3 pour les Dragons et les Moines'
                        }
                    },
                    {
                        name: 'Voix',
                        type: 'Advantage',
                        cat: 'Physique',
                        cost: 3,
                        desc: 'You have a voice that others find pleasing in virtually every respect.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: '+1g1 on any Perform Skill Roll that utilizes your voice, such as Perform: Singing or Perform: Oratory.'
                        }

                    },
                    {
                        name: 'Mauvaise vue',
                        type: 'Disadvantage',
                        cat: 'Physique',
                        cost: 3,
                        desc: 'Your eyesight is exceptionally poor, whether as a result of some medical condition or even from a missing eye.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: '-1g1 to all ranged attack rolls and to any Perception-based rolls.'
                        }
                    }
                ]
            },
            {
                name: 'Aki',
                player: 'Jordan',
                clan: 'Scorpion',
                rank: 3,
                family: 'Shosuro',
                school: 'Shosuro',
                xp: 19,
                xp_total: 119,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [[
                    {
                        Stamina: 3,
                        Willpower: 2
                    },
                    {
                        Reflexes: 4,
                        Awareness: 4
                    }],
                    [{
                        Strength: 2,
                        Perception: 3},
                        {
                            Agility: 3,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 4.5,
                    Glory: 4.5,
                    Status: 3.0,
                    Taint: 0.0
                },
                Void: 2,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Couteaux',
                        rank: '3',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Ø Malus avec main non directice',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Comédie',
                        rank: '2',
                        trait: 'Awareness',
                        roll: '6g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '4',
                        trait: 'Awareness',
                        roll: '9g4',
                        abilities: [
                            'Courtoisie',
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Discrétion',
                        rank: '5',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Furtivité',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Méditation',
                        rank: '2',
                        trait: 'Void',
                        roll: '5g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Sincérité',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '8g4',
                        abilities: [
                            'Tromperie',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Enquête',
                        rank: '4',
                        trait: 'Perception',
                        roll: '8g3',
                        abilities: [
                            'Sens de l\'observation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Athlétisme',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Courtisanat',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '7g4',
                        abilities: [
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Equitation',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Kyujutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        roll: '5g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Intimidation',
                        rank: '1',
                        trait: 'Strength',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Cérémonie du thé',
                        rank: '1',
                        trait: 'Void',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Iaijutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Contrefaçon',
                        rank: '5',
                        trait: 'Agility',
                        abilities: [
                            'Sceau',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art de la guerre',
                        rank: '1',
                        trait: 'Perception',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art. Origami',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Caligraphie',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Héraldique',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Scorpion',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Ingénieurie',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Dragon',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Bushido',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Histoire',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Crabe',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            'Jade',
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: -2,
                        desc: 'text',
                        bonus: ''
                    }
                ]
            },
            {
                name: 'Yukimori',
                player: 'Félix',
                clan: 'Fox',
                rank:53,
                family: 'Kitsune',
                school: 'Kitsune',
                xp: 19,
                xp_total: 119,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [[
                    {
                        Stamina: 3,
                        Willpower: 2
                    },
                    {
                        Reflexes: 4,
                        Awareness: 4
                    }],
                    [{
                        Strength: 2,
                        Perception: 3},
                        {
                            Agility: 3,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 4.5,
                    Glory: 4.5,
                    Status: 3.0,
                    Taint: 0.0
                },
                Void: 2,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Couteaux',
                        rank: '3',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Ø Malus avec main non directice',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Comédie',
                        rank: '2',
                        trait: 'Awareness',
                        roll: '6g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '4',
                        trait: 'Awareness',
                        roll: '9g4',
                        abilities: [
                            'Courtoisie',
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Discrétion',
                        rank: '5',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Furtivité',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Méditation',
                        rank: '2',
                        trait: 'Void',
                        roll: '5g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Sincérité',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '8g4',
                        abilities: [
                            'Tromperie',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Enquête',
                        rank: '4',
                        trait: 'Perception',
                        roll: '8g3',
                        abilities: [
                            'Sens de l\'observation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Athlétisme',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Courtisanat',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '7g4',
                        abilities: [
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Equitation',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Kyujutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        roll: '5g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Intimidation',
                        rank: '1',
                        trait: 'Strength',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Cérémonie du thé',
                        rank: '1',
                        trait: 'Void',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Iaijutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Contrefaçon',
                        rank: '5',
                        trait: 'Agility',
                        abilities: [
                            'Sceau',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art de la guerre',
                        rank: '1',
                        trait: 'Perception',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art. Origami',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Caligraphie',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Héraldique',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Scorpion',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Ingénieurie',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Dragon',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Bushido',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Histoire',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Crabe',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            'Jade',
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: -2,
                        desc: 'text',
                        bonus: ''
                    }
                ]
            }
        ]
    },
    {
        name: 'La Tourmente de Rokugan',
        ingameStart: 1120,
        irlStart: '22 Décembre 2020',
        players: [
            {
                name: 'Asahi',
                player: 'Poupsi',
                clan: 'Lion',
                rank: 3,
                position: {
                    lat: 116,
                    lng: 200
                },
                family: 'Akodo',
                school: 'Akodo',
                function: 'Imperial_family',
                xp: 40,
                xp_total: 100,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [
                    [
                        {
                            Stamina: 3,
                            Willpower: 3
                        },
                        {
                            Reflexes: 3,
                            Awareness: 3
                        }
                    ],
                    [
                        {
                            Strength: 3,
                            Perception: 3
                        },
                        {
                            Agility: 4,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 9.5,
                    Glory: 5,
                    Status: 4.7,
                    Taint: 0
                },
                Void: 3,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '1',
                        trait: 'Awareness',
                        abilities: [
                            'Spécialisation et Capacités de Maîtrise',
                            '+3 pts de réputation'
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: 2,
                        desc: 'You have no taste for or interest in material things, and this minimalist attitude has impacted how others view you. Your School Outfit includes only weapons, armor, clothing, necessary tools of the trade for your profession (such as scroll satchel for shugenja), and nothing else. Any time you would be awarded Glory as a result of your actions, you receive only half the normal amount. Coupled with the normal restriction for Monks in gaining Glory, ascetic monk characters would only gain one quarter the normal amount of Glory. This Disadvantage is worth 3 points to Dragon or Monk characters.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: 'Ajouter 1g1 au jet de merde'
                        }
                    },
                    {
                        name: 'Ascétique',
                        type: 'Disadvantage',
                        cat: 'Mental',
                        cost: 4,
                        desc: 'You have no taste for or interest in material things, and this minimalist attitude has impacted how others view you. Your School Outfit includes only weapons, armor, clothing, necessary tools of the trade for your profession (such as scroll satchel for shugenja), and nothing else. Any time you would be awarded Glory as a result of your actions, you receive only half the normal amount. Coupled with the normal restriction for Monks in gaining Glory, ascetic monk characters would only gain one quarter the normal amount of Glory. This Disadvantage is worth 3 points to Dragon or Monk characters.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: 'Ne vaut que 3 pour les Dragons et les Moines'
                        }
                    },
                    {
                        name: 'Voix',
                        type: 'Advantage',
                        cat: 'Physique',
                        cost: 3,
                        desc: 'You have a voice that others find pleasing in virtually every respect.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: '+1g1 on any Perform Skill Roll that utilizes your voice, such as Perform: Singing or Perform: Oratory.'
                        }

                    },
                    {
                        name: 'Mauvaise vue',
                        type: 'Disadvantage',
                        cat: 'Physique',
                        cost: 3,
                        desc: 'Your eyesight is exceptionally poor, whether as a result of some medical condition or even from a missing eye.',
                        bonus: {
                            impact: 'roll',
                            value: '1g1',
                            text: '-1g1 to all ranged attack rolls and to any Perception-based rolls.'
                        }
                    }
                ]
            },
            {
                name: 'Aki',
                player: 'Jordan',
                clan: 'Scorpion',
                rank: 3,
                family: 'Shosuro',
                school: 'Shosuro',
                xp: 19,
                xp_total: 119,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [[
                    {
                        Stamina: 3,
                        Willpower: 2
                    },
                    {
                        Reflexes: 4,
                        Awareness: 4
                    }],
                    [{
                        Strength: 2,
                        Perception: 3},
                        {
                            Agility: 3,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 4.5,
                    Glory: 4.5,
                    Status: 3.0,
                    Taint: 0.0
                },
                Void: 2,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Couteaux',
                        rank: '3',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Ø Malus avec main non directice',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Comédie',
                        rank: '2',
                        trait: 'Awareness',
                        roll: '6g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '4',
                        trait: 'Awareness',
                        roll: '9g4',
                        abilities: [
                            'Courtoisie',
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Discrétion',
                        rank: '5',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Furtivité',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Méditation',
                        rank: '2',
                        trait: 'Void',
                        roll: '5g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Sincérité',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '8g4',
                        abilities: [
                            'Tromperie',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Enquête',
                        rank: '4',
                        trait: 'Perception',
                        roll: '8g3',
                        abilities: [
                            'Sens de l\'observation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Athlétisme',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Courtisanat',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '7g4',
                        abilities: [
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Equitation',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Kyujutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        roll: '5g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Intimidation',
                        rank: '1',
                        trait: 'Strength',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Cérémonie du thé',
                        rank: '1',
                        trait: 'Void',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Iaijutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Contrefaçon',
                        rank: '5',
                        trait: 'Agility',
                        abilities: [
                            'Sceau',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art de la guerre',
                        rank: '1',
                        trait: 'Perception',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art. Origami',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Caligraphie',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Héraldique',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Scorpion',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Ingénieurie',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Dragon',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Bushido',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Histoire',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Crabe',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            'Jade',
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: -2,
                        desc: 'text',
                        bonus: ''
                    }
                ]
            },
            {
                name: 'Yukimori',
                player: 'Félix',
                clan: 'Fox',
                rank:53,
                family: 'Kitsune',
                school: 'Kitsune',
                xp: 19,
                xp_total: 119,
                feelings: {
                    Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                    Michistujo: 'Blablabla',
                    'Jean-Miqeng': 'skjjksds',
                    Kasai: 'dsfseaw',
                    Yukimori: 'asdsqqw'
                },
                rings: [[
                    {
                        Stamina: 3,
                        Willpower: 2
                    },
                    {
                        Reflexes: 4,
                        Awareness: 4
                    }],
                    [{
                        Strength: 2,
                        Perception: 3},
                        {
                            Agility: 3,
                            Intelligence: 3
                        }]
                ],
                sidePoints: {
                    Honor: 4.5,
                    Glory: 4.5,
                    Status: 3.0,
                    Taint: 0.0
                },
                Void: 2,
                skills: [
                    {
                        schoolSkill: true,
                        skill: 'Couteaux',
                        rank: '3',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Ø Malus avec main non directice',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Comédie',
                        rank: '2',
                        trait: 'Awareness',
                        roll: '6g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Étiquette',
                        rank: '4',
                        trait: 'Awareness',
                        roll: '9g4',
                        abilities: [
                            'Courtoisie',
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Discrétion',
                        rank: '5',
                        trait: 'Agility',
                        roll: '9g3',
                        abilities: [
                            'Furtivité',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Méditation',
                        rank: '2',
                        trait: 'Void',
                        roll: '5g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Sincérité',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '8g4',
                        abilities: [
                            'Tromperie',
                        ]
                    },
                    {
                        schoolSkill: true,
                        skill: 'Enquête',
                        rank: '4',
                        trait: 'Perception',
                        roll: '8g3',
                        abilities: [
                            'Sens de l\'observation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Athlétisme',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Courtisanat',
                        rank: '3',
                        trait: 'Awareness',
                        roll: '7g4',
                        abilities: [
                            '+3 de réputation',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Equitation',
                        rank: '1',
                        trait: 'Agility',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Kyujutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        roll: '5g4',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Intimidation',
                        rank: '1',
                        trait: 'Strength',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Cérémonie du thé',
                        rank: '1',
                        trait: 'Void',
                        roll: '3g2',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Iaijutsu',
                        rank: '1',
                        trait: 'Reflexes',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Contrefaçon',
                        rank: '5',
                        trait: 'Agility',
                        abilities: [
                            'Sceau',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art de la guerre',
                        rank: '1',
                        trait: 'Perception',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Art. Origami',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Caligraphie',
                        rank: '1',
                        trait: 'Agility',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Héraldique',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Scorpion',
                        rank: '1',
                        trait: 'Intelligence',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Ingénieurie',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Dragon',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Bushido',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Histoire',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            '',
                        ]
                    },
                    {
                        schoolSkill: false,
                        skill: 'Con. Crabe',
                        rank: '1',
                        trait: 'Intelligence',
                        roll: '4g3',
                        abilities: [
                            'Jade',
                        ]
                    }
                ],
                vantages: [
                    {
                        name: 'Calme',
                        type: 'Advantage',
                        cat: 'Mental',
                        cost: -2,
                        desc: 'text',
                        bonus: ''
                    }
                ]
            }
        ]
    }
];

export const Schools = [
    {
        name: 'Akodo',
        bonus: 'Perception',
        honor: 6.5,
        stuff: [
            'Armure Legère',
            'Vêtements Robustes'
        ],
        skills: [
            {
                name: 'Art de la guerre',
                spec: 'Combat de Masse'
            },
            {
                name: 'Connaissance : Histoire',
                spec: ''
            },
            {
                name: 'Défense',
                spec: ''
            },
            {
                name: 'Kenjutsu',
                spec: ''
            },
            {
                name: 'Kyujutsu',
                spec: ''
            },
            {
                name: 'Sincérité',
                spec: ''
            }
        ]
    },
    {
        name: 'Kitsune',
        bonus: 'Perception',
        honor: 6.5,
        stuff: [
            'Armure Legère',
            'Vêtements Robustes'
        ],
        skills: [
            {
                name: 'Art de la guerre',
                spec: 'Combat de Masse'
            },
            {
                name: 'Connaissance : Histoire',
                spec: ''
            },
            {
                name: 'Défense',
                spec: ''
            },
            {
                name: 'Kenjutsu',
                spec: ''
            },
            {
                name: 'Kyujutsu',
                spec: ''
            },
            {
                name: 'Sincérité',
                spec: ''
            }
        ]
    },
    {
        name: 'Shosuro',
        bonus: 'Awareness',
        honor: 1.5,
        stuff: [
            'Beaux Vêtements',
            'Costumes et déguisements Assortis',
            'Couteau',
            'Nécessaire de voyage',
            '10 koku'
        ],
        skills: [
            {
                name: 'Comédie',
                spec: ''
            },
            {
                name: 'Couteaux',
                spec: ''
            },
            {
                name: 'Discrétion',
                spec: ''
            },
            {
                name: 'Étiquette',
                spec: ''
            },
            {
                name: 'Méditation',
                spec: ''
            },
            {
                name: 'Sincérité',
                spec: 'Tromperie'
            }
        ]
    }
];


export const ListSkills = [
    {
        skill: 'Couteaux',
        trait: 'Agility',
        abilities: [
            'Ø Malus avec main non directice',
        ]
    },
    {
        skill: 'Comédie',
        rank: '2',
        trait: 'Awareness',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Étiquette',
        rank: '4',
        trait: 'Awareness',
        abilities: [
            'Courtoisie',
            '+3 de réputation',
        ]
    },
    {
        skill: 'Discrétion',
        rank: '5',
        trait: 'Agility',
        abilities: [
            'Furtivité',
        ]
    },
    {
        skill: 'Méditation',
        rank: '2',
        trait: 'Void',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Sincérité',
        rank: '3',
        trait: 'Awareness',
        abilities: [
            'Tromperie',
        ]
    },
    {
        skill: 'Enquête',
        rank: '4',
        trait: 'Perception',
        abilities: [
            'Sens de l\'observation',
        ]
    },
    {
        skill: 'Athlétisme',
        rank: '1',
        trait: 'Agility',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Courtisanat',
        rank: '3',
        trait: 'Awareness',
        abilities: [
            '+3 de réputation',
        ]
    },
    {
        skill: 'Equitation',
        rank: '1',
        trait: 'Agility',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Kyujutsu',
        rank: '1',
        trait: 'Reflexes',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Intimidation',
        rank: '1',
        trait: 'Strength',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Cérémonie du thé',
        rank: '1',
        trait: 'Void',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Iaijutsu',
        rank: '1',
        trait: 'Reflexes',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Contrefaçon',
        rank: '5',
        trait: 'Agility',
        abilities: [
            'Sceau',
        ]
    },
    {
        skill: 'Art de la guerre',
        rank: '1',
        trait: 'Perception',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Art. Origami',
        rank: '1',
        trait: 'Agility',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Caligraphie',
        rank: '1',
        trait: 'Agility',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Héraldique',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Scorpion',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Ingénieurie',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Dragon',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Bushido',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Histoire',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            '',
        ]
    },
    {
        skill: 'Con. Crabe',
        rank: '1',
        trait: 'Intelligence',
        abilities: [
            'Jade',
        ]
    },
    {
        skill: 'Étiquette',
        rank: '1',
        trait: 'Void',
        abilities: [
            'Spécialisation et Capacités de Maîtrise',
            '+3 pts de réputation'
        ]
    }
];

export const ListVantages = [
    {
        name: 'Calme',
        type: 'Advantage',
        cat: 'Mental',
        cost: 2,
        desc: 'You have no taste for or interest in material things, and this minimalist attitude has impacted how others view you. Your School Outfit includes only weapons, armor, clothing, necessary tools of the trade for your profession (such as scroll satchel for shugenja), and nothing else. Any time you would be awarded Glory as a result of your actions, you receive only half the normal amount. Coupled with the normal restriction for Monks in gaining Glory, ascetic monk characters would only gain one quarter the normal amount of Glory. This Disadvantage is worth 3 points to Dragon or Monk characters.',
        bonus: {
            impact: 'roll',
            value: '1g1',
            text: 'Ajouter 1g1 au jet de merde'
        }
    },
    {
        name: 'Ascétique',
        type: 'Disadvantage',
        cat: 'Mental',
        cost: 4,
        desc: 'Vous n\'avez aucun gout et intérêt pour les choses matérielles, et cette attitude minimaliste impacte sur la manière dont les gens vous voit. Vos équipements d\'écoles ne comprennent que des armes, vêtements et outils nécessaires à votre profession (comme une besace pour Shugenja), et rien d\'autre.À chaque fois que vous serez récompensés de Gloire en réponse à une action, vous ne recevrez que la moitié des points. Cumulé au restriction habituelles des Moines dans le gain de Gloire, les moines ascétique ne gagneront qu\'un quart des points de Gloire.',
        bonus: {
            impact: 'roll',
            value: '1g1',
            text: 'Ce désavantage ne rapporte que 3 points aux Dragons et aux personnages Moines.'
        }
    },
    {
        name: 'Voix',
        type: 'Advantage',
        cat: 'Physique',
        cost: 3,
        desc: 'Vous avez une voix que les autres trouvent agréable à tous les égars.',
        bonus: {
            impact: 'roll',
            value: '1g1',
            text: '+1g1 on any Perform Skill Roll that utilizes your voice, such as Perform: Singing or Perform: Oratory.'
        }
    },
    {
        name: 'Mauvaise vue',
        type: 'Disadvantage',
        cat: 'Physique',
        cost: 3,
        desc: 'Votre vue est exceptionnellement basse, dûe à une intervention médicale où à la perte d\'un oeil',
        bonus: {
            impact: 'roll',
            value: '1g1',
            text: '-1g1 à toutes les attaques de portée et tout les jets basés sur la perception.'
        }
    },
    {
        name: 'Tacticien',
        type: 'Advantage',
        cat: 'Mental',
        cost: 4,
        desc: 'Vous avez un esprit aiguisé pour les tenants et les aboutissants d\'une bataille',
        bonus: 'Vous pouvez ajouter ou soustraire 5 à vos jets de dés en bataille de masse. Les Lions et bushi peuvent obtenir cet avantage pour 3 points.'
    }
];

export const MapData = {
    shrines: [
        {
            lat: 251.54,
            lng: 570.41,
            title: "Shrine of The Dragon"
        },
        {
            lat: 144.48,
            lng: 524,
            title: "Shrine of The Unicorn"
        },
        {
            lat: 735,
            lng: 219.1,
            title: "Shrine of the Phoenix"
        },
        {
            lat: 680.48,
            lng: 123.22,
            title: "Shrine of Jpp"
        }
    ],
    towers: [
        {
            lat: 390.75,
            lng: 471,
            title: 'Tower of Scorpions'
        }
    ],
    villages: [
        {
            lat: 516,
            lng: 861,
            title: "Village de ses moarts"
        },
        {
            lat: 194.31,
            lng: 316.53
        },
        {
            lat: 245.07,
            lng: 233.71
        },
        {
            lat: 458.59,
            lng: 357.34
        },
        {
            lat: 708.02,
            lng: 403.28
        },
        {
            lat: 663.53,
            lng: 409.33
        },
        {
            lat: 647.53,
            lng: 440.16
        },
        {
            lat: 670.32,
            lng: 463.72
        },
        {
            lat: 951.62,
            lng: 62.87
        },
        {
            lat: 879.04,
            lng: 135.83
        },
        {
            lat: 339.22,
            lng: 1010.24
        }
    ],
    cities: [
        {
            lat: 292.696,
            lng: 310.481,
            title: 'City Unicorn'
        },
        {
            lat: 416.248,
            lng: 366.84,
            title: 'City Lion'
        },
        {
            lat: 302.734,
            lng: 572.839,
            title: 'City Scropion 1'
        },
        {
            lat: 276.27,
            lng: 641.782,
            title: 'City Scorpion 2'
        },
        {
            lat: 702.133,
            lng: 939.769,
            title: 'City Mantis'
        },
        {
            lat: 277.969,
            lng: 1002.589,
            title: 'City Southest Crane'
        },
        {
            lat: 567.381,
            lng: 788.684,
            title: 'City South-Middle Crane'
        },
        {
            lat: 616.92,
            lng: 699.894,
            title: 'City South-North Crane'
        },
        {
            lat: 609.107,
            lng: 609.881,
            title: 'City Crane'
        },
        {
            lat: 664.235,
            lng: 277.559,
            title: 'City South Phoenix'
        },
        {
            lat: 781.982,
            lng: 255.957,
            title: 'City Phoenix'
        },
        {
            lat: 852.276,
            lng: 197.24,
            title: 'City North Phoenix'
        },
        {
            lat: 771.944,
            lng: 364.197
        }
    ],
    castles: [
        //Castles of Unicorn
        {
            lat: 123.875,
            lng: 215.894,
            title: 'Shiro Shinjo'
        },
        {
            lat: 78.075,
            lng: 372.917,
            title: ''
        },
        {
            lat: 208.309,
            lng: 250.243,
            title: ''
        },
        {
            lat: 144.283,
            lng: 263.42,
            title: ''
        },
        {
            lat: 149.21,
            lng: 387.797,
            title: ''
        },
        //Castles of Lion
        {
            lat: 342.946,
            lng: 379.068,
            title: ''
        },
        {
            lat: 390.712,
            lng: 428.183,
            title: ''
        },
        {
            lat: 612.636,
            lng: 532.597,
            title: ''
        },
        {
            lat: 488.162,
            lng: 351.165,
            title: ''
        },
        {
            lat: 593,
            lng: 425.67,
            title: ''
        },
        //Castles of Dragon
        {
            lat: 381.587,
            lng: 177.576,
            title: ''
        },
        {
            lat: 430.474,
            lng: 210.863,
            title: ''
        },
        {
            lat: 487.078,
            lng: 150.865,
            title: ''
        },
        {
            lat: 537.555,
            lng: 201.524,
            title: ''
        },
        //Castles of Phoenix
        {
            lat: 822.272,
            lng: 95.142,
            title: ''
        },
        {
            lat: 850.661,
            lng: 150.54,
            title: ''
        },
        {
            lat: 892.964,
            lng: 56.218,
            title: ''
        },
        {
            lat: 896.254,
            lng: 172.963,
            title: ''
        },
        {
            lat: 911.453,
            lng: 112.675,
            title: ''
        },
        // Castles of Crab
        {
            lat: 140.075,
            lng: 684.959,
            title: ''
        },
        {
            lat: 75.359,
            lng: 788.749,
            title: ''
        },
        {
            lat: 122.892,
            lng: 840.118,
            title: ''
        },
        {
            lat: 194.41,
            lng: 868.027,
            title: ''
        },
        {
            lat: 264.104,
            lng: 920.717,
            title: ''
        },
        {
            lat: 382.42,
            lng: 935.396,
            title: ''
        },
        //Castles of Scorpions
        {
            lat: 344.199,
            lng: 563.175,
            title: ''
        },
        {
            lat: 368.252,
            lng: 658.525,
            title: ''
        },
        {
            lat: 304.903,
            lng: 430.496,
            title: ''
        },
        //Castles of Crane
        {
            lat: 577.474,
            lng: 466.211,
            title: ''
        },
        {
            lat: 520.831,
            lng: 558.598,
            title: ''
        },
        {
            lat: 558.666,
            lng: 609.437,
            title: ''
        },
        {
            lat: 633.915,
            lng: 651.351,
            title: ''
        },
        {
            lat: 426.628,
            lng: 948.573,
            title: ''
        },

        //Others
        {
            lat: 677.359,
            lng: 420.251,
            title: 'Otosan Uchi'
        },
        {
            lat: 488.236,
            lng: 304.169,
            title: 'Dragonfly Castle'
        },
        {
            lat: 585.192,
            lng: 296.711,
            title: 'Toshi Ranbo'
        },
        {
            lat: 760.66,
            lng: 897.686,
            title: 'Mantis Castle'
        },
        {
            lat: 709.76,
            lng: 326.689,
            title: ''
        },
        {
            lat: 262.418,
            lng: 533.195,
            title: ''
        },
        {
            lat: 468.182,
            lng: 690.504,
            title: ''
        },
        {
            lat: 493.202,
            lng: 741.3,
            title: ''
        },
        {
            lat: 444.129,
            lng: 805.167,
            title: ''
        }
    ]
}









export const players =  [
        {
            name: 'Asahi',
            clan: 'Lion',
            rank: 3,
            family: 'Akodo',
            school: 'Akodo',
            function: 'Imperial_family',
            xp: 10,
            xp_total: 100,
            feelings: {
                Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
                Michistujo: 'Blablabla',
                'Jean-Miqeng': 'skjjksds',
                Kasai: 'dsfseaw',
                Yukimori: 'asdsqqw'
            },
            rings: [
                [
                    {
                        Stamina: 3,
                        Willpower: 3
                    },
                    {
                        Reflexes: 3,
                        Awareness: 3
                    }
                ],
                [
                    {
                        Strength: 3,
                        Perception: 3
                    },
                    {
                        Agility: 4,
                        Intelligence: 3
                    }]
            ],
            sidePoints: {
                Honor: 7.5,
                Glory: 5,
                Status: 4.7,
                Taint: 0
            },
            Void: 3,
            skills: [
                {
                    schoolSkill: true,
                    skill: 'Étiquette',
                    rank: '1',
                    trait: 'Awareness',
                    abilities: [
                        'Spécialisation et Capacités de Maîtrise',
                        '+3 pts de réputation'
                    ]
                }
            ]
        },
        {
        name: 'Aki',
        clan: 'Scorpion',
        rank: 3,
        family: 'Shosuro',
        school: 'Shosuro',
        xp: 19,
        xp_total: 119,
        feelings: {
            Aki: 'Des liens friables, depuis le départ Aki-san me parait suspicieux',
            Michistujo: 'Blablabla',
            'Jean-Miqeng': 'skjjksds',
            Kasai: 'dsfseaw',
            Yukimori: 'asdsqqw'
        },
        rings: [[
            {
                Stamina: 3,
                Willpower: 2
            },
            {
                Reflexes: 4,
                Awareness: 4
            }],
            [{
                Strength: 2,
                Perception: 3},
                {
                    Agility: 3,
                    Intelligence: 3
                }]
        ],
        sidePoints: {
            Honor: 4.5,
            Glory: 4.5,
            Status: 3.0,
            Taint: 0.0
        },
        Void: 2,
        skills: [
            {
                schoolSkill: true,
                skill: 'Couteaux',
                rank: '3',
                trait: 'Agility',
                roll: '9g3',
                abilities: [
                    'Ø Malus avec main non directice',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Comédie',
                rank: '2',
                trait: 'Awareness',
                roll: '6g4',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Étiquette',
                rank: '4',
                trait: 'Awareness',
                roll: '9g4',
                abilities: [
                    'Courtoisie',
                    '+3 de réputation',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Discrétion',
                rank: '5',
                trait: 'Agility',
                roll: '9g3',
                abilities: [
                    'Furtivité',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Méditation',
                rank: '2',
                trait: 'Void',
                roll: '5g2',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Sincérité',
                rank: '3',
                trait: 'Awareness',
                roll: '8g4',
                abilities: [
                    'Tromperie',
                ]
            },
            {
                schoolSkill: true,
                skill: 'Enquête',
                rank: '4',
                trait: 'Perception',
                roll: '8g3',
                abilities: [
                    'Sens de l\'observation',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Athlétisme',
                rank: '1',
                trait: 'Agility',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Courtisanat',
                rank: '3',
                trait: 'Awareness',
                roll: '7g4',
                abilities: [
                    '+3 de réputation',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Equitation',
                rank: '1',
                trait: 'Agility',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Kyujutsu',
                rank: '1',
                trait: 'Reflexes',
                roll: '5g4',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Intimidation',
                rank: '1',
                trait: 'Strength',
                roll: '3g2',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Cérémonie du thé',
                rank: '1',
                trait: 'Void',
                roll: '3g2',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Iaijutsu',
                rank: '1',
                trait: 'Reflexes',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Contrefaçon',
                rank: '5',
                trait: 'Agility',
                abilities: [
                    'Sceau',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Art de la guerre',
                rank: '1',
                trait: 'Perception',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Art. Origami',
                rank: '1',
                trait: 'Agility',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Caligraphie',
                rank: '1',
                trait: 'Agility',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Héraldique',
                rank: '1',
                trait: 'Intelligence',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Scorpion',
                rank: '1',
                trait: 'Intelligence',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Ingénieurie',
                rank: '1',
                trait: 'Intelligence',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Dragon',
                rank: '1',
                trait: 'Intelligence',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Bushido',
                rank: '1',
                trait: 'Intelligence',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Histoire',
                rank: '1',
                trait: 'Intelligence',
                roll: '4g3',
                abilities: [
                    '',
                ]
            },
            {
                schoolSkill: false,
                skill: 'Con. Crabe',
                rank: '1',
                trait: 'Intelligence',
                roll: '4g3',
                abilities: [
                    'Jade',
                ]
            }
        ]
    }
];