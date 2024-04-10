$(document).ready(function() {
            // function to format localDate dd/MM/yyyy
            function formatDate(date) {
                var d = new Date(date),
                    day = '' + d.getDate(),
                    month = '' + (d.getMonth() + 1),
                    year = d.getFullYear();

                if (day.length < 2) day = '0' + day;
                if (month.length < 2) month = '0' + month;

                return [day, month, year].join('/');
            }

            // form submit event
            $('#contractForm').submit(function(e) {
                e.preventDefault(); // Evita o envio padrão do formulário

                var data = {
                    username: $("#username").val(),
                    price: $("#price").val(),
                    localDate: formatDate($("#localDate").val()),
                    artistId: $("#artistId").val()
                };

                $.ajax({
                    type: "POST",
                    url: "/contract/new/"+ data.artistId,
                    data: JSON.stringify(data),
                    contentType: "application/json",
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