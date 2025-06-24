function navRankingAcidentes() {
    let navRankingAcidentes = document.querySelector('#navAcidentes')

    navRankingAcidentes.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-azul navbar-dark sticky-top py-1">
            <div class="container">

                <a href="../index.html"> <img src="../img/logo/logo-adrenature.png" alt="Logo-Adrenature" class="logo"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav fw-bold">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="esportes.html"> 
                                    Esportes 
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span class="text-amarelo">
                                Ranking-Acidentes <i class="bi bi-chevron-double-down ms-1"></i>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown fh-bold ">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="dicas.html">Dicas</a>
                                </li>
                                <li><a class="dropdown-item" href="galeria.html">Galeria</a>
                                </li>
                                <li><a class="dropdown-item" href="curiosidades.html"> Curiosidades </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <button class="btn btn-light ms-4 px-4 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-box-arrow-in-right me-2"></i> LOGIN
                    </button>
                </div>
    
    `

        for (let i = 0; i < 1; i++) {
        navRankingAcidentes.innerHTML += `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-light ">
                        <div class="modal-header bg-salmao">
                            <h5 class="modal-title text-center w-100 display-6 fw-bold">
                                <i class="bi bi-person-circle me-2"></i>Faça seu Login
                            </h5>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body w-100 m-auto px-4">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <label for="" class="form-label text-rosa fw-bold">${frasesMotivacionais[i].autor}</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-azul text-white"><i class="bi bi-envelope"></i></span>
                                        <input type="text" class="form-control border-rosa" placeholder="${frasesMotivacionais[i].tema}">
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="" class="form-label text-rosa fw-bold">${catalogoFilmesSeries[i].genero[1]}</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-azul text-white"> <i class="bi bi-lock"></i></span>
                                        <input type="password"  class="form-control border-rosa"     placeholder="${catalogoFilmesSeries[i].genero[0]}">
                                    </div>
                                </div>
                                <div class="col-12">
                                    
                                    <input type="checkbox" class="form-check-input border-azul">
                                    <label class="form-check-label text-azul">${poemas[i].titulo}</label>
                                </div>
                            </div>
                        </div>



                        <div class="row w-75 m-auto">

                            <div class="col-12 text-center mt-1">
                                <button type="submit" class="bg-azul text-white py-2 fw-bold btn-meu w-100 rounded-2">

                                <i class="bi bi-box-arrow-in-right me-2"></i>${poemas[i].estilo}
                                
                                </button>
                            </div>


                            <div class="col-12 my-4">
                                <div class="text-center">
                                    <a href="cadastro.html" class="text-rosa fw-bold">
                                    
                                        <i class="bi bi-person-plus me-1"></i>${catalogoFilmesSeries[i].titulo}

                                    </a>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
        `
    }
}

navRankingAcidentes()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function headerAcidentes() {
    let headerAcidentes = document.querySelector('#headerAcidentes')

    headerAcidentes.innerHTML = `
            <header class="header-esportes" style="background-image: url(${listaFotos[1].imagem});">
            <div class="grandient-geral">
                <div class="container-esportes">
                    <div class="titulos-esportes text-center m-auto">
                        <h1 class="display-3 fw-bold">RANKING ACIDENTES</h1>
                        <h2 class="lead">${galeriaFotos[4].descricao}</h2>
                    </div>
                </div>
            </div>
        </header>
    `

}

headerAcidentes()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function mainAcidentes() {
    let mainAcidentes = document.querySelector('#mainAcidentes')

    mainAcidentes.innerHTML = `
                <section class="bg-light p-4 rounded-3 mb-5 shadow-sm">
            <h1 class="text-azul mb-4">
                <i class="bi bi-exclamation-triangle-fill"></i>
                Ranking dos Piores Acidentes
                </i>
            </h1>

            <p class="lead text-rosa">
                ${poemas[2].texto}
            </p>
        </section>

        <section>
            <div class="row bg-light p-4 rounded-3 mb-5 shadow-sm">
                <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12">
                    <figure>
                        <img src="${galeriaFotos[0].imagem}" alt="" class="img-fluid rounded-3 my-2">
                        <figure>

                </div>
                <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12 d-flex flex-column">

                    <div class="d-flex align-items-center mb-3">
                        <span class="badge bg-azul text-white fs-4 me-3">${frasesMotivacionais[0].id}</span>
                        <h3 class="m-0 text-salmao">${frasesMotivacionais[0].autor}</h3>
                    </div>

                    <p class="text-rosa">
                        ${catalogoFilmesSeries[0].sinopse}
                    </p>

                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item">${catalogoFilmesSeries[0].genero}</li>
                        <li class="list-group-item">${frasesMotivacionais[0].tema}</li>
                        <li class="list-group-item">${frasesMotivacionais[0].data}</li>
                    </ul>

                    <div class="bg-amarelo text-black p-3 rounded-3">
                        <strong><span><i class="bg bi-lightbulb"></i>${poemas[0].autor}</strong></span> ${frasesMotivacionais[0].frase}
                    </div>

                </div>


            </div>

            <div class="row bg-light p-4 rounded-3 mb-5 shadow-sm">
                <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12 d-flex flex-column">

                    <div class="d-flex align-items-center mb-3">
                        <span class="badge bg-azul text-white fs-4 me-3">${frasesMotivacionais[1].id}</span>
                        <h3 class="m-0 text-salmao">${frasesMotivacionais[1].autor}</h3>
                    </div>

                    <p class="text-rosa">
                        ${catalogoFilmesSeries[1].sinopse}
                    </p>

                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item">${catalogoFilmesSeries[1].genero}</li>
                        <li class="list-group-item">${frasesMotivacionais[1].tema}</li>
                        <li class="list-group-item">${frasesMotivacionais[1].data}</li>
                    </ul>

                    <div class="bg-amarelo text-black p-3 rounded-3">
                        <strong><span><i class="bg bi-lightbulb"></i>${poemas[1].autor}</strong></span> ${frasesMotivacionais[1].frase}
                    </div>

                </div>
                <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12">
                    <figure>
                        <img src="${galeriaFotos[1].imagem}" alt="" class="img-fluid rounded-3 my-2">
                        <figure>

                </div>


            </div>

            <div class="row bg-light p-4 rounded-3 mb-5 shadow-sm">
                <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12">
                    <figure>
                        <img src="${galeriaFotos[2].imagem}" alt="" class="img-fluid rounded-3 my-2">
                        <figure>

                </div>
                <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12 d-flex flex-column">

                    <div class="d-flex align-items-center mb-3">
                        <span class="badge bg-azul text-white fs-4 me-3">${frasesMotivacionais[2].id}</span>
                        <h3 class="m-0 text-salmao">${frasesMotivacionais[2].autor}</h3>
                    </div>

                    <p class="text-rosa">
                       ${catalogoFilmesSeries[2].sinopse}
                    </p>

                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item">${catalogoFilmesSeries[2].genero}</li>
                        <li class="list-group-item">${frasesMotivacionais[2].tema}</li>
                        <li class="list-group-item">${frasesMotivacionais[2].data}</li>
                    </ul>

                    <div class="bg-amarelo text-black p-3 rounded-3">
                        <strong><span><i class="bg bi-lightbulb"></i>${poemas[2].autor}</strong></span> ${frasesMotivacionais[2].frase}
                    </div>

                </div>


            </div>

            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                    <div class="bg-light p-4 rounded-3 mb-5 shadow-sm">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12 text-center">
                                <figure>
                                    <img src="${galeriaFotos[3].imagem}" alt="" class="img-fluid rounded-3 w-100 my-2"
                                        style="height: 27rem;">
                                    <figure>

                            </div>
                            <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12 d-flex flex-column m-auto">

                                <div class="d-flex align-items-center mb-3">
                                    <span class="badge bg-azul text-white fs-4 me-3">${frasesMotivacionais[3].id}</span>
                                    <h3 class="m-0 text-salmao">${frasesMotivacionais[3].autor}</h3>
                                </div>

                                <p class="text-rosa">
                                    ${catalogoFilmesSeries[3].sinopse}
                                </p>

                                <ul class="list-group list-group-flush mb-3">
                                    <li class="list-group-item">${catalogoFilmesSeries[3].genero}</li>
                                    <li class="list-group-item">${frasesMotivacionais[3].tema}</li>
                                    <li class="list-group-item">${frasesMotivacionais[3].data}</li>
                                </ul>

                                <div class="bg-amarelo text-black p-3 rounded-3">
                                    <strong><span><i class="bg bi-lightbulb"></i>${poemas[3].autor}</strong></span> ${frasesMotivacionais[3].frase}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="bg-light p-4 rounded-3 mb-5 shadow-sm">
                        <div class="row">
                            <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12 d-flex flex-column m-auto">

                                <div class="d-flex align-items-center mb-3">
                                    <span class="badge bg-azul text-white fs-4 me-3">${frasesMotivacionais[4].id}</span>
                                    <h3 class="m-0 text-salmao">${frasesMotivacionais[5].autor}</h3>
                                </div>

                                <p class="text-rosa">
                                    ${catalogoFilmesSeries[4].sinopse}
                                </p>

                                <ul class="list-group list-group-flush mb-3">
                                    <li class="list-group-item">${catalogoFilmesSeries[4].genero}</li>
                                    <li class="list-group-item">${frasesMotivacionais[4].tema}</li>
                                    <li class="list-group-item">${frasesMotivacionais[4].data}</li>
                                </ul>

                                <div class="bg-amarelo text-black p-3 rounded-3">
                                    <strong><span><i class="bg bi-lightbulb"></i>${poemas[4].autor}</strong></span> ${frasesMotivacionais[4].frase}
                                </div>
                            </div>
                                                        <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12 text-center">
                                <figure>
                                    <img src="${galeriaFotos[4].imagem}" alt="" class="img-fluid rounded-3 w-100 my-2"
                                        style="height: 27rem;">
                                    <figure>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

mainAcidentes()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerRankingAcidentes() {
    let footerAcidente = document.querySelector('#footerAcidentes')

    footerAcidente.innerHTML = ""
    for (let i = 2; i < 3; i++) {
        footerAcidente.innerHTML = `
    <div class="bg-dark text-white-50 pt-4 ">
        <div class="container">
            <div class="row border-bottom border-secondary ">
                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <div class="d-flex align-items-center mb-3 pt0">
                        <img src="../img/logo/logo-adrenature.png" alt="" width="40" class="me-2">
                        <h4 class="text-amarelo maiusculo">${poemas[i].autor}</h4>
                    </div>
                    <p>${catalogoFilmesSeries[i].sinopse}</p>
                    <div class="d-flex gap-3">
                        <i class="bi bi-facebook text-rosa"></i>
                        <i class="bi bi-instagram text-salmao"></i>
                        <i class="bi bi-youtube text-amarelo"></i>
                        <i class="bi bi-twitter text-azul"></i>
                    </div>

                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <h4 class="text-salmao maiusculo">${poemas[i].estilo}</h4>
                    <div class="d-flex flex-column gap-2">
                        <a href="../index.html" class="nav-footer text-a">Home</a> 
                        <a href="esportes.html" class="nav-footer">Esportes</a>
                        <a href="galeria.html" class="nav-footer">Galeria</a>
                        <a href="dicas.html" class="nav-footer">Dicas</a>
                        <a href="#" class="nav-footer"><span class="text-white">Ranking-Acidentes</span></a>
                        <a href="curiosidades.html" class="nav-footer">Curiosidades</a>
                        <a href="cadastro.html" class="nav-footer">Cadastro</a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <h4 class="text-rosa maiusculo">${catalogoFilmesSeries[i].titulo}</h4>

                    <ul class="ps-0">
                        <li class=" mb-2 d-flex">
                            <i class="bi bi-geo-alt text-salmao mt-1 me-2"></i>
                            <span class="text-secondary">${catalogoFilmesSeries[3].duracao}</span>
                        </li>
                    </ul>

                    <ul class="ps-0">
                        <li class=" mb-2 d-flex">
                            <i class="bi bi-telephone text-salmao  me-2"></i>
                            <span class="text-secondary">${frasesMotivacionais[i].data
            }</span>
                        </li>
                    </ul>

                    <ul class="ps-0">
                        <li class=" mb-2 d-flex">
                            <i class="bi bi-envelope text-salmao me-2"></i>
                            <span class="text-secondary">${frasesMotivacionais[i].tema}</span>
                        </li>
                    </ul>


                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <h4 class="text-amarelo maiusculo">${poemas[i].titulo}</h4>
                    <p>${frasesMotivacionais[i].frase}</p>
                    <div class="input-group mb-3">

                        <input type="email" placeholder="${galeriaFotos[i].tags[1]}"
                            class="form-control border-azul bg-dark text-white">
                        <button class="btn-meu bg-azul text-white px-3 rounded-end-2">
                            <i class="bi bi-send"></i>
                        </button>

                    </div>
                </div>
            </div>

            <div class="row py-3 text-rosa">
                <div class="col-6">
                    <p> ${galeriaFotos[i].licenca}</p>
                </div>
                <div class="col-6 text-salmao">
                    <p class="text-end ">${frasesMotivacionais[i].autor}</p>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

footerRankingAcidentes()