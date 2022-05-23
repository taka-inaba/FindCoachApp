# find_coach_app

## Summary
/coaches -> CoachList
/coaches/:id -> CaochDetails
/register -> Coach Registration
/contact -> ContactCoach
/requests -> RequestReceived



> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Reference

https://qiita.com/kskinaba/items/44077529ff2abcd1fcd4
https://prograshi.com/platform/docker/create-vuejs-on-docker/

#### note

- parser: 'babel-eslint',
are needed in .eslintrc.json otherwise "import()" will cause an error. But if you add it, it will cause another error if you run it again
