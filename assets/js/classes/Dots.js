export class Dots {
    createRandomDotes(dotes) {
        const dotesList = []
        for (let i = 0; i < dotes; i++) {
            dotesList.push(Math.floor(Math.random() * dotes))
        }

        return dotesList
    }
}