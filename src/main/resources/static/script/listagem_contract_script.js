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
                        "<td><button class='btn btn-danger btn-delete' data-contract-id='" + contract.id + "'>Deletar</button></td>" + // Botão de deletar
                        "</tr>";

                    tableBody.append(row);
                });


                $(document).on("click", ".btn-delete", function() {
                    var contractId = $(this).data("contract-id");

                    $.ajax({
                        type: "DELETE",
                        url: "/contract/delete/" + contractId,
                        success: function(response){
                            console.log("Contrato excluído com sucesso!");
                            window.location.href = window.location.href;
                        },
                        error: function(){
                            console.error("Erro ao excluir o contrato.");
                        }
                    });
                });
            },
            error: function(){
                alert("Erro ao carregar contratos.");
            }
        });
    }
    carregarContracts();

    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#contractsTableBody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
