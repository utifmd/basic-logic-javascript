let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

// let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let available = {sugar: 500, flour: 2000, milk: 2000};

// let recipe = {"oil":4,"cream":3,"apples":4}
// let available = {"flour":2,"eggs":3,"oil":19,"milk":7,"apples":4,"sugar":4,"cream":13,"pears":2,"butter":10,"nuts":4,"chocolate":4,"cocoa":3,"crumbles":20}
// expected 0 to equal 1

const response = _operate(recipe, available)
console.log(response)

function _operate(recipe = {}, available = {}) {
    let result = []
    const recipeEntries = Object.entries(recipe), availableEnries = Object.entries(available)

    if (recipeEntries.length > availableEnries.length) return 0
    for (let mRecipe of recipeEntries) {
        const bothKey = mRecipe[0]

        result.push(Math.floor(available[bothKey] / recipe[bothKey]))
    }
    let output = result[0]
    for (let i = 0; i < result.length; i++) {
        if(output > result[i]) output = result[i]
    }
    return output
}