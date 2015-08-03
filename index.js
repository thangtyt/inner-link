/**
 * Created by thangnv on 8/3/15.
 */
'use strict';

let fs = require('fs');

let keys = {'php':'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
            'node':'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'};

fs.readFile('demo.html',{encoding : 'utf8'}, function (err,result) {
    if(err){
        return console.log(err);
    }
    for (var key in keys){
        result = replaceKey(result,key,keys[key]);
    }
    fs.writeFile('demo.html',result, function (err) {
        if (err)
        console.log(err);
        else
        console.log('Done !!');
    })
});

function replaceKey(content,key,value){
    var flag=1;
    content = content.split(' ');
    for ( var i = 0 ; i < content.length ; i++ ){
        if(content[i].toLowerCase() === key){
            if (flag%3===0){
                content[i]='<a href="'+value+'">'+content[i]+'</a>';
            }
            if (flag===10){
                flag = 1;
            } else{
                flag++;
            }
        }
    }
    return content.join(' ');
}