const Obj = function() {
    const GeneralMatch = {title: 'General Match', desc: 'Matches search terms to generic matches', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/GeneralMatch.png?raw=true/', placeholder1: 'shoes', input2: 'remove'};
    const ExactMatch = {title: 'Exact Match', desc: 'Only verbatim results', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/ExactMatch.png?raw=true/', placeholder1: 'cheesy garlic bread', input2: 'remove'};
    const OR = {title: 'Or', desc: 'Find results for either', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/Or.png?raw=true/', placeholder1: 'Gates', joiner: 'OR', placeholder2: 'Jobs',input2: ''};
    const DontInclude = {title: "Don't Include", desc: 'Remove results with these words', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/DontInclude.png?raw=true/', placeholder1: 'Microsoft', input2: 'remove'};
    const SiteSearch = {title: 'Site Search', desc: 'Only results from this site', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/SiteSearch.png?raw=true/', placeholder1: 'amazon.com', input2: 'remove'};
    const FileType = {title: 'File Type', desc: 'Results with this file type', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/FileType.png?raw=true/', placeholder1: 'pdf', input2: 'remove'};
    const RelatedSite = {title: 'Related Sites', desc: 'Results from sites in same category', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/RelatedSite.png?raw=true/', placeholder1: 'amazon.com', input2: 'remove'};
    const LinkedSite = {title: 'Linked Sites', desc: 'Results from sites linked to this one', img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/LinkedSite.png?raw=true/', placeholder1: 'amazon.com', input2: 'remove'};

    let boolArr = [
        {name:'Safe Search', id: 'safe', value: false, url: 'safe=active'},
        {name:'New Window', id: 'newWindow', value: false, url: 'newwindow=1'},
        {name:'Personalized Search Off', id: 'personalizedSearch', value: false, url: 'pws=0'},
        {name:'AdWords DB Disconnected', id: 'adTest', value: false, url: 'adtest=off'},
    ];
    let modArr = [];

    return {
        GeneralMatch: GeneralMatch,
        ExactMatch: ExactMatch,
        OR: OR,
        DontInclude: DontInclude,
        SiteSearch: SiteSearch,
        FileType: FileType,
        RelatedSite: RelatedSite,
        LinkedSite: LinkedSite,

        boolArr: boolArr,
        modArr: modArr
    }
}();

module.exports = Obj;