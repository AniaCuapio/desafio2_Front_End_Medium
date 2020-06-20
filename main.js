let posts = [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "section": "popular"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "section": "popular"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "section": "popular"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "section": "popular"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "section": "popular"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "section": "recent"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "section": "recent"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "section": "recent"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    "section": "recent"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "section": "recent"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    "section": "recent"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    "section": "recent"
  }]

let log = console.log

log(typeof(posts))

const postData = () =>{
    posts.forEach( post => {
        post = { ...post, createdAt: new Date() }
        log(post)
        $.ajax({
            url: "https://ajaxclass-1ca34.firebaseio.com/medium-equipo2/mockdata/.json",
            method: "POST",
            data: JSON.stringify(post),
            success: (response) => {
               log(response);
            }
        })
     })
}

//postData()

const getPostsData = () =>{
    
}

var postsToRender =[];

const getPostsFromDb = () => {
    console.log("prueba de funcion")
     $.get("https://ajaxclass-1ca34.firebaseio.com/medium-equipo2/mockdata/.json",
         function (response) {
            $.each(response, (key, value) => {
                // log('key: ', key)
                // log('post value: ', value)
                postsToRender.push({ ...value, id:key });
                let { title, text, author, section, createdAt } = value
            })
        })
    };

getPostsFromDb()

log(postsToRender)

const renderPosts =(postsToRender)=>{
    postsToRender.forEach( post => {
log("prueba de función dibujar")
log(post.section)
// if (element.section.value === "popular"){
//} 
})
}

renderPosts(postsToRender)


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
