export interface UserDetail {
  _id: string;
  nombres: string;
  apellidos: string;
  correoElectronico: string;
  numeroTelefono: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  departamento: string;
  municipio: string;
  direccion: string;
  ingresosMensuales: number;
  selfiePath: string;
  documentoIdentidadPath: string[];
  createdAt: string;
  updatedAt: string;
}
