function navHome() {
    let navHome = document.querySelector('#navIndex')

    navHome.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-azul navbar-dark sticky-top py-1">
            <div class="container">

                <a href="#"> <img src="./img/logo/logo-adrenature.png" alt="Logo-Adrenature" class="logo"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav fw-bold">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span class="text-amarelo"> 
                                    Home
                                <i class="bi bi-chevron-double-down ms-1"></i>
                            </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="pg/esportes.html"> 
                                    Esportes 
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="pg/galeria.html">Galeria</a>
                        </li>
                        <li class="nav-item dropdown fh-bold ">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="pg/dicas.html">Dicas</a>
                                </li>
                                <li><a class="dropdown-item" href="pg/rankingAcidentes.html">Ranking-Acidentes</a>
                                </li>
                                <li><a class="dropdown-item" href="pg/curiosidades.html"> Curiosidades </a>
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
                                        <input type="password"  class="form-control border-rosa"     placeholder="${catalogoFilmesSeries[i]. genero[0]}">
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
                                    <a href="pg/cadastro.html" class="text-rosa fw-bold">
                                    
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

function headerIndex() {
    let headerHome = document.querySelector('#headerIndex')

    headerHome.innerHTML = ""
    for (let i = 4; i < 5; i++) {
        headerHome.innerHTML = `
    <header class="header" style="background-image: url(${listaFotos[i].imagem});">
        <div class="containerHeader" >
            <div class="header-titulos ">
                <h1 class="display-3 fw-bold">AVENTURA E FITNESS NA NATUREZA</h1>
                <h2 class="lead">${frasesMotivacionais[i].frase}</h2>
                <br>
                <button class="btn btn-light btn-lg ">${catalogoFilmesSeries[i].genero[1]}</button>
            </div>
        </div>
    </header>
    `
    }
}

headerIndex()

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function sec_01() {
    let sectionHome01 = document.querySelector('#sec_01')

    sectionHome01.innerHTML = `
        <h2 class="text-azul display-4 fw-bold text-center mb-5">CATEGORIAS DE ESPORTES</h2>
        `

    for (let i = 4; i < 5; i++) {
        sectionHome01.innerHTML += `
         <div class="my-2 col-lg-4 col-sm-12 ">   
                    <div class="card shadow-lg cardIndex">
                        <img src="${poemas[i].imagem}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body ">
                            <h5 class="card-title text-salmao maiusculo">${galeriaFotos[i].titulo}</h5>
                            <p class="card-text">${catalogoFilmesSeries[i].sinopse}</p>
                            <button href="#" class="btn btn bg-azul">${catalogoFilmesSeries[i].genero[1]}</button>
                        </div>
                    </div>
        </div>
        `
    }

    for (let i = 1; i < 2; i++) {
        sectionHome01.innerHTML += `
         <div class="my-2 col-lg-4 col-sm-12 ">
                    <div class="card shadow-lg cardIndex">
                        <img src="${poemas[i].imagem}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-azul maiusculo">${galeriaFotos[i].titulo}</h5>
                            <p class="card-text">${catalogoFilmesSeries[i].sinopse}</p>
                            <button href="#" class="btn btn bg-salmao">${catalogoFilmesSeries[i].genero[1]}</button>
                        </div>
                    </div>
                </div>
        `
    }


    for (let i = 5; i < 6; i++) {
        sectionHome01.innerHTML += `
         <div class="my-2 col-lg-4 col-sm-12">
                    <div class="card shadow-lg cardIndex">
                        <img src="${poemas[i].imagem}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-salmao maiusculo">${galeriaFotos[i].titulo}</h5>
                            <p class="card-text">${catalogoFilmesSeries[i].sinopse}</p>
                            <button href="#" class="btn btn bg-amarelo">${catalogoFilmesSeries[i].genero[1]}</button>
                        </div>
                    </div>
                </div>
        `
    }
    

    
}

sec_01()
/* ------------------------------------------- */

function sec_02() {
    let sectionHome02 = document.querySelector('#sec_02')

    sectionHome02.innerHTML = `
                <div class="col-12">
                    <h2 class="text-azul display-4 fw-bold text-center mb-5">AVENTURAS IMPERDÍVEIS</h2>
                </div>

        `

    for (let i = 4; i < 5; i++) {
        sectionHome02.innerHTML += `
 <div class="col-lg-4 col-sm-12">
                    <div class="card shadow-lg cardIndex mt-4">
                        <img src="${poemas[0].imagem}" class="card-img">

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start ">
                                <h3 class="text-salmao maiusculo">${frasesMotivacionais[0].autor}</h3>
                                <div>
                                    <i class="bi bi-star-fill text-amarelo"></i>
                                    <span>${frasesMotivacionais[2].data[6]}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="badge bg-salmao text-white me-2">${catalogoFilmesSeries[0].genero[0]}</span>
                                <span class="badge bg-amarelo text-dark">${catalogoFilmesSeries[2].classificacao}</span>
                            </div>
                            <p class="mb-2">
                                ${frasesMotivacionais[0].frase}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-azul fw-bold">${catalogoFilmesSeries[0].anoLancamento}</span>
                                <button class="btn-meu bg-azul text-white p-2">
                                    <i class="bi bi-plus-lg"></i> ${catalogoFilmesSeries[9].titulo}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }

    for (let i = 1; i < 2; i++) {
        sectionHome02.innerHTML += `
         <div class="col-lg-4 col-sm-12">
                    <div class="card shadow-lg cardIndex mt-4">
                        <img src="${poemas[6].imagem}" class="card-img">

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start ">
                                <h3 class="text-salmao maiusculo">${frasesMotivacionais[1].autor}</h3>
                                <div>
                                    <i class="bi bi-star-fill text-amarelo"></i>
                                    <span>${frasesMotivacionais[0].data[3]}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="badge bg-salmao text-white me-2">${catalogoFilmesSeries[2].genero[0]}</span>
                                <span class="badge bg-amarelo text-dark">${catalogoFilmesSeries[1].classificacao}</span>
                            </div>
                            <p class="mb-2">
                                ${frasesMotivacionais[1].frase}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-azul fw-bold">${catalogoFilmesSeries[1].anoLancamento}</span>
                                <button class="btn-meu bg-azul text-white p-2">
                                    <i class="bi bi-plus-lg"></i> ${catalogoFilmesSeries[3].titulo}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }


    for (let i = 5; i < 6; i++) {
        sectionHome02.innerHTML += `
          <div class="col-lg-4 col-sm-12">
                    <div class="card shadow-lg cardIndex mt-4">
                        <img src="${poemas[2].imagem}" class="card-img">

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start ">
                                <h3 class="text-salmao maiusculo">${frasesMotivacionais[2].autor}</h3>
                                <div>
                                    <i class="bi bi-star-fill text-amarelo"></i>
                                    <span>${frasesMotivacionais[0].data[2]}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="badge bg-salmao text-white me-2">${catalogoFilmesSeries[4].genero[0]}</span>
                                <span class="badge bg-amarelo text-dark">${catalogoFilmesSeries[0].classificacao}</span>
                            </div>
                            <p class="mb-2">
                                ${frasesMotivacionais[4].frase}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-azul fw-bold">${catalogoFilmesSeries[3].anoLancamento}</span>
                                <button class="btn-meu bg-azul text-white p-2">
                                    <i class="bi bi-plus-lg"></i> ${catalogoFilmesSeries[1].titulo}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="row mt-5">
                <div class="col-12">
                    <div class="bg-azul text-white p-5 rounded-3">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h3 class="text-amarelo maiusculo">${frasesMotivacionais[0].autor}</h3>
                                <h2 class="display-5 fw-bold maiusculo">PROMOÇÃO DO MÊS  <br> 25% OFF EM PACOTES</h2>
                                <p>${frasesMotivacionais[3].frase}</p>
                            </div>
                            <div class="col-md-4 text-end pt-3">
                                <button class="btn-meu bg-salmao text-white px-4 py-2 fw-bold fs-5">
                                    <i class="bi bi-lightning-charge-fill me-2"></i> ${frasesMotivacionais[0].tema}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    

    
}

sec_02()





/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

function footerIndex() {
    let footerHome = document.querySelector('#footerIndex')

    footerHome.innerHTML = ""
    for (let i = 3; i < 4; i++) {
        footerHome.innerHTML = `
    <div class="bg-dark text-white-50 pt-4">
        <div class="container">
            <div class="row border-bottom border-secondary ">
                <div class="col-sm-12 col-md-6 col-lg-3 pb-5">
                    <div class="d-flex align-items-center mb-3 pt0">
                        <img src="img/logo/logo-adrenature.png" alt="" width="40" class="me-2">
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
                        <a href="#" class="nav-footer text-a"><span class="text-white">Home</span></a>
                        <a href="pg/esportes.html" class="nav-footer">Esportes</a>
                        <a href="pg/galeria.html" class="nav-footer">Galeria</a>
                        <a href="pg/dicas.html" class="nav-footer">Dicas</a>
                        <a href="pg/rankingAcidentes.html" class="nav-footer">Ranking-Acidentes</a>
                        <a href="pg/curiosidades.html" class="nav-footer">Curiosidades</a>
                        <a href="pg/cadastro.html" class="nav-footer">Cadastro</a>
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

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */

