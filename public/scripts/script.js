$('.crypto').on("click",function (event){
    
    let divId = $(this).attr('id').toLowerCase()
    window.location.href =`http://localhost:3000/crypto?id=${divId}`
})


