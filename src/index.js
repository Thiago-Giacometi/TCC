let id_agendamento = 1

function editarAgendamento() {
  window.localStorage.setItem("idAgendamento", JSON.stringify(id_agendamento));
  console.log('Salvou')
}

function teste() {
  const id_agendamento = window.localStorage.getItem("idAgendamento")
  console.log(id_agendamento)
}

editarAgendamento()
teste()