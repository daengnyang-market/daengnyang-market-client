import { useContext, useState } from 'react';
import styled from 'styled-components';
import { HEART_FILL_ICON, HEART_ICON } from '../../../styles/CommonIcons';
import { AuthContextStore } from '../../../context/AuthContext';
import axios from 'axios';

const LikeBtn = ({ data }) => {
  const [like, setLike] = useState(data.hearted);
  const [count, setCount] = useState(data.heartCount);
  const url = 'https://mandarin.api.weniv.co.kr';
  const { userToken } = useContext(AuthContextStore);

  const onClickLikeButtonHandler = () => {
    setLike(!like);
    const option = {
      url: url + `/post/${data.id}/${like ? 'unheart' : 'heart'}`,
      method: `${like ? 'DELETE' : 'POST'}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };
    axios(option)
      .then((res) => {
        setLike(res.data.post.hearted);
        setCount(res.data.post.heartCount);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <LikeButton like={like} onClick={onClickLikeButtonHandler}>
        <span className='sr-only'>{like ? '좋아요 취소' : '좋아요'}</span>
      </LikeButton>
      <LikeSpan>{count}</LikeSpan>
    </>
  );
};

export default LikeBtn;

const LikeButton = styled.button`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-size: cover;
  background-image: ${(props) => (props.like ? `url(${HEART_FILL_ICON})` : `url(${HEART_ICON})`)};
`;

const LikeSpan = styled.span`
  margin: 0 1.6rem 0 0.6rem;
  font-size: var(--fs-sm);
  line-height: 1.8rem;
  color: var(--sub-text-color);
`;
