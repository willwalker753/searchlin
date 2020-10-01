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
        display: `${string1} or ${string2}`,
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
        display: `Results from ${string}`,
        url: `as_sitesearch=${string}`
    }
    return obj;
}
function FileType(string) {
    if(string.charAt(0) === '.') {
        string = string.slice(1, string.length);
    }
    let obj = {
        display: `Only .${string} results`,
        url: `as_filetype=${string}`
    }
    return obj;
}
function RelatedSite(string) {
    let obj = {
        display: `Related to ${string}`,
        url: `as_rq=${string}`
    }
    return obj;
}
function LinkedSite(string) {
    let obj = {
        display: `Has link to ${string}`,
        url: `as_lq=${string}`
    }
    return obj;
}
function dateChange(str) {
    let url;
    switch(str) {
        case 'all':
            str = 'All Time';
            url = '';
        break;
        case 'day':
            str = 'Within Last Day';
            url = 'as_qdr=d';
        break;
        case 'week':
            str = 'Within Last Week';
            url = 'as_qdr=w';
        break;
        case 'month1':
            str = 'Within Last Month';
            url = 'as_qdr=m';
        break;
        case 'month3':
            str = 'Within Last 3 Months';
            url = 'as_qdr=m3';
        break;
        case 'month6':
            str = 'Within Last 6 Months';
            url = 'as_qdr=m6';
        break;
        case 'year1':
            str = 'Within Last Year';
            url = 'as_qdr=y';
        break;
        case 'year2':
            str = 'Within Last 2 Years';
            url = 'as_qdr=m24';
        break;
        case 'year5':
            str = 'Within Last 5 Years';
            url = 'as_qdr=60';
        break;
        default:
        break;
    }
    return {display: str, url: url};
}


exports.GeneralMatch = GeneralMatch;
exports.ExactMatch = ExactMatch;
exports.OR = OR;
exports.DontInclude = DontInclude;
exports.SiteSearch = SiteSearch;
exports.FileType = FileType;
exports.RelatedSite = RelatedSite;
exports.LinkedSite = LinkedSite;
exports.dateChange = dateChange;