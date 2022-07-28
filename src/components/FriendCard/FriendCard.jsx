import './index.css';
import { DELETE } from '../../utils/api';

const FriendCard = ({ friendData, onHandleClick, onDeleteBtn, isRenderedList }) => {
  const { photo, name, id } = friendData;

const deleteFn = () => {
  DELETE('friends', id)
  .then(() => onDeleteBtn(!isRenderedList))
  
}

  return (
    <div  className="FriendCard">
      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p onClick={onHandleClick} className="FriendCard__name">{ name }</p>
      <div onClick={deleteFn} className="FriendCard__dltbtn">X</div>
    </div>
  )
}

export default FriendCard;