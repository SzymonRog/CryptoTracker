$('.crypto').on("click",function (event){
    
    let divId = $(this).attr('id').toLowerCase()
    $('.crypto').removeClass('pressed')
    $(this).addClass('pressed')

    
    window.location.href =`http://192.168.18.17:3000/crypto?id=${divId}`
})

$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get('id');
  
    if (selectedId) {
      $(`#${selectedId.toLowerCase()}`).addClass('pressed');
    }
  });


