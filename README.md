
## Trouble Shooting
react query에서의 caching 문제로 인해 invalidateQueries가 작동하지 않는 줄 알고 오래 다루다가, github API response header에 담긴 cache-control에 의해 브라우저에서 캐싱되고 있었다는 것을 알게되었습니다 . . .

❓ 이런 경우 브라우저 cache를 쓰지 못하도록 막아도 괜찮은가요?


## Refactoring
* axiosInstance 적용
* Error Boundary, Susepnse 적용
* react query -> Custom hook으로 분리
* 코드리뷰 반영
* 무한스크롤 도전

* 맞팔 성공 팝업 만들기
* 전체 스크롤 막기
* 비어있을 때 뷰 만들기

## Review Point
* 


