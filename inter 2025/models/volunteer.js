const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minlength: 3,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dataCadastro: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    default: 'Ativo',
  },
  observacoes: String,
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
