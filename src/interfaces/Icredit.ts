export interface ICredit {
  nombres: string;
  apellidos: string;
  correoElectronico: string;
  numeroTelefono: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  departamento: string;
  municipio: string;
  direccion: string;
  ingresosMensuales: string;
  selfie: File | Blob;
  documentoIdentidad: (File | Blob)[];
}
