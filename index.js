#!/usr/bin/env node

const ScrapperService = require("./src/services/itemScrapper");
const Utils = require("./src/services/utils");
const Args = require("./src/services/commandLineArgs");

if(!Args.search || !Args.cookie) {
    console.log("Verifique seus parâmetros.");
    if(!Args.search) {
        console.log("O parâmetro search é obrigatório.");
    }
    if(!Args.cookie) {
        console.log("O parâmetro cookie é obrigatório.");
    }
    return;
}

(async function () {
    try {
        const data = await ScrapperService.getPageInfo(
            Args.search,
            Args.minpage,
            Args.maxpage,
            Args.cookie
        );
        Utils.saveFileLocally(save, JSON.stringify(data));
    }catch(err) {
        console.log("Ocorreu um erro. Verifique seus parâmetros ou tente modificar os cookies");
    }
})();