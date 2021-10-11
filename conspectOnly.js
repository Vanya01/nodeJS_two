// we have 2 ways how to code the passwords - first one is -
// typical encryption(шифрування) when user have secret word and can sent it and get back
// second type is - heshing when user cant get the response
// so i should instaall library - npm install bcrypt - this is the library which work whith encryption
// npm i joi - usefull library
/*
const {name, email, password} = req.body;

if (!name || !email || !password) {
    throw new Error('Some fields are empty');
}

if (!email.includes('@')) {
    throw new Error('missed smth')
}*/
