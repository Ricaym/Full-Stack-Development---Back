const Schema = require('mongoose').Schema;
const residenceSchema = new Schema({
  name: String,
  address: String,
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
module.exports = require('mongoose').model('Residence', residenceSchema);
