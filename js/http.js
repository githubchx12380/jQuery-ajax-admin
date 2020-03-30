(function (w) {
    let baseURL = 'http://localhost:8080/api/v1'
    let bigapi = {
        login:baseURL + '/admin/user/login',
        userdata:baseURL + '/admin/user/info',
        userdetail:baseURL + '/admin/user/detail',
        userpost:baseURL + '/admin/user/edit',
        artclecategory:baseURL + '/admin/category/list',
        categoryadd:baseURL + '/admin/category/add',
        categoyrdelete:baseURL + '/admin/category/delete',
        categoryselect:baseURL + '/admin/category/search',
        categoryedit:baseURL + '/admin/category/edit',
        contentdetail:baseURL + '/admin/article/query',
        contentrelease:baseURL + '/admin/article/publish',
        contentsearch:baseURL + '/admin/article/search',
        contentdelete:baseURL + '/admin/article/delete',
        articleedit:baseURL + '/admin/article/edit'
    }
    w.bigapi = bigapi
})(window)