import React, { useReducer } from "react";
import styled from "styled-components";
import "focus-visible";

import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const TWEET_STATE = {
  numOfLikes: 100,
  numOfRetweets: 100,
  isLiked: false,
  isRetweeted: false
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'liked': {
      return {
        ...TWEET_STATE,
        numOfLikes: !state.isLiked ? (state.numOfLikes + 1 ) : (state.numOfLikes - 1 ),
         isLiked: !(state.isLiked),

      }
    }
    case 'retweet': {
      return {
        ...state,
        numOfRetweets: !state.isRetweeted ? (state.numOfRetweets + 1) : (state.numOfRetweets - 1),
        isRetweeted: !(state.isRetweeted)
      }
    }

  }
};



const App = () => {

const [ state, dispatch] = useReducer(reducer, TWEET_STATE)
console.log(state)
const handleToggleLike = () => {
  dispatch({type:'liked'})
}
const handleToggleRetweet = () => {
  dispatch({type:'retweet'})
}

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        handleToggleLike={handleToggleLike}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleRetweet={handleToggleRetweet}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
