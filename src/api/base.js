// 公共的接口配置资源
/*
    公共的接口配置资源
*/
const base = {
    host: 'http://iwenwiki.com:3000/toplist/detail',//基本域名
    newsong: "/foo/weapi/personalized/newsong", //首页-最新音乐
    playlist: "/foo/weapi/v6/playlist/detail",//热歌榜列表数据
    hotSearch: "/foo/weapi/search/hot",//热门搜索接口
    search: "http://iwenwiki.com:3000/search/suggest",//搜索接口
    musicplaylist: "/foo/weapi/v6/playlist/detail",//首页-推荐音乐-列表界面
    songUrl:'/boo/weapi/song/enhance/player/url/v1',//音乐
    lyric: 'http://iwenwiki.com:3000/lyric',//歌词
}


export default base
