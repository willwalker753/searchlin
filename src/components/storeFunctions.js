function ExactMatch(string) {
    let obj = {
        display: `"${string}"`,
        url: `as_epq=${string}`
    }
    return obj;
}
function OR(string1, string2) {
    let obj = {
        display: `${string1} OR ${string2}`,
        url: `as_oq=${string1}+${string2}`
    }
    return obj;
}

exports.ExactMatch = ExactMatch;
exports.OR = OR;