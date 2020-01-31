const petMaker = (petName, petSpecies, petBreed) => {
    return {
        "petName": petName,
        "petSpecies": petSpecies,
        "petBreed": petBreed
    }
}

const melba = petMaker("Melba", "Dog", "Staffordshire Terrier")
const cormac = petMaker("Cormac", "Dog", "Lab/Shepherd Mix")
const underdog = petMaker("UnderDog", "Dog", "Champion of Justice")

const bowWowKennels = [melba, cormac, underdog]

console.log(bowWowKennels)