window.addMyContent=function(n){function e(n){$.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json").done(function(e){padding0px="padding:0px;",Object.keys(n).forEach(function(o){url=n[o],Object.keys(e).some(function(n){return repo=e[n],-1!=$.inArray(o,repo)?(a.append($('<a href="'+url+'"><img src="'+n+'" style="'+padding0px+'" /></a>')),a.append(" "),!0):void 0})}),0==a.children().length&&a.append($('<a href="" style="color:#E0E0E0;">&bnsp;</a>'))})}var a=new window.bar;a.appendTo(document.getElementsByTagName(n)[0].parentNode),window.albumsUrl(window.writing,e)};