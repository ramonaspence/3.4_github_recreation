$(document).ready(function() {

  let userRepos = $.ajax(`https://api.github.com/users/ramonaspence/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .done((resp) => {
      // console.log(resp);
      updateUserRepos(resp);
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      // console.log('always fires');
    });


  let updateUserRepos = (data) => {
    // data is an object
    let source = $("#repo_template").html(); // grabing html template for repos
    let template = Handlebars.compile(source); //function will be called later
    let context = data; // this is the data from GitHub
    let html = template({repos: data}); // this builds the html
    $('.repo-list').html(html); // this injects the html into the DOM

  }

  let userData = $.ajax(`https://api.github.com/users/ramonaspence?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .done((resp) => {
      // console.log(resp);
      updateUserData(resp);
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      // console.log('always fires');
    });


  let updateUserData = (data) => {
    let source = $("#bio-template").html();
    let template = Handlebars.compile(source);
    let context = data;
    let html = template(data);

    $('.side-img-name').html(html);
  }

  let orgsData = $.ajax(`https://api.github.com/users/ramonaspence/orgs?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .done((resp) => {
      // console.log(resp);
      updateOrgsData(resp);
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      // console.log('always fires');
    });

  let updateOrgsData = (data) => {
    let source = $("#orgs-template").html();
    let template = Handlebars.compile(source);
    let context = data;
    let html = template({orgs: data});
    // console.log(html);
    $('.orgs').html(html);

  }



});
