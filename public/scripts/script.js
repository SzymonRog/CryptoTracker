$('.crypto').on("click",function (){
    let divId = $(this).attr('id')
    $.ajax({
        url:'http://localhost:3000/crypto',
        method:'POST',
        contentType: "application/json",
        data: JSON.stringify({ id: divId }) // <-- id w body
    })
})