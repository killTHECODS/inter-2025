const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  doador: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
    min: 0.01,
  },
  dataDoacao: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Dinheiro', 'Alimentos', 'Roupas', 'Outros'],
    required: true,
  },
  observacoes: String,
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
