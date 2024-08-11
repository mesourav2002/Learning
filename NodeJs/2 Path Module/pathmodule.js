// ! path Module :-
// todo : this method is work with file & directory

const path = require("path");
// console.log(path)

// console.log(__dirname); //? D:\J-spider_Learning\Node.js\2 Path Module
// console.log(__filename); //? D:\J-spider_Learning\Node.js\2 Path Module\pathmodule.js

// !basename :

//todo Is is used to return the last part of the path

// ? current working directory name
// console.log(path.basename(__dirname)); //? 2 Path Module

// ? current working file name
// console.log(path.basename(__filename)); //? pathmodule.js

// !extention

// todo: It is used to check the extension of a folder / file

// console.log(path.extname(__dirname))  //? empty

// console.log(path.extname(__filename)) //? .js

// ! parse

// todo : It return the path in the form of object

// console.log(path.parse(__dirname));
//? {
//?     root: 'D:\\',
//?     dir: 'D:\\J-spider_Learning\\Node.js',
//?     base: '2 Path Module',
//?     ext: '',
//?     name: '2 Path Module'
//?   }
// console.log(path.parse(__filename))
//?   {
//?     root: 'D:\\',
//?     dir: 'D:\\J-spider_Learning\\Node.js\\2 Path Module',
//?     base: 'pathmodule.js',
//?     ext: '.js',
//?     name: 'pathmodule'
//?   }

// ! format

// console.log(path.format(path.parse(__dirname))); //? D:\J-spider_Learning\Node.js\2 Path Module

// console.log(path.format(path.parse(__filename))); //? D:\J-spider_Learning\Node.js\2 Path Module\pathmodule.js

// ! Absolute

//todo It is used to check path is absolute  (Complete URL) or not or its returns boolean value

// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute(__filename));

// ! join()

// todo ; if we takeing(../)its will delete provious path

// console.log(path.join("f1", "f2", "f3")); //?f1\f2\f3
// console.log(path.join("f1", "f2", "../f3")); //? f1\f3
// console.log(path.join("f1", "../f2", "f3")); //? f2\f3

// !resolve()

//  todo its resolve the absolute path

// console.log(path.resolve("f1","f2","f3")) //? D:\J-spider_Learning\Node.js\2 Path Module\f1\f2\f3
// console.log(path.resolve("/f1","f2","f3")) //? D:\f1\f2\f3
// console.log(path.resolve("f1","/f2","f3")) //? D:\f2\f3
// console.log(path.resolve("/f1","/f2","f3")) //? D:\f2\f3
// console.log(path.resolve("/f1", "f2", "../f3")); //? D:\f1\f3

// todo whenever we passing  without (/) at the strating it will take the absolute path
