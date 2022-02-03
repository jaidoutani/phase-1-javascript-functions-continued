// defines saturdayFun function declaration as specified
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// defines mondayWork function expression as specified
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

// defines wrapAdjective function according to the specification
function wrapAdjective(adj = "*") {
    return function innerFunction(other = "You are ") {
        return `You are ${adj}${other}${adj}!`
    }
} 

//console.log(wrapAdjective())