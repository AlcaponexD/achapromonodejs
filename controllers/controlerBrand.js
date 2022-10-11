const brandService = require("../services/BrandService");

module.exports = {
  async create(req, res) {
    var brands = await brandService.create(req, res);
    return res.status(200).send(brands);
  },
  async index(req, res) {
    var brands = await brandService.index(req, res);
    return res.status(200).send(brands);
  },
};
