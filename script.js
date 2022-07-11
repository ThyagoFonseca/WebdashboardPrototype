/*como estamos trabalhando com tag canvas temos que declarar uma variáde contexto, no caso o ctx, e esse contexto será em 2D. É necessário instanciar a variável para que a gente consiga chamar ela dentro de nosso objeto.
*/
var ctx = document.getElementsByClassName("bar-chart");
/*
O conceito do framework trabalha em 3 tipos de linhas:
Type, que é o tipo de gráfico
Data, que é o dado propriamente dito, pode ser um object, array ou um json.
Options, configurações globais do gráfico em questão
*/
var chartGraph = new Chart(ctx,{
    //Definindo o Type, consultando a documentação tem vários tipos de gráficos, veja qual vc quer
    type: 'bar',
    data: {
        labels : ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"],
        datasets: [{
            labels: "Engajamento",
            data: [200, 100, 123, 237, 86, 209, 278],
            borderColor: 'rgba(77, 166,253,0.85)',
            borderWidth: 6,
            backgroundColor: 'Transparent'
        },
        {
            labels: "Engajamento",
            data: [200, 100, 123, 237, 86, 209, 278],
            borderColor: 'rgba(87, 66,53,0.85)',
            borderWidth: 6,
            backgroundColor: 'Transparent'
        }]
    }
});