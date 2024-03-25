$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaToDo = $('input').val();
        const novaTarefa = $(`<li>${tarefaToDo}</li>`);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(750);
        $('input').val('')
    }) 
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('line-through').fadeOut(200);
    })
})