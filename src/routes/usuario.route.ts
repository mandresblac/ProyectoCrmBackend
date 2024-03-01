import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { crearUsuario } from "../controllers/usuario.controller";

// path: /api/v1/usuario
const router = Router();

router.post("/", 
[
  check("nombre", "El nombre es obligatorio").not().isEmpty(), 
  check("email", "El email es obligatotio").not().isEmpty().isEmail(),
  check("tipoDocumento", "El tipo documento es obligatorio").not().isEmpty(),
  check("numeroDocumento", "El número documento es obligatorio").not().isEmpty(),
  check("login", "El número login es obligatorio").not().isEmpty(),
  check("password", "El password es obligatorio").not().isEmpty(),
  validateFields
], 
crearUsuario);

// Exportamos por default la constante router
export default router;