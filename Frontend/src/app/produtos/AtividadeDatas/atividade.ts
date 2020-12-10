import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// declare var $: any;
@Component({
  selector: 'app-testes',
  templateUrl: './atividade.html',
  styleUrls: ['./atividade.css']
})
export class AtividadeComponent implements OnInit {
  itemSelected: any;
  dataDeEntrada: Date;
  dataDeSaida: Date;

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  validarDataEntrada = null;
  validarDataSaida = null;
  constructor(
    public router: Router) { }

  ngOnInit(): void {
    
  }
  

  comparaDatas() {
    var dataDeEntrada = new Date(this.dataDeEntrada);
    var dataDeSaida = new Date(this.dataDeSaida);

    var diferenca = Math.abs(dataDeEntrada.getTime() - dataDeSaida.getTime());
    var diferencaDeDias = Math.ceil(diferenca / (1000 * 3600 * 24));
    return diferencaDeDias
  }

  validarDataInicial(){
    if (this.dataDeEntrada != null) {
      var e = this.dataDeEntrada.toString();
      var arrDataExclusao = e.split('/');
      console.log("0.",arrDataExclusao);
      
      var stringFormatada = arrDataExclusao[0];
        console.log("1.",stringFormatada);
        
      var dataEmissao = new Date(stringFormatada);
      console.log("2.",dataEmissao);
    }

    let dataAtual = new Date();
    console.log("3.",dataAtual)
    console.log("E",dataEmissao);
    console.log("A",dataAtual);
    if(dataEmissao > dataAtual){
      this.validarDataEntrada = true;
        const dataInicialDiv = document.getElementById("dataInicialInvalida");
        dataInicialDiv.style.color = "#DC3545";
        document.getElementById("dataInicialInvalida").innerHTML = "Insira uma data menor ou igual a atual!";
    console.log(false);
      return false;
    }else{
      this.validarDataEntrada = false;
        const dataInicialDiv = document.getElementById("dataInicialInvalida");
        dataInicialDiv.style.color = "#28A745";
        document.getElementById("dataInicialInvalida").innerHTML = "Ok!";
      console.log(true);
      
      return true;
    }

    
  }


  validarDataFinal() {
    if (this.dataDeEntrada != null) {
      var e = this.dataDeEntrada.toString();
      var arrDataExclusao = e.split('/');
      var stringFormatada = arrDataExclusao[0];
      var dataEmissao = new Date(stringFormatada);
    }

    if (this.dataDeSaida != null) {
      var e = this.dataDeSaida.toString();
      var arrDataExclusao = e.split('/');
      var stringFormatada = arrDataExclusao[0];
      var dataEntrada = new Date(stringFormatada);
    }

    if (dataEmissao >= dataEntrada) {
      this.validarDataSaida = true;
        const dataFinalDiv = document.getElementById("dataFinalInvalida");
        dataFinalDiv.style.color = "#DC3545";
        document.getElementById("dataFinalInvalida").innerHTML = "Insira uma data maior que a data de emissão!";
      return false;
    } else {
      this.validarDataSaida = false;
        const dataFinalDiv = document.getElementById("dataFinalInvalida");
        dataFinalDiv.style.color = "#28A745";
        document.getElementById("dataFinalInvalida").innerHTML = "Ok!";
      return true;
    }
  }

  verificaDatas(){
    console.log(this.comparaDatas());
    if(this.validarDataInicial() === true && this.validarDataFinal() === true && this.comparaDatas()){
      const resultDiv = document.getElementById("resultado");
      resultDiv.style.color = "#28A745";
        document.getElementById("resultado").innerHTML = "A diferença entre as duas datas é de:"+`${this.comparaDatas()}` +" dia(s)";      
    }else if(this.validarDataInicial() === false && this.validarDataFinal() === true && this.comparaDatas()){
      const resultDiv = document.getElementById("resultado");
      document.getElementById("resultado").innerHTML = " ";
      alert("Impossível calcular, verifique o campo de 'Data Inicial' e tente novamente!");
    }else if(this.validarDataInicial() === true && this.validarDataFinal() === false && this.comparaDatas()){
      const resultDiv = document.getElementById("resultado");
      document.getElementById("resultado").innerHTML = " ";
      alert("Impossível calcular, verifique o campo de 'Data Final' e tente novamente!");
    }else{
      alert("Impossível calcular, verifique os campo de 'Data Inicial' e 'Data Final' e tente novamente!");
    }
  }

  limpaCalculo(){
    const resultDiv = document.getElementById("resultado");
    document.getElementById("resultado").innerHTML = " ";
  }

}