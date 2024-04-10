$(document).ready(function(){
    function carregarContracts() {
        $.ajax({
            type: "GET",
            url: "/contract/all",
            success: function(response){
                var tableBody = $("#contractsTableBody");

                $.each(response, function(index, contract){
                    var row = "<tr>" +
                        "<td>" + contract.id + "</td>" +
                        "<td>" + contract.username + "</td>" +
                        "<td>" + contract.artist.artistName + "</td>" +
                        "<td>" + contract.localDate + "</td>"+
                        "<td>" + "R$" + contract.price + "</td>"+
                        "<button class='btn btn-primary btn-edit' data-contract-id='" + contract.id + "'>Editar</button>" +
                        "<button class='btn btn-danger btn-delete' data-contract-id='" + contract.id + "'>Excluir</button>" +
                        "</td>" +
                        "</tr>";

                    tableBody.append(row);
                });
            },
            error: function(){
                alert("Erro ao carregar artistas.");
            }
        });
    }
    carregarContracts();

        $("#searchInput").on("keyup", function() {
            var value = $(this).val().toLowerCase(); // Obtém o valor do campo de pesquisa em minúsculas
            $("#contractsTableBody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // Mostra/oculta as linhas conforme o filtro
            });
        });
    });