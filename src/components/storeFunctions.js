function GeneralMatch(string) {
    let obj = {
        display: `${string}`,
        url: `q=${string}`
    }
    return obj;
}
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
function DontInclude(string) {
    let obj = {
        display: `-${string}`,
        url: `as_eq=${string}`
    }
    return obj;
}
function SiteSearch(string) {
    let obj = {
        display: `results from ${string}`,
        url: `as_sitesearch=${string}`
    }
    return obj;
}

exports.GeneralMatch = GeneralMatch;
exports.ExactMatch = ExactMatch;
exports.OR = OR;
exports.DontInclude = DontInclude;
exports.SiteSearch = SiteSearch;