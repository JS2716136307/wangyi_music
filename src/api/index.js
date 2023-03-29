// 公共的请求方法
import base from "@/api/base";
import axios from "@/utils/request";

const api = {
    // 1. 获取推荐音乐
    getMusic() {
        return axios.get(base.host)
    },
    //2.获取最新音乐
    getNewSong() {
        return axios.post(base.newsong, {
            params: "KhumaCpKtgECmietstMOpC6LENhSTOrdBPeMGQvKGZFXJHDOIezFq94vo+Qs3fC/",
            encSecKey: "551ad4f8ad481c1d8a59f088109b69d2a0240f1116b325f8bd0d39f48bf185eb1aa51923b4b16dc84f86174a49edd6bdd696d0f4bcf221a43b778b94b29c39cc274621aaf5143a29bcafdbd3684e64ce460ae764942499509ea66cfc93348ed1c28da542cd22f639301312a8ca93485650af90f75c03892a04410b376f501459"
        })
    },
    // 3.热歌榜列表数据
    getPlayList() {
        return axios.post(base.playlist, {
            params: "6b89kAGlTKKcgQTCKwupGy18VFQJ9dagDgXkA6xSJS60D4h0duOcG8P/2kQL2gUT",
            encSecKey: "9ea6015b28ae98abd70c181ec06c3560b67c0cc56abeb75b6951b41f7a96a46c3eb3c067a15e5724a8bd59913c1df1b5ffd81fb30ae7a24197990acd090e798a478946c99c320023c4ecbc66d5c3194a105b8fd1347446499afc3e52fd8b77d14fffccff52caeb19bb84fc14377d3b2ad9181de41302449a9f5a0775ee4fa0ba"
        })
    },
    // 4.搜索热词
    getHotSearch() {
        return axios.post(base.hotSearch, {
            params: "MVrhR9IXvDO/p2TYDciN5VyGvAS3jx4XHMt/SsyWzJI=",
            encSecKey: "433c1788c92ab463ad33a648ae9c48f7ccd5d4f85f37b1d13e976f1cafe9b2221e20a55f59e08669cff2ee6a07886324a462cacc1c96304bbf09fade3c2a8a0fd8dd46a6b06dd01cd2d78b7ff6088b27615acfebdd4556492d1f0b7be44cf3d2ab86595e263504759d1ee1f00742c6713bdb5818c2c3040fd59ac7ed6cd0e451"

        })
    },
    // 5.搜索接口
    search(params) {
        return axios.get(base.search, {
            params
        })
    },
    //6.首页-推荐-列表歌曲
    musicplaylist() {//params={id:xx }
        return axios.post(base.musicplaylist, {
            params: "vYdgzB9m7ZXjYNNhxg9i2PmuWo07d0XPkIdrwUW8Roel71KHprnl9nkDv5umDoR0DoG1h2FjvcYUM7o+TWb0ACLUCrjCvVHjw6BAUELkr+g=",
            encSecKey: "24d3c71cb3a0543d1dfd6c5bb480517837eadca3c2c1f5788671757a3cd6a36d8c7a09489d01913f7f39814a1d9c43683c47710e90267b7fe41895c5fdd9b646d2c6c02187923e5492063b2c4b8e77c6a6eecd5b282030277098bcaca0d7e2856287b8a1eec0b5c520ca2e00c7aed1b8503550d0c7f9cdb18e6a0eb6ebe88f0a"
        })
    },
// 7. 音乐 id：xxx
    songUrl() {
        return axios.post(base.songUrl, {
            params: 'XA86f32PO9F66jiQS9rFYL7q2NrORVgLdwj7nboO1LKgPv3TGqsGvOLNeJg1B2ZToZIL0J8JCVmiExnzM9un+80mbyxvN/Y1AVXPPvIrEUOtTclqxSRopiAYu5zaNN21',
            encSecKey: '3803141bfad622865ff8a747d84e10948e7f50bd2cee5ac92114a83d44630c4111fde9a3c92da58f20d174884a738746f8611647209a880aee3f022fbbb0b1f4215e0fd76042d5b7e2fc9fe6021bca284f4b44919c6167872d144817dd7334823c201730c15a3f46baa46a42c622f6bea1b186eaa96de0aa264a40e1df4a9154'
        })
    },
    // 8. 歌词 id
    getLyric(params) {
        return axios.get(base.lyric, {
            params
        })
    }
}

export default api
