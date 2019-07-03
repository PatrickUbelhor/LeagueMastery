
export function process(mastery, name) {
    return {
        name: name,
        level: mastery.championLevel,
        points: mastery.championPoints
    }
}
