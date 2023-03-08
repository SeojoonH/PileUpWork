// split

const users = "seojoon, jiyoon, junhyung, jungho, kisung";

const result = users.split();
// 기본은 하나의 ""안에 각 요소를 콤마로 표시해 출력
// [ 'seojoon, jiyoon, junhyung, jungho, kisung' ]

// "" 각 요소를 분해해 표시
//   's', 'e', 'o', 'j', 'o', 'o', 'n',
//  ',', ' ', 'j', 'i', 'y', 'o', 'o',
//  'n', ',', ' ', 'j', 'u', 'n', 'h',
//  'y', 'u', 'n', 'g', ',', ' ', 'j',
//  'u', 'n', 'g', 'h', 'o', ',', ' ',
//  'k', 'i', 's', 'u', 'n', 'g'

// " " 빈 공백을 할 경우 각 요소 안에 콤마, 바깥에 콤마 두 가지가 생김
// [ 'seojoon,', 'jiyoon,', 'junhyung,', 'jungho,', 'kisung' ]

// "," 이렇게 입력할 경우 요소 바깥에 하나씩 콤마가 생성됨
// [ 'seojoon', ' jiyoon', ' junhyung', ' jungho', ' kisung' ]

console.log(result);