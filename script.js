var modal = document.getElementById("zoom1");
var modal2 = document.getElementById("zoom2");

window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById('zoom1').style.visibility = "hidden";
        document.getElementById('zoom1').style.opacity = 0;
        $("#zoom1").css("transform", "scale(1.2)");
    }
    if (event.target == modal2) {
        document.getElementById('zoom2').style.visibility = "hidden";
        document.getElementById('zoom2').style.opacity = 0;
        $("#zoom2").css("transform", "scale(1.2)");
    }
}

function translater() {
    let option = document.getElementById("language").value;
    let objetcs = document.getElementsByClassName("text");
   
    switch (option) {
        case "english":
            document.documentElement.lang = "en";
            objetcs[0].innerHTML = "Click here to learn more :)";
            objetcs[1].innerHTML = "Coming soon!";
            objetcs[2].innerHTML = "<strong>Daydreams</strong> is a Shonen anime in development, being carried out by a animation studio. The plot focuses on the life of Melanie, a 17-year-old teenager who dreamed of being a heroine, until she came across a band (and not exactly rock band) that would make her stop dreaming. After several years living a normal life, she finds herself in a unique situation that will lead her to change the course of her life forever, going into adventures and fighting relentless monsters with her best friend Senpai to regain peace in the world.";
            objetcs[3].innerHTML = "Daydreams the game";
            objetcs[4].innerHTML = "Depending on the budget, there may be a game about <strong>Daydreams</strong> later. Which would leave a great teaching with its history.";
            objetcs[5].innerHTML = "An innovative education";
            objetcs[6].innerHTML = "If you help us, we can create a <strong>learning academy</strong>, with fun and incredible methods like games!";
            objetcs[7].innerHTML = "Make us come true";
            objetcs[8].innerHTML = "If you want to contribute to the development of <strong>Daydreams</strong>, you can <a class='donativos' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K5AM6TGK3H8PA&source=url' target='_blank'>donate to us</a>, or simply sign in at <a href='https://www.change.org/MejoremosLatinoamerica' target='_blank'>Change.org.</a> Help us to carry this project forward! ❤";
            objetcs[9].innerHTML = '"THE DIFFERENCE BETWEEN DREAMS AND REALITY, IS ACTION"';
            objetcs[10].innerHTML = " Official site.";
        break;

        case "español":
            document.documentElement.lang = "es";
            objetcs[0].innerHTML = "Haz clic aquí para obtener más información :)";
            objetcs[1].innerHTML = "¡Próximamente!";
            objetcs[2].innerHTML = "<strong>Daydreams</strong> es un anime tipo Shonen en desarrollo, realizado por un estudio de animación. La trama se centra en la vida de Melanie, una adolescente de 17 años que soñaba con ser una heroína, hasta que se topó con una banda (y no precisamente de rock) que la haría dejar de soñar. Tras varios años viviendo una vida normal, se encuentra en una singularidad que la llevará a cambiar el curso de su vida para siempre, adentrándose en aventuras y luchando contra monstruos implacables con su mejor amigo Senpai, para recuperar la paz en el mundo.";
            objetcs[3].innerHTML = "Daydreams el juego";
            objetcs[4].innerHTML = "Dependiendo del presupuesto, puede haber un juego sobre <strong>Daydreams</strong> más adelante. El cual, dejaría una gran <strong>enseñanza</strong> con su historia.";
            objetcs[5].innerHTML = "Una educación innovadora";
            objetcs[6].innerHTML = "Si nos ayudas, podemos crear una <strong>academia de aprendizaje</strong>, con métodos divertidos e increíbles ¡como juegos!";
            objetcs[7].innerHTML = "Haznos realidad";
            objetcs[8].innerHTML = "Si quieres contribuir en el desarrollo de <strong>Daydreams</strong>, puedes <a class='donativos' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K5AM6TGK3H8PA&source=url' target='_blank'>donarnos</a>, o simplemente firmar en <a href='https://www.change.org/MejoremosLatinoamerica' target='_blank'>Change.org.</a> ¡Ayúdanos a sacar adelante este proyecto! ❤";
            objetcs[9].innerHTML = '"LA DIFERENCIA ENTRE LOS SUEÑOS Y LA REALIDAD, ES LA ACCIÓN"';
            objetcs[10].innerHTML = " Sitio Oficial.";
        break;

        case "portugues":
            document.documentElement.lang = "pt";
            objetcs[0].innerHTML = "Clique aqui para obter mais informações :)";
            objetcs[1].innerHTML = "Em breve!";
            objetcs[2].innerHTML = "<strong>Daydreams</strong> é um anime do tipo Shonen em desenvolvimento, feito por um estúdio de animação. A trama gira em torno da vida de Melanie, uma adolescente de 17 anos que sonhava em ser uma heroína, até que encontrou uma banda (e não exatamente uma banda de rock) que a faria parar de sonhar. Após vários anos vivendo uma vida normal, ela se encontra em uma situação única que a levará a mudar o curso de sua vida para sempre, aventurando-se em aventuras e lutando contra monstros implacáveis ​​com seu melhor amigo Senpai, para recuperar a paz no mundo.";
            objetcs[3].innerHTML = "Daydreams o jogo";
            objetcs[4].innerHTML = "Dependendo do orçamento, pode haver um jogo sobre <strong>Daydreams</strong> mais tarde. O que deixaria um grande ensinamento com sua história.";
            objetcs[5].innerHTML = "Uma educação inovadora";
            objetcs[6].innerHTML = "Se você nos ajudar, podemos criar uma <strong>academia de aprendizagem</strong>, com métodos divertidos e incríveis como os jogos!";
            objetcs[7].innerHTML = "Nos tornar realidade";
            objetcs[8].innerHTML = "Se você deseja contribuir para o desenvolvimento do <strong>Daydreams</strong>, você pode fazer uma <a class='donativos' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K5AM6TGK3H8PA&source=url' target='_blank'>doação para nós</a> ou simplesmente assinar no <a href='https://www.change.org/MejoremosLatinoamerica' target='_blank'>Change.org.</a> Ajude-nos a levar este projeto adiante! ❤";
            objetcs[9].innerHTML = '"A DIFERENÇA ENTRE OS SONHOS E A REALIDADE, É A AÇÃO"';
            objetcs[10].innerHTML = " Site Oficial.";
        break;
    }
}

$(document).ready(function() {
    $("#language").change(function() {
        translater();
    });

    $("#button-scroll").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $("html, body").animate({scrollTop: $(".alignCenter-iframe").offset().top - 20}, 900);
        }
    });

    $(".pixelt").click(function() {
        document.getElementById('zoom1').style.visibility = "visible";
        document.getElementById('zoom1').style.opacity = 1;
        $("#zoom1").css("transform", "none");
    });

    $("#pixelt1").click(function() {
        document.getElementById('zoom2').style.visibility = "visible";
        document.getElementById('zoom2').style.opacity = 1;
        $("#zoom2").css("transform", "none");
    });

    $("#cerrar").click(function() {
        document.getElementById('zoom1').style.visibility = "hidden";
        document.getElementById('zoom1').style.opacity = 0;
        $("#zoom1").css("transform", "scale(1.2)");
    });

    $("#cerrar1").click(function() {
        document.getElementById('zoom2').style.visibility = "hidden";
        document.getElementById('zoom2').style.opacity = 0;
        $("#zoom2").css("transform", "scale(1.2)");
    });

    let userLang = navigator.language || navigator.userLanguage;
    let userLanguage = userLang.split('-');
    if (userLanguage[0] == "en") document.getElementById("language").value = "english";
    else if (userLanguage[0] == "es") document.getElementById("language").value = "español";
    else if (userLanguage[0] == "pt") document.getElementById("language").value = "portugues"; 
    translater();
});