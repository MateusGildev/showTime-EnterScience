$(document).ready(function() {
            // Função para formatar a data como dd/MM/yyyy
            function formatDate(date) {
                var d = new Date(date),
                    day = '' + d.getDate(),
                    month = '' + (d.getMonth() + 1),
                    year = d.getFullYear();

                if (day.length < 2) day = '0' + day;
                if (month.length < 2) month = '0' + month;

                return [day, month, year].join('/');
            }

            // Evento de envio do formulário de contrato
            $('#contractForm').submit(function(e) {
                e.preventDefault(); // Evita o envio padrão do formulário

                var data = {
                    username: $("#username").val(),
                    price: $("#price").val(),
                    localDate: formatDate($("#localDate").val()), // Formata a data como dd/MM/yyyy
                    artistId: $("#artistId").val()
                };

                $.ajax({
                    type: "POST",
                    url: "/contract/new/"+ data.artistId,
                    data: JSON.stringify(data), // Enviar os dados como JSON
                    contentType: "application/json", // Definir o tipo de conteúdo como JSON
                    success: function(response) {
                        alert("Cadastro realizado com sucesso!");
                        window.location.href = "formlist.html";
                    },
                    error: function() {
                        alert("Erro ao cadastrar. Tente novamente.");
                    }
                });
            });
        });