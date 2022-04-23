const service = require('./service');
const { BaseController } = require('../_commons');

class Controller extends BaseController {
  constructor(service) {
    super(service);
  }

  getWithPaging = async (req, res) => {
    res.status(200).json({ message: 'success' });
  };
}

module.exports = new Controller(service);
