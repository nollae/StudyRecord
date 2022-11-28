// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());                        // 2022-11-21T07:36:29.534Z
console.log(new Date('Jun 5, 2022'));           // 2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00'));   //2022-12-16T18:24:00.000Z

console.log(Date.now());                        // 1669016251672
console.log(Date.parse('2022-12-17T03:24:00')); // 1671215040000

const now = new Date();
now.setFullYear(2023);
now.setMonth(11);                               // month는 0부터 시작해서 0이 1월이다.
console.log(now.getFullYear());                 // 2023
console.log(now.getMonth());                    // 11
console.log(now.getDay());                      // 0: 일요일, 1... 6: 토요일 
console.log(now.getTime());                     // 1703144582398
console.log(now);                               // 2023-12-21T07:41:08.854Z

console.log(now.toString());                    // Thu Dec 21 2023 16:41:28 GMT+0900 (대한민국 표준시)
console.log(now.toDateString());                // Thu Dec 21 2023
console.log(now.toTimeString());                // 16:42:34 GMT+0900 (대한민국 표준시)
console.log(now.toISOString());                 // 2023-12-21T07:42:34.094Z
console.log(now.toLocaleString('en-US'));       // 12/21/2023, 4:42:22 PM
console.log(now.toLocaleString('ko-KR'));       // 2023. 12. 21. 오후 4:42:22


