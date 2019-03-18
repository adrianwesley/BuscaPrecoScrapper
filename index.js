#!/usr/bin/env node

const ScrapperService = require("./src/services/itemScrapper");
const Utils = require("./src/services/utils");

process.argv = process.argv.slice(2);
let args = { search: null, minpage: 1, maxpage: 10, save: null, cookie: null };

Object.keys(args).forEach(key => {
    const value = process.argv.find(x => x.split("=")[0] === key);
    if(value) args[key] = value.split("=")[1];
});

const minpage = Number(args.minpage);
const maxpage = Number(args.maxpage);
const search = String(args.search);
const save = String(args.save);
const cookie = args.cookie;

(async function () {
    try {
        const data = await ScrapperService.getPageInfo(search, minpage, maxpage, cookie);
        Utils.saveFileLocally(save, JSON.stringify(data));
    }catch(err) {
        console.log("Ocorreu um erro. Verifique seus parâmetros ou tente modificar os cookies")
    }
})();