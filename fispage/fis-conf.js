/*启动插件*/
fis.config.set('modules.postpackager', 'simple');
fis.config.set('roadmap.domain',  {
    //所有文件加域名
    '**.*' : 'http://10.25.5.29:8000/target'
});

fis.config.set('roadmap.path', [
    {
    /*    去掉test目录*/
        reg : '**/test/*.*',
        release : false
    },
    {
        reg : /^\/common_module\/(.*)$/,
        release : 'cm/$1'
    },
    {
        reg : /^\/module\/(.*)$/,
        release : '${name}/${version}/m/$1'
    },
    {
        reg : /^\/static\/(.*)$/,
        release : '${name}/${version}/s/$1'
    },
    {
        reg : /^(.*)$/,
        release : '${name}/${version}/$1'
    }
]);


/*自动合并页面的文件*/
fis.config.set('settings.postpackager.simple.autoCombine', true);

//图片合并功能
/*fis.config.set('roadmap.path', [{
    reg: '**.css',
    useSprite: true
}]);
fis.config.set('settings.spriter.csssprites.margin', 10);*/

fis.config.set('name', 'double11');
fis.config.set('version', '1.0');