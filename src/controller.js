export const indexController = (req, res) => {
    const skills = [
        "Node.js", 
        "Express", 
        "React", 
        "Python", 
        "Flask", 
        "Django", 
        "pandas", 
        "Web Crawling", 
        "HTML5", 
        "CSS3", 
        "TailwindCSS", 
        "Pug", 
        "Sass", 
        "JS/ES6", 
        "React", 
        "GitHub", 
        "AWS", 
        "MongoDB", 
        "RDB/SQL" 
    ];
    const projects = [
        {title:"당나귀톡(채팅 웹사이트)", 
        imgUrl:"img/project6.png",
        date: "2021.2", 
        skills: [
            "HTML5",
            "CSS3",
            "Vanilla JS",
            "GitHub",
            "Chrome Extension"
            ], 
        description:'HTML과 CSS를 활용한 채팅 웹사이트를 퍼블리싱하였고, 로그인 화면, 친구목록, 채팅창 목록, 채팅창, 부가기능창, 찾기창, 설정창 화면 제작하였습니다. CSS Flex, Media Query 등을 활용한 웹화면 제작하였습니다.',
        githubUrl:"https://github.com/yjbenkang/kokoa-clone-2021",
        websiteUrl:"https://yjbenkang.github.io/kokoa-clone-2021/",
        },
        
        // {title:"그림판", 
        // imgUrl:"img/project7.png",
        // date: "2021.2", 
        // skills: [
        //     "Vanilla JS",
        //     "HTML5",
        //     "CSS",
        //     "GitHub"
        //     ], 
        // description:'그림판 기능 구현(색상 선택,굵기 조절,지우개,색 채우기,그림 파일 저장)',
        // githubUrl:"https://github.com/yjbenkang/paintjs",
        // websiteUrl:"https://yjbenkang.github.io/paintjs/",
        // },
        // {title:"오늘할일", 
        // imgUrl:"img/project8.png",
        // date: "2021.3", 
        // skills: [
        //     "Vanilla JS",
        //     "HTML5",
        //     "CSS",
        //     "GitHub"
        //     ], 
        // description:'Vanilla JS로 개인 일상을 관리하는 서비스 개발(현재시각 안내,날씨 API를 호출하여 위경도에 따른 날씨 안내,오늘 할일 작성 및 삭제 기능,새로고침 시 랜덤으로 배경사진 변경)',
        // githubUrl:"https://github.com/yjbenkang/js-basics",
        // websiteUrl:"https://yjbenkang.github.io/js-basics/",
        // },
        {title:"에어비앤비 클론코딩", 
        imgUrl:"img/project9.png",
        date: "2021.4-2021.6", 
        skills: [
            "Python",
            "Django",
            "HTML5",
            "Tailwind CSS",
            "gulp",
            "ES6",
            "AWS EB",
            "AWS S3",
            "GitHub",
            "AWS RDS"
            ], 
        description:`
        객실 예약 서비스를 위한 데이터 베이스 모델링&
        유저 CRUD 및 로그인/로그아웃 기능 개발&
        객실 검색/좋아요 기능 개발&
        객실 CRUD 기능 개발&
        객실 예약 기능 개발(예약자의 예약 신청, 호스트의 예약 확정)&
        날짜에 따른 예약현황 반영 기능 개발(날짜 지나면 완료된 예약, 사용 전일시 사용예정)&
        예약내역을 현황별(대기중,예약확정,취소)로 분류하여 보여주는 기능 개발&
        객실 사용 후 리뷰 남기기 기능 개발&
        호스트-예약자간 대화 기능 개발`,
        githubUrl:"https://github.com/yjbenkang/airbnb_clone",
        // websiteUrl:"https://yjbenkang.github.io/js-basics/",
        },
        {title:"YJ 미디어", 
        imgUrl:"img/project3.png",
        date: "2021.6", 
        skills: [
            "Python",
            "Django",
            "HTML5",
            "TailwindCSS",
            "gulp",
            "ES6",
            "AWS EB",
            "AWS S3",
            "AWS RDS",
            "PostgreSQL"
            ], 
        description:`Python 웹 프레임워크 Django를 활용한 도서,영화 및 인물 소개 웹사이트입니다. 
        도서, 영화 및 인물 소개 서비스를 위한 데이터 베이스 모델링하였고,
        유저 CRUD 및 로그인/로그아웃 기능 개발&
        도서/영화/인물 CRUD 기능 개발&
        리뷰 CRUD 기능 개발&
        검색 기능 개발&
        카테고리(장르)별 필터링 검색 기능을 개발했습니다. `,
        githubUrl:"https://github.com/yjbenkang/yjmedia",
        // websiteUrl:"https://yjbenkang.github.io/movie_app_2021/#/",
        },
        {title:"yongtube", 
        imgUrl:"img/project1.png",
        date: "2021.6-2021.7", 
        skills: [
            "NodeJS",
            "ES6",
            "Express",
            "Babel",
            "Pug",
            "OAuth 2.0",
            "AJAX",
            "Webpack",
            "SCSS",
            "MongoDB",
            "Mongoose",
            "Multer",
            "ESLint",
            "Heroku",
            "AWS",
            "S3",
            "GitHub"
            ], 
        description:"Node.js의 프레임워크 Express.js로 유튜브 웹사이트를 구현했습니다. MongoDB로 데이터베이스를 구축하였고, 파일 저장소로 AWS S3를 사용했습니다. Vanilla JS로 동적인 웹사이트를 구현하였습니다. 가입/로그인/로그아웃 기능, Github로 로그인 기능, 비디오 촬영/업로드/수정/삭제/시청, 조회수 기능, 댓글 작성/수정/삭제/읽기 기능 등 핵심적인 기능을 구현하였습니다. ",
        githubUrl:"https://github.com/yjbenkang/yongtube",
        websiteUrl:"https://yongtube.herokuapp.com/",
        },
        
        // {title:"영화소개 웹사이트ver.1", 
        // imgUrl:"img/project4.png",
        // date: "2021.7", 
        // skills: [
        //     "ReactJS",
        //     "CSS3",
        //     "Node.js",
        //     "ES6"
        //     ], 
        // description:"영화 메타데이터를 제공하는 YTS API를 활용한 영화 소개 리액트 앱",
        // githubUrl:"https://github.com/yjbenkang/movie_app_2021",
        // websiteUrl:"https://yjbenkang.github.io/movie_app_2021/#/",
        // },

        {title:"yongflix", 
        imgUrl:"img/project2.png",
        date: "2021.7", 
        skills: [
            "ReactJS",
            "Node.js",
            "ES6",
            "Axios",
            "Ajax",
            "HTML5",
            "Netlify"
            ], 
        description:"IMDB API를 활용한 영화&TV 쇼 소개 리액트앱",
        githubUrl:"https://github.com/yjbenkang/yongflix",
        websiteUrl:"https://frosty-blackwell-adf51f.netlify.app/",
        },

        {title:"포트폴리오 웹사이트", 
        imgUrl:"img/project11.png",
        date: "2021.8-NOW", 
        skills: [
            "Node.js",
            "ExpressJS",
            "ES6",
            "Vanilla JS",
            "Pug",
            "Webpack",
            "Babel",
            "SCSS",
            "Multer",
            "Heroku",
            "AWS S3"
            ], 
        description:"Node.js의 웹프레임워크 Express 기반으로 본인 소개/보유역량/웹프로젝트/연락처를 소개하는 포트폴리오 웹&모바일웹사이트를 제작하였습니다.",
        githubUrl:"https://github.com/yjbenkang/portfolio",
        // websiteUrl:"https://yjbenkang.github.io/movie_app_2021/#/",
        },
        
        // {title:"YongWeather", 
        // imgUrl:"img/project10.png",
        // date: "2021.8", 
        // skills: [
        //     "React Native",
        //     "Expo",
        //     "Node.js",
        //     "Babel",
        //     "Yarn",
        //     "Axios"
        //     ], 
        // description:'Openweathermap API를 활용하여 위치기반 날씨앱(날씨, 현재기온, 최고기온, 최저기온, 풍속 정보 제공)',
        // githubUrl:"https://github.com/yjbenkang/yong-weather",
        // // websiteUrl:"https://yjbenkang.github.io/movie_app_2021/#/",
        // },

        {title:"영화소개 웹사이트", 
        imgUrl:"img/project5.png",
        date: "2021.9", 
        skills: [
            "Node.js",
            "ReactJS",
            "GraphQL",
            "ES6",
            "Yarn",
            "Apollo",
            "Client"
            ], 
        description:'React Hook 기반 개발하였으며 yts movie REST API를 Graphql로 감싸고, apollo client로 React와 GraphQl간 통신하여 데이터 송수신하였음. 영화 목록, 영화 상세정보 제공 기능',
        githubUrl:"https://github.com/yjbenkang/apollo-2021",
        // websiteUrl:"https://yjbenkang.github.io/movie_app_2021/#/",
        },
        
        
        

    ];
    return res.render("index", {skills, projects});
};