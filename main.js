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
    async:false
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
    if (post.section === "popular"){
      arrayPopularSection.push(post)
    }
    else if(post.section === "recent"){
      arrayRecentSection.push(post)
    }
    });
}

filterPosts(postsToRender)

log("array recent:", arrayRecentSection)
log("array popular:", arrayPopularSection)
let arrayTotals = arrayPopularSection + arrayRecentSection

log ("array totals:", arrayTotals)




const printPosts=()=>{

arrayRecentSection.forEach(post =>{
  let { title, imgUrl, author, createdAt, id } = post
  let postCard = `
<div class="card mb-3 border-white" data-id ="${id}">
 <div class="row no-gutters flex-md-row-reverse">
  <div class="col-8" data-id ="${id}">
    <div class="card-body py-0">
       <h5 class="card-title">${title}</h5>
       <div class="delete-btn">
        <svg class="bi bi-x" data-id ="${id}" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
      <p class="card-text m-0">${author}</p>
      <div class="row">
        <div class="col-10">
          <p class="card-text"><small class="text-muted">${createdAt} · 4 min read ★</small>
            <span class="tooltiptext">Updated Jun 20</span>
          </p>
        </div>
        <div class="col-2 d-flex justify-content-end px-0">
          <div class="d-md-none">
            <a class="text-dark mx-1" href="#"><i class="far fa-bookmark"></i></a>
          </div>
          <a class="text-dark mx-1" href="#"><i class="fas fa-ellipsis-h text-muted"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="h-100 w-100">
      <img src="${imgUrl}" class="card-img" alt="...">
    </div>
  </div>
 </div>
</div>`
$(".recent-section").append(postCard)
})

arrayPopularSection.forEach(post =>{
  let { title, author, createdAt, id } = post
  let postCard2 =`
  <div class="d-inline-flex mt-5">
    <h3 class="mr-3 text-black-50">02</h3>
    <h5 class="text-dark hoover-h">${title}</h5>
  </div>
  <span class="hoover-h ml-5">${author}</span>
  <div class="row ml-5">
    <div class="m-0">
      <p class="card-text2"><small class="text-muted">${createdAt} · 14 min read ★</small>
        <span class="tooltiptext2">Updated Jun 20</span>
      </p>
      <div class="delete-btn">
        <svg class="bi bi-x" data-id ="${id}" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
    </div>
  </div>`
$("#popular-container").append(postCard2)
})


// arrayTotals.forEach(post =>{
// let {imgUrl, title, author, createdAt, id , text} = post
// // log(text.slice(0, 150))
// let cardPost3 = `
// <div class="col-8 d-flex flex-column mt-5 pl-5">
// <h6 class="text-muted font-weight-light">POPULAR ON MEDIUM</h6>
// <h4 class="hoover-h">${title}</h4>
// <div class="delete-btn">
// <svg class="bi bi-x" data-id ="${id}" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
// <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
// </svg>
// </d  iv>
// <p class="text-muted font-weight-light">"${text.slice(0, 150)}..."</p>
// <div class="d-flex justify-content-start">
//     <span class="hoover-h">${author}</span>
//     <p class="mx-2">in</p><span class="hoover-h"> Towards Data
//         Science</span>
// </div>
// <div class="row">
//     <div class="col-6 d-flex justify-content-around">
//         <span class="mr-2 text-muted">${createdAt.toDateString()}</span>
//         <span class="text-muted mr-2">•</span>
//         <span class="mr-2 text-muted">7 min read</span>
//         <span class="text-muted">★</span>
//     </div>
//     <div class="col-6 d-flex justify-content-end">
//         <i class="far fa-bookmark mx-1 hoover-h"></i>
//         <i class="fas fa-ellipsis-h text-muted mx-1 hoover-h"></i>
//         <div class="delete-btn" data-id ="${id}">
    //   <div class="delete-btn" data-id ="${id}">
    //   <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    //    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    //  </svg>
    //  </div>
//     </div>
// </div>
// </div>
// <div class="col-4 d-flex flex-column mt-5 pr-0">
// <img class="hoover-h"
//     src="${imgUrl}"
//     alt="Dashboard Image">
// </div>`
// $("#all-container").append(cardPost3)
// })

/*let deleteBtns= document.querySelectorAll(".delete-btn")
deleteBtns.forEach(btn=>{
  btn.addEventListener("click", prueba)
})*/
$(".delete-btn").click(prueba)
}

const prueba = (e)=>{
  e.stopPropagation();
  console.log(e.target)
  let id= e.target.getAttribute("data-id")
  console.log(id)
  deletePost(id)
  RefreshPage()
  //printPosts()
  
  
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
  xhttp.onreadystatechange = function(){ 
      if(this.readyState == 4 && this.status == 200){      
          let response = JSON.parse(this.responseText) 
          console.log(response)
      }
  }
  xhttp.open("DELETE",`https://ajaxclass-1ca34.firebaseio.com/medium-team2/${PostId}.json`,true)
  xhttp.send()
  console.log("post borrado")
}



printPosts()



//  Esta funcion dibuja el html alternativo
const loadPage = (selector, url, callback) => {
//  alert("prueba de botón")
  $(selector).load(url, callback)
}

//  Hacer el objeto post
const handleSaveListener = () => {
  $("#save-btn").click(function (e) {
    e.preventDefault();
    //alert("prueba de botón guardar")f
    let title = $("#input-title").val()
    let text = $("#input-text").val()
    let author = $("#input-author").val()
    let imgUrl = $("#input-img").val()
    let section = $("input[name ='section']:checked").val()
    //log(section)
    let postObject = { title, text, author, imgUrl, section}
    postData(postObject)
    location.reload()
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

//             $(".delete").click(deleteTableRow)

