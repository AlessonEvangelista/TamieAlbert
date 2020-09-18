
$(function(){

	setInterval(function(){
  	
    var _segundo = 1000;
    var _minuto = _segundo * 60;
    var _hora = _minuto * 60;
    var _dia = _hora * 24;
    
    var atual = new Date();
    var fim = new Date('03/13/2021 19:00:00');
    
    var diferenca = fim - atual;
    
    var dias = Math.floor(diferenca / _dia);
    var horas = Math.floor((diferenca % _dia) / _hora);
    var minutos = Math.floor((diferenca % _hora) / _minuto);
    var segundos = Math.floor((diferenca % _minuto) / _segundo);
    
    document.getElementById('contador').innerHTML = dias + ' DIAS ';
    document.getElementById('contador').innerHTML += horas + ':';
    document.getElementById('contador').innerHTML += minutos + ':';
    document.getElementById('contador').innerHTML += segundos + '';
    // document.getElementById ('contador').innerHTML += '<img class="timer" src="https://kitei.com.br/wp-content/uploads/2018/07/aguarde-1.gif" >';
  	
  },1000);

});