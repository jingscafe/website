  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1393697340884831',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
  // for any authentication related change, such as login, logout or session refresh. This means that
  // whenever someone who was previously logged out tries to log in again, the correct case below 
  // will be handled. 
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    if (response.status === 'connected') {
    	showLoggedInView();
    } else {
    	showLoggedOutView();
    }
  });
 
  FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    showLoggedInView();
  } else {
    showLoggedOutView();
  }
  
  });

  };

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

  function login() {
		FB.login(function(response) {
  		showLoggedInView();
		}); 
  }

  function showLoggedInView() {
    FB.api('/me/picture', function(response) {
 			document.getElementById("login-block").innerHTML=
      '<img src="' + response.data.url +'"/>' + ' ' +
      '<a href="#" onclick="logout();">Log Out</a>';
  	});
	}

  function logout() {
		FB.logout(function(response) {
  		showLoggedOutView();
		}); 
  }

  function showLoggedOutView() {
    document.getElementById("login-block").innerHTML=
      '<img src="../../images/FB-f-Logo__blue_50.png" />' + ' ' +
      '<a href="#" onclick="login();">Log In</a>';
  }


