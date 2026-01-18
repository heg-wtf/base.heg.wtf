# Flutter 프로젝트 체크리스트

새로운 Flutter 모바일 프로젝트 시작 시 반드시 완료해야 하는 항목들입니다.

## 1. Apple App Store Connect 설정

- [ ] **앱 생성**
  - Bundle Identifier: `com.heg.{project_name}`
  - 저작권: `HEG Inc.`

- [ ] **앱 정보 URL 설정**
  | 항목 | URL |
  |------|-----|
  | 개인정보 처리방침 | https://medium.com/@heg.wtf |
  | 지원 URL | https://heg.wtf |
  | 마케팅 URL | https://heg.wtf/app-ads.txt |

## 2. Firebase 프로젝트 설정

- **계정**: `me@ash84.io`

- [ ] **프로젝트 생성**
  - 프로젝트 이름: 앱 프로젝트명과 동일하게 생성

- [ ] **Remote Config 활성화** (필수)
  - `force_update`: `false` (기본값)
  - `ios_app_version` : `1.0.0`(기본값)
  - `android_app_version` : `1.0.0`(기본값)
  - 로직 : force_upadte가 true이면 플랫폼별 app_version 보다 작거나 같은 경우 강제 업데이트 진행 

- [ ] **Analytics 활성화** (필수)

## 3. AdMob 설정

- **계정**: `sh84.ahn@gmail.com`

- [ ] **앱 등록**
  - 앱 이름으로 생성

- [ ] 광고 단위 1개 추가 
- [ ] 앱ID,  광고단위 ID 가지고 구현 진행 

---

## 진행 순서

1. Apple App Store Connect에서 앱 및 Identifier 생성
2. Firebase 프로젝트 생성 및 Remote Config 설정
3. AdMob 앱 등록
4. Flutter 프로젝트에 Firebase 및 AdMob SDK 연동
