const Obj = function() {

    const ExactMatch = {title: 'Exact Match', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'Bill Gates', input2: 'remove'};
    const OR = {title: 'OR', desc: 'some description goes here', img: 'some image url goes here', placeholder1: 'Gates', joiner: 'OR', placeholder2: 'Jobs',input2: ''};

    let modArr = [];
    return {
        ExactMatch: ExactMatch,
        OR: OR,
        modArr: modArr,
    }
}();

module.exports = Obj;