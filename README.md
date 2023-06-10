
## Trouble Shooting
react query에서의 caching 문제로 인해 invalidateQueries가 작동하지 않는 줄 알고 오래 다루다가, github API response header에 담긴 cache-control에 의해 브라우저에서 캐싱되고 있었다는 것을 알게되었습니다 . . . 그래서... 좀 코드가.. 미흡한 점.. 죄..송..합...니..다...

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

## 질문
* header에 token을 넣어야 하는데 `Cient(token)`이런식으로 axiosInstance를 만드는 방식이 괜찮은지 궁금합니다!
* useQuery에서 queryFn에 `api/followData.ts` following, follower를 부르는 api 처리를 묶어놓았는데 이런 방식이 괜찮은 방식인지 궁금합니다! 또 더 나은 방식이 있다면 어떤 방식일까요?
* components/followListBody.tsx에서 선택한 사용자를 follow하는 구현입니다.
```tsx
  // 사용자 팔로우 함수
  const handleFollowUser = () => {
    checkList.forEach(userId => {
      followUser({ token: userToken, userId });
    });
  };
```
이렇게 리스트에 반복문으로 돌려서 mutate 함수를 호출하고 있는데 괜찮은 방법인지 궁금합니다!
