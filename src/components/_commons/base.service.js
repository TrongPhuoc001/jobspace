const mongoose = require('mongoose');

class Service {
  constructor(model) {
    this.model = model;
  }

  findAll = async () => {
    return this.model.find().lean();
  };

  findWithPaging = async (page, limit) => {
    return this.model
      .find({ isVisible: true })
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(limit)
      .lean();
  };

  findById = async (id) => {
    return this.model.findById(id).lean();
  };

  findOne = async (q) => {
    return this.model.findOne(q).lean();
  };

  findMany = async (q) => {
    return this.model.find(q).lean();
  };

  create = async (info) => {
    const newDocument = new this.model(info);

    const retData = await newDocument.save();

    return retData;
  };

  update = async (id, info) => {
    const newDocument = await this.model.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(id),
      },
      {
        $set: info,
      },
      { new: true }
    );

    return newDocument;
  };

  delete = async (id) => {
    const data = await this.model.findOneAndDelete({
      _id: mongoose.Types.ObjectId(id),
    });

    return data;
  };
}

module.exports = Service;
