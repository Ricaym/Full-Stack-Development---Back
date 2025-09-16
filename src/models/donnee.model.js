const Schema = require('mongoose').Schema;
const donneeSchema = new Schema({
  cuve: { type: Schema.Types.ObjectId, ref: 'Cuve', required: true },
  massKg: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = require('mongoose').model('Donnee', donneeSchema);
