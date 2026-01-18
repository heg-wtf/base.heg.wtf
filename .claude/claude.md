# heg-wtf 조직 개발 가이드

이 문서는 heg-wtf 조직에서 사용하는 개발 규칙과 설정을 정의합니다.

## 기술 스택 및 프레임워크

### 서버

- **Supabase Edge Function** 사용
- 서버 관련 기능은 항상 Supabase 서비스를 최우선적으로 고려
- **데이터베이스**: Supabase Database (PostgreSQL 기반)
- **스토리지**: Supabase Storage
- **인증**: Supabase Auth
- **실시간 기능**: Supabase Realtime

### 모바일

- **Flutter** 기반으로 개발
- 크로스 플랫폼 지원 (iOS, Android)

### 웹

- **GitHub Pages**를 이용한 정적 페이지 배포
- 정적 사이트 생성을 기본 방침으로 함
- 동적 기능이 필요한 경우 Supabase와 연동

## Git Commit 규칙

### Gitmoji 방식 사용

커밋 메시지는 gitmoji 방식을 따릅니다. 커밋 메시지 형식:

```
<gitmoji> <type>: <subject>

<body>
```

#### 주요 Gitmoji 타입

- ✨ `:sparkles:` - 새로운 기능 추가
- 🐛 `:bug:` - 버그 수정
- 📝 `:memo:` - 문서 작성 또는 수정
- 🎨 `:art:` - 코드 구조/형식 개선
- ♻️ `:recycle:` - 코드 리팩토링
- ⚡️ `:zap:` - 성능 개선
- 🔥 `:fire:` - 코드/파일 삭제
- 🚀 `:rocket:` - 배포 관련
- 🔧 `:wrench:` - 설정 파일 수정
- ✅ `:white_check_mark:` - 테스트 추가/수정
- 🔒 `:lock:` - 보안 이슈 수정
- ⬆️ `:arrow_up:` - 의존성 업그레이드
- ⬇️ `:arrow_down:` - 의존성 다운그레이드
- 💄 `:lipstick:` - UI/스타일 파일 추가/수정
- 🚧 `:construction:` - 작업 진행 중
- 👷 `:construction_worker:` - CI 빌드 시스템 추가/수정
- 🎉 `:tada:` - 프로젝트 시작
- 🔀 `:twisted_rightwards_arrows:` - 브랜치 병합

#### 커밋 메시지 예시

```
✨ feat: 사용자 로그인 기능 추가

- JWT 기반 인증 구현
- 로그인 API 엔드포인트 추가
- 세션 관리 로직 추가
```

```
🐛 fix: 로그아웃 시 세션 정리 버그 수정

로그아웃 후에도 세션이 남아있던 문제 해결
```

## 브랜치 전략

### 기본 원칙

- **특별한 지시가 없는 경우**: `main` 브랜치에 직접 커밋
- **PR이 필요한 경우**: 명시적으로 PR 생성을 지시할 때만 feature 브랜치를 생성하고 PR 생성

### PR 작성 시

PR을 만들 때는 다음 사항을 포함:
- 변경 사항 요약
- 테스트 계획
- 관련 이슈 링크 (있는 경우)

## 코드 스타일

### 일반 원칙

- 간결하고 읽기 쉬운 코드 작성
- 필요한 경우에만 주석 추가
- 일관된 네이밍 컨벤션 사용
- 과도한 엔지니어링 지양
- **약어 사용 지양**: 약어가 아닌 전체 full text 형태로 용어 사용
  - 좋은 예: `getUserInformation()`, `maximumConnectionLimit`
  - 나쁜 예: `getUserInfo()`, `maxConnLimit`

### 보안

- OWASP Top 10 보안 취약점 주의
- 민감한 정보는 환경 변수로 관리
- 사용자 입력은 항상 검증

## 테스트

### 필수 사항

- **모든 코드는 테스트 코드와 함께 작성되어야 함**
- 새로운 기능 추가 시 반드시 테스트 작성
- 버그 수정 시 해당 버그를 검증하는 테스트 추가
- 리팩토링 시 기존 테스트가 통과하는지 확인

### 테스트 작성 원칙

- 단위 테스트(Unit Test) 우선 작성
- 통합 테스트(Integration Test)로 전체 흐름 검증
- 엣지 케이스(Edge Case)를 포함한 다양한 시나리오 테스트
- 테스트 코드도 읽기 쉽고 유지보수 가능하게 작성

## 문서화

- README.md는 프로젝트 개요와 시작 가이드 포함
- 복잡한 로직은 코드 주석으로 설명
- API는 명확한 문서화 제공
