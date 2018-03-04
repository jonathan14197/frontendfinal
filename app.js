$(document).ready(function(){
  $(".icons").hover(function(){
    $(this).css("height", "200px");
  }, function(){
    $(this).css("height", "50px");
  });
});
$(document).ready(function(){
  $(".icons").hover(function(){
    $(this).css("width", "200px");
  }, function(){
    $(this).css("width", "50px");
  });
});

//AJAX

function loadRepo(url, callback) {
  let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("github-repos").innerHTML = gitObject[0].name;
   //loadRepoCallback(JSON.parse(this.responseText));
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/jonathan14197/repos", true);
gitHubRequest.send();
}


function loadRepoCallback(repo) {
  let showRepo = `<h1>${repo[0].name}</h1><br /> <a href="${repo[1].html_url}>Link</a>`;
  document.querySelector("#github-repos").innerHTML = showRepo;
}

// Callback function needs to parse the JSON
  // Using the DOM get the element ID from your <ul> in your HTML
  // You will need a forEach to loop through the parsed object
  // Using the DOM create new list elements
  // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
  // Append the new list items to the element you retrieved from HTML

  
