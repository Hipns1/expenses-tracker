export const API_URL = import.meta.env.VITE_API_URL as string | undefined

export const FORM_ERRORS_MSGS = {
  EMAIL: 'Correo invalido',
  FIELDS_REQUIRED: 'Los campos deben ser diligenciados para continuar*',
  INVALID_NUMBER: 'Valor invalido',
  ONLY_LETTERS: 'Solo puede ingresar letras',
  ONLY_NUMBER: 'Solo puede ingresar números',
  PASSWORD_NO_MATCH: 'Las contraseñas no coinciden',
  PASSWORD_CANNOT_BE_SAME_AS_CURRENT: 'La contraseña no puede ser igual a la actual',
  REQUIRED: 'El campo es obligatorio',
  UNSELECT: 'Seleccione una opción'
}

export const SERVICES_MSGS = {
  ERROR: 'Ocurrió un error. Inténtelo nuevamente; si el error persiste, contacte con el administrador.',
  SAME_CAMPAIGN: 'Ya existe un campaña con este nombre.',
  WITHOUT_PHONE: 'Este usuario no tiene un número de teléfono asociado, por lo que no es posible gestionar llamadas.'
}
