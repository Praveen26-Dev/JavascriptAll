var s = "NewStringhelo"
s.split(" ");
var rev = ""
for(var i=s.length-1;i>=0;i--){
    rev =rev + s[i]
}
console.log(rev);
// var str = s.split("")

// var f =0;
// var l=str.length-1;
// while(f<l){
//     var temp = str[f];
//     str[f] = str[l];
//     str[l]=temp;
//     f++;
//     l--;
// }

// console.log(str.toString())