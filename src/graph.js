const labels = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const data1 = {
  labels: labels,
  datasets: [
    {
    label: 'SPEED WASH',
    data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
    borderWidth: 6,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
    },
    {
      label: 'Lava Rápido 02',
      data: [9,14,11,6,5,4,3,8,11,10,13,18,6],
      borderWidth: 6,
      borderColor: 'rgba(6,204,6,0.85)',
      backgroundColor: 'transparent',
    },
  ]
};

const config1 = {
  type: 'line',
  data: data1,
  options: {
    plugins: {
        title: {
            display: true,
            text: 'Frequencia de Agendamentos'
        }, 
    }
}
};

const graphAgenda = new Chart(
  document.getElementsByClassName('line-chart-agenda'),
  config1
);

//

const data2 = {
  labels: labels,
  datasets: [
    {
    label: 'SPEED WASH',
    data: [7746,7656,9822,1710,6728,7540,5965,6212,3028,7050,7911,2955,3270],
    borderWidth: 6,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
    },
    {
      label: 'Lava Rápido 02',
      data: [2360,5874,8231,4281,1375,1263,3574,9963,6166,5171,5054,4564,6842],
      borderWidth: 6,
      borderColor: 'rgba(6,204,6,0.85)',
      backgroundColor: 'transparent',
    },
  ]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    plugins: {
        title: {
            display: true,
            text: 'Faturamento'
        }, 
    }
}
};

const graphFaturamento = new Chart(
  document.getElementsByClassName('line-chart-faturamento'),
  config2
);

