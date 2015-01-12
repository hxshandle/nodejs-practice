# Self tech investigation project base on Koa fromework

## Run

In order to auto restart server during dev phase, we need use **nodemon**

```shell
$ npm install -g nodemon
$ cd project-root-dir
$ nodemon app.js
```
## UI framework
1. [Bootstrap-flatstrap](http://zerox.me/projects/flatstrap/)
2. [Jquery 2.1.3](https://code.jquery.com/jquery-2.1.3.min.js)

## biz-module

### auth

Auth module is a base functional biz-module which will filter each request.Following is the login flow.

1. unauth user visit page will redirect to _**$options.loginPath**_ page.
2. In login page user post login form.
3. If user login success a user filed will be added in session, the filed name is configed by _**options.userField**_ default is "_**user**_".
4. User will redirect to the original page.

Config

```javascript
defaultOptions = {
    userField: 'user',
    rootPath: '/',
    loginPath: '/login',
    logoutPath: '/logout',
    match: '',
    ignore:'/404.html,/500.html'
  }
  
``` 
