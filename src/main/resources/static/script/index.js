$(document).ready(function(){

        function carregarArtistas() {
            $.ajax({
                type: "GET",
                url: "/artist/all",
                success: function(response){
                    var tableBody = $("#artistTableBody");
                    tableBody.empty();

                    $.each(response, function(index, artist){
                        var row = "<tr>" +
                            "<td>" + artist.artistId + "</td>" +
                            "<td>" + artist.artistName + "</td>" +
                            "<td>" + artist.musicGenre + "</td>" +
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


        carregarArtistas();


        $(document).on("click", ".btn-fazer-contrato", function(){
                var artistId = $(this).data("artist-id");
                var artistName = $(this).data("artist-name");
                alert("Artista selecionado: "+artistName+ "---------- Id do artista: "+artistId)
                window.location.href = 'form.html?artistId=' + artistId + '&artistName=' + encodeURIComponent(artistName);
            });



        $("#searchInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#artistTableBody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });