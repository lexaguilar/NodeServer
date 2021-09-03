const db = {
    nodata: [],
    estadoCiviles: [
        {
            value: "1",
            text: 'Casado'
        },
        {
            value: "2",
            text: 'Soltero'
        },
        {
            value: "3",
            text: 'Divorciado'
        },
        {
            value: "4",
            text: 'Viudo'
        }
    ],
    sexo: [
        { value: '1', text: 'Femenino' },
        { value: '2', text: 'Masculino' }
    ],
    nacionalidades: [
        { value: '1', text: 'AMERICA DEL NORTE' },
        { value: '2', text: 'CANADA' },
        { value: '3', text: 'ESTADOS UNIDOS' },
        { value: '4', text: 'MEXICO' },
        { value: '5', text: 'CENTROAMERICA' },
        { value: '6', text: 'GUATEMALA' },
        { value: '7', text: 'EL SALVADOR' },
        { value: '8', text: 'HONDURAS' },
        { value: '9', text: 'FINLANDIA' },
        { value: '10', text: 'ISRAEL' },
        { value: '11', text: 'REPUBLICA DE SUR' },
        { value: '12', text: 'AMERICA DEL SU' },
        { value: '13', text: 'VENEZUELA' },
        { value: '505', text: 'NICARAGUA' },
    ],
    profesiones: [
        { value: '4', text: 'ACTUARIO' },
        { value: '2', text: 'ADMINISTRADOR COMERCIAL' },
        { value: '11', text: 'INGENIERO EN SISTEMAS' },
    ],
    ocupaciones: [
        { value: '1', text: 'ABARROTERO' },
        { value: '2', text: 'ABASTOS, BODEGAS, DELICATESES.' },
        { value: '3', text: 'ABOGADO' },
        { value: '4', text: 'ABONOS Y FERTILIZANTES VENTAS.' },
        { value: '5', text: 'ABRASIVO (MANEJO, SILICE NO, OTROS ABRASIVOS)' },
    ],
    actividades : [
        { value: '1', text: 'EMPLEADO' },
        { value: '3', text: 'PROPIETARIO DE NEGOCIO' },
        { value: '4', text: 'ESTUDIANTE' },
        { value: '5', text: 'AMA DE CASA' },
    ],
    origenFondos : [
        { value: '1', text: 'SALARIO' },
        { value: '2', text: 'HERENCIA' },
        { value: '3', text: 'AHORRO' },
        { value: '4', text: 'EMPRESA' },
        { value: '5', text: 'OTROS' },
    ],
    monedas : [
        { value: '1', text: 'Córdobas' },
        { value: '2', text: 'Dólares' },
    ],
    estaturaUnidades : [
        { value: '1', text: 'Metros' },
        { value: '2', text: 'Centimetros' },
    ],
    pesoUnidades:[
        { value: '1', text: 'Libras' },
        { value: '2', text: 'Kg' },
    ],
    parentescos : [
        { values: '10', text: 'Sobrino (a)' },
        { values: '13', text: 'Esposo' },
        { values: '14', text: 'Esposa' },
        { values: '16', text: 'Albacea' },
        { values: '19', text: 'Nieto (a)' },
        { values: '20', text: 'Novio (a)' },
        { values: '21', text: 'Hijastra' },
        { values: '24', text: 'Pareja' },
        { values: '25', text: 'Ex-Esposa' },
        { values: '27', text: 'Prima (o)' },
        { values: '28', text: 'Mama De Crianza' },
        { values: '3', text: 'Padre' },
        { values: '30', text: 'Bisabuela' },
        { values: '31', text: 'Madrina' },
        { values: '35', text: 'Nuera' },
        { values: '37', text: 'Exconyuge' },
        { values: '39', text: 'Padrino' },
        { values: '4', text: 'Madre' },
        { values: '41', text: 'Madrasta' },
        { values: '42', text: 'Padrasto' },
        { values: '43', text: 'Hijastro' },
        { values: '5', text: 'Cuñado (a)' },
        { values: '6', text: 'Suegro (a)' },
        { values: '7', text: 'Tio (a)' },
        { values: '8', text: 'Abuelo (a)' },
        { values: '9', text: 'Hermano (a)' },
        { values: 'E', text: 'Conyuge' },
        { values: 'H', text: 'Hijo (a)' },
    ]
}

module.exports = {
    db
  }
