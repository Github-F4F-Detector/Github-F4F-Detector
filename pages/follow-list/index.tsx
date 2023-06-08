import React from 'react';
import { useEffect, useState } from 'react';

import FollowListBody from 'components/followList/FollowListBody';

function FollowList() {
  const [userFollowList, setUserFollowList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com');
        const data = await response.json();
        setUserFollowList(data);
      } catch (error) {
        console.error('Error fetching userFollowList:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <FollowListBody userFollowList={userFollowList} />
      {/* 아무것도 인니옴 */}
    </div>
  );
}

export default FollowList;
