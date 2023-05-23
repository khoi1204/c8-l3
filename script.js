/*String 
var a=prompt("Enter your name");
console.log(typeof(a));*/  
var str1="Hello World";
console.log(typeof(str1));
/*1. Vị trí của ký tự trong chuỗi */
console.log(str1[0]);
console.log(str1[4]);
/*2. Độ dài của chuỗi */
console.log(str1.length);
/*3. Tìm kiếm trong chuỗi */
console.log(str1.indexOf(" "));
console.log(str1.indexOf("World"));
/*4. Cắt chuỗi */
console.log(str1.slice(0,3));
console.log(str1.slice(6,11));
/*5. Thay thế chuỗi */
console.log(str1.replace("World","Viet Nam"));
/*6. Chuyển đổi chữ hoa chữ thường */
console.log(str1.toLowerCase());
/*7. Chuyển đổi chữ thường chữ hoa */
console.log(str1.toUpperCase());
/*8. In hoa chữ cái đầu tiên */
console.log(str1.charAt(0).toUpperCase()+str1.slice(1));
/*9. Cắt khoảng trắng 2 đầu */
var str2="   Hello World   ";
console.log(str2.trim());
/*10. Tách chuỗi */
var str3="Hello World";
console.log(str3.split(" "));
/*11. Kiểm tra chuỗi có chứa kí tự nào đó hay không (Kết quả trả về là True hoặc False)*/
console.log(str3.includes(" "));
/*12. Kiểm tra chuỗi có bắt đầu bắt đầu = kí tự nào đó hay không */
console.log(str3.startsWith("Hello"));
/*13. Kiểm tra chuỗi có kết thúc = kí tự nào đó hay không */
console.log(str3.endsWith("Viet Nam"));
/*14. Cộng chuỗi */
console.log(str3.concat(" Viet Nam"));
/*15. Lập chuỗi */
var str4 = "Hello";
console.log(str4.repeat(3));
/*16. Số lượng kí tự nào đó trong chuỗi */
console.log(str4.split("1"))
console.log(str4.split("1").length-1)



//Task 1:
var Ten = "Hello Teky"

//Task 2:
var str = "~!~waa!awa~!~"
document.write(str.length, "<br>")
var check = str.includes("a")
document.write("Trong chuỗi có chứa kí tự 'a' hay không: ", str.includes("a"), "<br>")
if  (check == true)
{
  document.write(str.indexOf("a"))
  document.write(str.split("a").length-1)
}

else
{
  document.write("Không tìm thấy kí tự a")
}


//Array
var arr1 = [1, 2, 3, 4, 5];
console.log(typeof(arr1));
/*1. Khai báo mảng */
var arr1 = [1, 2, 3, 4, 5, "hello", true]
var arr2 = new Array(1, 2, 3, 4, 5);
/*2. Truy xuất phần tử trong mảng */
console.log(arr1[6])
/*3. Độ dài của mảng */
console.log(arr1.length);
/*4. Thêm phần tử cuối mảng */
arr1.push(6); //Thêm 1 phần tử 6 vào cuối mảng
/*5. Xóa phần tử cuối mảng */
arr1.pop();
console.log(arr1)
/*6. Thêm phần tử vào đầu mảng */
arr1.unshift(0); //Thêm 1 phần tử 0 ở đầu mảng
/*7. Xóa phần tử đầu mảng */
arr1.shift(); //Xóa một phần tử đầu mảng
/*8. Thêm/xóa phần tử ở giữa mảng */
console.log(arr1);
//Xóa phần tử ở vị trí thứ 2
arr1.splice(2, 3); // Xóa 1 phần tử ở vị trí thứ 2, splice (vị trí, số lượng phần tử cần xóa)
//Thêm phần tử ở vị trí thứ 4
arr1.splice(4, 0, 6); //Thêm 1 phần tử ở vị trí thứ 4, splice(vị trí, số lượng, giá trị cần thêm vào)
/*9. Cộng 2 mảng */
var arr3 = [1, 2, 3];
var arr4 = [4, 5, 6];
console.log(arr3.concat(arr4));
/*10. Kiểm tra phần tử có tồn tại trong mảng hay không */
console.log(arr3.includes(2));
/*11. Chuyển đổi mảng thành chuỗi */
console.log(arr3.join(" "))
/*12. Sắp xếp mảng */
console.log(arr3.sort()); //Sắp xếp mảng theo thứ tự tăng dần
console.log(arr3.reverse()); //Sắp xếp theo thứ tự giảm dần

//Task 1: Tính tổng tất cả giá trị trong mảng

// var arr5 = [1, 2, 3, 4]
// var sum = 0
// var len = arr5.length
// var i = 0
// for (i = 0; i < len; i++)
// {
//   sum += arr5[i];
// }

// document.write('<br>', sum, '<br>')
// console.log(sum)

//Task 2. Tìm phần tử lớn nhất và bé nhất trong mảng số nguyên
var arr6 = [3, 4, 7, 8, 1, 2, 5, 9, 6];
var max = arr6[0];
var min = arr6[0];
var len = arr6.length
var i = 0
var flag = false
for (i = 1; i < len; i++)
{
  if (max < arr6[i])
  {
    max = arr6[i]
  }

  if (min > arr6[i])
  {
    min = arr6[i]
  }
}

console.log(max)
console.log(min)