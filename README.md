## ⚙️ 의존성
### 라이브러리
1. Node.js, express.js
2. Sequelize  
`선택사유` 복잡한 쿼리문을 요하는 기능이 없기 때문에 자바스크립트 문법으로 쿼리문을 쉽게 작성하기 위해 채택

### 개발용 라이브러리
1. prettier   
`선택사유` 간편한 설정으로 깔끔하고 가독성 좋은 코드를 작성하기 위해 채택
2. dotenv

### DBMS
1. PostgreSQL

<br>

## ⚒ 툴
1. docker-compose  
`선택사유` 개발환경 구축과 노드, 데이터베이스를 위한 복수의 컨테이너를 다루기 위해 사용

<br>

## 🏠 아키텍처
- 3 계층 분리 설계에 따라 `router- controller - service` 로 나누어 책임을 분리
- Sequelize ORM 사용으로 service에서 데이터베이스 접근이 이루어지고 있으며 간단한 로직을 요하는 소규모 프로젝트이므로 Data Access Layer를 따로 분리하지 않고 service 내에서 모두 처리
```
├── app.js
├── routes  # URL 라우팅
│   ├── indexRoute.js
│   └── todoRoute.js
├── controllers # req, res 핸들링
│   └── todoController.js
└── service # 비즈니스 처리 및 데이터 접근부
    └── todoService.js
├── models # 모델 선언부
│   ├── index.js
│   ├── todos.js
│   └── users.js
├── Dockerfile
├── config
│   └── config.js
├── docker-compose.yml
├── package-lock.json
├── package.json
```


## 🔎 기타

### Git flow
- `main -> feature`로 나누어지는 Git branch로 형상 관리
