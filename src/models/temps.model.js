const Schema = require('mongoose').Schema;
const tempsSchema = new Schema({
  residence: { type: Schema.Types.ObjectId, ref: 'Residence', required: true },
  date: { type: Date, required: true },
  temperatureC: Number,
  notes: String
}, { timestamps: true });
module.exports = require('mongoose').model('Temps', tempsSchema);
