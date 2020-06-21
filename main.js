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
        let { title, text, author, section, createdAt } = value
      })
      //renderPosts(postsToRender)
    },
    method: "GET",
    async:false
  });
};

getPostsFromDb()

log(postsToRender)

const renderPosts = (array) => {
  log("prueba de función de dibujar")
  log(array)
  array.forEach(post => {
    log(post.section)
    if (post.section === "popular"){
    log("este post se va a la seccion popular:", post)
    }
    else if(post.section === "recent"){
    log("este post se va a seccion reciente:", post)
    }
    });
}

renderPosts(postsToRender)

//  Esta funcion dibuja el html alternativo
const loadPage = (selector, url, callback) => {
  alert("prueba de botón")
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
