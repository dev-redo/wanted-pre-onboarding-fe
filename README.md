
# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

<details>
<summary>사전 과제 안내</summary>
<div markdown="1">

## Quick Overview

```
npm install

npm start
```

\*\* React를 구동할 수 있는 기본적인 환경이 필요합니다.

## 진행 가이드

- 위의 Repository를 포크(`fork`) 하여 개발 URL 제출해주세요.
  - [URL 제출 링크](https://forms.gle/LcXnfrgtQp5MRrdU8)
- fork 레파지토리 명은 `wanted-pre-onboarding-fe`로 생성해 주세요.
- 과제 수행 개수에 따라 기본적인 평가가 이루어집니다.
- 코드의 일관성, 가독성, 함수 분리,컴포넌트 설계, 코드 퀄리티 등을 기준으로 세부적인 평가가 이루어집니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- 선발하는 과정에서 최소한의 수준을 평가하기 위한 과제로 아래 Assignment 외 다른 부분을 완벽하게 구현하지 않으셔도 됩니다. (평가에 반영하지 않습니다.)
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 과제 풀이에 관한 것 등 자유롭게 작성해주시면 됩니다.
- 함수형 컴포넌트로 개발해주세요. (React Hooks)

\*문의 사항은 사전 과제 Repository의 Issue로 등록해 주세요.

# :: 과제 안내



## Assignment 1 - `Login`

- 로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개)
- 약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용)
- 로그인 시(ID, PW 입력 후 버튼 클릭)
  - Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.)
  - 메인 페이지로 이동합니다.(로그인이 완료되면)
  - 반응형 CSS 적용은 하지 않으셔도 좋습니다. 해당 페이지는 반응형 CSS를 평가하지 않습니다.

## Assignment2 - `GNB`

- 로그인 후 이동하는 메인페이지의 GNB를 구현해주세요.
- 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 를 구현해주세요.
- 모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다.
- 가장 오른쪽 아이콘을 Logout으로 변경해주세요.
- 그 외 기능은 평가하지 않습니다.
  - (가운데 검색바는 `input` 요소로만 만들어주세요. 기능은 X)
  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O)

## Assignment3 - `Validation`

- 이메일과 비밀번호의 유효성을 확인합니다.
  - 이메일 조건 - `@` , `.` 포함
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
  - 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인
- Validation 상태를 CSS로 표현해주세요.
  - Email Input
    Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경)
  - Password Input
    Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.)
  - Login Button
    Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.)
- 유효성 검사 시 아래 두 가지를 적용해서 구현해주세요.
  - 정규표현식 사용
  - Validation 함수 분리

## Assignment4 - `Routing`

- 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage)
- 로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X)
- 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X)

## Assignment5 - `Feeds`

- 피드 컴포넌트를 개발합니다.
- 레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. (픽셀 단위까지 맞추실 필요는 없으나 보기에 자연스럽도록 개발해주세요.)
- 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다.
- Feed는 최소 3개이상 랜더링 되도록 구현해주세요.
- 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)
- Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.
- 게시 후 Input은 초기화 되어야 합니다.
- Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)
- Feed Image는 자유롭게 사용하셔도 되지만 필요하시면 아래의 url을 사용하세요.(사이즈를 변경하셔도 됩니다. 같은 사이즈 X)
  "[https://source.unsplash.com/random/600x500](https://source.unsplash.com/random/600x500)"
  "[https://source.unsplash.com/random/900x500](https://source.unsplash.com/random/900x500)"
  "[https://source.unsplash.com/random/700x1080](https://source.unsplash.com/random/700x1080)"
- Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)
  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. icon 라이브러리 설치 O)
  - 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)

## 참고 이미지

[참고 이미지 링크](https://bclef25.notion.site/1ed6d5b2192b45eeb4104a67f6a77250)

</div>
</details>

<br>


# 요구 사항 분석

<details>
<summary>요구 사항 분석</summary>
<div markdown="1">
  
## (Assignment 1 & 3) Login 페이지 생성 & Form Validation
   - Email, Password Input과 Submit 버튼
   - useRef hook을 이용한 렌더링 최적화
   - Email, Password 유효성 검사
      - 각 입력창이 유효성을 통과하는지 여부를 CSS로 표현
      - Email, Password 모두 유효성을 통과할 시 Button 색상 진하게 변경 & Submit 활성화
      - 유효성 검사 시 정규표현식 사용 및 Validation 함수 분리
   - Submit시 존재하는 유저인지 확인
      - public/data 디렉토리에 가입된 유저 정보(email, password) 저장
      - 입력된 Email과 Password와 일치하는 유저가 존재하는지 확인
        - 존재하면 로그인 성공
        - 존재하지 않으면 로그인 실패

## (Assignment 2) GNB(Global Nabigation Bar)
   - 로그인 후 이동하는 메인페이지의 GNB 구현(sticky)
   - 모바일을 고려한 반응형 웹 구현

## (Assignment 4) Routing
   - 로그인, 로그아웃 시 라우팅을 통해 각각 메인 페이지, 로그인 페이지로 이동
   - 로그인 시 로컬 스토리지에 유저 Id와 토큰을 저장
   - 로그아웃 시 로컬 스토리지에 저장된 유저 Id와 토큰 삭제

## (Assignment 5) 인스타그램 Feed 구현
   - Feed 컴포넌트 구현
   - public/data 디렉토리에 인스타그램 피드 정보를 저장 후 fetch로 request
   - 댓글 추가 기능 구현
     - Enter key & 마우스 클릭으로 댓글 게시
   - Feed 레이아웃 모바일을 고려
   - 이미지 크기 사이즈 다르게 구현
      - 이미지 반응형 구현
   - [intersection observer등을 사용하여 lazy loading을 구현시 가산점](https://github.com/wanted-pre-onboarding-fe/pre-assignment/issues/4)
   - 메인 페이지 레이아웃 반응형 웹 구현 ( = global 레이아웃 만들기 )

</div>
</details>

<br>




# 파일 구조

```
// 어플리케이션에 사용되는 json 파일들
public
└── data
    ├── instargramFeedData.json
    └── registerUserList.json


// 어플리케이션의 기능에 사용되는 소스들
src
├── pages                            // 페이지를 담당하는 컴포넌트
│   ├── Home.jsx                     // 인스타그램 메인 페이지
│   └── Login.jsx                    // 인스타그램 Login 페이지
│
├── component                        // 아토민컴포넌트와 컨테이너 파일들
│    ├── common                      // 공통적으로 사용되는 컴포넌트들(ex. Feed, Avatar, LazyImg)
│    └── login                       // 로그인 페이지에서 사용하는 컴포넌트 모음
│	 └── form		     // 로그인 Form 컴포넌트
│
├── layout                           // 어플리케이션 레이아웃
│    └── global                      // 전역 레이아웃
│
├── hooks                            // 커스텀 훅
│    ├── useAuth.jsx		     // login, logout 콜백함수를 모아둔 훅
│    ├── useHttp.jsx                 // httpRequset 훅
│    └── useLazyImageObserver.jsx    // Intersection Observer API를 이용한 Lazy Loading 훅
│
├── module                           // 전역 상태 관리 atom, selector, context 모임
│    └── context
│        └── auth                    // 로그인 인증 관리 컨텍스트
│    		├── provider.jsx
│        	└── reducer.jsx
│
├── api                              // fetch를 이용하여 통신 로직을 담당
│    └── auth.js                     // 가입된 유저 정보 Request
│    └── feed.js                     // 인스타그램 Feed 정보 Request
│
├── util                             // 각 컴포넌트에서 사용되는 공통 로직들을 util로 분리
│
├── styles                           // 공통되는 style 모임
│
├── assets                           // 어플리케이션에서 사용하는 icon, image 파일들
│    └── icon
│    └── image
│
└── constants                        // 각 컴포넌트에서 사용되는 변수 모임
     └── regex.js                    // 정규표현식 모임
     └── fieldData.js                // Form 컴포넌트에서 표현될 Field Data

```

<br>





# 기능

## 1. Login 페이지 생성 & Form Validation

<details>
<summary>데모 영상</summary>
<div markdown="1">

## 등록되지 않은 유저일 시

![instagram - Chrome 2022-06-25 00-06-56](https://user-images.githubusercontent.com/69149030/175565266-b51ec78c-0252-4535-be47-3f31e671000a.gif)

-등록되지 않은 유저일 시 alert로 표시

## 등록된 유저일 시

![instagram - Chrome 2022-06-25 00-09-43](https://user-images.githubusercontent.com/69149030/175566414-c942c015-1fbe-4b42-83ee-c97e20618180.gif)

- 등록된 유저일 시 alert로 표시
- 메인 페이지로 Redirect

## 로그인 성공 시 Local Storage 에 Id, 토큰 저장

https://user-images.githubusercontent.com/69149030/175649385-574f9323-6b13-4cca-841c-fa40ebb034e8.mp4

- 로그인 성공 시 Local Storage에 유저 Id, 토큰 저장

</div>
</details>


- [로그인 페이지](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Login.jsx)
  - 로그인 Form 컴포넌트 렌더링
  - [토큰이 있는 경우 Main 페이지로 이동](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Login.jsx#L13)
  - [전역 style](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/styles/index.js#L14)을 이용해 반응형 웹 구현
    - 컨테이너 크기는 기본 max-width 45rem
    - 모바일(320px)일 시 max-width 100%로 변경

<br>


- [로그인 Form 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/login/form/index.jsx)
  - common 컴포넌트인 [Form](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx)을 
    - Form 컴포넌트에 email과 pw Input에 필요한 Field Data 전달
    - 로그인 처리를 담당하는 Submit Callback 전달
  - Form 컴포넌트에서 전달받은 Field Data를 통해 email, password Input 구성
  - Form 컴포넌트는 Submit Button이 존재하며 email, password Input이 모두 유효성을 통과할 시 활성화
  - Submit button을 클릭 시, 전달받은 SubmitCallback을 통해 로그인 처리
    - public/data/registerUserList.json에 등록된 유저 list json 파일 request
    - 존재하지 않는 유저일 시 로그인 실패 처리
    - 존재하는 유저일 시, 유저 Id와 토큰을 Local storage에 저장한 후 메인 페이지로 Redirect
  <br>
  (Form 컴포넌트는 트러블 슈팅 파트에서 더 자세히 다루고자 한다.)

<br>



## 2. GNB(Global Nabigation Bar)

<details>
<summary>데모 영상</summary>
<div markdown="1">

## stick GNB
![instagram - Chrome 2022-06-25 00-26-35 (1)](https://user-images.githubusercontent.com/69149030/175568563-e9474d2c-a832-4a5c-bb21-7ff0354d263f.gif)

</div>
</details>


- [전역 레이아웃](https://github.com/dev-redo/wanted-pre-onboarding-fe/tree/main/src/layout/global)
  - 전역 레이아웃은 [Main 페이지](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Home.jsx#L18)에서 사용
  - 자식 컴포넌트로 인스타그램 피드들 렌더링

<br>

- [GNB](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/layout/global/Gnb.jsx)
  - sticky & space-betwwen
  - 모바일(320px)일 시 Search 창 사라짐
  - 마지막 아이콘 Logout 버튼

<br>



## 3. Routing

<details>
<summary>데모 영상</summary>
<div markdown="1">

## 로그인 시 메인 페이지 이동, 로그아웃 시 로그인 페이지 이동
![instagram - Chrome 2022-06-25 00-38-57](https://user-images.githubusercontent.com/69149030/175604705-b3e60e13-3de5-427a-90ce-096cf3734bea.gif)

</div>
</details>


- 로그인 시 Local Storage에 유저 Id와 토큰 저장 -> 메인 페이지로 Redirect
- 로그아웃 시 Local Storage에 유저 Id와 토큰 삭제 -> 로그인 페이지로 Redirect

* 로그인, 로그아웃 처리 함수는 [useAuth 훅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/hooks/useAuth.jsx)에 모아둠
* react-router-dom의 useNavigate을 이용해 Redirect 구현

<br>




## 4. 인스타그램 Feed 구현

<details>
<summary>데모 영상</summary>
<div markdown="1">

## Feed Image 반응형 구현
https://user-images.githubusercontent.com/69149030/175647921-16cd3de3-50c6-492b-a1e0-dd4f2f57833e.mp4

## 댓글 게시
https://user-images.githubusercontent.com/69149030/175607221-712be649-3a07-4bce-9752-afbc1c846faf.mp4

- fetch한 Feed의 Comments에 댓글 추가
- Enter 키와 마우스 클릭으로 댓글 게시

## Lazy Loading
https://user-images.githubusercontent.com/69149030/175607567-273e3b3b-0b6f-4e2c-83d6-0cddfd60c762.mp4

- Feed 이미지가 뷰포트(rootMargin 10% 포함)에 들어올 때 이미지 로딩
- Feed 이미지가 로드되기 전 회색 박스로 대체

</div>
</details>

- [Main 페이지](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Home.jsx)
  - [GNB 모바일 대응](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/layout/global/Gnb.jsx)
  - [public/data/registerUserList.json](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/public/data/registerUserList.json)에 인스타그램 Feed 데이터를 request
  - [request 처리 결과값을 반환하는 getAsyncValue 함수](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L8)를 이용해 비동기 처리
    - 인자로 [feed 데이터 요청 api](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/api/auth.js#L3) 결과값(promise) 전달
    - request 처리가 성공할 시 request 처리 결과값 리턴
    - 실패 시 error 리턴
  - Request 동안 대기 & 에러 처리는 React의 [Suspense와 ErrorBoundary](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/App.js#L12) 이용
  - 메인 페이지에서 Feed 컴포넌트에 [feed 데이터 전달](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Home.jsx#L19)
  
  (getAsyncValue 함수는 트러블슈팅 파트에서 더 자세히 다루고자 한다)

<br>

- [Feed 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Feed/index.jsx)
	
    - 다른 페이지에서도 사용할 것이라 판단해 common 폴더에 넣어줌
  - 메인 페이지에서 전달받은 Feed 정보를 이용해 렌더링
  - Feed 크기는 [전역 style](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/styles/index.js#L14)을 이용해 모바일 대응
    - 컨테이너 크기는 기본 max-width 45rem
    - 모바일(320px)일 시 max-width 100%로 변경
  - Enter키 & 마우스 클릭으로 [댓글 게시](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Feed/Feed.jsx#L91)
    - Feed의 Comments에 작성한 댓글 추가
    - 댓글 게시 후 Input 초기화
  - Feed Image 반응형 구현(이미지 비율 유지)
  - intersection observer api를 이용해 Lazy Loading 구현
    - 타겟이 뷰포트에 들어올 시 구독 & 이미지를 로드하는 [useLazyImageObserver 커스텀 훅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/hooks/useLazyImageObserver.jsx)
    - useLazyImageObserver 커스텀 훅을 이용한 [LazyImg 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/LazyImg.jsx)
    
  (lazy loading 관련은 트러블슈팅 파트에서 더 자세히 다루고자 한다)


<br>

## (추가) Route 기반 코드 스플리팅

- [Main 페이지와 Login 페이지 라우트를 코드 스플리팅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/App.js#L7)
- 사용자가 다른 페이지로 이동할 때 비동기적으로 해당 페이지 로딩 -> 번들 최적화

<br>



# 트러블슈팅

## 1. 유효성 검사로 인해 복잡해지는 Form 컴포넌트

### 초창기 구현 - [useForm 커스텀 훅](https://github.com/wanted-pre-onboarding-fe/pre-assignment/commit/b03f6c6c0d5f73a9c52bd4fc0713c197ea5b1fa9)

- useForm 커스텀 훅을 사용 시 email과 pw 입력창의 value 전달
  - { email, password } InputValues
- useEffect를 통해 입력창의 value가 변경될 때마다 유효성 검사
  - validator 함수에 InputValues를 전달
  - InputValues를 loop돌리면서 각 입력창이 정규표현식을 만족하는지 여부 체크
- 모든 입력창이 유효할 시 error가 false가 되어 Submit Button 활성화

<br>

위의 로직의 경우 각 입력창의 value가 변경될 때마다 validator 함수에 values를 전달하고, 각 values가 유효성을 통과하는지 체크해주어야 했다.

동작은 잘 작동했으나 입력창들이 전부 유효성을 통과했는지 판별하는 validator 함수가 useForm과 과하게 결합되어 있다고 판단했다. 즉 validator 함수는 useForm에 대해 알아야만 이해할 수 있다는 문제가 있었다.

<br>

### 리펙토링 - [유효성과 Submit을 담당하는 Form 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx)

![image](https://user-images.githubusercontent.com/69149030/175752710-6614ed5d-3151-43fe-943f-a73cdf40c9a5.png)

- Form 컴포넌트는 Input과 Submit Button이 존재한다.
- Form 컴포넌트를 사용 시 Form 컴포넌트에서 표현될 입력창들에 대한 데이터 전달
  - { name, placeholder, type, regex } 배열 (Field Data)
  - Submit Callback
- Form 컴포넌트에서는 전달받은 [Field Data 배열을 이용해 Input Field 구성](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx#L18)
  - 전달받은 regex를 이용해 [각 입력창의 유효성 통과 여부](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx#L14) 체크
- Form 컴포넌트의 Submit Button은 모든 입력창들이 유효성을 통과할 시 활성화
  - 입력창의 value가 변경될 때마다 각 입력창의 유효성 검사
- Submit Button을 클릭 시, 전달 받은 [Submit Callback 호출](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx#L30)

<br>

위의 로직의 경우 Form 컴포넌트를 사용하는 곳에서 Field Data와 Submit Callback을 전달하기만 하면 되므로 선언적이다는 장점이 있다.

<details>
<summary>상세 설명</summary>
<div markdown="1">

[velog 설명 참고](https://velog.io/@dev-redo/Form-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

</div>
</details>


<br>



## 2. 비동기를 처리해주지 못하는 리액트 Suspense


### 문제 - 동기적으로 처리되지 않는 데이터 불러오기

최근 [토스 컨퍼런스](https://www.youtube.com/watch?v=FvRtoViujGg&t=788s)를 통해 알게된 Suspense와 ErrorBoundary를 이용해 비동기 및 에러 처리를 구현하였다.

나는 리액트 Suspense가 비동기 코드를 동기적으로 동작하게끔 만들어줄 것이라 생각했으나, 비동기적인 데이터가 불러와지기 전까지 fallback을 보여주는 역할만을 수행하였다.

찾아보니 비동기 처리는 SWR, React Query를 이용하였다. 하지만 나는 두 라이브러리를 써본 적이 없어서 리액트(또는 자바스크립트) 기능으로 해결할 수 있는지 찾아보았다.

그러던 중 [해당 포스팅](https://sangmin802.github.io/Study/Think/suspense/)에서 Suspense의 생명주기를 이용해 비동기 처리 하는 것을 보았다.

이를 참고해 api를 인자로 받아 해당 api의 비동기 처리 결과값을 반환하는 함수를 따로 정의해 선언적으로 비동기를 처리하고자 하였다.

<br>

### 해결 - [request 처리 결과값을 반환하는 getAsyncValue 함수](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L8)

- [getAsyncValue 함수에 api를 인수로 전달](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/pages/Home.jsx#L9)
- getAsyncValue 함수는 [status에 따라 다른 결과값을 반환](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L22)
- 함수가 실행될 당시 status는 pending
    - [프로미스 후속 작업 함수 throw](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L24)
    - throw를 하게되면 React는 해당 컴포넌트에서 발생한 중단을 감지하고 렌더링 중지
    - [후속 작업 함수 실행](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L16)
- 프로미스 후속 작업 실행 후, [비동기 처리 성공 시 처리 결과를 반환](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L12)
- 프로미스 후속 작업 실행 후, [비동기 처리 실패 시 error 반환](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/util/getAsyncValue.js#L16)

<details>
<summary>상세 설명</summary>
<div markdown="1">

[velog 설명 참고](https://velog.io/@dev-redo/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-Suspense%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-Pending-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)

</div>
</details>

<br>



## 3. 이미지 로딩되는 동안 image에 적용된 style이 지워지는 문제

### 문제 - 이미지가 로딩되는 동안 img에 적용된 style 제거

![](https://velog.velcdn.com/images/dev-redo/post/75bd03bb-0944-429d-b731-f6b7e72cfff4/image.png)

[초창기 구현](https://github.com/dev-redo/wanted-pre-onboarding-fe/commit/b966578b20864f7f2ef4b3334353035cc931bd51) 당시 useLazyImageObserver 훅에서 src 상태가 업데이트되면 로딩 상태를 변경해주는 식으로 구현했다.

그리고 LazyImg에서는 로딩 전일 시 이미지 대신 회색 박스를 보여주었고, 로딩 이후에는 이미지 src를 보여주었다.

처음에는 Feed Image에 assets 폴더에 있는 이미지를 넣어뒀는데, 그 당시 로딩되기 전 회색박스가 잘 보였다. 하지만 request한 이미지를 넣어줄 때는 img에 적용된 style이 지워졌다.

이미지가 로딩되는 시간 동안 style이 제거가 된 것이다.

<br>

### 해결 - [onLoad를 이용해 image style 변경](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/LazyImg.jsx#L17)

- [useLazyImageObserver 훅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/hooks/useLazyImageObserver.jsx#L20)을 이용해 타겟이 observer되면 src 상태 업데이트
- [LazyImg 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/LazyImg.jsx)에서는 isLoad의 초기값을 false로 만들어 회색 박스를 보여줌
- src가 세팅될 시 onLoad 핸들러를 호출해 isLoad를 true로 변경 -> style 제거

<br>



## 4. Login, Logout 처리 로직 분리 - [useAuth 훅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/hooks/useAuth.jsx)

hook은 함수 컴포넌트 최상단에서만 쓸 수 있고, 이벤트 핸들러로 전달해주지 못한다.
따라서 초기에는 Login, Logout 처리 로직을 컴포넌트에 넣어두었다.

이 로직들을 따로 분리시킬 방법을 찾던 중, hook 자체는 핸들러로 전달해주지 못하지만 hook에서 반환하는 함수들은 훅이 아니므로 전달할 수 있다는 것을 발견하였다.

그래서 [useAuth 훅](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/hooks/useAuth.jsx)을 만들어 login, logout 콜백함수 모아두었다.

<details>
<summary>상세 설명</summary>
<div markdown="1">

[velog 설명 참고](https://velog.io/@dev-redo/React-%ED%95%A8%EC%88%98%EB%A5%BC-%EB%A6%AC%ED%84%B4%ED%95%98%EB%8A%94-hook%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A1%9C%EC%A7%81-%EB%B6%84%EB%A6%AC%ED%95%98%EA%B8%B0)

</div>
</details>


<br>



# 해결 못한 과제

[Form 컴포넌트](https://github.com/dev-redo/wanted-pre-onboarding-fe/blob/main/src/components/common/Form.jsx)에서는 useRef로 이용 시 동작하지 않아서 Ref를 이용한 렌더링 최적화를 구현하지 못했다.

-> Form 컴포넌트가 재렌더링 되지 않으므로 유효성 검증 못함

<br>



# 과제 보완점 & TODO

## 1. 비동기, 이벤트 핸들러를 처리해주지 못하는 ErrorBoundary

에러를 처리해주는 ErrorBoundary 컴포넌트는 비동기, 이벤트 핸들러로 전달한 함수에서 발생한 에러를 처리해주지 못한다.

따라서 만약 존재하지 않는 경로로 request할 시 발생하는 404에러를 핸들링하지 못해 앱이 다운되게 된다.

React-Query 라이브러리를 이용하면 이 문제를 해결할 수 있으나,
직접 ErrorBoudary를 이용해 이벤트 핸들러와 비동기를 처리하는 에러 핸들링 컴포넌트를 만들어보고자 한다.

[참고할 사이트 - ErrorBoundary와 비동기 에러 핸들링](https://sangmin802.github.io/Study/Think/error%20boundary/)

<br>

## 2. 인터페이스가 동일한 게시물 컴포넌트들?

![image](https://user-images.githubusercontent.com/69149030/175775163-1f002c72-ac3c-4d8f-b041-2098fef45d25.png)

인스타그램 Feed와 Reels의 경우 스타일링만 다를 뿐 인터페이스가 동일하다.
따라서 게시물 인터페이스를 만든 후 Feed 컴포넌트에 스타일링과 도메인을 주입하는 방식으로 구현하려고 했으나, 시간이 부족해 하지 못했다.

게시물 인터페이스를 이용해 어떻게 Feed 컴포넌트로 구체화 시킬 수 있는지에 대한 고민이 필요하다.
