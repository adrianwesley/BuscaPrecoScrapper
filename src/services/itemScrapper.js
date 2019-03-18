const rp = require('request-promise');
const ScrapperConfig = require("../configs/scrapperConfig");
const cheerio = require('cheerio');
const utils = require("./utils");

class ItemScrapper {
    async getPageInfo(search, minpage, maxpage, cookie) {
        return new Promise(async (resolve, reject) => {
                
            let info = {
                search,
                minpage,
                maxpage,
                cookie,
                data: []
            }

            await utils.asyncForEach(new Array(maxpage), async (item, index, array) => {
                const page = index + 1;
                const options = {
                    method: 'POST',
                    uri: `${ScrapperConfig.url}/${page}`,
                    encoding: 'latin1',
                    headers: {
                        "Cookie": cookie || ScrapperConfig.cookie
                    },
                    formData: {
                        descricaoProd: "Cebola"
                    }
                }
                
                try {
                    let html = await rp(options);
                    const itemInfo = this.getItemInfo("div.card.small.p.hoverable", html);
                    info.data = info.data.concat(itemInfo);
                }catch(err) {
                    reject(err);
                }
            });
            resolve(info);
        });
    }
    getItemInfo(itemClass, html) {
        const $ = cheerio.load(html);

        let items = [];
        $(itemClass).each((index, element) => {
            items.push({
                name: $(".card-title b", element).text(),
                price: $(".tb-valor-25 b", element).text(),
                updatedAt: $(".tb-valor-10", element).text(),
                locationName: $(".truncate.tooltipped.padding10 b", element).text(),
                locationAddress: $(".valign-wrapper div span", element).text()
            });
        });

        return items;
    }
}

module.exports = new ItemScrapper();