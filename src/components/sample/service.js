const model = require('./model');
const BaseService = require('../_commons/base.service');

class Service extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = new Service(model);
