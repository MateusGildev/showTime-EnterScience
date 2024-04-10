$(document).ready(function(){
        // Função para carregar os artistas
        function carregarArtistas() {
            $.ajax({
                type: "GET",
                url: "/artist/all",
                success: function(response){
                    var tableBody = $("#artistTableBody");
                    tableBody.empty(); // Limpa o corpo da tabela antes de adicionar novos dados

                    $.each(response, function(index, artist){
                        var row = "<tr>" +
                            "<td>" + artist.artistId + "</td>" +
                            "<td>" + artist.artistName + "</td>" +
                            "<td>" + artist.musicGenre + "</td>" +
                            // Adiciona um botão de "Fazer Contrato" em cada linha da tabela
"<td><button class='btn btn-primary btn-fazer-contrato' data-artist-id='" + artist.artistId + "' data-artist-name='" + artist.artistName + "'>Fazer Contrato</button></td>" +
                            "</tr>";

                        tableBody.append(row);
                    });
                },
                error: function(){
                    alert("Erro ao carregar artistas.");
                }
            });
        }

        // Chama a função para carregar os artistas
        carregarArtistas();

        // Evento de clique para o botão "Fazer Contrato"
        $(document).on("click", ".btn-fazer-contrato", function(){
                var artistId = $(this).data("artist-id");
                var artistName = $(this).data("artist-name");
                alert("Artista selecionado: "+artistName+ "---------- Id do artista: "+artistId)
                window.location.href = 'form.html?artistId=' + artistId + '&artistName=' + encodeURIComponent(artistName);
            });


        // Evento de filtro ao digitar no campo de pesquisa
        $("#searchInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#artistTableBody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });