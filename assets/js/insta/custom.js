$(document).ready(function(){

  var userFeed = new Instafeed({
    get: 'user',
    userId : '6921109790',
    resolution : 'standard_resolution',
    accessToken : '6921109790.1677ed0.7ad1c946a4b74af5bf14e5575f1052e8',
    sortBy : 'most-recent',
    //template : '<li><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></li>'
    template : '<li><img src="{{image}}" alt="{{caption}}" width="290" height="200"/>'+
                '</li>'

    // after : function () {$('#instafeed > div:nth-child(1)').addClass('active');}
  });
  userFeed.run();
  $('#instafeed').simplyScroll();
})
