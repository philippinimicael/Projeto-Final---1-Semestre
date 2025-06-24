function navGalerias() {
    let navHome = document.querySelector('#navGaleria')

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
                            <a class="nav-link active" aria-current="page" href="galeria.html">
                                <span class="text-amarelo">
                                Galeria <i class="bi bi-chevron-double-down ms-1"></i>
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

navGalerias()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function headerGaleria() {
    let headerGaleria = document.querySelector('#headerGaleria')

    headerGaleria.innerHTML = `
            <header class="header-esportes" style="background-image: url(${listaFotos[1].imagem});">
            <div class="grandient-geral">
                <div class="container-esportes">
                    <div class="titulos-esportes text-center m-auto">
                        <h1 class="display-3 fw-bold">GALERIA DE IMAGENS</h1>
                        <h2 class="lead">${galeriaFotos[2].descricao}</h2>
                    </div>
                </div>
            </div>
        </header>
    `

}

headerGaleria()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function sec_01(){
    let sec_01_galeria = document.querySelector('#sec_01_galeria')  

    sec_01_galeria.innerHTML = `
            
                        <div class="pai1 background-galeria-amarelo">
                    <div class="filho" id="filho_0"></div>
                    <div class="filho" id="filho_1"> </div>
                    <div class="filho" id="filho_2"> </div>
                    <div class="filho" id="filho_3"> </div>
                    <div class="filho" id="filho_4"> </div>
                    <div class="filho" id="filho_5"> </div>
                    <div class="filho" id="filho_6"> </div>
                </div>
    `
}

sec_01()

/* ------------------------------------------- */

function sec_02(){
    let sec_02_galeria = document.querySelector('#sec_02_galeria')  

    sec_02_galeria.innerHTML = `
                <div class="pai2 background-galeria-azul mt-3">
                    <div class="filho" id="filho_7"> </div>
                    <div class="filho" id="filho_8"> </div>
                    <div class="filho" id="filho_9"> </div>
                    <div class="filho" id="filho_10"> </div>
                    <div class="filho" id="filho_11"> </div>
                    <div class="filho" id="filho_12"> </div>
                    <div class="filho" id="filho_13"> </div>
                    <div class="filho" id="filho_14"> </div>
                </div>
    `
}

sec_02()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerIndex() {
    let footerHome = document.querySelector('#footerIndex')

    footerHome.innerHTML = ""
    for (let i = 2; i < 3; i++) {
        footerHome.innerHTML = `
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
                        <a href="#" class="nav-footer"><span class="text-white">Galeria</span></a>
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