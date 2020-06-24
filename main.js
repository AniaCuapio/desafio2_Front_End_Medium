let log = console.log

log(typeof (posts))


//postData()

var postsToRender = [];

const getPostsFromDb = () => {
  $.ajax({
    url: "https://ajaxclass-1ca34.firebaseio.com/medium-team2/.json",
    success: function (response) {
      $.each(response, (key, value) => {
        // log('key: ', key)
        // log('post value: ', value)
        postsToRender.push({ ...value, id: key });
        // let { id, imgUrl, title, text, author, section, createdAt } = value
        // log(value)
      })
      //renderPosts(postsToRender)
    },
    method: "GET",
    async: false
  });
};

getPostsFromDb()

log(postsToRender)

let arrayPopularSection = []
let arrayRecentSection = []

const filterPosts = (array) => {
  log("prueba de función de dibujar")
  log(array)
  array.forEach(post => {
    log(post.section)
    if (post.section === "popular") {
      arrayPopularSection.push(post)
    }
    else if (post.section === "recent") {
      arrayRecentSection.push(post)
    }
  });
}

filterPosts(postsToRender)

log("array recent:", arrayRecentSection)
log("array popular:", arrayPopularSection)
let arrayTotals = arrayPopularSection.concat(arrayRecentSection)

log("array totals:", arrayTotals)

const printPosts = () => {
  for (let i = 0; i < 3; i++) {
    let post = arrayRecentSection[i];
    let { title, imgUrl, author, createdAt, id } = post
    let postCard = `
<div class="card mb-3 border-white" data-id ="${id}">
 <div class="row no-gutters ">
  <div class="col-8" data-id ="${id}">
    <div class="card-body py-0">
       <h5 class="card-title">${title}</h5>
       <p class="card-text m-0">${author}</p>
      <div class="row">
        <div class="col-10">
          <p class="card-text"><small class="text-muted">${createdAt} · 4 min read ★</small></p>
          <span class="tooltiptext">Updated Jun 20</span>
        </div>
        <div class="col-2 d-flex justify-content-end px-0">
          <div class="d-md-none">
            <a class="text-dark mx-1" href="#"><i class="far fa-bookmark"></i></a>
          </div>
          <a class="text-dark mx-1" href="#"><i class="fas fa-ellipsis-h text-muted"></i></a>
          <a class="text-dark mx-1" href="#"><i data-id="${id}" class="fas fa-times"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col-4">
    <div class="h-100 w-100">
      <img src="${imgUrl}" class="card-img" alt="...">
    </div>
  </div>
  </div>
 </div>
</div>`
    $("#recent-section").append(postCard)
  }
  for (let i = 0; i < 5; i++) {
    let post = arrayPopularSection[i];
    let { title, author, createdAt, id } = post
    let postCard2 = `
  <div class="d-inline-flex mt-5">
  <h5 class="text-dark hoover-h">${title}</h5>
  </div>
  <span class="hoover-h ml-5">${author}</span>
  <div class="row ml-5">
    <div class="m-0">
    <p class="card-text"><small class="text-muted">${createdAt} • 14 min read</small>
    <span class="tooltiptext">Updated Jun 20</span>
    <span class="middotDivider text-muted">★</span>
    <span><i data-id="${id}" class="fas fa-times"></i></span> </p>
  </div>
</div>
`
    $("#popular-section").append(postCard2)
  }


  arrayTotals.forEach(post => {
    let { imgUrl, title, author, createdAt, id, text } = post
    let briefText = text.slice(0, 150)
    let cardPost3 = `


<div class="row pt-5">
<div class="col-8 col-md-9 text-card-section">
    <p class="text-muted mb-1">BASED ON YOUR READING HISTORY</p>
    <h5 class="font-weight-bold mb-1">${title}</h5>
    <p class="text-muted">${subTitle}</p>
    <div class="row">
        <div class="col-6">
            <!-- <span class="text-dark">Jay Butera</span><br> -->
            <div class="anchor"><a href="#">${author}</a> in <a href="#">Forge</a>
            </div>
            <span class="text-muted">Jan 1, 2019 &CenterDot; 5 min read</span>
        </div>
        <div class="col-6 d-flex align-self-end justify-content-end">
            <span class="svgIcon svgIcon--bookmark svgIcon--25px">
                <svg class="svgIcon-use" width="25" height="25">
                    <path
                        d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                        fill-rule="evenodd"></path>
                </svg>
            </span>
            <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight">
                <svg class="svgIcon-use" width="25" height="25">
                    <path
                        d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 0 0 7 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 0 0-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 0 0-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                        fill-rule="evenodd"></path>
                </svg>
            </span>
        </div>
    </div>
</div>
<div class="col-4 col-md-3">
    <img class="w-100" src="https://miro.medium.com/max/1400/1*qQB3wK0mrY_qo8Jd4JY2kw.jpeg"
        alt="img1">
</div>
</div>


<div class="col-8 d-flex flex-column mt-5 pl-5">
<h6 class="text-muted font-weight-light">POPULAR ON MEDIUM</h6>
<h4 class="hoover-h">${title}</h4>
<p class="text-muted font-weight-light">"${briefText}..."</p>
<div class="d-flex justify-content-start">
    <span class="hoover-h">${author}</span>
    <p class="mx-2">in</p><span class="hoover-h"> Towards Data
        Science</span>
</div>
<div class="row">
    <div class="col-6 d-flex justify-content-around">
        <span class="mr-2 text-muted">${createdAt}</span>
        <span class="tooltiptext">Updated Jun 20</span>
        <span class="text-muted mr-2">•</span>
        <span class="mr-2 text-muted">7 min read</span>
        <span class="text-muted">★</span>
    </div>
    <div class="col-6 d-flex justify-content-end">
        <i class="far fa-bookmark mx-1 hoover-h"></i>
        <i class="fas fa-ellipsis-h text-muted mx-1 hoover-h"></i>
        <span><i data-id="${id}" class="fas fa-times"></i></span></p>
    </div>
</div>
</div>
<div class="col-4 d-flex flex-column mt-5 pr-0">
<img class="hoover-h w-75" 
    src="${imgUrl}"
    alt="Dashboard Image">
</div>



`
    $("#total-section").append(cardPost3)
  })
  $(".delete-btn").click(prueba)
}

const prueba = (e) => {
  e.stopPropagation();
  console.log(e.target)
  let id = e.target.getAttribute("data-id")
  console.log(id)
  deletePost(id)
  RefreshPage()
  //alert("prueba de borrar")
}

function RefreshPage() {
  setTimeout(rfrsh, 1000);
}

function rfrsh() {
  window.location.reload()
  console.log("refreshing")
}

const deletePost = (PostId) => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText)
      console.log(response)
    }
  }
  xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/medium-team2/${PostId}.json`, true)
  xhttp.send()
  console.log("post borrado")
}

//printPosts()

//  Esta funcion dibuja el html alternativo
const loadPage = (selector, url, callback) => {
  //  alert("prueba de botón")
  $(selector).load(url, callback)
}

//  Hacer el objeto post
const handleSaveListener = () => {
  $("#wrapper-main-navbar").addClass(".d-none")
  $("#wrapper-format-navbar").removeClass(".d-none")
  $("#save-btn").click(function (e) {
    e.preventDefault();
    alert("prueba de botón guardar")
    let title = $("#input-title").val()
    let text = $("#input-text").val()
    let author = $("#input-author").val()
    let imgUrl = $("#input-img").val()
    let section = $("input[name ='section']:checked").val()
    //log(section)
    let postObject = { title, text, author, imgUrl, section }
    postData(postObject)
    location.reload();
  });
}

const postData = (object) => {
  object = { ...object, createdAt: new Date() }
  log(object)
  $.ajax({
    url: "https://ajaxclass-1ca34.firebaseio.com/medium-team2/.json",
    method: "POST",
    data: JSON.stringify(object),
    success: (response) => {
      log(response);
    }
  })
}

//Función para la nav bar scroll derecho e izquierdo

$('#toRight').click(function () {
  var position = $('.wrapper_items').scrollLeft();
  $(".wrapper_items").animate({
    scrollLeft: position + 110
  }, 400);
})
$('#toLeft').click(function () {
  var position = $('.wrapper_items').scrollLeft();
  $(".wrapper_items").animate({
    scrollLeft: position - 110
  }, 400);
})