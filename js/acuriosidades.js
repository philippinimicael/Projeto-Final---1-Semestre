function navHome() {
    let navHome = document.querySelector('#navPg')

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
                            <a class="nav-link active" aria-current="page" href="esportes.html"> 
                                    Esportes 
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span class="text-amarelo">
                                 Curiosidades<i class="bi bi-chevron-double-down ms-1"></i>
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
                                <li><a class="dropdown-item" href="rankingAcidentes.html"> Ranking-Acidentes </a>
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

navHome()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function headerCuriosidades() {
    let headerCuriosidades = document.querySelector('#headerCuriosidades')

    headerCuriosidades.innerHTML = `
            <header class="header-esportes" style="background-image: url(${listaFotos[1].imagem});">
            <div class="grandient-geral">
                <div class="container-esportes">
                    <div class="titulos-esportes text-center m-auto">
                        <h1 class="display-3 fw-bold">CURIOSIDADES EM GERAL</h1>
                        <h2 class="lead">${galeriaFotos[5].descricao}</h2>
                    </div>
                </div>
            </div>
        </header>
    `

}

headerCuriosidades()


/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function mainCuriosidades() {
    let mainCuriosidades = document.querySelector('#mainCuriosidades')

    mainCuriosidades.innerHTML = `
            <div class="row mb-5">
            <div class="col-lg-8 col-xl-8 col-md-12 col-sm-12">
                <div>
                    <div class="accordion " id="accordionExample">
                        <div class="accordion-item bg-rosa">
                            <h2 class="accordion-header">

                                <button class="accordion-button bg-rosa" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i class="bi bi-1-circle me-2 "></i><span class="maiusculo fw-bold">${frasesMotivacionais[0].tema}</span>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p class="fw-bold">${frasesMotivacionais[0].frase}</p>
                                            <ul class="list-group list-group-flush ">
                                                <li class="list-group-item bg-transparent text-white">${catalogoFilmesSeries[0].genero}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[0].autor}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[3].data}</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <img src="${catalogoFilmesSeries[9].imagem}" alt="" class="img-fluid rounded-2 border-azul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br><br>


                        <div class="accordion-item bg-azul">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-azul" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    <i class="bi bi-2-circle me-2"></i><span class="maiusculo fw-bold">${frasesMotivacionais[1].tema}</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p class="fw-bold">${frasesMotivacionais[1].frase}</p>
                                            <ul class="list-group list-group-flush ">
                                                <li class="list-group-item bg-transparent text-white">${catalogoFilmesSeries[1].genero}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[1].autor}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[2].data}</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <img src="${catalogoFilmesSeries[10].imagem}" alt="" class="img-fluid rounded-2 border-azul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br><br>


                        <div class="accordion-item bg-amarelo">
                            <h2 class="accordion-header ">
                                <button class="accordion-button collapsed bg-amarelo" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    <i class="bi bi-3-circle me-2"></i><span class="maiusculo fw-bold">${frasesMotivacionais[2].tema}</span>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-azul">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p class="fw-bold">${frasesMotivacionais[2].frase}</p>
                                            <ul class="list-group list-group-flush ">
                                                <li class="list-group-item bg-transparent text-azul">${catalogoFilmesSeries[2].genero}</li>
                                                <li class="list-group-item bg-transparent text-azul">${frasesMotivacionais[2].autor}</li>
                                                <li class="list-group-item bg-transparent text-azul">${frasesMotivacionais[0].data}</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <img src="${catalogoFilmesSeries[0].imagem}" alt="" class="img-fluid rounded-2 border-azul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br><br>


                        <div class="accordion-item bg-salmao">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-salmao" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    <i class="bi bi-4-circle me-2"></i><span class="maiusculo fw-bold">${frasesMotivacionais[4].tema}</span>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p class="fw-bold">${frasesMotivacionais[3].frase}</p>
                                            <ul class="list-group list-group-flush ">
                                                <li class="list-group-item bg-transparent text-white">${catalogoFilmesSeries[3].genero}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[3].autor}</li>
                                                <li class="list-group-item bg-transparent text-white">${frasesMotivacionais[1].data}</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <img src="${catalogoFilmesSeries[1].imagem}" alt="" class="img-fluid rounded-2 border-azul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center my-5">
                            <button class="btn-meu py-3 px-5 bg-azul" data-bs-toggle="offcanvas"
                                href="#offcanvasExample">
                                <span class="lead fw-bold text-amarelo fw-bold maiusculo">${catalogoFilmesSeries[4].titulo}</span>
                            </button>
                        </div>

                        <div class="offcanvas offcanvas-start bg-azul text-salmao" tabindex="-1" id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">

                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title display-5 fw-bold maiusculo" id="offcanvasExampleLabel">${catalogoFilmesSeries[9].titulo}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            
                            <div class="offcanvas-body">
                                <div class="border-bottom pb-2">
                                    <h5>${catalogoFilmesSeries[5].titulo}</h5>
                                </div>
                                <ul class="nav pt-2 flex-column">
                                    <li >
                                        <a href="#" class="nav-link text-amarelo"><i class="bi bi-arrow-right me-2"></i>${catalogoFilmesSeries[0].genero[0]}</a>
                                    </li>
                                    <li >
                                        <a href="#" class="nav-link text-amarelo"><i class="bi bi-arrow-right me-2"></i>${catalogoFilmesSeries[0].genero[1]}</a>
                                    </li>
                                    <li >
                                        <a href="#" class="nav-link text-amarelo"><i class="bi bi-arrow-right me-2"></i>${catalogoFilmesSeries[1].genero[0]}</a>
                                    </li>
                                </ul>

                                
                                <div class="dropdown mt-3">
                                    <button class="btn-meu dropdown-toggle py-2 px-2 bg-amarelo text-azul" type="button"
                                        data-bs-toggle="dropdown">
                                        ${catalogoFilmesSeries[4].genero[1]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#"><i class="bi bi-camera-video me-2"></i> ${catalogoFilmesSeries[5].genero[0]}</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="bi bi-map me-2"></i> ${catalogoFilmesSeries[6].genero[0]}</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="bi bi-file-earmark-text me-2"></i>${catalogoFilmesSeries[8].genero[0]}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                <div id="carouselExample" class="carousel slide bg-azul pt-2 rounded-3">
                    <div class="carousel-inner">
                        <div>
                            <h5 class="text-center text-salmao display-6 maiusculo fw-bold">${catalogoFilmesSeries[0].titulo}</h5>
                        </div>
                        <div class="carousel-item active border-rosa imagemSmall">
                            <img src="${catalogoFilmesSeries[3].imagem}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item border-amarelo imagemSmall">
                            <img src="${catalogoFilmesSeries[4].imagem}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item border-salmao imagemSmall">
                            <img src="${catalogoFilmesSeries[5].imagem}" class="d-block w-100" alt="...">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <p class="my-4 lead bg-amarelo text-azul p-3 rounded-3">
                    ${frasesMotivacionais[10].frase}
                </p>

                <div id="carouselExample2" class="carousel slide bg-azul pt-2 rounded-3">
                    <div class="carousel-inner">
                        <div>
                            <h5 class="text-center text-salmao display-6 maiusculo fw-bold">${catalogoFilmesSeries[1].titulo}</h5>
                        </div>
                        <div class="carousel-item active border-azul imagemSmall">
                            <img src="${catalogoFilmesSeries[6].imagem}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item border-salmao imagemSmall">
                            <img src="${catalogoFilmesSeries[7].imagem}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item border-amarelo imagemSmall">
                            <img src="${catalogoFilmesSeries[8].imagem}" class="d-block w-100" alt="...">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    `

}

mainCuriosidades()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerIndex() {
    let footerHome = document.querySelector('#footerIndex')

    footerHome.innerHTML = ""
    for (let i = 2; i < 3; i++) {
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
                        <a href="esportes.html" class="nav-footer">Esportes</a>
                        <a href="galeria.html" class="nav-footer">Galeria</a>
                        <a href="dicas.html" class="nav-footer">Dicas</a>
                        <a href="rankingAcidentes.html" class="nav-footer">Ranking-Acidentes</a>
                        <a href="#" class="nav-footer"><span class="text-white">Curiosidades</span></a>
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

footerIndex()