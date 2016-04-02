"use strict";angular.module("clientApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("clientApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("clientApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/about.html",'<!DOCTYPE HTML> <html> <head> </head> <body> <div class="wrapper" id="wrapper"> <p> We are 2 Information Technology students exploring a new avenue. We are learning the proper way to develop a web based cloud application. This experience is coming to us in our software engineering course at Oakland University in Rochester Michigan. </p> </div> </body> </html>'),a.put("views/contact.html",'<!DOCTYPE HTML> <html> <head> </head> <body> <div class="wrapper" id="wrapper" class="col-md-4 col-md-offset-4"> <p>pjlutz2@oakland.edu<br> evcicci@oakland.edu </p> </div> </body> </html>'),a.put("views/display.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>STATS DISPLAYED HERE</title> </head> <body> </body> </html>'),a.put("views/login.html",'<!DOCTYPE HTML> <html> <head> </head> <body> <div class="container"> <div class="wrapper"> <form action="" method="post" name="Login_Form" class="form-signin"> <h3 class="form-signin-heading">Welcome Back! Please Sign In</h3> <hr class="colorgraph"><br> <input type="text" class="form-control" name="Username" placeholder="Username" required autofocus> <input type="password" class="form-control" name="Password" placeholder="Password" required> <button id="loginBtn" name="Submit" value="Login" type="Submit">Login</button> </form> </div> </div> </body> </html>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/register.html",'<div id="registerDiv"> <h1>Register</h1> <form> <div class="form-group"> <input class="form-control" placeholder="First Name" type="text" name="firstname"> </div> <div class="form-group"> <input class="form-control" placeholder="Last Name" type="text" name2="lastname"> </div> <div class="form-group"> <input type="radio" name="gender" value="male" checked> Male <input type="radio" name="gender" value="female"> Female <input type="radio" name="gender" value="other"> Other </div> <div class="form-group"> <input class="form-control" placeholder="Date of Birth" type="\'date" name="bday"> </div> <div class="form-group"> <input class="form-control" placeholder="Street" type="text" name="street"> </div> <div class="form-group"> <input class="form-control" placeholder="City" type="text" name="city"><br> </div> <div class="form-group"> <select> <option value="none">state</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> </div> <div class="form-group"> <input class="form-control" placeholder="Zipcode" type="text" name="zipcode"> </div> <div class="form-group"> <input class="form-control" placeholder="School" type="text" school="school"> </div> <div class="form-group"> <input class="form-control" placeholder="Degree" type="text" degree="degree"> </div> <br> <br> <div class="form-group"> <input class="form-control" placeholder="Email" type="text" email="email"><br> </div> <div class="form-group"> <input class="form-control" placeholder="Password" type="password" name="password" id="password"> </div> <div class="form-group"> <input class="form-control" placeholder="Confirm password" type="password" name="cpassword" id="cpassword" onkeyup="checkPass(); return false"> </div> <p id="confirmMessage" class="confirmMessage"></p> <input type="submit" value="register" id="registerBtn"> </form> </div>'),a.put("views/stats.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>STATS ENTERED HERE</title> </head> <body> </body> </html>')}]);