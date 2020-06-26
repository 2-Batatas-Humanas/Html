animal = {
    huge: {

    },
    large: {

    },
    medium: {

    },
    small: {
        size: 0.5,
        perception: 12,
        defense: 13,
        health: 5,
        strength: 8,
        agility: 13,
        intellect: 6,
        will: 8,
        speed: 10,
        attackOptions: {
            "Arma Natural": {
                type: "Corpo a Corpo",
                attack: "+3",
                damage: "1d6+1"
            }
        }
    },
    tiny: {
        size: 0.25,
        perception: 14,
        defense: 14,
        health: 1,
        strength: 5,
        agility: 14,
        intellect: 6,
        will: 8,
        speed: 10,
        attackOptions: {
            "Arma Natural": {
                type: "Corpo a Corpo",
                attack: "+4 com 2 perdições",
                damage: "1"
            }
        },
        specialAttack: {
            "Distrair": {
                description: "Uma criatura alvo, ao alcance do animal, deve fazer uma jogada de desafio de Vontade. Caso fracasse, ela fica debilitada por 1 rodada ou até que não esteja mais ao alcance do animal."
            }
        }
    },
    swarm: {

    }
}