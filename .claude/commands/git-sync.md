# Git Sync Command

현재 변경사항을 확인하고 가이드라인에 맞는 커밋 메시지로 main 브랜치에 푸시합니다.

## 작업 순서

1. `git status`로 변경된 파일 확인
2. `git diff`로 staged/unstaged 변경사항 확인
3. `git log --oneline -5`로 최근 커밋 스타일 확인
4. 변경사항을 분석하여 Gitmoji 가이드라인에 맞는 커밋 메시지 작성:
   - 형식: `<gitmoji> <type>: <subject>`
   - 적절한 gitmoji 선택 (✨ feat, 🐛 fix, 📝 docs, 🎨 style, ♻️ refactor 등)
5. 모든 변경사항을 staging하고 커밋
6. main 브랜치에 푸시

## Gitmoji 참조

- ✨ `feat`: 새로운 기능 추가
- 🐛 `fix`: 버그 수정
- 📝 `docs`: 문서 작성 또는 수정
- 🎨 `style`: 코드 구조/형식 개선
- ♻️ `refactor`: 코드 리팩토링
- ⚡️ `perf`: 성능 개선
- 🔥 `remove`: 코드/파일 삭제
- 🔧 `config`: 설정 파일 수정
- ✅ `test`: 테스트 추가/수정
- 💄 `ui`: UI/스타일 파일 추가/수정

## 주의사항

- 민감한 정보(.env, credentials 등)가 포함되어 있지 않은지 확인
- 변경사항이 없으면 커밋하지 않음
