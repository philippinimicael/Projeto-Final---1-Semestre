function navCadastros() {
    let navHome = document.querySelector('#navCadastro')

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
                                 Cadastro<i class="bi bi-chevron-double-down ms-1"></i>
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

navCadastros()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function headerCadastros() {
    let headerHome = document.querySelector('#headerCadastro')

    headerHome.innerHTML = ""
    for (let i = 1; i < 2; i++) {
        headerHome.innerHTML = `
    <header class="headerCadastros" style="background-image: url(${listaFotos[i].imagem});">
        <div class="containerCadastros" >
            <div class="titulosCadastros">
            <a href="">
                <h1 class="display-3 fw-bold px-5">CADASTRE-SE <br> ABAIXO </h1>
            </a>
            </div>
        </div>
    </header>
    `
    }
}

headerCadastros()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function sec01Cadastros() {
    let headerHome = document.querySelector('#sec_01cadastro')

    headerHome.innerHTML = ""
    for (let i = 5; i < 6; i++) {
        headerHome.innerHTML += `

     <div class="container rounded-3 shadow-lg my-5">
                <div class="row">
                    <div class="col-lg-8 ps-0">
                        <img src="${galeriaFotos[i].imagem}" alt="" class="img-fluid w-100 h-100 rounded-start-3">
                    </div>

                    <div class="col-lg-4">
                        <div class="d-flex flex-column w-100 m-auto">
                            <h1 class="py-4 text-azul">Registre-se</h1>

                            <label for="" class="form-label text-rosa">${frasesMotivacionais[0].autor}</label>
                            <input type="text" class="form-control border-rosa" placeholder="${frasesMotivacionais[0].tema}" required>

                            <br><br>

                            <label for="" class="form-label text-rosa">${frasesMotivacionais[1].autor}</label>
                            <input type="text" class="form-control border-rosa" placeholder="${frasesMotivacionais[1].tema}" required>

                            <br><br>

                            <label for="" class="form-label text-rosa">${frasesMotivacionais[2].autor}</label>
                            <input type="text" class="form-control border-rosa" placeholder="${frasesMotivacionais[2].tema}" required>

                            <br><br>

                            <label for="" class="form-label text-rosa">${frasesMotivacionais[0].autor}</label>
                            <input type="password" class="form-control border-rosa" placeholder="${frasesMotivacionais[3].tema}">

                            <br><br>

                            <label for="" class="form-label text-rosa">${frasesMotivacionais[4].autor}</label>
                            <input type="password" class="form-control border-rosa" placeholder="${frasesMotivacionais[4].tema}" >

                            <br><br>

                            <div>
                                <input type="checkbox" class="form-check-input border-salmao"> 
                                <span class="text-salmao">${galeriaFotos[i].titulo}</span>
                            </div>

                            <br><br>

                            <button id="btn-cadastro" class="btn-meu bg-azul w-75 py-3 rounded-5 m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                ${eventos[i].tipo}
                            </button>

                            <div id="alert-cadastro">

                            <br><br>
                        </div>
                    </div>
                </div>
            </div>
    `
    }

}

sec01Cadastros()

let btn = document.querySelector('#btn-cadastro')

function alertcadastro() {

    let alert = document.querySelector('#alert-cadastro')

    alert.innerHTML = `
    <div class="alert alert-warning my-4 w-75 m-auto fw-bold text-center" role="alert">
        ${poemas[1].autor
        }
    </div>
    `
}

btn.addEventListener('click', alertcadastro)

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
                        <a href="galeria.html" class="nav-footer">Galeria</a>
                        <a href="dicas.html" class="nav-footer">Dicas</a>
                        <a href="rankingAcidentes.html" class="nav-footer">Ranking-Acidentes</a>
                        <a href="curiosidades.html" class="nav-footer">Curiosidades</a>
                        <a href="#" class="nav-footer"><span class="text-white">Cadastro</span></a>
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