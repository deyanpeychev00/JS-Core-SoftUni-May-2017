/**
 * Created by Deyan Peychev on 27-May-17.
 */
function solve(args) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    function makeTemplate(question, answer) {
        let template = '  <question>\n' + `    ${question}\n` + '  </question>\n' + '  <answer>\n' + `    ${answer}\n` + '  </answer>\n';

        return template;
    }
    for (let i = 0; i < args.length; i+=2) {
        let question = args[i],
            answer = args[i+1];

            html+=makeTemplate(question, answer);
    }
    html+='</quiz>';
    console.log(html);
}
/*
solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);
solve(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

);*/
