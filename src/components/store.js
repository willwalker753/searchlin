const Obj = function() {
    const GeneralMatch = {title: 'General Match', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'shoes', input2: 'remove'};
    const ExactMatch = {title: 'Exact Match', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'cheesy garlic bread', input2: 'remove'};
    const OR = {title: 'OR', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'Gates', joiner: 'OR', placeholder2: 'Jobs',input2: ''};
    const DontInclude = {title: "Don't Include", desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'Microsoft', input2: 'remove'};
    const SiteSearch = {title: 'Site Search', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'amazon.com', input2: 'remove'};

    let modArr = [];

    return {
        GeneralMatch: GeneralMatch,
        ExactMatch: ExactMatch,
        OR: OR,
        DontInclude: DontInclude,
        SiteSearch: SiteSearch,

        modArr: modArr
    }
}();

module.exports = Obj;