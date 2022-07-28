import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import Button from '../Button';
import { GET } from '../../utils/api';
import './index.css';

const FriendCardList = ({filterMsgFriends, isRenderedList, setRenderedList}) => {
  const [friendList, setFriendList] = useState([]);
  const [filterBtnVisible, setFilterBtnVisible] = useState(false);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, [isRenderedList]);

 

  return (
    <div className="FriendCardList">
      {
       filterBtnVisible && <Button onClick={() => {filterMsgFriends('')

      setFilterBtnVisible(false)}} textContent='Clear Filter' color='lightcoral'/>
      }
      {
        friendList.length
          ? friendList.map(friend => <FriendCard onDeleteBtn={setRenderedList} isRenderedList={isRenderedList} key={friend.id} onHandleClick={() => {
            filterMsgFriends(friend.name)
            setFilterBtnVisible(true)
           }} friendData={friend}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;