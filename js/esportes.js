function navEsportes() {
    let navHome = document.querySelector('#navEsportes')

    navHome.innerHTML = `
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
                            <a class="nav-link active" aria-current="page" href="#"> <span class="text-amarelo">
                                Esportes <i class="bi bi-chevron-double-down ms-1"></i>
                            </span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="galeria.html">Galeria</a>
                        </li>
                        <li class="nav-item dropdown fh-bold ">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="dicas.html">Dicas</a>
                                </li>
                                <li><a class="dropdown-item" href="rankingAcidentes.html">Ranking-Acidentes</a>
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
        navHome.innerHTML += `
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

navEsportes()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */


function secEsportes01() {
    let sec_01 = document.querySelector('#secEsportes')

    sec_01.innerHTML = ""
    for (let i = 4; i < 5; i++) {
        sec_01.innerHTML = `
    <div class="header-esportes" style="background-image: url(${listaFotos[i].imagem});">
        <div class="gradianteEsportes">    
            <div class="container">
                <div class="container-esportes">
                    <div class="titulos-esportes">
                        <h1 class="display-3 fw-bold">ESPORTES AÉREOS</h1>
                        <h2 class="lead">${galeriaFotos[i].descricao}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
    }
}

secEsportes01()

function esportes01() {
    let sec_01 = document.querySelector('#esportes01')

    sec_01.innerHTML = ""
    for (let i = 0; i < 1; i++) {
        sec_01.innerHTML = `
            <div class="row">
                <div class="col-lg-8 col-sm-12">
                    <div class="card cardEsportes">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">PARAQUEDISMO</h1>
                            <p>${catalogoFilmesSeries[0].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[2].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-100"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[0].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-75"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[1].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[0].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[0].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[0].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[1].classificacao}</li>
                            </ul>

                        </div>
                    </div>

                    <div class="card cardEsportes my-5">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">ASA DELTA E PARAPENTE</h1>
                            <p>${catalogoFilmesSeries[1].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[3].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-50"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[5].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-100"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[8].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[1].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[1].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[1].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[2].classificacao}</li>
                            </ul>

                        </div>
                    </div>
                </div>


                    <div class="col-lg-4">
                        
                        <div class="card shadow-sm">
                            <div class="card-header bg-azul text-white">
                                <h4 class="mb-0">DESTAQUES</h4>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <div class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="text-salmao maiusculo">${frasesMotivacionais[0].tema}</h5>
                                            <p>${frasesMotivacionais[0].data}</p>
                                        </div>
                                        <p>${frasesMotivacionais[0].frase}</p>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="text-rosa maiusculo">${frasesMotivacionais[1].tema}</h5>
                                            <p>${frasesMotivacionais[1].data}</p>
                                        </div>
                                        <p>${frasesMotivacionais[1].frase}</p>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="text-amarelo maiusculo">${frasesMotivacionais[2].tema}</h5>
                                            <p>${frasesMotivacionais[2].data}</p>
                                        </div>
                                        <p>${frasesMotivacionais[2].frase}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm mt-4">
                            <div class="card-header bg-salmao text-white">
                                <h4 class="mb-0">PROXIMOS EVENTOS</h4>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <div class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="text-rosa maiusculo">${frasesMotivacionais[3].tema}</h5>
                                            <p>${frasesMotivacionais[3].data}</p>
                                        </div>
                                        <p>${frasesMotivacionais[3].frase}</p>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <h5 class="text-azul maiusculo">${frasesMotivacionais[4].tema}</h5>
                                            <p>${frasesMotivacionais[4].data}</p>
                                        </div>
                                        <p>${frasesMotivacionais[4].frase}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
    `
    }
}

esportes01()

/* ------------------------------------------- */

function secEsportes02() {
    let sec_01 = document.querySelector('#secEsportes2')

    sec_01.innerHTML = ""
    for (let i = 2; i < 3; i++) {
        sec_01.innerHTML = `
            <div class="header-esportes" style="background-image: url(${listaFotos[i].imagem});">
                <div class="gradianteEsportes">
                    <div class="container">
                        <div class="container-esportes">
                            <div class="titulos-esportes">
                                <h1 class="display-3 fw-bold">ESPORTES TERRESTRES</h1>
                                <h2 class="lead">${galeriaFotos[i].descricao}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
    }
}

secEsportes02()

function esportes02() {
    let sec_02 = document.querySelector('#esportes02')

    sec_02.innerHTML = ""
    for (let i = 6; i < 7; i++) {
        sec_02.innerHTML = `
 <div class="row">

                <div class="col-lg-8 col-sm-12">
                    <div class="card cardEsportes">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">HIKING</h1>
                            <p>${catalogoFilmesSeries[2].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[9].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-25"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[10].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-50"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[12].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[2].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[2].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[2].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[3].classificacao}</li>
                            </ul>

                        </div>
                    </div>

                    <div class="card cardEsportes my-5">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">ESCALADA</h1>
                            <p>${catalogoFilmesSeries[3].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[11].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-75"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[12].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-50"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[13].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[3].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[3].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[3].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[4].classificacao}</li>
                            </ul>

                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-header bg-azul text-white">
                            <h4 class="mb-0">DESTAQUES</h4>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-salmao maiusculo">${frasesMotivacionais[5].tema}</h5>
                                        <p>${frasesMotivacionais[5].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[5].frase}</p>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-rosa maiusculo">${frasesMotivacionais[6].tema}</h5>
                                        <p>${frasesMotivacionais[6].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[6].frase}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-sm mt-4">
                        <div class="card-header bg-salmao text-white">
                            <h4 class="mb-0">PROXIMOS EVENTOS</h4>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-rosa maiusculo">${frasesMotivacionais[7].tema}</h5>
                                        <p>${frasesMotivacionais[7].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[7].frase}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    `
    }
}

esportes02()


/* ------------------------------------------- */

function secEsportes03() {
    let sec_03 = document.querySelector('#secEsportes3')

    sec_03.innerHTML = ""
    for (let i = 7; i < 8; i++) {
        sec_03.innerHTML = `
    <div class="header-esportes" style="background-image: url(${listaFotos[i].imagem});">
        <div class="gradianteEsportes">    
            <div class="container">
                <div class="container-esportes">
                    <div class="titulos-esportes">
                        <h1 class="display-3 fw-bold">ESPORTES AQUATICOS</h1>
                        <h2 class="lead">${galeriaFotos[i].descricao}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
    }
}

secEsportes03()

function esportes03() {
    let sec_03 = document.querySelector('#esportes03')

    sec_03.innerHTML = ""
    for (let i = 1; i < 2; i++) {
        sec_03.innerHTML = `
             <div class="row">

                <div class="col-lg-8 col-sm-12">
                    <div class="card cardEsportes">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">RAFTING</h1>
                            <p>${catalogoFilmesSeries[4].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[14].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-50"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[16].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-25"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[17].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[4].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[4].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[4].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[5].classificacao}</li>
                            </ul>

                        </div>
                    </div>

                    <div class="card cardEsportes my-5">
                        <div class="card-body">
                            <h1 class="text-azul fs-2">SURF</h1>
                            <p>${catalogoFilmesSeries[5].sinopse}</p>

                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-speedometer2"></i>
                                        <h5>${frasesMotivacionais[18].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-rosa w-50"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-12">
                                    <div class="d-flex gap-2 text-salmao">
                                        <i class="bi bi-person-check"></i>
                                        <h5>${frasesMotivacionais[19].autor}</h5>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-azul w-100"></div>
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5 text-rosa">${frasesMotivacionais[22].autor}</h4>
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[5].titulo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[5].estilo}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${poemas[5].autor}
                                </li>
                                <li class="list-group-item"><i class="bi bi-check-circle-fill text-azul"></i> ${catalogoFilmesSeries[6].classificacao}</li>
                            </ul>

                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-header bg-azul text-white">
                            <h4 class="mb-0">DESTAQUES</h4>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-salmao maiusculo">${frasesMotivacionais[8].tema}</h5>
                                        <p>${frasesMotivacionais[8].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[8].frase}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-sm mt-4">
                        <div class="card-header bg-salmao text-white">
                            <h4 class="mb-0">PROXIMOS EVENTOS</h4>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-rosa maiusculo">${frasesMotivacionais[9].tema}</h5>
                                        <p>${frasesMotivacionais[9].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[9].frase}</p>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="text-azul maiusculo">${frasesMotivacionais[10].tema}</h5>
                                        <p>${frasesMotivacionais[10].data}</p>
                                    </div>
                                    <p>${frasesMotivacionais[10].frase}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    `
    }
}

esportes03()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerIndex() {
    let footerHome = document.querySelector('#footerIndex')

    footerHome.innerHTML = ""
    for (let i = 1; i < 2; i++) {
        footerHome.innerHTML = `
    <div class="bg-dark text-white-50 pt-4">
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
                        <a href="#" class="nav-footer"><span class="text-white">Esportes</span></a>
                        <a href="galeria.html" class="nav-footer">Galeria</a>
                        <a href="dicas.html" class="nav-footer">Dicas</a>
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
                            <span class="text-secondary">${catalogoFilmesSeries[i].duracao}</span>
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

footerIndex()