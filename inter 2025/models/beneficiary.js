const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
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
  dataNascimento: {
    type: Date,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: String,
  bairro: String,
  cidade: String,
  estado: String,
  cep: String,
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    default: 'Ativo',
  },
  observacoes: String,
}, { timestamps: true });

module.exports = mongoose.model('Beneficiary', beneficiarySchema);
