# <span id='top'>🐾 가져도댕냥</span>
<img src="https://user-images.githubusercontent.com/105365737/210221033-fe61128b-b5eb-4da2-97ca-7e9d162baad2.png" width="1000" />

> 📎 <a href='https://daengnyang.netlify.app'>배포 URL</a> <br/>
> 
> <br/>
> 
> 이메일 로그인 테스트 계정
>  - ID : `daengnyang@market.com`
>  - Password : `daengnyang2022`

<br/><br/>
 
## 1. 서비스 소개
**가져도댕냥은 반려동물을 사랑하는 팻펨족을 위한 SNS/커뮤니티 서비스입니다.**
- 반려동물이 쓰던 물건을 중고로 판매/구매할 수 있습니다. <br/>
- 상품을 판매/구매하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. <br/>
- 반려동물 커뮤니티 서비스를 이용할 수 있습니다. <br/>

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 2. 팀원 소개

|                                    **FE 김민승**                                    |                                    **FE 김의호**                                    |                                 **FE 배승연**                                 |                                    **FE 이광렬**                                    |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/rosamondkim" height=180 width=180> | <img src="https://user-images.githubusercontent.com/105365737/210505937-b42b42ea-2b1f-4b4b-ad39-1cc363a9f7fd.jpg" height=180 width=180> | <img src="https://avatars.githubusercontent.com/sypear" height=180 width=180> | <img src="https://avatars.githubusercontent.com/yedol1" height=180 width=180> |
|                        [🔗 GitHub](https://github.com/rosamondkim)<br/> 디자인 리더                         |                        [🔗 GitHub](https://github.com/euihokim)<br/> 기획 리더                         |           [🔗 GitHub](https://github.com/sypear)<br/> 프로젝트 매니저          |                        [🔗 GitHub](https://github.com/yedol1)<br/> 개발 리더                         |


<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 3. 개발 환경 및 기술 스택
### 3-1. 개발 환경
- IDE : Visual Studio Code 1.74.2
- OS : macOS Monterey, Windows 10

### 3-2. 기술 스택
- FE : React v18, Styled-components v5, Axios v1.2.1
- BE : 제공된 API 사용

### 3-3. 협업 툴
- 버전 관리 : Git, <a href='https://github.com/daengnyang-market/daengnyang-market-client'>GitHub</a>
- 진행 상황 관리(칸반 보드) : <a href='https://github.com/orgs/daengnyang-market/projects/5'>GitHub Projects</a>
- 이슈 관리 : <a href='https://github.com/daengnyang-market/daengnyang-market-client/issues'>GitHub Issues</a>
- 문서 관리 : <a href='https://www.notion.so/likelion/2-2-89828dd83d234f4ba54b3fea9a1f60d0'>Notion</a>
- 메신저 : Discord

### 3-4. 테스트 툴
- API 테스트 : Postman

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 4. 프로젝트 구조
* `public/favicon/` : 파비콘
* `src/assets/` : 서비스에서 사용하는 에셋 파일 (폰트, 아이콘, 이미지)
* `src/components/` : 서비스에서 사용하는 컴포넌트 (캐러셀, 공통 컴포넌트, 공통 레이아웃)
* `src/context/` : 전역 데이터를 공유하기 위해 정의한 Context 파일
* `src/hooks/` : 재사용을 위해 분리한 Custom Hook
* `src/pages/` : 공통 컴포넌트를 사용해 만든 페이지
* `src/routes/` : 페이지 라우팅을 위한 파일
* `src/styles/` : 전역 스타일 파일
* `src/utils/` : 재사용을 위해 분리한 유틸 파일

```
📦 가져도댕냥
├─ 📦 public
│  ├─ 📂 favicon
│  └─ 📜 index.html
└─ 📦 src
   ├─ 📂 assets
   │  ├─ 📂 fonts
   │  ├─ 📂 icons
   │  └─ 📂 images
   ├─ 📂 components
   │  ├─ 📂 carousel
   │  ├─ 📂 common
   │  └─ 📂 layout
   ├─ 📂 context
   ├─ 📂 hooks
   ├─ 📂 pages
   │  ├─ 📂 ChatPage
   │  ├─ 📂 CommunityPage
   │  ├─ 📂 FeedPage
   │  ├─ 📂 FollowListPage
   │  ├─ 📂 JoinPage
   │  ├─ 📂 LoginPage
   │  ├─ 📂 NotFoundPage
   │  ├─ 📂 PostPage
   │  ├─ 📂 ProductPage
   │  ├─ 📂 ProfileModificationPage
   │  ├─ 📂 ProfilePage
   │  ├─ 📂 SearchPage
   │  └─ 📂 SplashScreen
   ├─ 📂 routes
   ├─ 📂 styles
   ├─ 📂 utils
   ├─ 📜 App.jsx
   └─ 📜 index.jsx
```

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 5. Git Branch 전략
![스크린샷 2023-01-04 오후 3 50 02](https://user-images.githubusercontent.com/105365737/210499534-bbab397d-9446-4859-812a-ca14662ba54a.png)
* 소규모 프로젝트에 맞게 Main, Develop, Feature 세 Branch를 사용하는 전략 사용

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 6. 개발 일정
#### 🔥 2022-12-09 ~ 2023-01-05
<img width="1874" alt="표" src="https://user-images.githubusercontent.com/105365737/210504168-43b9f888-eb95-46a1-9fe4-0580a7c5cf0e.png">

  - 요구사항 파악 및 프로젝트 규칙 설립 : 2022-11-29 ~ 2022-12-09
  - 공통UI 컴포넌트 개발 : 2022-12-09 ~ 2022-12-13
  - 페이지 퍼블리싱 : 2022-12-13 ~ 2022-12-17
  - 기능 개발 : 2022-12-16 ~ 2022-12-27
  - 버그 수정 및 유지보수 : 2022-12-26 ~ 2023-01-05

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 7. 협업 문화
### 💪 팀워크 강화
#### - 설문지 작성
- 프로젝트 시작 전, 공통된 팀 목표를 세우고 시너지를 강화하기 위해 <a href='https://form.office.naver.com/form/responseView.cmd?formkey=YTJkYzQzNDItMGMwMC00YzdmLWJhMzQtZWVhODUxMjEwZjE0&sourceId=urlshare'>네이버폼 설문</a> 진행

#### - 모두가 참여하는 회의
![스크린샷 2023-01-05 오전 11 15 49](https://user-images.githubusercontent.com/105365737/210686325-0e5e592c-6072-43d0-95c4-8e80a26dd114.png)
- 공동 작업툴인 <a href='https://www.figma.com/file/nOvMp6rMZt7eGwEpKoRFqK/%F0%9F%A7%A12%EC%9D%98-2%EC%8A%B9-%ED%9A%8C%EC%9D%98-%EA%B3%B5%EA%B0%84%F0%9F%A7%A1?t=oXIsUV1ACe2DC3YP-0'>Figzam</a>을 이용한 회의
- 딱딱한 분위기의 회의가 아니라 모두가 참여할 수 있는 가벼운 분위기에서 회의를 진행

<br/>

### 📌 업무 공유
#### - 데일리 스크럼
- 매일 9시 20분 데일리 스크럼을 통해 업무 공유 및 진행 상황 파악

<br/>

### ✍ 개발 규칙 관리
#### - <a href='https://github.com/daengnyang-market/daengnyang-market-client/wiki'>GitHub Wiki</a>에 개발 규칙 등록

<br/>

### 🎯 목표 관리
#### - <a href='https://github.com/daengnyang-market/daengnyang-market-client/milestones'>GitHub Milestones</a>을 이용한 단계별 목표 관리
![스크린샷 2023-01-04 오후 3 37 23](https://user-images.githubusercontent.com/105365737/210497888-bcbe842d-22d9-4619-b06e-0700df76f129.png)
  - 프로젝트 단계별 목표를 명확하게 하기 위해 마일스톤 등록
  - GitHub 이슈 등록 시 관련된 마일스톤 선택

<br/>

### 🪄 이슈 관리 프로세스
#### - 작업 전 <a href='https://github.com/daengnyang-market/daengnyang-market-client/issues'>GitHub Issues</a> 등록
* 아무리 작은 작업이라도 수월한 이슈 추적을 위해 이슈 반드시 등록 후 작업 진행 (작업 하나당 이슈 하나)
  ![스크린샷 2023-01-05 오전 10 50 20](https://user-images.githubusercontent.com/105365737/210683441-8ac973b0-31f2-4c38-a3a4-c42d386dc33e.png)
* 컨벤션 통일을 위해 이슈 템플릿 사용

#### - 이슈 해결 후 <a href='https://github.com/daengnyang-market/daengnyang-market-client/pulls'>Pull Request</a> 생성
* 컨벤션 통일을 위해 PR 템플릿 사용
* 팀원 2명 이상의 승인을 받아야 머지 가능

<br/>

### 🕵 이슈 진행 상황 관리
#### - <a href='https://github.com/orgs/daengnyang-market/projects/5'>GitHub Projects</a>를 이용한 칸반 보드
![스크린샷 2023-01-05 오전 10 41 48](https://user-images.githubusercontent.com/105365737/210682559-c79b6ab4-ef8d-4c00-84c3-143adb0e0669.png)
- 이슈 진행 상황을 한 눈에 볼 수 있도록 칸반 보드 형태로 시각화

<br/>

### 📆 작업 진행 상황 관리
#### - 노션 <a href='https://www.notion.so/likelion/fc1621eb783b4853b14dffa793d1ad04'>기능별 작업 상황 관리</a> 페이지를 작성해 작업 진행 상황 관리

![스크린샷 2023-01-05 오전 11 56 42](https://user-images.githubusercontent.com/105365737/210691316-07774031-3ac1-4d98-9c02-d432e2cae5fc.png)

- 전체적인 작업 진행 상황을 한 눈에 볼 수 있도록 기능별 진행 상황 표 제작
- 진행 전, 진행 중, 진행 완료, 수정 중 태그를 이용해 진행 상황 체크

<br/>

### 🐛 버그 관리
#### - 노션 <a href='https://www.notion.so/likelion/1a6329bc4ace4e8682558a2ffad98a96'>버그 리포트</a> 페이지를 작성해 발견된 버그 관리
![스크린샷 2023-01-05 오전 11 59 42](https://user-images.githubusercontent.com/105365737/210691646-bae7b8f8-fc7e-41e7-9607-002de419e493.png)

#### - 버그 관리 프로세스
1. 버그 발견자가 버그 유형, 버그, 버그 작성자, 개발 담당자 등록
    - 버그 작성자가 개발 담당자인 경우 : 본인 등록
    - 버그 작성자가 개발 담당자가 아닌 경우 : 협업 메신저로 내용 공유 후 개발 담당자 설정
2. 개발 담당자는 버그 확인 후 확인 결과 등록
    - 거절 : 버그가 아닌 경우
    - 승인 : 버그
3. 승인된 버그는 개발 담당자가 이슈 등록 후 버그 수정 진행

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 8. 구현 기능 및 담당자
<img src="https://user-images.githubusercontent.com/105365737/210319126-76c4fed6-b4f9-4d07-a95e-9f908fbba796.png" width="1000" />

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 9. 구체적인 담당 업무
## 🤍 공통
### 컨벤션 설립
- 커밋 메시지 컨벤션, 코드 컨벤션, 네이밍 컨벤션, 디렉토리 구조 컨벤션 설립
- <a href='https://github.com/daengnyang-market/daengnyang-market-client/wiki'>GitHub Wiki</a>에 컨벤션 기록

### 프로젝트 관리
- 이슈 관리
- 이슈 진행 상황 관리
- 작업 진행 상황 관리
- 버그 관리

### 문서 작성
- README 작성

<br/>

## 🐰 김민승
### 🏷️ 회의록 작성
- 기록을 위한 [회의록](https://www.notion.so/13305aa3389242979abd187a653bcd91) 작성 담당

<br/>

### 🎨 화면 개발

- 탑 내비게이션 5종, 탭 메뉴, 댓글 컴포넌트 제작
- Splash, 피드, 프로필, 404 페이지 퍼블리싱

<br/>

### 🔧 기능 개발

- 홈 피드 페이지 기능 구현
    - 피드 데이터를 받아 화면에 그려주는 기능 구현 (API 명세에 따름)
    - 로그인 여부에 따른 페이지 로드 기능 구현
        - 로그아웃 상태일때는 로그인 페이지 / 로그인 상태일때는 팔로잉 피드 데이터 받아오도록
    - 피드 데이터 제한 없이 받아올 수 있도록 페이지 무한스크롤 구현
- 프로필 페이지 기능 구현 (사용자 정보, 등록된 상품, 작성글 조회 기능)
    - 유저 정보 및 상품, 포스트 목록 데이터를 받아 화면에 그려주는 기능 구현 (API 명세에 따름)
    - 포스트 목록 레이아웃 리스트 형식 / 앨범 형식으로 선택해서 볼 수 있도록 기능 추가
    - 카카오톡 공유하기 라이브러리 추가하여 공유 기능 구현
    - 상품 리스트를 깔끔하게 볼 수 있도록 Swiper 라이브러리 사용하여 캐러셀로 구현
    - 게시물 목록을 제한 없이 볼 수 있도록 페이지 무한스크롤 구현
- 게시글 모달 관련 기능 구현
    - 게시글 삭제 / 신고 기능
        - 나의 게시물일때는 수정 및 삭제 기능 / 다른 사용자의 게시물일때는 신고 기능 보이도록 구현
- 게시물 좋아요 기능 구현

<br/>

## 🦒 김의호
### 🎨 화면 개발

- 게시글, 상품 컴포넌트 제작
- 로그인 메인, 프로필 설정, 프로필 수정, 상품 등록, 상품 수정 페이지 퍼블리싱

<br/>

### 🔧 기능 개발

- 회원가입 기능 구현
    - 프로필 이미지 미리보기 기능
    - 이미지리사이징을 통한 10MB 이상의 프로필 이미지도 업로드 가능 / 성능 향상
    - 회원가입 정보 유효성 검사
        - API 명세에 따른 계정 ID 중복 검사
        - 정규표현식을 통한 계정 ID 유효성 검사
    - 유효성 검사를 통한 시작하기 버튼 활성화
    - 모든 유효성 검사 통과 후, Enter 입력 시 시작하기 버튼 클릭과 동일한 기능
    - API 명세에 따라 프로필 설정 이전에 받아온 email, password와 함께 서버에 데이터 전송
- 프로필 수정 기능 구현
    - 기존 프로필 정보 불러오기 (프로필 이미지 미리보기 포함)
    - 유효성 검사
        - API 명세에 따른 계정 ID 중복 검사 (기존 ID 유지 시 중복 검사 X)
        - 정규표현식을 통한 계정 ID 유효성 검사
    - 유효성 검사를 통한 저장 버튼 활성화
    - 회원가입의 프로필 세팅과 동일한 기능 포함
- 상품 관련 기능 구현
    - 상품 등록
        - 이미지리사이징을 통한 10MB 이상의 상품 이미지도 업로드 가능 / 성능 향상
        - 각 상품 정보의 유효성 검사
        - 상품 가격의 천 단위 콤마 자동 생성 & 삭제
    - 삭제
        - 상품 삭제 클릭 시 상품이 삭제 되고, 판매 중인 상품만 리렌더링
    - 수정
        - 기존 상품 정보 불러오기 (상품 이미지 미리보기 포함)
        - 상품 등록과 동일한 기능 포함
    - 웹사이트에서 상품 보기
        - 내 상품에 대해 웹사이트에서 상품 보기 클릭 시, 해당 페이지가 새 창으로 열림

<br/>

## 🐣 배승연
### 🏷️ 프로젝트 주도
- 커뮤니케이션
  - 팀 목표를 세우고 시너지를 강화하기 위해 <a href='https://form.office.naver.com/form/responseView.cmd?formkey=YTJkYzQzNDItMGMwMC00YzdmLWJhMzQtZWVhODUxMjEwZjE0&sourceId=urlshare'>네이버폼 설문지</a> 작성
  - 자유로운 회의를 위해 <a href='https://www.figma.com/file/nOvMp6rMZt7eGwEpKoRFqK/%F0%9F%A7%A12%EC%9D%98-2%EC%8A%B9-%ED%9A%8C%EC%9D%98-%EA%B3%B5%EA%B0%84%F0%9F%A7%A1?t=oXIsUV1ACe2DC3YP-0'>Figzam 회의 공간</a> 제작
- 프로젝트 관리
  - [요구사항 정리 문서](https://www.notion.so/f3a305042945417e8e24bcf594c73009) 작성
  - [기능 리스트 및 기능별 작업 상황 관리 문서](https://www.notion.so/78cd0987ae094df59df20184e5616162) 작성
  - [버그 리포트](https://www.notion.so/1a6329bc4ace4e8682558a2ffad98a96) 작성 및 버그 관리 프로세스 설립
  - Netlify를 이용해 프로젝트 배포
- 수월한 프로젝트 진행을 위한 작업
  - 이슈 관리 프로세스 도입
  - GitHub 이슈 템플릿, PR 템플릿 등록
  - 소모적인 커뮤니케이션을 줄이기 위해 협업 메신저(Discord)와 GitHub 알림 연동
  - 프로젝트 초기 세팅 작업
    - 폴더 트리 구성 및 기본 파일 포함
    - 팀 컨벤션에 맞춰 ESLint & Prettier 적용
    - 수월한 퍼블리싱 작업을 위해 메인 레이아웃 적용
  - 라우터 설계 및 구축
- 지식 공유
  - 우리 팀의 Git Branch 전략에 맞는 <a href='https://sypear.tistory.com/63'>협업 시나리오 설립</a> 후 팀 내 전파
  - [Postman을 이용한 API 테스트 방법 및 Axios를 이용한 서버 통신 방법](https://www.notion.so/API-9f65293a52c847b6bc4bf7d5fd6e05eb) 팀 내 전파

<br/>

### 💄 디자인

- 가져도댕냥 로고, [마스코트 캐릭터](https://www.notion.so/d76f1e8a54254016b05701e0d7da2d09) 등 디자인 에셋 제작
- 집사생활 메인, 산책 난이도, 동물병원 페이지 Figma 시안 제작

<br/>

### 🎨 화면 개발

- 애니메이션, 로딩, 검색, 팔로우, 모달, 메인 레이아웃 컴포넌트 제작
- 이메일 로그인, 팔로우 페이지, 집사생활 메인, 산책 난이도, 동물병원 페이지 퍼블리싱
- 여러 페이지에서 반복 사용 되는 레이아웃을 재사용 가능하도록 컨텐츠 레이아웃 컴포넌트로 분리

<br/>

### 🔧 기능 개발

- 로그인 기능 구현 (API 명세에 따름)
    - 이메일 및 비밀번호 유효성 검증
    - 유효성 검증을 통과해야 로그인 버튼 활성화
    - 로컬 스토리지에 토큰 저장
- 로그아웃 기능 구현
    - 로컬 스토리지에 저장된 토큰 삭제
- 팔로우 기능 구현
    - 팔로워 / 팔로잉 목록 데이터를 받아 화면에 표시하는 기능 구현 (API 명세에 따름)
    - 팔로우 / 언팔로우 기능 구현 (API 명세에 따름)
- 집사생활 메인 페이지 기능 구현
    - Swiper 라이브러리를 이용한 페이지네이션 캐러셀 구현
    - 추천글 목록
      - 추천글 API가 따로 주어지지 않음에 따라 게시글들이 추천글 목록처럼 보이도록 응답 데이터 가공
    - 사용자가 많은 양의 게시글을 편리하게 볼 수 있도록 무한스크롤 적용
- 산책 난이도 페이지 기능 구현
    - 행정구, 날씨, 미세먼지 조회 기능
        - Geolocation API를 이용해 사용자의 현재 좌표를 가져옴
        - Kakao API를 이용해 행정구역 정보를 받아옴
        - OpenWeatherMap API를 이용해 날씨, 미세먼지 정보를 받아옴
    - 산책 난이도 책정
- 동물병원 페이지 기능 구현
    - Kakao API를 이용해 근처 동물병원 정보를 가까운 순으로 받아옴
    - 사용자가 원하는 정보만 선별적으로 볼 수 있도록 더보기 버튼 적용

<br/>

### 🧩 기타
- 사용자 인증 여부에 따른 라우터 접근제한 기능 구현
- 재사용 가능한 코드는 Custom Hook으로 분리
- 전역에서 필요한 데이터는 Context 객체로 관리

<br/>

## 🌸 이광렬
### 🎨 화면 개발

- 버튼 컴포넌트(S, MS, M, L 사이즈) 제작
- 회원가입, 검색, 게시글 상세, 게시글 등록, 게시글 수정, 채팅방 목록, 채팅 페이지 퍼블리싱
- 아이콘, 이미지를 전역에서 사용할 수 있도록 공통 파일 제작

<br/>

### 🔧 기능 개발

- 회원가입 기능 구현
    - 유효성 검사를 통과한 이메일과 비밀번호를 프로필 설정페이지에 props로 내려줌
    - 유효성 검사를 통과한 이메일과 비밀번호가 존재하면, 버튼이 활성화 되도록 구현
- 유저 검색 기능 구현
    - 사용자 입력값이 바뀔 때 마다 입력값과 일치하는 유저 검색 결과 구현
    - 검색된 사용자 클릭 시 해당 사용자의 프로필로 이동하는 링크 구현
    - 사용자 ID가 아닌, 사용자 이름 과 `input` 창에 입력한 키워드가 동일한 부분이 있는 경우에는 입력한 키워드 부분만 다른 스타일 적용하여 강조
- 게시글 관련 기능 구현 ( 조회, 등록, 수정, 삭제, 신고 )
    - 사용자 입력 텍스트와 이미지 파일 게시물 업로드 기능 구현
    - 텍스트와 이미지가 없을경우, 버튼 비활성화
    - 이미지 파일 3개 초과 시 사용자에게 보여지는 alert 구현
    - 포스트 할 이미지 미리보기 및 미리보기에서 삭제 기능 구현
    - 포스트 데이터를 받아 화면에 그려주는 기능 구현 (API 명세에 따름)
    - 게시물 수정 기능을 구현
- 댓글 관련 기능 구현 ( 조회, 등록, 삭제, 신고 )
    - 댓글 목록 데이터를 받아 화면에 그려주는 기능 구현 (API 명세에 따름)
    - 댓글 업로드,삭제 및 신고 기능 구현 (API 명세에 따름)
- 채팅 관련 기능 구현
    - 채팅 목록 조회 기능
	    <details>
	    <summary>채팅 기능</summary>

		- 채팅 기능 방식

	    `로그인된 사용자` ↔ `채팅방으로 사용될 제 3자의 게시글` ↔ `채팅할 상대 사용자`

	    → 채팅방으로 사용될 제 3자의 아이디는 유저 검색을 통하여 찾을 수 없도록 설정

	    < 채팅방 생성 >

	    1. 채팅할 상대 사용자의 프로필에서 채팅 이미지 버튼을 클릭하면, 채팅방으로 사용될 제 3자의 게시글이 생성된다.

		```jsx
		// 제 3자의 게시글을 다른 유저가 생성할 수 있도록 토큰값을 지정
		const CHAT_TOKEN = process.env.REACT_APP_CHAT_SERVER_TOKEN;
		```

	    2. 제 3자의 게시글에 전송되는 컨텐츠인 채팅 데이터 → `‘로그인된 사용자의 accountname,채팅할 상대 사용자의 accountname’`

		```jsx
		const createChatroom = () => {
		    axios
		      .post(
			`https://mandarin.api.weniv.co.kr/post`,
			{
			  post: {
			    content: `${userAccountname},${profileUserAccountname}`,
			    image: '',
			  },
			},
			{
			  headers: {
			    Authorization: `Bearer ${CHAT_TOKEN}`,
			    'Content-type': 'application/json',
			  },
			},
		      )
		      .then((res) => {
			navigate(`/chat/${res.data.post.id}`);
		      });
		  };
		```

		→ 전송된 데이터는 채팅리스트를 불러올때와 채팅방 이름을 나타낼때 사용한다. 

	    3. 채팅방 생성시, 제 3자의 게시글의 content 내용과 생성할 content 내용이 중복된다면 alert 창을 띄워서 이미 존재하는 채팅룸이라는 사실을 사용자에게 알린다.

	    < 채팅방 리스트 >

	    - 제 3자의 게시글의 정보를 불러와, 전송된 컨텐츠 데이터 에 사용자의 `accountname` 이 포함된 게시글만 보여준다.

	    < 채팅방 >

	    - useParams() 를 사용하여, 선택한 url의 파라미터를 가져온 후, 그 파라미터(postid) 에 해당하는 게시글을 불러온다. 여기에 작성된 댓글이 본인의 것이라면, 본인이 날린 채팅으로 보여지고, 아니라면 타 사용자가 보낸 채팅처럼 보여진다.

	    < 채팅 >

	    - 채팅방에 입장하면, 채팅방으로 사용된 게시물에 댓글 형식으로 데이터를 전송한다.
<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 10. 페이지 캡쳐
### 1) 홈
|시작 화면|회원가입 페이지|로그인 페이지|
|---|---|---|
|![splash](https://user-images.githubusercontent.com/112460383/210291447-6c88dc14-ba44-4870-af05-7d40c589fe5a.gif)|![회원가입](https://user-images.githubusercontent.com/112460383/210291056-665177a0-08af-4765-9d7c-a79946dd5f91.gif)|![로그인](https://user-images.githubusercontent.com/112460383/210291068-b8cbf123-455c-4dd2-b8aa-c6150bc0b762.gif)|

|피드 페이지|검색 페이지|404 페이지|
|:---:|:---:|:---:|
|![피드](https://user-images.githubusercontent.com/96304623/210295642-159ff856-28a3-4300-9c5b-9d788509f3d5.gif)|![검색](https://user-images.githubusercontent.com/96304623/210296023-b8688b87-d0ea-40a7-a82d-bb623e1aadd0.gif)|<img width="390" alt="404" src="https://user-images.githubusercontent.com/96304623/210295762-1bb2f1e0-e53c-4467-8ec5-11045d523461.png">|

### 2) 채팅
|채팅 목록 페이지|채팅방 페이지|채팅방 나가기|
|---|---|---|
|![최종_채팅룸리스트_AdobeExpress](https://user-images.githubusercontent.com/57481378/210287894-12adc22e-8fba-45e0-9ec0-b5e37de207ea.gif)|![최종_채팅코멘트_AdobeExpress](https://user-images.githubusercontent.com/57481378/210287916-04aed2c6-c568-47a0-a804-50ecb66d0228.gif)|![채팅방나가기_AdobeExpress](https://user-images.githubusercontent.com/57481378/210504719-6bdcabc4-7683-49c7-83b4-f635bb53cc31.gif)|

### 3) 게시글
|게시글 상세 페이지|게시글 작성 페이지|게시글 수정 페이지|
|---|---|---|
|![게시물상세](https://user-images.githubusercontent.com/96304623/210327734-b5def302-318f-4ccd-a0ce-537e1868d6c2.gif)|![게시물작성](https://user-images.githubusercontent.com/96304623/210326906-3f5e12fc-73fc-4509-8b01-f21e5f4bf3a3.gif)|![게시물수정](https://user-images.githubusercontent.com/96304623/210327100-8cf37187-3faf-41a8-a157-e4185a17648e.gif)|

|게시글 삭제|게시글 신고|댓글 기능|
|:---:|:---:|:---:|
|![최종_게시글삭제_AdobeExpress](https://user-images.githubusercontent.com/57481378/210288137-29085249-0191-4ff7-ab46-1c3079fe3624.gif)|![최종_게시글신고_AdobeExpress](https://user-images.githubusercontent.com/57481378/210288330-5e7e9d28-2c5d-47aa-bd81-efda2617db7e.gif)|![최종_게시물댓글_AdobeExpress](https://user-images.githubusercontent.com/57481378/210288152-1ba95b70-085d-491d-9d06-b547d996ecea.gif)|

### 4) 프로필
|마이 프로필 페이지|유어 프로필 페이지|리스트형/앨범형 보기|
|---|---|---|
|![마이 프로필](https://user-images.githubusercontent.com/96304623/210295096-170ce4e2-5954-4e07-bcb2-e9c68252da96.gif)|![유어프로필](https://user-images.githubusercontent.com/96304623/210295123-89ec90ce-791f-4f71-9aa4-41c6bec706dc.gif)|![앨범형리스트형](https://user-images.githubusercontent.com/96304623/210295252-2d7ebb2c-872c-4cee-aae2-0681f9d1acd7.gif)|

|프로필 수정 페이지|팔로워/팔로잉 페이지|로그아웃 기능|
|:---:|:---:|:---:|
|![프로필 수정](https://user-images.githubusercontent.com/112460383/210291099-c25c451b-2427-49ba-b956-e21016e9568e.gif)|![팔로우페이지](https://user-images.githubusercontent.com/105365737/210326712-4e6f0b35-e39a-4b67-83be-1aacd76806e8.gif)|![로그아웃](https://user-images.githubusercontent.com/105365737/210326565-7d532cb8-ba35-48d4-aea2-301f89e059ae.gif)|


### 5) 판매 상품
|상품 등록 페이지 & 상품 링크 이동|상품 수정 페이지|상품 삭제 페이지|
|---|---|---|
|![상품 등록 및 판매 사이트 이동](https://user-images.githubusercontent.com/112460383/210291185-868d040b-cde2-41aa-85f6-3dbf8e5485d8.gif)|![상품 수정](https://user-images.githubusercontent.com/112460383/210291199-9d66c24f-f987-44d5-9640-532c25a8df65.gif)|![상품 삭제](https://user-images.githubusercontent.com/112460383/210291207-d8f397c2-ca25-4172-a48f-12899fbabde4.gif)|

### 6) 집사생활
|집사생활 메인 페이지|산책 난이도 페이지|동물병원 페이지|
|---|---|---|
|![메인](https://user-images.githubusercontent.com/105365737/210323985-41e486ed-afb0-41a4-a37f-be300894360a.gif)|![산책 난이도 메인](https://user-images.githubusercontent.com/105365737/210324801-30095b20-6a74-43f6-940a-4170197db760.gif)|![동물병원](https://user-images.githubusercontent.com/105365737/210325566-58991115-4e9e-489e-9706-9b4290ef72bc.gif)|


<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>


## 11. 핵심 기능 및 코드 설명
## 🐰 김민승

<details>
<summary>사용자의 프로필 페이지</summary>
<br/>

```jsx

useEffect(() => {
    if (location.pathname === `/profile/${userAccountname}`) {
      navigate('/profile');
    }
  }, [location, userAccountname, navigate]);

```

- 현재 url이 `/profile/userAccountname` 일 경우 나의 프로필 페이지이므로 url 주소를 `/profile` 로 변경하도록 함

<br/>

```jsx
useEffect(() => {
    const getUserProfileInfo = () => {
      axios({
        url: url + `/profile/${accountname ? accountname : userAccountname}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setUserProfileInfo(res.data.profile);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getUserProfileInfo();
  }, [url, accountname, userAccountname, userToken]);
```

유저 프로필 정보를 받아오는  **getUserProfileInfo() 함수**
- accountname(현재 프로필 url에 표시된 아이디)와 userAccountname(현재 로그인되어있는 사용자의 아이디) 같을 경우 내 프로필 정보를 가져오고, 그렇지 않으면 현재 URL의 사용자 아이디에서 그 사용자의 프로필 데이터를 가져오게 함.
  
  <br/>
</details>


<details>
<summary>홈 피드 페이지, 프로필 포스트 영역 무한스크롤 기능</summary>
<br/>

```jsx
// 무한 스크롤 구현에 필요한 useState
  const [numFeed, setNumFeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();

// 서버에서 피드를 가져오는 함수
  const getUserFeed = useCallback(async () => {
    const option = {
      url: url + `/post/feed/?limit=10&skip=${numFeed}`,
    ...
      },
    };
    setLoading(true);

    await axios(option)
      .then((res) => {
        // 기존의 데이터와 새로운 데이터 배열 합치기
        setIsFollowingPost(isFollowingPost.concat(res.data.posts));
        setLoading(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [numFeed]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고있고(inview === true), 로딩중이 아니라면
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
    }
  }, [inView, loading]);

return (
	<div>
	  {isFollowingPost.map((post, i) =>
	    // isFollowingPost의 마지막 요소라면 ref추가
	    isFollowingPost.length - 1 === i ? (
	      <div key={post.id} ref={ref} />
	    ) : (
	      <div key={post.id}>
	        <Post post={post} />
	      </div>
	    ),
	  )}
	</div>
)
```

- 게시물을 개수 제한없이 보기 위해 `'react-intersection-observer'` 라이브러리 사용하여 무한스크롤 구현함.
- 서버에서 피드 데이터를 가져오는 함수를 `axios` 로 불러옴. 데이터를 누적해서 요청하는 불필요한 과정을 막기 위해 `skip` 조건 추가한 후 `concat` 메서드로 배열 합쳐서 브라우저에 보여줌.
- 불러온 포스트들의 마지막 요소라면, 브라우저 하단부분을 의미하는 `ref` 값 추가함. 해당 요소가 보이면 `inView` 값이  `true` 로, 안 보이면 `false`로 자동으로 변경됨. `inView` 가 `true`일 경우 서버에 게시물 추가로 10개씩 요청함.

<br/>

```jsx
axios(option).then   
...
if (res.data.posts.length < 10) {
  setDone(true);
}

useEffect(() => {
  // 새로 받아온 데이터 배열 개수가 10개 미만일때 스크롤 멈추기
  if (!done) {
    getUserFeed();
  }
}, [numFeed]);
```

- 불러오는 데이터의 가장 마지막 요소를 보고있으면 계속 요청되는 현상을 막기 위해, 새로 받아오는 데이터 개수가 10개 미만일때 `done`state를 `true` 로 변경. `done` 이 `true`일 경우 계속해서 요청을 받아오고, `false` 일경우 요청을 멈추게 함.
  
  <br/>
</details>

<details>
<summary>게시물 이미지 / 상품 목록 캐러셀 기능</summary>

```jsx
{imageFile[0] ? (
  <SwiperWrapper>
    <Swiper
      style={swiperStyle}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {imageFile ? (
        imageFile.map((img, i) => (
          <SwiperSlide key={i}>
            <ContentImg src={img} alt='' />
          </SwiperSlide>
        ))
      ) : (
        <></>
      )}
    </Swiper>
  </SwiperWrapper>
```
- 게시물에 업로드된 이미지들을 Swiper 캐러셀 라이브러리 사용하여 구현함. 삼항연산자를 사용하여 이미지 파일이 있을 경우 Swiper로 이미지들을 표시해주고 있음.

```jsx
{itemList.map((item) => (
  <SwiperSlide key={item.id}>
    <Product
      productid={item.id}
      productImg={item.itemImage}
      productName={item.itemName}
      productPrice={`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 냥`}
    />
  </SwiperSlide>
```

- 상품 목록 데이터를 불러와서 캐러셀로 넘겨 확인할 수 있게 구현함.
</details>

<br/>
	  
## 🦒 김의호
<details>
  <summary>회원가입 기능 (프로필 설정)</summary>
  
  - **이미지 리사이징을 위한 browser-image-compression 라이브러리 사용**
    - 10MB 이상의 이미지도 업로드 가능
    - 이미지 로딩 속도 개선 등 성능 향상
      ```jsx
      // 아래와 같이 옵션 값을 부여할 수 있음
      {
        maxSizeMB: 0.08, // 파일 최대 크기
        maxWidthOrHeight: 320, // 너비 or 높이 최댓값
      }
      ```

    - 기존에는 아래와 같이 102400B (100KB)로 제한된 크기보다 요청이 크다는 메시지를 응답받음, 해당 라이브러리를 통해 기존 이미지 크기의 1% 수준으로 크기를 줄여 해결하였음

      <img src="https://user-images.githubusercontent.com/105365737/210307091-969b6f5d-73c0-42de-af41-619fbdd59fe7.png" width="400" />
  
    - 리사이징 전 / 후 이미지 파일 크기

      <img src="https://user-images.githubusercontent.com/105365737/210307127-ed653dc5-a435-4f86-9b33-c848029204e8.png" width="600" />
  
  </br>
  
  - **Blob to Base64**
    - 아래와 같이 이미지 리사이징 과정에서 만들어진 Blob을 Web API를 통해 Base64 형태로 변환하여 어디에서든 사용 가능한 문자열 형태로 만들어 줌

      ```jsx
      // Blob to Base64
      const readerBlob = new FileReader();
      readerBlob.readAsDataURL(compressedFile);
      readerBlob.onloadend = () => {
        if (imageFunction) {
          imageFunction(readerBlob.result); // 서버로 전송될 이미지
        } else {
          setThumbnailImg(readerBlob.result); // 이미지 미리보기
        }
      };
      ```
      - 하지만 Base64 특성상 문자열이 길어져 가독성이 떨어지며, 용량 이슈가 생길 수 있음
  
  </br>
  
  - **기본 프로필 이미지**
    - 사용자가 프로필 이미지를 따로 설정하지 않으면, 미리 Base64로 인코딩 해놓은 이미지가 아래와 같이 서버로 전송됨
  
    <img src="https://user-images.githubusercontent.com/105365737/210308036-502bd486-8432-4546-8af2-9e3319d93373.png" width="600" />
  
  </br>
  
  - **사용자 이름, 계정 ID, 소개 input 창 상태관리**
    - 각 input 창에 맞는 유효성 검사를 통해 상태관리를 하였음
        - 사용자 이름 : 2~10자 입력 가능
        - 계정 ID : 영문, 숫자, 특수문자(`.` , `_` )만 사용 가능
        - 소개 : 1~100자 입력 가능
  
  </br>
  
  - **시작하기 버튼 상태관리**
    - 아래와 같이 모든 input 창의 유효성 검사를 만족했을 때, 버튼이 활성화 되도록 함
      ```jsx
      useEffect(() => {
        if (userName && accountName && intro) {
          setDisabledButton(false);
        } else {
          setDisabledButton(true);
        }
      }, [userName, accountName, intro]);
      ```

    - Enter 입력 시 시작하기 버튼 클릭과 동일한 효과를 줌
      ```jsx
      const onCheckEnter = (e) => {
        disabledButton === false && e.key === 'Enter' && onClickStartButtonHandler();
      };
      ```	
 </br>
		
 - **회원 가입**
   - API 명세에 따라 프로필 설정 이전에 받아온 email, password와 함께 서버에 데이터 전송
        
        ```jsx
        // JoinMembershipInput.jsx에서 전달받음
        const location = useLocation();
        const email = location.state.email;
        const password = location.state.password;
        ```
        
        ```jsx
        const onClickStartButtonHandler = () => {
          const option = {
            url: 'https://mandarin.api.weniv.co.kr/user',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            data: {
              user: {
                username: userName,
                email: email,
                password: password,
                accountname: accountName,
                intro: intro,
                image: image,
              },
            },
          };
        };
        ```

</details>
		
<details>
<summary>프로필 수정 기능</summary>
	
- **기존 프로필 정보 불러오기 (프로필 이미지 미리보기 포함)**
    
    ```jsx
    const getInfo = () => {
          const option = {
            url: 'https://mandarin.api.weniv.co.kr/user/myinfo',
            method: 'GET',
            headers: { Authorization: `Bearer ${userToken}` },
          };
    
          axios(option)
            .then((res) => {
              setUserName(res.data.user.username);
              setDefaultAccountName(res.data.user.accountname);
              setAccountName(res.data.user.accountname);
              setIntro(res.data.user.intro);
              setImage(res.data.user.image);
            })
            .catch((err) => {
              console.error(err);
            });
        };
    ```

- **이미지리사이징을 통한 10MB 이상의 프로필 이미지도 업로드 가능 (프로필 세팅과 동일)**

- **유효성 검사**
    - 정규표현식을 통한 계정 ID 유효성 검사
        
        ```jsx
        // 영문, 숫자, 특수문자(.), (_)만 사용 가능
        const regex = /*^*[a-z0-9A-Z_.]{0,}*$*/;
        ```
        
    - API 명세에 따른 계정 ID 중복 검사
        - defaultAcconutName을 두어 기존 ID 유지 시 중복 검사 X

- **유효성 검사를 통한 저장 버튼 활성화  (프로필 세팅과 동일)**

</details>
		
<details>
<summary>상품 관련 기능</summary>
	
- **상품 등록**
    - 이미지리사이징을 통한 10MB 이상의 상품 이미지도 업로드 가능 (프로필 설정과 동일)
    - 각 상품 정보의 유효성 검사
        - 상품 이미지 (필수)
        - 상품명 (2~15자 이내)
        - 가격 (숫자만 입력 가능)
        - 판매링크
            
            ```jsx
            const linkFunction = (value) => {
              const urlRegex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
              if (urlRegex.test(value)) {
                setLink(value);
              } else {
                setLink('');
              }
            };
            ```
            
    - 상품 가격의 천 단위 콤마 자동 생성 & 삭제
        
        ```jsx
        // 콤마 찍기, 콤마 없애기
        const commaFunction = (value) => {
          const comma = (value) => {
            value = String(value);
            return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
          };
          const uncomma = (value) => {
            value = String(value);
            return value.replace(/[^\d]+/g, '');
          };
          return comma(uncomma(value));
        };
        ```
	
- **삭제**
    - 상품 삭제 클릭 시 상품이 삭제 되고, 판매 중인 상품만 리렌더링
        
        ```jsx
        const deleteProduct = () => {
          const option = {
            url: `https://mandarin.api.weniv.co.kr/product/${productid}`,
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-type': 'application/json',
            },
          };
        
          axios(option)
            .then(() => {
              updateProductList(); // 상품 리스트 리렌더링
            })
            .catch((err) => {
              console.error(err);
            });
        
          closeModal();
        };
        ```
        
        ```jsx
        // getProduct()로 상품 정보를 불러옴
        const updateProductList = () => {
            getProduct();
        };
        ```
	
- **수정**
    - 기존 상품 정보 불러오기 (상품 이미지 미리보기 포함)
    - 상품 등록과 동일한 기능 포함
    
    
    
    ```jsx
    const params = useParams();
    ...
    const onClickProductModificationHandler = () => {
      const option = {
        url: `https://mandarin.api.weniv.co.kr/product/${params.productid}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        data: {
          product: {
            itemName: itemNameMod,
            price: priceMod,
            link: linkMod,
            itemImage: itemImageMod,
          },
        },
      };
    
      axios(option)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    ...
    ```
	
- **웹사이트에서 상품 보기**
    - 내 상품에 대해 웹사이트에서 상품 보기 클릭 시, 해당 페이지가 새 창으로 열림
        
        ```jsx
        <a rel='noopener noreferrer' target='_blank' href={productLink}>웹사이트에서 상품 보기</a>
        ```
</details>
		

<br/>

## 🐣 배승연

<details>
<summary>React Router 6를 이용해 인증(로그인) 여부에 따른 접근 제한 구현</summary>

#### 인증 여부에 따른 접근 제한 측면에서 봤을 때 세 종류의 페이지가 존재
  - 인증 여부에 **상관 없이** 접근 가능한 페이지
  - 인증 **안 된 경우만** 접근 가능한 페이지
  - 인증 **된 경우만** 접근 가능한 페이지

<br/>

#### 인증 된 경우만 접근 가능한 경우 / 안 된 경우만 접근 가능한 경우, 두 케이스에 대한 접근 제한을 구현하기 위해 중첩 라우팅 사용
  
  ```jsx
  /* Router.jsx 일부 */

  import { AuthContextStore } from '../context/AuthContext';

  const Router = () => {
    const { userToken } = useContext(AuthContextStore);

    return (
      <Routes>
        <Route path='*' element={<Error404Page />} />
        <Route path='/notfound' element={<Error404Page />} />

        <Route element={<NonAuthRoute authenticated={userToken} />}>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/login' element={<EmailLoginPage />} />
          ...
        </Route>

        <Route element={<AuthRoute authenticated={userToken} />}>
          <Route path='/home' element={<FeedPage />} />
          <Route path='/search' element={<SearchPage />} />
          ...
        </Route>
      </Routes>
    );
  };
  ```

<br/>

#### 아래 예시는 **인증 된 경우만 접근 가능한** 페이지를 감싸고 있는 AuthRoute 컴포넌트 상세 코드
  ```jsx
  /* AuthRoute.jsx */

  import React from 'react';
  import { Navigate, Outlet } from 'react-router-dom';

  const AuthRoute = ({ authenticated, redirectPath = '/' }) => {
    if (!authenticated) {
      return <Navigate to={redirectPath} />;
    }

    return <Outlet />;
  };

  export default AuthRoute;
  ```

  - 전달 받는 데이터 설명
      - authenticated : Context에 저장된 사용자 token 데이터
      - redirectPath : 인증이 안 된 경우 리다이렉트 될 경로(`/`)를 기본값으로 갖고 있음
  - 동작 설명
      - 정상적으로 인증이 되지 않은 경우(사용자 token이 Falsy 값을 갖는 경우) `/` 경로로 리다이렉트 됨
      - 정상적으로 인증이 된 경우 `Outlet` 속성을 이용해 사용자가 접근하려는 페이지가 렌더링 됨
  
  <br/>
</details>

<details>
<summary>실시간 날씨를 바탕으로 강아지 산책 난이도 계산</summary>
  
#### 1. 여러 개의 API 요청과 응답을 한 번에 처리하기 위한 Axios multiple request 사용
  
  - 산책 난이도(날씨) 페이지 구현 시 날씨 API와 미세먼지 API에 각각 요청을 보내고, 응답을 처리하는 과정이 필요했음
  - 이때 Axios의 multiple request 기능을 이용해서 동시에 다중 요청을 보내도록 처리함
  
    ```jsx
    /* CommunityWeatherPage.jsx 일부 */

    const CommunityWeatherPage = () => {
      const { longitude, latitude, error } = useContext(UserLocationContextStore);
      const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;

      useEffect(() => {
        const getFetch = async () => {
          await axios
            .all([
              axios.get(
                `https://api.openweathermap.org/data/2.5/weather
                  ?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API}&units=metric`,
              ),
              axios.get(
                `https://api.openweathermap.org/data/2.5/air_pollution
                  ?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API}`,
              ),
            ])
            .then(
              axios.spread((weatherRes, dustRes) => {
                updateWeatherInfo(weatherRes);
                updateDustInfo(dustRes);
              }),
            );
        };

      getFetch();
    }, [longitude, latitude]);
    ```
    - `axios.all()`을 이용해서 여러 개의 요청을 묶어서 한 번에 보내도록 함. 위 예시에서는 2개의 요청만 한 번에 처리하고 있으나 3개 이상도 가능
    - `axios.spread()`를 이용해서 요청에 대한 응답을 각각 받아오도록 함

<br/>

#### 2. 날씨 출력 및 날씨 점수 계산을 위한 WeatherDescription 객체 생성
  
- WeatherDescription 객체를 생성한 이유
  
  - 사용한 `날씨 API`(OpenWeatherMap)의 경우 해외에서 제공하는 API라 내부적으로 제공하고 있는 번역 기능의 성능이 미흡하였음
  - 또한 산책 난이도 계산 시 날씨 점수를 책정할 필요가 있었음
  
  <br/>
  
  ```jsx
  /* WeatherDescription.jsx 일부 */

  const WeatherDescription = {
    202: { title: '폭우를 동반한 천둥구름', score: 10 },
    210: { title: '약한 천둥구름', score: 2 },
    211: { title: '천둥구름', score: 2 },
    212: { title: '강한 천둥구름', score: 10 },
    221: { title: '불규칙적 천둥구름', score: 2 },
    230: { title: '약한 스모그를 동반한 천둥구름', score: 2 },
    ...
  };
  ```
  
  - WeatherDescription 객체 설명
      - `날씨 API`의 응답으로 오는 `날씨 id`를 객체의 key로 사용함
      - value로 `title(한국어로 번역한 날씨)`와 `score(날씨 점수)`를 가짐

  <br/>
  
- 아래 예시는 실제 사용 예시
  ```jsx
  /* CommunityWeatherPage.jsx 일부 */

  import WeatherDescription from '../../../utils/WeatherDescription';

  const CommunityWeatherPage = () => {
    const { longitude, latitude, error } = useContext(UserLocationContextStore);
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
      const updateWeatherInfo = (res) => {
        const weatherData = res.data;

        setWeatherInfo({
          weather: WeatherDescription[weatherData.weather[0].id].title,
          weatherScore: WeatherDescription[weatherData.weather[0].id].score,
          ...
        });
      };

      getFetch();
    }, [longitude, latitude]);
  }
  ```
  - weatherData.weather[0].id : 날씨 API의 응답으로 오는 날씨 id
  
<br/>
  
#### 3. 산책 난이도 계산 기준
```
* 산책 난이도 그룹 : 기온 / 날씨 / 공기 질
* 각 그룹의 상태는 최상 / 상 / 중 / 하로 평가한다.
* 최상 / 상은 산책 어려움, 중은 보통, 하는 산책 쉬움이다.
* 최상은 10점, 상은 2점, 중은 1점, 하는 0점의 점수를 갖는다.
* 최상이 하나라도 껴있으면 산책 어려움으로 책정된다.

* 기온
소형견을 기준으로 함
기온 상, 중, 하를 나눌때는 TACC 스케일을 참고
  > 겨울 날씨 참고 : https://www.k-health.com/news/articleView.html?idxno=57536
  > 여름 날씨 참고 : https://purplejam.kr/hot-summer-dog/
- 최상 : -9도 아래, 35도 위 (+10)
- 상 : -8도 ~ -2도, 27도 ~ 34도 (+2)
- 중 : -1도 ~ 6도, 23도 ~ 26도 (+1)
- 하 : 7도 ~ 22도 (0)

* 날씨
OpenWeatherMap API가 응답해주는 값 중 날씨 아이디 값인 weather.id로 판단
날씨에 따른 점수 부여
  > utils/WeatherDescription.jsx에 scroe 추가
- 최상 : 폭설, 폭우, 태풍, 고온, 한랭, 돌풍, 우박, 스모그, 황사 등 (+10)
- 상 : 강한 비, 센 바람, 천둥 구름 등 (+2)
- 중 : 적은~중간 비, 적은~중간 눈, 약한~중간 세기 바람, 안개 등 (+1)
- 하 : 바람 거의 없음, 맑은 하늘, 얇게 낀 안개 등 (0)

* 대기 질
OpenWeatherMap API가 응답해주는 값 중 aqi 값으로 판단
aqi 값은 대기 질을 1~5로 평가한 값임
  > API 링크 : https://openweathermap.org/api/air-pollution
- 최상 : 5 (+10)
- 상 : 4 (+2)
- 중 : 2~3 (+1)
- 하 : 1 (0)

* 산책 난이도를 구하기 위해 세 그룹의 점수를 더한다.
* 난이도 책정 기준
- 어려움 : 5 이상 (최상이 하나라도 껴있으면 산책 어려움으로 책정됨)
- 보통 : 2, 3, 4
- 쉬움 : 0, 1
```
  
<br/>
  
#### 4. 산책 난이도 페이지 내 사용자 경험을 향상하기 위한 시도
  - <a href='https://sypear.tistory.com/77'>(리액트+크로미움 브라우저에서) Geolocation API의 느린 응답 속도를 UX 개선으로 보완하기</a>
  
  <br/>
</details>

<details>
<summary>서버 개발자와 소통이 어려운 오픈 API의 한계를 극복하기 위한 동물병원 상세보기 페이지 URL 구성</summary>

#### 동물병원 상세보기 페이지에서 장소 정보를 어떻게 가져올것인지에 대한 고민이 생김
  - 장소 id를 이용해 해당 장소에 대한 상세 데이터를 가져오려고 했으나, 확인 결과 카카오맵 API는 그러한 기능을 제공하지 않고 있었음
  - 따라서 URL에 장소에 대한 상세 정보를 담아 보내기로 함
  
<br/>
  
#### 장소에 대한 상세 정보를 담고 있는 URL 생성
```jsx
/* HospitalItem.jsx 일부 */

const HospitalItem = ({ hospitalInfo }) => {
  const [detailUrl, setDetailUrl] = useState(null);

  useEffect(() => {
    if (Object.keys(hospitalInfo).length > 0) {
      const url =
        '?road_address=' +
        hospitalInfo.road_address_name +
        '&place_name=' +
        hospitalInfo.place_name +
        '&phone=' +
        hospitalInfo.phone +
        '&x=' +
        hospitalInfo.x +
        '&y=' +
        hospitalInfo.y;

      const encodeResult = encodeURI('/community/hospital' + url);
      setDetailUrl(encodeResult);
    }
  }, [hospitalInfo]);

  return (
    <HospitalItemWrapper>
      <HospitalLink to={detailUrl} aria-label={`${hospitalInfo.place_name} 상세 정보`}>
        ...
      </HospitalLink>
    </HospitalItemWrapper>
  );
};
```
- 도로명 주소, 장소명, 전화번호, x좌표, y좌표를 URL에 포함함
- 이때 실제로는 단순히 URL에 있는 정보를 꺼내와서 상세보기 페이지를 구현할 예정이었으나, 보편적인 형태의 URL로 구성하기 위해 서버에 데이터를 전송하는 것과 같은 형태(`쿼리스트링`)로 URL을 구성
- `encodeURI()`를 이용해서 예약된 문자를 제외한 문자를 인코딩 처리
    - 리스트 아이템 UI
  
        <img src="https://user-images.githubusercontent.com/105365737/210310304-1e1f89f5-996f-4b61-a8c7-fd992ec0e84f.png" width="400" />

    - 리스트 아이템 개발자도구 확인 시 인코딩된 URI 확인 가능

        <img src="https://user-images.githubusercontent.com/105365737/210310319-923c99b9-6553-4bbc-a13f-e2c44d62cbd4.png" width="600" />

        
    - 실제 주소창에는 디코딩된 형태로 표시되어 확인 결과 [React Router 사용시 자동 디코딩](https://stackoverflow.com/questions/41622153/react-routes-param-auto-decode-string)됨
  
        <img src="https://user-images.githubusercontent.com/105365737/210310794-68beec9e-52f0-4e83-ac89-e5f10216e3db.png" width="600" />

<br/>
  
#### URL에 담겨있는 정보를 이용해 화면에 표시하기
```jsx
/* CommunityHospitalDetailPage.jsx 일부 */

const CommunityHospitalDetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hospitalInfo, setHospitalInfo] = useState({});

  useEffect(() => {
    setHospitalInfo({
      address: searchParams.get('road_address'),
      name: searchParams.get('place_name'),
      phone: searchParams.get('phone'),
      x: searchParams.get('x'),
      y: searchParams.get('y'),
    });
  }, []);

  return (
          <CommunityLayout padding='0' navType='titleNav' currentMenuId={2}
            isViewTabMenu={false} fillHeight={true} title={hospitalInfo.name}>
              <HospitalDetailWrapper>
              ...
              <HospitalDetail hospitalInfo={hospitalInfo} />
            </HospitalDetailWrapper>
          </CommunityLayout>
    );
}
```
- `useSearchParams()` 훅을 이용해서 쿼리스트링을 다룸
    - `searchParams.get(key)` 메서드를 이용해서 해당 key의 value를 가져옴
- 가져온 데이터를 hospitalInfo 객체에 저장한 후 화면에 표시
  
  
<br/>
</details>

<details>
<summary>이미지 데이터 변경에 유연한 페이지네이션 캐러셀 컴포넌트</summary>

```jsx
/* PaginationCarousle.jsx 일부 */

const PaginationCarousel = ({ itemList }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        loop='true'
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {itemList.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <img src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
```
- 쉽게 확장할 수 있도록 객체 배열 형태인 itemList를 props로 전달받도록 함. 전달받은 itemList는 반복을 돌며 캐러셀 아이템(SwiperSlide)으로 추가됨
- 캐러셀 구현은 Swiper 라이브러리 이용
  
  
#### 실제 사용 예
```jsx
/* CommunityMainPage 일부 */

import { ADVERTISING1_IMAGE, ADVERTISING2_IMAGE,
   ADVERTISING3_IMAGE, ADVERTISING4_IMAGE } from './../../../styles/CommonImages';

const CommunityMainPage = () => {
  const advertisingImageList = [
    { id: 0, src: ADVERTISING1_IMAGE, alt: '산책 난이도 서비스 오픈! 실시간 날씨 확인하고 댕댕이랑 산책가자!' },
    { id: 1, src: ADVERTISING2_IMAGE, alt: '집사생활 페이지 런칭! 우리집 댕냥이를 위한 훌륭한 집사 되기' },
    { id: 2, src: ADVERTISING3_IMAGE, alt: '특별 이벤트! 친구 초대하고 애견호텔 무료로 가기' },
    { id: 3, src: ADVERTISING4_IMAGE, alt: '현재 위치에서 가장 가까운 동물병원 찾기 서비스 오픈!' },
  ];

  return (
    <CommunityLayout currentMenuId={0} fillHeight={isEmpty}>
      <PaginationCarousel itemList={advertisingImageList} />
      <PopularPosts isEmpty={isEmpty} changeEmptyState={changeEmptyState} />
    </CommunityLayout>
  );
};
```
- `id`, `src`, `alt` 값을 갖는 있는 객체 배열을 만든 후 PaginationCrousel 컴포넌트에 전달하면 페이지네이션 캐러셀이 화면에 출력됨
- 만약 이미지를 추가하고 싶다면 객체 배열 안 데이터를 추가하면 간단하게 캐러셀 이미지 추가 가능

</details>

<br/>

## 🌸 이광렬
<details>
<summary>회원가입 기능 구현 (email, password)</summary>

- email 과 password 의 `input` 창에 text 데이터를 받아서, 각각의 유효성 검사 테스트하여 통과하면 클릭 이벤트를 통하여, `useNavigate()` 를 활용해 해당 페이지에 `state` 정보를 넘긴다.

  ```jsx
  ...
  navigate('/join/setprofile', {
    state: {
      email: email,
      password: password,
    },
  });
  ...
  ```
  
  <br/>
</details>
	  
<details>
<summary>검색 기능 구현</summary>

1. `input` 창에 검색한 키워드와 동일한 정보 ( 사용자 ID 와 사용자 이름 ) 를 GET 요청을 통하여 받아옴
2. 사용자 ID가 아닌, 사용자 이름 과 `input` 창에 입력한 키워드가 동일한 부분이 있는 경우에는 입력한 키워드 부분만 다른 스타일 적용하여 강조
  
```jsx
// 키워드가 사용자 이름 과 부분적으로 겹치는지, 아니면 사용자 ID 와 부분적으로 겹치는지 판단하기 위해서 indexOf 사용
const usernameValidate = ~username.indexOf(keyword);
const accountnameValidate = ~accountname.indexOf(keyword);
// username 을 검색 키워드를 중심으로 잘라서, 3개의 문자열을 배열로 저장 
const COMMA_APPEND_USERNAME = username.replace(keyword, `,${keyword},`);
const arrayKeyword = COMMA_APPEND_USERNAME.split(',');
```
```jsx
<span>
  // 키워드 부분만 따로 styled-component 를 생성하여, 강조
  {arrayKeyword[0]}
  <Keyword>{arrayKeyword[1]}</Keyword>
  {arrayKeyword[2]}
</span>
```
  
  <br/>
</details>
	  
<details>
<summary>게시글 관련 기능 구현</summary>

- 게시글 조회
  - `useParams()`를 통하여, 해당 페이지의 파라미터를 가져와, 해당하는 게시물 데이터를 받아옴
- 게시글 등록
  - 각 이벤트들로 하여금 브라우저의 기본 동작을 실행하지 않도록 `preventDefault` 로 막음
  - 이미지 - 이미지를 업로드 하기위해, 양식에 맞도록 이미지 url 을 수정하는 작업을 거쳐서 서버에 전송 준비
  - 게시글 텍스트 - `event.target.value` 를 통하여, 텍스트를 실시간 저장하여 상태관리 후 서버에 전송 준비
    - 게시글 길이에 맞게, `input` 창 크기 변경
	```jsx
	// 텍스트의 길이에 맞추어 박스크기 조정
	const textRef = useRef();
	const handleResizeHeight = useCallback(() => {
	  textRef.current.style.height = textRef.current.scrollHeight + 'px';
	}, []);
	```
  - 이미지와 게시글이 준비가 되면, 버튼 클릭을 통한 이벤트로 명세에 맞도록 서버로 데이터 전송
    - 이미지 업로드 버튼의 스타일이 게시물 등록만 달라서, styled-component 오버라이드를 통하여 수정
	```jsx
	/* ImageUploadButton.jsx */
	...
	const ImageUploadButton = ({ className, setUploadImg, uploadImg, inputRef }) => {
	...
	```
	```jsx
	...
	return (
	...
	  <ImgUploadButton
	    uploadImg={postImages}
	    setUploadImg={setUploadImg}
	    // 오버라이드를 위하여 className 을 부여 ( 부여한 이유는 styled-component 가 스타일을 적용하는 방식을 이해한다면 알 수 있다. )
	    className={className}
	    inputRef={inputRef}
	  />
	...
	...
	const ImgUploadButton = styled(ImageUploadButton)`
	  position: fixed;
	  margin-left: 26.6rem;
	  bottom: 1.6rem;
	  width: 5rem;
	  height: 5rem;
	  background-image: url(${UPLOAD_FILE_ICON});
	  background-position: center;
	  background-size: cover;
	  cursor: pointer;
	  z-index: 100;
	`;
	```
  
- 게시글 수정
    1. `useParams()` 를 통하여, 해당 페이지의 파라미터를 가져와, 해당하는 게시물 데이터를 받아옴
    2. 받아온 데이터를 게시글 등록페이지에 뿌려줌
    3. 뿌려준 데이터를 가공하여, 다시 PUT 을 통하여 서버에 전송
  
  <br/>
</details>

<details>
<summary>댓글 기능 구현</summary>
  
- 조회 - `props` 로 게시글 정보를 받아와, 그안에 저장된 데이터중 `comments` 정보만을 정제하여 상태관리된 데이터를 뿌려준다.
- 등록 - `props` 로 받아온 `postid` 를 활용하여, 준비된 `text` 정보를 서버에 전송한다.
  
  ```jsx
  const sendCommentData = () => {
    axios
      .post(
        `https://mandarin.api.weniv.co.kr/post/${postData.id}/comments`,
        {
          comment: {
            content: `${commentData}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        },
      )
      .then(() => {
        window.location.reload(false);
      });
  };
  ```
  
- 삭제 및 신고
  - 해당 댓글이 로그인된 사용자의 댓글인지를 판단하여, 모달을 띄운다
    1. 로그인 된 사용자일 경우 - 삭제
  
    ```jsx
    const deletePost = () => {
      axios({
        url: url + `/post/${postID}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
      .then((res) => {
        window.location.replace('/profile');
      })
      .catch((err) => console.error(err));
    };
    ```
  
    2. 다른 사용자의 경우 - 신고
  
    ```jsx
    const reportPost = () => {
        axios({
          url: url + `/post/${postID}/report`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        })
        .then((res) => {
          setIsReport(true);
          if (postID === res.data.report.post) {
            setIsReportSuccess(true);
          } else {
            setIsReportSuccess(false);
          }
        })
        .catch((err) => console.error(err));
    };
    ```
  
  <br/>
</details>

<details>
<summary>채팅 기능 구현</summary>

- 채팅 기능 방식
    
    `로그인된 사용자` ↔ `채팅방으로 사용될 제 3자의 게시글` ↔ `채팅할 상대 사용자`
    
    → 채팅방으로 사용될 제 3자의 아이디는 유저 검색을 통하여 찾을 수 없도록 설정
    
    < 채팅방 생성 >
    
    1. 채팅할 상대 사용자의 프로필에서 채팅 이미지 버튼을 클릭하면, 채팅방으로 사용될 제 3자의 게시글이 생성된다.
        
        ```jsx
        // 제 3자의 게시글을 다른 유저가 생성할 수 있도록 토큰값을 지정
        const CHAT_TOKEN = process.env.REACT_APP_CHAT_SERVER_TOKEN;
        ```
        
    2. 제 3자의 게시글에 전송되는 컨텐츠인 채팅 데이터 → `‘로그인된 사용자의 accountname,채팅할 상대 사용자의 accountname’`
        
        ```jsx
        const createChatroom = () => {
            axios
              .post(
                `https://mandarin.api.weniv.co.kr/post`,
                {
                  post: {
                    content: `${userAccountname},${profileUserAccountname}`,
                    image: '',
                  },
                },
                {
                  headers: {
                    Authorization: `Bearer ${CHAT_TOKEN}`,
                    'Content-type': 'application/json',
                  },
                },
              )
              .then((res) => {
                navigate(`/chat/${res.data.post.id}`);
              });
          };
        ```
        
        → 전송된 데이터는 채팅리스트를 불러올때와 채팅방 이름을 나타낼때 사용한다. 
        
    3. 채팅방 생성시, 제 3자의 게시글의 content 내용과 생성할 content 내용이 중복된다면 alert 창을 띄워서 이미 존재하는 채팅룸이라는 사실을 사용자에게 알린다.
    
    < 채팅방 리스트 >
    
    - 제 3자의 게시글의 정보를 불러와, 전송된 컨텐츠 데이터 에 사용자의 `accountname` 이 포함된 게시글만 보여준다.
    
    < 채팅방 >
    
    - useParams() 를 사용하여, 선택한 url의 파라미터를 가져온 후, 그 파라미터(postid) 에 해당하는 게시글을 불러온다. 여기에 작성된 댓글이 본인의 것이라면, 본인이 날린 채팅으로 보여지고, 아니라면 타 사용자가 보낸 채팅처럼 보여진다.
    
    < 채팅 >
    
    - 채팅방에 입장하면, 채팅방으로 사용된 게시물에 댓글 형식으로 데이터를 전송한다.
  
</details>

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 12. 느낀점
## 🐰 김민승
이번 팀프로젝트는 제게는 너무 행복하고 귀한 경험이었습니다. 경험 많은 팀장님이 팀원들을 위해 제가 생각치도 못하는 부분을 미리 준비해주시는 모습도 너무 인상깊었고 개발하면서 그것을 정말 편하게 활용했습니다. 미래에 프로젝트 팀장을 맡게 된다면 배우고 싶었던 부분이 많았습니다. 능력있는 팀원분들의 코드를 보며 동기부여도 많이 됐고 제가 잘 알지 못하는점을 캐치하고 센스있게 알려주는 모습에도 큰 용기를 얻었습니다. 팀원들과 부족한 부분을 채워주며 프로젝트를 잘 마무리한것 같아 기쁩니다. 긍정적인 팀의 분위기에 안좋은 영향을 끼치지 않으려고 평소보다 몇배로 더 열심히 할 수 있었으며 그로인해 개인적으로도 큰 성장을 이룬 것 같습니다. 이번 팀프로젝트를 통해 제가 어떤 방향으로 나아가는지, 개발과 프로젝트는 어떤식으로 해야하는지에 대한 큰 영감을 얻었습니다. 함께 고생한 팀원들께 너무너무 감사합니다!!

<br/>

## 🦒 김의호
프로젝트 경험이 부족해서 설레기도 하고 걱정도 많이 되었는데, 열정 있는 팀원들 덕분에 협업하면서 많은 부분을 배우고 프로젝트를 잘 마칠 수 있었습니다. 기술적인 성장뿐만 아니라 서로의 문제 해결을 위해 끊임없이 몰두하는 팀원들의 모습을 보면서, 큰 동기부여가 됐습니다. 앞으로 수많은 프로젝트를 마주하게 될 때 이번 프로젝트 경험이 큰 자산이 될 것이라 확신합니다. 스스로 부족함이 많았지만 항상 격려와 응원을 보내준 팀원 분들이 계셔서 이겨낼 수 있었습니다. 너무 소중한 시간들 함께할 수 있어서 좋았습니다! 감사합니다!!

<br/>

## 🐣 배승연
프론트엔드스쿨 기간 동안 이루고 싶었던 개인적인 목표가 3개 있었는데요. 첫 번째가 협업 가능할 만큼 GitHub 익히기, 두 번째가 팀 프로젝트 시 ESLint&Prettier 적용해보기, 세 번째가 팀 프로젝트 잘 마무리하기였습니다. 이번 가져도댕냥 프로젝트를 진행하면서 제가 이루고 싶었던 목표 3개를 모두 달성하게 되어 행복합니다.

이번 프로젝트를 통해 팀이기에 할 수 있는 경험을 많이 했습니다. 이슈 관리 프로세스와 버그 관리 프로세스를 세워 우리 팀의 문화로 만든 것, 다른 분들의 코드를 읽는 것에 두려움이 있었던 제가 다른 분들의 PR을 보며 리뷰를 드린 것, 모두 합심하여 코딩 컨벤션을 만들고 정해진 컨벤션대로 프로젝트 초기 세팅을 해본 것. 모두 혼자였으면 하지 못할 소중한 경험들이었습니다.

팀장 자리를 맡게 되어 부담이 많이 됐었는데, 오히려 이 부담이 저에게 좋은 방향으로 작용한 것 같습니다! 마지막으로 끊임없는 칭찬으로 저를 춤추게 해주셨던 팀원분들께 정말 감사드립니다. 저 혼자였다면 할 수 없었을텐데 오류가 나면 다 함께 해결하고, 안되는 게 있으면 밤을 새가며 어떻게든 해내는 팀원분들의 에너지와 열정 덕분에 완주할 수 있었습니다.

<br/>

## 🌸 이광렬
프로젝트를 진행하면서 팀원분들의 아낌없는 응원속에서 다함께 성장하는 기분을 느낄 수 있었습니다. 처음에는 단순한 퍼블리싱도 머뭇한 저였는데, 혼자 고민하는 과정을 거치고 팀원분들과 서로 소통을 통하여 문제를 해결해 나가다 보니 이제는 하나의 기능은 물론, 여러 기능을 구현하는것에 있어 자신감이 생긴 계기가 되었습니다.
서로 궁금한 부분이 있으면, 같이 고민해주고 해결하는 팀 분위기가 너무 따듯하고 행복했습니다. 작게는, styled-component 를 어느 단위로 쪼개야 하는 지 저희 팀원 모두 고민하여 저희에게 적합한 방법을 착안을 했었고, 크게는 무한렌더와 관련된 부분도 다함께 침착하게 화면공유를 하며 해결을 해 나갔습니다. 이러한 서로 협업하고 해결해 나가는 과정을 한달동안 지속하다보니 협업의 중요성을 느끼며, 성장해 나아가야할 방법을 알게 되었습니다. 가끔은 지치고 힘든 날도 있었지만, 팀원들의 열정에 저도 모르게 웃으면서 다시 한번 힘을 얻어 프로젝트를 진행하였습니다.

다른 복은 몰라도 항상 주변 인복은 많다고 생각하면서 살아왔는데, 이번 프로젝트 역시 타고난 인복 덕분에 좋은 팀원분들과 따듯한 분위기 속에 서로 성장하고 좋은 시간을 보냈습니다! 이 소중했던 시간을 꼭 기억하여, 혼자 성장하는 개발자가 아닌 함께 성장하는 개발자가 되도록 노력하겠습니다! 그동안 함께 고생해준 팀원들 너무 감사합니다~!!!🌸

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>
  
## 13. 프로젝트 발표 자료 및 시연 영상
* <a href='https://www.notion.so/likelion/b87bda7d7fb34aefba6de2c75a27c21d'>발표 노션 링크</a>
	    
<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>
