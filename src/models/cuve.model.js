const Schema = require('mongoose').Schema;
const cuveSchema = new Schema({
  name: String,
  residence: { type: Schema.Types.ObjectId, ref: 'Residence', required: true },
  capacityLiters: Number,
  tareMassKg: Number // poids à vide
}, { timestamps: true });
module.exports = require('mongoose').model('Cuve', cuveSchema);
