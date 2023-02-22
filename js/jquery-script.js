//efeito de esconder formulário de cadastro

$(document).ready(function() {
    $('#form-cadastrar').hide();

        $('#botao-cadastrar').click(function(){
            $("#botao-cadastrar").hide();
            $('#form-cadastrar').hide();


        $('#form-cadastrar').slideToggle("slow");
        $('#section-login').slideToggle("slow");
        $("#botao-cadastrar").hide();

        $('#section-login').hide();
        $('#form-cadastrar').Toggle();
        

    })


})

