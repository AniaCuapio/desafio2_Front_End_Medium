
const scrollInfinit=()=>{
    $(window).scroll(function(){
        totalDocumentHeight=$(document),height();
        heightScroll=(this).scollTop();
        heightViwport=(this).height();
        
         console.log(totalDocumentHeight)
         console.log(heightScroll)
         console.log(heightViwport)
        })

}

scrollInfinit ()


