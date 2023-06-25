class Cuenta{
    cliente;
    campaña;
    plaza;
    gerencia;
    jefatura;
    constructor(cliente, campaña, plaza, gerencia, jefatura){
        this.cliente = cliente;
        this.campaña = campaña;
        this.plaza = plaza;
        this.gerencia = gerencia;
        this.jefatura = jefatura;
    }

}
//array de objetos creados mediante una clase con datos de clientes y especificaciones del mismo.
const Cuentas = [
     BHCust = new Cuenta('Banco Hipotecario', 'Customer', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz'),
     BHCob = new Cuenta('Banco Hipotecario', 'Cobranzas', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz'),
     Claro611 = new Cuenta('Claro', 'Customer', 'Cordoba', 'Carolina Simes', 'Emilse Copetti'),
     ClaroMora = new Cuenta('Claro', 'Cobranzas', 'Cordoba', 'Carolina Simes', 'Martin Cappuozzo'),
     ClaroTec = new Cuenta('Claro', 'Retencion', 'Cordoba', 'Carolina Simes', 'Karina Lizzama'),
     Telecom = new Cuenta('Telecom', 'Customer', 'Buenos Aires', 'Fabian Perezlindo', 'Natalie Manduci'),
]

let continuar;

function agregarCuenta (cliente, plaza, campaña, gerencia, jefatura){
    nuevaCuenta = new Cuenta (cliente, campaña, plaza, gerencia, jefatura);
    Cuentas.push(nuevaCuenta);
}

// se solicitaran los datos de un nuevo cliente para sumar en la ticketera a los ya cargados previamente
do {
    let cliente;
    let campaña;
    let plaza;
    let gerencia;
    let jefatura;
    cliente = prompt('Ingrese el nuevo cliente/empresa a cargar');
    campaña = prompt('Indique si se trata de una cuenta Customer/Retencion/Cobranzas/Otro');
    plaza = prompt('Ingrese la plaza donde se encontrarán los asesores');
    gerencia = prompt('Nombre del Gerente');
    jefatura = prompt('Nombre del jefe de la cuenta');

    agregarCuenta(cliente, plaza, campaña, gerencia, jefatura);
    continuar = prompt(`La nueva cuenta de la gerencia ${gerencia} ha sido creada exitosamente. Desea agregar otra cuenta? si / no`);
}
    while(continuar === 'si');

/// se visualizan todas las cuentas que se hayan incluído al array
console.log(Cuentas);

// se solicita el nombre de un/a gerente para conocer todas las cuentas que tenga a su cargo. 
let criterioBusqueda;
criterioBusqueda = prompt('Ingrese la gerencia por la que desea filtrar');
const busqueda = Cuentas.filter((cliente) => {return cliente.gerencia === criterioBusqueda})
if(busqueda.length === 0){
    alert('No se han encontrado coincidencias')
}
    else{
        busqueda.forEach((filtro) => console.log(filtro));
    }
