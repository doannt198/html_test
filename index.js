
var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};


test = [
{ name: "A", age: 20, status: true },
{ name: "B", age: 21, status: true },
{ name: "C", age: 22, status: true }]

test = {name:'D', age: 23, status: false};
test['name']= "E"
demo = [
    { quocgia: 'VN', id: 1 },
    { quocgia: 'USA', id: 2 },
    { quocgia: 'KD', id: 3 },
    { quocgia: 'KD', id: 4 },
    { quocgia: 'AC', id: 5 },
    { quocgia: 'DF', id: 6 },
]
demo1 = [
    'VN',
    'USA',
    'KD',
    'KD',
    'AC',
    'DF',
]
demo2={
    quocgia:'JP', id: 7
}
 var v =demo.reverse()
 console.log(demo)
console.log(v)
 //copy toàn bộ mảng và dán nên từ vị trí thứ 1


 //every() kiểm tra tất cả các phần tử trong mảng có thỏa mãn điều kiện đề không

 //fill() biến các phần tử trong mảng thành các giá trị giống nhau
 
 //filter() được sử dụng để lọc các phần tử trong mảng theo một điều kiện mà bạn đặt ra. Phương thức này sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.

 //find() được sử dụng khi bạn muốn tìm phần tử mảng đầu tiên thỏa mãn điều kiện mà bạn đặt ra.

// findIndex() được sử dụng khi bạn muốn tìm vị trí của phần tử mảng đầu tiên thỏa mãn điều kiện bạn đặt

//forEach() được sử dụng khi bạn muốn duyệt các phần tử mảng.

//from() được sử dụng khi bạn muốn tạo ra một mảng mới từ một đối tượng dạng mảng.

//includes() được sử dụng để kiểm tra một phần tử có xuất hiện trong mảng hay không. Phương thức này trả về true nếu phần tử mảng có xuất hiện, trả về false nếu phần tử mảng không xuất hiện.

//indexOf() được sử dụng khi bạn muốn tìm vị trí (đầu tiên) của một phần tử trong mảng. Phương thức sẽ trả về -1 nếu không tìm thấy.

// isArray() được sử dụng để kiểm tra một đối tượng có phải là array hay không. Phương thức trả về true nếu đối tượng là array, trả về false nếu không phải là array

// join() được sử dụng khi bạn muốn nối các phần tử của mảng thành một string giống với toString

// map() được sử dụng khi bạn muốn làm thay đổi giá trị của các phần tử trong mảng theo một logic nào đó. Logic được thể hiện dưới dạng một callback, giá trị trả về của callback sẽ là giá trị mới cho phần tử mảng tương ứng.

//pop() sẽ xóa phần tử cuối cùng trong mảng, đồng thời trả về phần tử vừa xóa.

// push() được sử dụng để thêm một phần tử vào cuối mảng, đồng thời trả về độ dài của mảng.

//reduce() được sử dụng khi bạn muốn thực thi một callback lên từng phần tử (từ trái qua phải) với một biến được “tích lũy” để trả về một giá trị duy nhất.

//reverse() được sử dụng khi bạn muốn đảo ngược thứ tự các phần tử trong mảng. Tức là phần tử đầu sẽ trở thành phần tử cuối.

// shift() được sử dụng khi bạn muốn xóa phần tử đầu tiên của mảng, đồng thời trả về phần tử đó.

// slice() được sử dụng khi bạn muốn trích một mảng con từ vị trí n tới vị trí m trong mảng ban đầu. Lưu ý mảng được trích sẽ không bao gồm phần tử thứ m.

//splice() được sử dụng khi bạn muốn thay thế một số phần tử trong mảng bằng một số phần tử khác.

// toString() sẽ trả về một string từ mảng ban đầu, với các phần tử mảng ngăn cách nhau bằng dấu phẩy “,”.

// unshift() được sử dụng khi bạn muốn thêm một hoặc một số phần tử vào đầu mảng. Phương thức sẽ trả về số lượng phần tử trong mảng sau khi thêm.


/* Nhóm thêm, xóa vào đầu, cuối mảng

pop(): Xóa phần tử cuối mảng
push(): Thêm vào cuối mảng
shift(): Xóa phần tử đầu mảng
unshift(): Thêm phần tử vào đầu mảng */


/* Nhóm check mảng:

every(): Kiểm tra tất cả phần tử mảng phải thỏa mãn điều kiện
some(): Kiểm tra một trong số các phần tử mảng có phần tử nào thỏa mãn điều kiện.
includes(): Kiểm tra trong mảng có phần tử bạn cần tìm hay không? */


/* Nhóm tìm cái gì đó trong mảng:

find(): Tìm phần tử mảng đầu tiên thỏa mãn điều kiện
findIndex(): Tìm vị trí của phần tử mảng đầu tiên thỏa mãn điều kiện
indexOf(): Tìm vị trí đầu tiên của phần tử xuất hiện trong mảng.
lastIndexOf(): Tìm vị trí cuối cùng của phần tử xuất hiện trong mảng. */
