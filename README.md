# WON INTERNATIONAL 웹사이트

산업용 베어링 유통사 WON INTERNATIONAL의 견적 문의 사이트입니다.
React + Vite로 제작했으며, 디자인은 `DESIGN.md` 기준을 따릅니다.

## 폴더 구조

- `src/index.css` — 디자인 시스템(색·글꼴·여백 토큰). 모든 페이지가 공유합니다.
- `src/App.css` — 공통 버튼·카드·내비·푸터 스타일과 페이지 레이아웃.
- `src/components/` — 모든 페이지가 함께 쓰는 내비(`Nav.jsx`)와 푸터(`Footer.jsx`).
- `src/company.js` — 회사명·주소·연락처 등 모든 내용의 단일 출처. 정보가 바뀌면 이 파일만 고치면 됩니다.
- `public/logo.png` — 회사 로고.

## 내 컴퓨터에서 실행해 보기

폴더 안에서 터미널을 열고:

```bash
npm install     # 처음 한 번만
npm run dev      # http://localhost:5173 에서 미리보기
```

## 배포용 파일 만들기

```bash
npm run build    # dist/ 폴더에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

## 인터넷에 올리기 (Vercel)

1. 이 폴더를 GitHub 저장소에 올립니다. (node_modules 폴더는 올리지 않습니다.)
2. vercel.com 에 GitHub 계정으로 로그인합니다.
3. Add New -> Project 에서 이 저장소를 Import 합니다.
4. Vite 프로젝트로 자동 인식됩니다. Deploy 를 누르면 끝입니다.

자동 인식이 안 될 경우 설정값:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
