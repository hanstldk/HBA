const express = require('express');
const app = express();
const port = 8090; // 사용할 서버 포트 번호를 지정
const cors = require('cors');

app.use(cors());

app.get('/hi', (req, res) => {
    res.send('이은석 two silver stones');
    
});

app.listen(port, () => {
    console.log(`서버가 ${port} 포트에서 실행 중...`);
});b