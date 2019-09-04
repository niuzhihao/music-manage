export const routes=[{
    path:'/',
    redirect:"/register"
},{
    path:'/login',
    component:resolve=>require(['../views/login'],resolve)
},{
    path:"/music",
    component:resolve=>require(['../views/music'],resolve)
},{
    path:"/register",
    component:resolve=>require(['../views/register'],resolve)
},{
    path:"*",
    component:resolve=>require(['../views/404'],resolve)
}]