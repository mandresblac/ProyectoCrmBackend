import { Model, Schema, model } from "mongoose";

// Esquema o tipos de datos
const UsuarioSchema = new Schema({
  nombre: { type: String, required: true  },
  email: { type: String, required: true, unique: true },
  direccion: { type: String},
  telefono: { type: String},
  tipoDocumento: { type: String, required: true },
  numeroDocumento: { type: String, required: true,unique: true },
  password: { type: String, required: true },
  oportunidades: { type: String},
  rol: { type: String, required: true, default: "USUARIO" }, // Administrador, visitante, lector, auditor
  estado: { type: Boolean, required: true, default: true },
  createdAt: { type:Date, default: Date.now() }
});

const UsuarioModel: Model<any> = model("usuario", UsuarioSchema);

export default UsuarioModel;