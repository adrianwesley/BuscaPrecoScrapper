const ScrapperService = require("../services/itemScrapper");

class ItemController {
    async index(req, res) {
        const { search } = req.body;
        const { page } = req.params;

        const data = await ScrapperService.getPageInfo(search, page);

        res.json(data);
    }
}

module.exports = new ItemController();