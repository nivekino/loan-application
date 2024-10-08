const departamentos: { label: string; value: string }[] = [
  { label: "Ahuachapán", value: "Ahuachapán" },
  { label: "Santa Ana", value: "Santa_Ana" },
  { label: "Sonsonate", value: "Sonsonate" },
  { label: "Chalatenango", value: "Chalatenango" },
  { label: "La Libertad", value: "La_Libertad" },
  { label: "San Salvador", value: "San_Salvador" },
  { label: "Cuscatlán", value: "Cuscatlán" },
  { label: "La Paz", value: "La_Paz" },
  { label: "Cabañas", value: "Cabañas" },
  { label: "San Vicente", value: "San_Vicente" },
  { label: "Usulután", value: "Usulután" },
  { label: "San Miguel", value: "San_Miguel" },
  { label: "Morazán", value: "Morazán" },
  { label: "La Unión", value: "La_Unión" },
];

const municipios: { [key: string]: { label: string; value: string }[] } = {
  Ahuachapán: [
    { label: "Ahuachapán", value: "Ahuachapán" },
    { label: "Apaneca", value: "Apaneca" },
    { label: "Atiquizaya", value: "Atiquizaya" },
    { label: "Concepción de Ataco", value: "Concepción_de_Ataco" },
    { label: "El Refugio", value: "El_Refugio" },
    { label: "Guaymango", value: "Guaymango" },
    { label: "Jujutla", value: "Jujutla" },
    { label: "San Francisco Menéndez", value: "San_Francisco_Menéndez" },
    { label: "San Lorenzo", value: "San_Lorenzo" },
    { label: "San Pedro Pajonal", value: "San_Pedro_Pajonal" },
    { label: "Tacuba", value: "Tacuba" },
    { label: "Turín", value: "Turín" },
  ],
  Santa_Ana: [
    { label: "Candelaria de la Frontera", value: "Candelaria_de_la_Frontera" },
    { label: "Chalchuapa", value: "Chalchuapa" },
    { label: "Coatepeque", value: "Coatepeque" },
    { label: "El Congo", value: "El_Congo" },
    { label: "El Porvenir", value: "El_Porvenir" },
    { label: "Masahuat", value: "Masahuat" },
    { label: "Metapán", value: "Metapán" },
    { label: "San Antonio Pajonal", value: "San Antonio Pajonal" },
    { label: "San Sebastián Salitrillo", value: "San Sebastián_Salitrillo" },
    { label: "Santa Ana", value: "Santa Ana" },
    { label: "Santa Rosa Guachipilín", value: "Santa_Rosa_Guachipilín" },
    { label: "Santiago de la Frontera", value: "Santiagode_la_Frontera" },
    { label: "Texistepeque", value: "Texistepeque" },
  ],
  Sonsonate: [
    { label: "Acajutla", value: "Acajutla" },
    { label: "Armenia", value: "Armenia" },
    { label: "Caluco", value: "Caluco" },
    { label: "Cuisnahuat", value: "Cuisnahuat" },
    { label: "Izalco", value: "Izalco" },
    { label: "Juayúa", value: "Juayúa" },
    { label: "Nahuizalco", value: "Nahuizalco" },
    { label: "Nahulingo", value: "Nahulingo" },
    { label: "Salcoatitán", value: "Salcoatitán" },
    { label: "San Antonio del Monte", value: "San_Antonio_del_Monte" },
    { label: "San Julián", value: "San_Julián" },
    { label: "Santa Catarina Masahuat", value: "Santa_Catarina_Masahuat" },
    { label: "Santa Isabel Ishuatán", value: "Santa_Isabel_Ishuatán" },
    { label: "Santo Domingo de Guzmán", value: "Santo_Domingo_de_Guzmán" },
    { label: "Sonsonate", value: "Sonsonate" },
    { label: "Sonzacate", value: "Sonzacate" },
  ],
  Chalatenango: [
    { label: "Agua Caliente", value: "Agua_Caliente" },
    { label: "Arcatao", value: "Arcatao" },
    { label: "Azacualpa", value: "Azacualpa" },
    { label: "Citalá", value: "Citalá" },
    { label: "Comalapa", value: "Comalapa" },
    { label: "Concepción Quezaltepeque", value: "Concepción_Quezaltepeque" },
    { label: "Dulce Nombre de María", value: "Dulce_Nombre_de_María" },
    { label: "El Carrizal", value: "El_Carrizal" },
    { label: "El Paraíso", value: "El_Paraíso" },
    { label: "La Laguna", value: "La_Laguna" },
    { label: "La Palma", value: "La_Palma" },
    { label: "La Reina", value: "La_Reina" },
    { label: "Las Vueltas", value: "Las_Vueltas" },
    { label: "Nombre de Jesús", value: "Nombre_de_Jesús" },
    { label: "Nueva Concepción", value: "Nueva_Concepción" },
    { label: "Nueva Trinidad", value: "Nueva_Trinidad" },
    { label: "Ojos de Agua", value: "Ojos_de_Agua" },
    { label: "Potonico", value: "Potonico" },
    { label: "San Antonio de la Cruz", value: "San_Antonio_de_la_Cruz" },
    { label: "San Antonio Los Ranchos", value: "San_Antonio_Los_Ranchos" },
    { label: "San Fernando", value: "San_Fernando" },
    { label: "San Francisco Lempa", value: "San_Francisco_Lempa" },
    { label: "San Francisco Morazán", value: "San_Francisco_Morazán" },
    { label: "San Ignacio", value: "San_Ignacio" },
    { label: "San Isidro Labrador", value: "San_Isidro_Labrador" },
    { label: "San Luis del Carmen", value: "San_Luis_del_Carmen" },
    { label: "San Miguel de Mercedes", value: "San_Miguel_de_Mercedes" },
    { label: "San Rafael", value: "San_Rafael" },
    { label: "Santa Rita", value: "Santa_Rita" },
    { label: "Tejutla", value: "Tejutla" },
  ],
  La_Libertad: [
    { label: "Antiguo Cuscatlán", value: "Antiguo_Cuscatlán" },
    { label: "Chiltiupán", value: "Chiltiupán" },
    { label: "Ciudad Arce", value: "Ciudad_Arce" },
    { label: "Colón", value: "Colón" },
    { label: "Comasagua", value: "Comasagua" },
    { label: "Huizúcar", value: "Huizúcar" },
    { label: "Jayaque", value: "Jayaque" },
    { label: "Jicalapa", value: "Jicalapa" },
    { label: "La Libertad", value: "La_Libertad" },
    { label: "Santa Tecla", value: "Santa_Tecla" },
    { label: "Nuevo Cuscatlán", value: "Nuevo_Cuscatlán" },
    { label: "San Juan Opico", value: "San_Juan_Opico" },
    { label: "Quezaltepeque", value: "Quezaltepeque" },
    { label: "Sacacoyo", value: "Sacacoyo" },
    { label: "San José Villanueva", value: "San_José_Villanueva" },
    { label: "San Matías", value: "San_Matías" },
    { label: "San Pablo Tacachico", value: "San_Pablo_Tacachico" },
    { label: "Talnique", value: "Talnique" },
    { label: "Tamanique", value: "Tamanique" },
    { label: "Teotepeque", value: "Teotepeque" },
    { label: "Tepecoyo", value: "Tepecoyo" },
    { label: "Zaragoza", value: "Zaragoza" },
  ],
  San_Salvador: [
    { label: "Aguilares", value: "Aguilares" },
    { label: "Apopa", value: "Apopa" },
    { label: "Ayutuxtepeque", value: "Ayutuxtepeque" },
    { label: "Cuscatancingo", value: "Cuscatancingo" },
    { label: "Delgado", value: "Delgado" },
    { label: "El Paisnal", value: "El_Paisnal" },
    { label: "Guazapa", value: "Guazapa" },
    { label: "Ilopango", value: "Ilopango" },
    { label: "Mejicanos", value: "Mejicanos" },
    { label: "Nejapa", value: "Nejapa" },
    { label: "Panchimalco", value: "Panchimalco" },
    { label: "Rosario de Mora", value: "Rosario_de_Mora" },
    { label: "San Marcos", value: "San_Marcos" },
    { label: "San Martín", value: "San_Martín" },
    { label: "San Salvador", value: "San_Salvador" },
    { label: "Santiago Texacuangos", value: "Santiago_Texacuangos" },
    { label: "Santo Tomás", value: "Santo_Tomás" },
    { label: "Soyapango", value: "Soyapango" },
    { label: "Tonacatepeque", value: "Tonacatepeque" },
  ],
  Cuscatlán: [
    { label: "Candelaria", value: "Candelaria" },
    { label: "Cojutepeque", value: "Cojutepeque" },
    { label: "El Carmen", value: "El_Carmen" },
    { label: "El Rosario", value: "El_Rosario" },
    { label: "Monte San Juan", value: "Monte_San_Juan" },
    { label: "Oratorio de Concepción", value: "Oratorio_de_Concepción" },
    { label: "San Bartolomé Perulapía", value: "San_Bartolomé_Perulapía" },
    { label: "San Cristóbal", value: "San_Cristóbal" },
    { label: "San José Guayabal", value: "San_José_Guayabal" },
    { label: "San Pedro Perulapán", value: "San_Pedro_Perulapán" },
    { label: "San Rafael Cedros", value: "San_Rafael_Cedros" },
    { label: "Santa Cruz Analquito", value: "Santa_Cruz_Analquito" },
    { label: "Santa Cruz Michapa", value: "Santa_Cruz_Michapa" },
    { label: "Suchitoto", value: "Suchitoto" },
    { label: "Tenancingo", value: "Tenancingo" },
  ],
  La_Paz: [
    { label: "Cuyultitán", value: "Cuyultitán" },
    { label: "El Rosario", value: "El_Rosario" },
    { label: "Jerusalén", value: "Jerusalén" },
    { label: "Mercedes La Ceiba", value: "Mercedes_La_Ceiba" },
    { label: "Olocuilta", value: "Olocuilta" },
    { label: "Paraíso de Osorio", value: "Paraíso_de_Osorio" },
    { label: "San Antonio Masahuat", value: "San_Antonio_Masahuat" },
    { label: "San Emigdio", value: "San_Emigdio" },
    { label: "San Francisco Chinameca", value: "San_Francisco_Chinameca" },
    { label: "San Pedro Masahuat", value: "San_Pedro_Masahuat" },
    { label: "San Juan Nonualco", value: "San_Juan_Nonualco" },
    { label: "San Juan Talpa", value: "San_Juan_Talpa" },
    { label: "San Juan Tepezontes", value: "San_Juan_Tepezontes" },
    { label: "San Luis La Herradura", value: "San_Luis_La_Herradura" },
    { label: "San Luis Talpa", value: "San_Luis_Talpa" },
    { label: "San Miguel Tepezontes", value: "San_Miguel_Tepezontes" },
    { label: "San Pedro Nonualco", value: "San_Pedro_Nonualco" },
    { label: "San Rafael Obrajuelo", value: "San_Rafael_Obrajuelo" },
    { label: "Santa María Ostuma", value: "Santa_María_Ostuma" },
    { label: "Santiago Nonualco", value: "Santiago_Nonualco" },
    { label: "Tapalhuaca", value: "Tapalhuaca" },
    { label: "Zacatecoluca", value: "Zacatecoluca" },
  ],
  Cabañas: [
    { label: "Cinquera", value: "Cinquera" },
    { label: "Dolores", value: "Dolores" },
    { label: "Guacotecti", value: "Guacotecti" },
    { label: "Ilobasco", value: "Ilobasco" },
    { label: "Jutiapa", value: "Jutiapa" },
    { label: "San Isidro", value: "San_Isidro" },
    { label: "Sensuntepeque", value: "Sensuntepeque" },
    { label: "Tejutepeque", value: "Tejutepeque" },
    { label: "Victoria", value: "Victoria" },
  ],
  San_Vicente: [
    { label: "Apastepeque", value: "Apastepeque" },
    { label: "Guadalupe", value: "Guadalupe" },
    { label: "San Cayetano Istepeque", value: "San_Cayetano_Istepeque" },
    { label: "San Esteban Catarina", value: "San_Esteban_Catarina" },
    { label: "San Ildefonso", value: "San_Ildefonso" },
    { label: "San Lorenzo", value: "San_Lorenzo" },
    { label: "San Sebastián", value: "San_Sebastián" },
    { label: "San Vicente", value: "San_Vicente" },
    { label: "Santa Clara", value: "Santa_Clara" },
    { label: "Santo Domingo", value: "Santo_Domingo" },
    { label: "Tecoluca", value: "Tecoluca" },
    { label: "Tepetitán", value: "Tepetitán" },
    { label: "Verapaz", value: "Verapaz" },
  ],
  Usulután: [
    { label: "Alegría", value: "Alegría" },
    { label: "Berlín", value: "Berlín" },
    { label: "California", value: "California" },
    { label: "Concepción Batres", value: "Concepción_Batres" },
    { label: "El Triunfo", value: "El_Triunfo" },
    { label: "Ereguayquín", value: "Ereguayquín" },
    { label: "Estanzuelas", value: "Estanzuelas" },
    { label: "Jiquilisco", value: "Jiquilisco" },
    { label: "Jucuapa", value: "Jucuapa" },
    { label: "Jucuarán", value: "Jucuarán" },
    { label: "Mercedes Umaña", value: "Mercedes_Umaña" },
    { label: "Nueva Granada", value: "Nueva_Granada" },
    { label: "Ozatlán", value: "Ozatlán" },
    { label: "Puerto El Triunfo", value: "Puerto_El_Triunfo" },
    { label: "San Agustín", value: "San_Agustín" },
    { label: "San Buenaventura", value: "San_Buenaventura" },
    { label: "San Dionisio", value: "San_Dionisio" },
    { label: "San Francisco Javier", value: "San_Francisco_Javier" },
    { label: "Santa Elena", value: "Santa_Elena" },
    { label: "Santa María", value: "Santa_María" },
    { label: "Santiago de María", value: "Santiago_de_María" },
    { label: "Tecapán", value: "Tecapán" },
    { label: "Usulután", value: "Usulután" },
  ],
  San_Miguel: [
    { label: "Carolina", value: "Carolina" },
    { label: "Chapeltique", value: "Chapeltique" },
    { label: "Chinameca", value: "Chinameca" },
    { label: "Chirilagua", value: "Chirilagua" },
    { label: "Ciudad Barrios", value: "Ciudad_Barrios" },
    { label: "Comacarán", value: "Comacarán" },
    { label: "El Tránsito", value: "El_Tránsito" },
    { label: "Lolotique", value: "Lolotique" },
    { label: "Moncagua", value: "Moncagua" },
    { label: "Nueva Guadalupe", value: "Nueva_Guadalupe" },
    { label: "Nuevo Edén de San Juan", value: "Nuevo_Edén_de_San_Juan" },
    { label: "Quelepa", value: "Quelepa" },
    { label: "San Antonio", value: "San_Antonio" },
    { label: "San Gerardo", value: "San_Gerardo" },
    { label: "San Jorge", value: "San_Jorge" },
    { label: "San Luis de la Reina", value: "San_Luis_de_la_Reina" },
    { label: "San Miguel", value: "San_Miguel" },
    { label: "San Rafael Oriente", value: "San_Rafael_Oriente" },
    { label: "Sesori", value: "Sesori" },
    { label: "Uluazapa", value: "Uluazapa" },
  ],
  Morazán: [
    { label: "Arambala", value: "Arambala" },
    { label: "Cacaopera", value: "Cacaopera" },
    { label: "Chilanga", value: "Chilanga" },
    { label: "Corinto", value: "Corinto" },
    { label: "Delicias de Concepción", value: "Delicias_de_Concepción" },
    { label: "El Divisadero", value: "El_Divisadero" },
    { label: "El Rosario", value: "El_Rosario" },
    { label: "Gualococti", value: "Gualococti" },
    { label: "Guatajiagua", value: "Guatajiagua" },
    { label: "Joateca", value: "Joateca" },
    { label: "Jocoaitique", value: "Jocoaitique" },
    { label: "Jocoro", value: "Jocoro" },
    { label: "Lolotiquillo", value: "Lolotiquillo" },
    { label: "Meanguera", value: "Meanguera" },
    { label: "Osicala", value: "Osicala" },
    { label: "Perquín", value: "Perquín" },
    { label: "San Carlos", value: "San_Carlos" },
    { label: "San Fernando", value: "San_Fernando" },
    { label: "San Francisco Gotera", value: "San_Francisco_Gotera" },
    { label: "San Isidro", value: "San_Isidro" },
    { label: "San Simón", value: "San_Simón" },
    { label: "Sensembra", value: "Sensembra" },
    { label: "Sociedad", value: "Sociedad" },
    { label: "Torola", value: "Torola" },
    { label: "Yamabal", value: "Yamabal" },
    { label: "Yoloaiquín", value: "Yoloaiquín" },
  ],
  La_Unión: [
    { label: "Anamorós", value: "Anamorós" },
    { label: "Bolívar", value: "Bolívar" },
    { label: "Concepción de Oriente", value: "Concepción_de_Oriente" },
    { label: "Conchagua", value: "Conchagua" },
    { label: "El Carmen", value: "El_Carmen" },
    { label: "El Sauce", value: "El_Sauce" },
    { label: "Intipucá", value: "Intipucá" },
    { label: "La Unión", value: "La_Unión" },
    { label: "Lislique", value: "Lislique" },
    { label: "Meanguera del Golfo", value: "Meanguera_del_Golfo" },
    { label: "Nueva Esparta", value: "Nueva_Esparta" },
    { label: "Pasaquina", value: "Pasaquina" },
    { label: "Polorós", value: "Polorós" },
    { label: "San Alejo", value: "San_Alejo" },
    { label: "San José", value: "San_José" },
    { label: "Santa Rosa de Lima", value: "Santa_Rosa_de_Lima" },
    { label: "Yayantique", value: "Yayantique" },
    { label: "Yucuaiquín", value: "Yucuaiquín" },
  ],
};

export { departamentos, municipios };
