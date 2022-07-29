import { useState, useEffect } from 'react';
import Splashscreen from './components/Splashscreen';
import Navbar from './components/Navbar';
import AddMessage from './components/AddMessage';
import MessageCardList from './components/MessageCardList';
import AddFriend from './components/AddFriend';
import FriendCardList from './components/FriendCardList';
import './App.css';


function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [searchValue, setSearchValue] = useState();
  
  const [isSplashscreenVisibile, setSplashscreenVisibility] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('username')) {
      setSplashscreenVisibility(false);
    }
  }, [])

  return (
    <div className="App"> {
      isSplashscreenVisibile
      ? <Splashscreen onHandleClick={setSplashscreenVisibility}/>
      :
      (<div className="MainContent">
        <Navbar setSplashscreenVisibility={setSplashscreenVisibility}/>
        <div className="App__sections"> 
        <div className="App__friends">
        <AddFriend isRenderedList={ isRenderedList} setRenderedList={setRenderedList}/>
        <h3>Lista degli amici</h3>
        <FriendCardList isRenderedList={ isRenderedList} filterMsgFriends={setSearchValue} searchValue={searchValue} setRenderedList={setRenderedList} />
        </div>

        <div className="App_messages">
        <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="search_msg" placeholder="Search"></input>
        <MessageCardList filterValue={searchValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
        </div>
        </div>

      </div>)
}</div>)}

export default App;