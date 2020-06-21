let log = console.log

log(typeof (posts))


//postData()

var postsToRender = [];

const getPostsFromDb = () => {
  $.ajax({
    url: "https://ajaxclass-1ca34.firebaseio.com/medium-equipo2/.json",
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

const printPosts=()=>{

arrayRecentSection.forEach(post =>{
  let { title, imgUrl, author, createdAt, id } = post
  let postCard = `
<div class="card mb-3 border-white">
 <div class="row no-gutters flex-md-row-reverse">
  <div class="col-8" data-id ="${id}">
    <div class="card-body py-0">
       <h5 class="card-title">${title}</h5>
       <p class="card-text m-0">${author}</p>
      <div class="row">
        <div class="col-10">
          <p class="card-text"><small class="text-muted">${createdAt} · 4 min read ★</small></p>
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
  // let { title, imgUrl, author, createdAt, id } = post
  // let postCard2 =` <span class="border border-bottom-0"></span>
//   <div class="d-inline-flex mt-5">
//   <h3 class="mr-3 text-black-50">01</h3>
//   <h5 class="text-dark hoover-h">Stealing Secrets from Developers using Websockets
//   </h5>
// </div>`
})

}

//printPosts()



//  Esta funcion dibuja el html alternativo
const loadPage = (selector, url, callback) => {
//  alert("prueba de botón")
  $(selector).load(url, callback)
}

//  Hacer el objeto post
const handleSaveListener = () => {
  $("#save-btn").click(function (e) {
    e.preventDefault();
    alert("prueba de botón guardar")
    let title = $("#input-title").val()
    let text = $("#input-text").val()
    let author = $("#input-author").val()
    let imgUrl = $("#input-img").val()
    let section = $("input[name ='section']:checked").val()
    //log(section)
    let postObject = { title, text, author, imgUrl, section}
    postData(postObject)

  });
}

const postData = (object) => {
  object = { ...object, createdAt: new Date() }
  log(object)
    $.ajax({
      url: "https://ajaxclass-1ca34.firebaseio.com/medium-equipo2/.json",
      method: "POST",
      data: JSON.stringify(object),
      success: (response) => {
        log(response);
      }
    })
}


//                 $("#koders-table").find("tbody").append(`
//                 <tr data-koder-key='${key}'>
//                     <td class="firstName" data-name="${name}" >${name}</td>
//                     <td class="lastName" data-last="${lastName}">${lastName}</td>
//                     <td class="age">${age}</td>
//                     <td class="email">${email}</td>
//                     <td class="date">${createdAt}</td>                    
//                     <td class="delete">
//                         <svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16"
//                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                             <path fill-rule="evenodd"
//                                 d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
//                             <path fill-rule="evenodd"
//                                 d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
//                         </svg>
//                     </td>
//                 </tr>
//             `)
//             })
//             $(".delete").click(deleteTableRow)
