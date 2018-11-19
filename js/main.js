$(document).ready(function() {
    var click = 0;
    var move = 0;
    var end_game = false;
    var winner_game = "";
    var value_column = -1;
    var table_column = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    function check_winner() {
                for(var i=0; i<=8; i++) {
                    if(table_column[i] !== " ") {
                        /* SPRAWDZENIE W PIONIE */
                        if(table_column[i] === table_column[i + 3] && table_column[i] === table_column[i + 6] ) {
                            winner_game = table_column[i];
                            end_game = true;
                        }
                        /* SPRAWDZENIE W POZIOMIE */
                        if(i === 0 || i === 3 || i === 6 ) {
                            if(table_column[i] === table_column[i + 1] && table_column[i] === table_column[i + 2] ) {
                                    winner_game = table_column[i];
                                    end_game = true;
                            }
                        }
                        /* SPRAWDZENIE PRZEKĄTNYCH Z LEWEJ DO PRAWEJ */
                        if(table_column[i] === table_column[i + 4] && table_column[i] === table_column[i + 8]) {
                            winner_game = table_column[i];
                            end_game = true;
                        }
                        /* SPRAWDZENIE PRZEKĄTNYCH Z PRAWEJ DO LEWEJ */
                        if(table_column[2] !== " " && table_column[4] !== " " && table_column[6] !== " ") {
                            if(table_column[2] === table_column[4] && table_column[2] === table_column[6]) {
                                winner_game = table_column[2];
                                end_game = true;
                            }
                        }
                    } 
                }

        if(end_game === true) {
            $(".result").html("Wygrał: " + winner_game);
            $('.result').addClass('info');
        }

        if(move === 9 && end_game === false) {
            $(".result").html("Gra zakończona remisem");
            $('.result').addClass('info');
        }
    } // KONIEC FUNKCJI

        $('table td').click(function() {
            if(($(this).hasClass("check")) == false) {
                if(click === 0) {
                    $(this).html("X").addClass("check");
                    value_column = $(this).attr('data-column');
                    table_column[value_column] = "Gracz 1";
                    click = 1;
                    move = move + 1;
                    check_winner();
                } else if(click === 1) {
                    $(this).html("O").addClass("check");
                    value_column = $(this).attr('data-column');
                    table_column[value_column] = "Gracz 2";
                    click = 0;
                    move = move + 1;
                    check_winner();
                }
            }
    });
});