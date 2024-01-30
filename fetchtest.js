
//var test= await fetch('https://example.com/')
//var testtext= await test.text()
//document.write(testtext)

fetch('https://example.com/')
.then(res=>{console.log(res);return res.text();})
.then(txt=>console.log(txt))
