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
            var value = $(this).val().toLowerCase();
            $("#contractsTableBody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });