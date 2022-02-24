#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';

const w = chalk.white;
const c = chalk.cyanBright;
const b = chalk.bold;
const m = chalk.hex('#FF5A89');

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "#ffffff"
};

const content = `
${b("Sampson Orson Jackson")}
${w("Full-stack .NET Developer + Angular")}

${w("Website")}            ${m("https://sampsonorson.com")}
${w("GitHub")}             ${m("https://github.com/dev-sampsonorson")}
${w("Twitter")}            ${m("https://twitter.com/sampsonorson")}
${w("LinkedIn")}           ${m("https://linkedin.com/in/sampsonorson")}
`;

const card = boxen(content, cardOptions);

console.log(card);