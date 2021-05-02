/********************************************************************************* 
* BTI425 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students.  
* Name: Rad Eshghi Student ID: 123348195 Date: 1/29/2021 
* ********************************************************************************/

function pag(size)
{
  var limit = 3;
  var totalP = Math.round(size/limit);

  $(".pagination").append(`<li class='page-item' id="previous-page"><a class='page-link' href='javascript:void(0)' aria-label='Previous'> <span aria-hidden='true'>&laquo;
  </span></a></li>`);
  
  $(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>"+1+"</a></li>");
  
  if (size > limit)
  {
    for(let i = 2; i <= totalP; i++)
    {
        $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>"+i+"</a></li>")
    }
  }

  $(".pagination li.current-page").on('click', function()
  {
    if($(this).hasClass("active"))
    {
        return false;
    }else{
        var currentPage = $(this).index(); 
        //alert(currentPage);
        //alert('user on' + currentPage);
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $(".loop .list-group").hide();

        var grandTotal = limit * currentPage;
        for(let i = grandTotal - limit; i < grandTotal; i++)
        {
            $(".loop .list-group:eq("+i+")").show();
        } 
      }
  });

  $(".pagination").append(`<li class='page-item' id="next-page"><a class='page-link' href='javascript:void(0)' aria-label='Next'> <span aria-hidden='true'>&raquo;
  </span></a></li>`);

  // Click on Next page
  $("#next-page").on("click", function()
  {
    var currentPage = $(".pagination li.active").index();
    if(currentPage === totalP)
        return false; 
    else
    {
        currentPage++;
        $(".pagination li").removeClass("active");
        $(".loop .list-group").hide();

        var grandTotal = limit * currentPage;
        for(let i = grandTotal - limit; i < grandTotal; i++)
        {
            $(".loop .list-group:eq("+i+")").show();
        } 

        $(".pagination li.current-page:eq(" +(currentPage - 1 )+")").addClass("active");
    }
  });

  // Click on Previouse page
  $("#previous-page").on("click", function()
  {
    var currentPage = $(".pagination li.active").index();
    if(currentPage === 1)
        return false; 
    else
    {
        currentPage--;
        $(".pagination li").removeClass("active");
        $(".loop .list-group").hide();

        var grandTotal = limit * currentPage;
        for(let i = grandTotal - limit; i < grandTotal; i++)
        {
            $(".loop .list-group:eq("+i+")").show();
        } 

        $(".pagination li.current-page:eq(" +(currentPage - 1 )+")").addClass("active");
    }
  });
}
