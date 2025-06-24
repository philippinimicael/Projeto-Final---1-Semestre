function navDicas() {
    let navDicas = document.querySelector('#navDicas')

    navDicas.innerHTML = `
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
                                Dicas <i class="bi bi-chevron-double-down ms-1"></i>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown fh-bold ">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="rankingAcidentes.html">Ranking-Acidentes</a>
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
        navDicas.innerHTML += `
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

navDicas()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function headerDicas() {
    let headerDicas = document.querySelector('#headerDicas')

    headerDicas.innerHTML = `
            <header class="header-esportes" style="background-image: url(${listaFotos[1].imagem});">
            <div class="grandient-geral">
                <div class="container-esportes">
                    <div class="titulos-esportes text-center m-auto">
                        <h1 class="display-3 fw-bold">DICAS SELVAGENS</h1>
                        <h2 class="lead">${galeriaFotos[3].descricao}</h2>
                    </div>
                </div>
            </div>
        </header>
    `

}

headerDicas()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function mainDicas() {
    let mainDicas = document.querySelector('#mainDicas')

    mainDicas.innerHTML = `
            <section class="mt-5 bg-light p-4 rounded-3 mb-5 shadow-sm">
            <div class="d-flex align-items-center gap-2 border-bottom border-3 ">
                <i class="bi bi-map fs-2 text-salmao"></i>
                <h1 class="maiusculo display-6 text-azul fw-bold">Melhores lugares para praticar</h1>
            </div>
            <div class="mt-3">
                <p class="fw-bold">${poemas[0].texto}</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-browser-safari fs-5 text-salmao"></i>
                                <h4 class="fw-bold text-salmao">${frasesMotivacionais[0].autor}</h4>
                            </div>
                            <p>${poemas[4].texto}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[3].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-flag fs-5 text-azul"></i>
                                <h4 class="fw-bold text-azul">${frasesMotivacionais[1].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[0].sinopse}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[2].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-globe-americas fs-5 text-amarelo"></i>
                                <h4 class="fw-bold text-amarelo">${frasesMotivacionais[2].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[0].genero}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[1].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-award fs-5 text-rosa"></i>
                                <h4 class="fw-bold text-rosa">${frasesMotivacionais[3].autor}</h4>
                            </div>
                            <p>${frasesMotivacionais[0].data}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[0].classificacao}</span>
                    </li>
                </ol>
            </div>
        </section>

        <section class="mt-5 bg-light p-4 rounded-3 mb-5 shadow-sm">
            <div class="d-flex align-items-center gap-2 border-bottom border-3 ">
                <i class="bi bi-clipboard2-pulse fs-2 text-salmao"></i>
                <h1 class="maiusculo display-6 text-azul fw-bold">Cuidados pessoais</h1>
            </div>
            <div class="mt-3">
                <p class="fw-bold">${poemas[1].texto}</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-bandaid fs-5 text-amarelo"></i>
                                <h4 class="fw-bold text-amarelo">${frasesMotivacionais[4].autor}</h4>
                            </div>
                            <p>${poemas[5].texto}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[4].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-prescription2 fs-5 text-salmao"></i>
                                <h4 class="fw-bold text-salmao">${frasesMotivacionais[5].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[1].sinopse}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[5].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-arrow-through-heart fs-5 text-rosa"></i>
                                <h4 class="fw-bold text-rosa">${frasesMotivacionais[6].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[1].genero}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[6].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-backpack fs-5 text-azul"></i>
                                <h4 class="fw-bold text-azul">${frasesMotivacionais[8].autor}</h4>
                            </div>
                            <p>${frasesMotivacionais[1].data}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[7].classificacao}</span>
                    </li>
                </ol>
            </div>
        </section>

        <section class="mt-5 bg-light p-4 rounded-3 mb-5 shadow-sm">
            <div class="d-flex align-items-center gap-2 border-bottom border-3 ">
                <i class="bi bi-tree fs-2 text-salmao"></i>
                <h1 class="maiusculo display-6 text-azul fw-bold">Trilhas e aventuras</h1>
            </div>
            <div class="mt-3">
                <p class="fw-bold">${poemas[2].texto}</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-fire fs-5 text-amarelo"></i>
                                <h4 class="fw-bold text-amarelo">${frasesMotivacionais[7].autor}</h4>
                            </div>
                            <p>${poemas[6].texto}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[8].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-calendar2-week fs-5 text-rosa"></i>
                                <h4 class="fw-bold text-rosa">${frasesMotivacionais[9].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[2].sinopse}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[9].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-geo-alt fs-5 text-azul"></i>
                                <h4 class="fw-bold text-azul">${frasesMotivacionais[10].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[2].genero}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[10].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-rainbow fs-5 text-rosa"></i>
                                <h4 class="fw-bold text-rosa">${frasesMotivacionais[17].autor}</h4>
                            </div>
                            <p>${frasesMotivacionais[2].data}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[11].classificacao}</span>
                    </li>
                </ol>
            </div>
        </section>

        <section class="mt-5 bg-light p-4 rounded-3 mb-5 shadow-sm">
            <div class="d-flex align-items-center gap-2 border-bottom border-3 ">
                <i class="bi bi-lightning-charge fs-2 text-salmao"></i>
                <h1 class="maiusculo display-6 text-azul fw-bold">Esportes radicais</h1>
            </div>
            <div class="mt-3">
                <p class="fw-bold">${poemas[3].texto}</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-brightness-high fs-5 text-azul"></i>
                                <h4 class="fw-bold text-azul">${frasesMotivacionais[12].autor}</h4>
                            </div>
                            <p>${poemas[7].texto}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[12].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-water fs-5 text-rosa"></i>
                                <h4 class="fw-bold text-rosa">${frasesMotivacionais[13].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[3].sinopse}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[13].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-cloud-lightning-rain fs-5 text-salmao"></i>
                                <h4 class="fw-bold text-salmao">${frasesMotivacionais[14].autor}</h4>
                            </div>
                            <p>${catalogoFilmesSeries[3].genero}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[14].classificacao}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-signpost-split fs-5 text-amarelo"></i>
                                <h4 class="fw-bold text-amarelo">${frasesMotivacionais[16].autor}</h4>
                            </div>
                            <p>${frasesMotivacionais[3].data}</p>
                        </div>
                        <span class="badge text-bg-primary rounded-pill">${catalogoFilmesSeries[0].classificacao}</span>
                    </li>
                </ol>
            </div>
        </section>

        

        <section class="mt-5 bg-light p-4 rounded-3 mb-5 shadow-sm">
            <div class="d-flex align-items-center gap-2 border-bottom border-3 ">
                <i class="bi bi-card-image fs-2 text-salmao"></i>
                <h1 class="maiusculo display-6 text-azul fw-bold">Imagens</h1>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[6].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[7].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[8].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[9].imagem}" alt="" class="w-100 rounded shadow">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 my-4">
                    <img src="${galeriaFotos[1].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 my-4">
                    <img src="${galeriaFotos[2].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

            </div>
            <div class="row">
                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[3].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                    <img src="${galeriaFotos[4].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
                    <img src="${galeriaFotos[5].imagem}" alt="" class="w-100 rounded shadow-lg img-hover">
                </div>

                <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
                    <img src="${galeriaFotos[0].imagem}" alt="" class="w-100 rounded shadow">
                </div>
            </div>
        </section>
    `

}

mainDicas()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerDicas() {
    let footerDicas = document.querySelector('#footerDicas')

    footerDicas.innerHTML = ""
    for (let i = 2; i < 3; i++) {
        footerDicas.innerHTML = `
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
                        <a href="#" class="nav-footer"><span class="text-white">Dicas</span></a>
                        <a href="rankingAcidentes.html" class="nav-footer">Ranking-Acidentes</a>
                        <a href="curiosidades.html" class="nav-footer">Curiosidades</a>
                        <a href="cadastro.html" class="nav-footer">Cadastro</a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <h4 class="text-rosa maiusculo">${catalogoFilmesSeries[i].titulo}</h4>

                    <ul class="ps-0">
                        <li class=" mb-2 d-flex">
                            <i class="bi bi-geo-alt text-salmao mt-1 me-2"></i>
                            <span class="text-secondary">${catalogoFilmesSeries[5].duracao}</span>
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

footerDicas()