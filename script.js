var clique = 0;

    function mostrar(a) {
        qtdCliques.innerHTML = a;
    }

    function clicar() {
        clique ++;
        mostrar(clique);
    }