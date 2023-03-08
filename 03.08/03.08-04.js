let user = ['seojoon', 'jiyoon', 'junhyung'];

user.forEach((name, index, arr) => {
    console.log(`${index + 1}. ${name}`);
    // index에 '+ 1'을 하는 이유는 0부터 시작하기 때문.
});