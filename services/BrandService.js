const brand = require("../Models/brand")
const helper = require("../helper/helper")

module.exports = {
  async create(req, res) {

    //validation

    if(!req.body.name){
      return res.status(422).send({
        error: true,
        message : "input name is required"
      })
    }

    const data = {
      name: req.body.name,
      avatar: req.body.avatar,
    };

    data.slug = helper.slug(data.name)

    try {
      var brands = await brand.create(data);
      return brands
    } catch (error) {
      return {
        error: true,
        message: error.message
      }
    }
  },
};
