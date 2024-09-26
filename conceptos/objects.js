const tsuuru = { 
    model: 2000,
    color: 'verde',
    kilometers: 200000,
    engine: '2.0 Litros'
}

console.log(tsuuru);
console.log(tsuuru.model);
console.log(tsuuru.color);
console.log(tsuuru.kilometers);
console.log(tsuuru.engine);
tsuuru.engine = '4.0 litros';
console.log(tsuuru);

tsuuru.collitions = 5;
console.log(tsuuru);

tsuuru['numero placas']= 'Yayo 90 CFF';
console.log(tsuuru);

tsuuru.services =[2005,2010,2015,2020];
console.log(tsuuru['services']);

tsuuru.status = 'apagadado'


tsuuru.start = function(){
    console.log('==========================================')
    console.log('Revision de sistema');
    console.log('Revisando niveles');
    console.log('TSSSSSSSS TSSSS ahhhhhh');
    console.log('pongan cuties');
    this.status = 'Encendido';
    console.log('Estado: ' + tsuuru.status);
};


tsuuru['turnOff'] = function(){
    console.log('============================');
    console.log('Apagandose...');
    this.status = 'Apagado'
    console.log(`Estado: ${tsuuru.status}`)
}
tsuuru.start();
tsuuru.turnOff();

delete tsuuru['numero placas'];
console.log(tsuuru)