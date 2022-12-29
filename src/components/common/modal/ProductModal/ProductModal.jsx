import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';
import { AuthContextStore } from './../../../../context/AuthContext';

const ProductModal = ({ closeModal, productid, productLink }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const { userToken } = useContext(AuthContextStore);

  const deleteProduct = () => {
    const option = {
      url: `https://mandarin.api.weniv.co.kr/product/${productid}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };

    axios(option)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });

    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList isOpenAlert={isOpenAlert}>
          <MenuItem>
            <button type='button' onClick={() => setIsOpenAlert(true)}>
              삭제
            </button>
          </MenuItem>
          <MenuItem>
            <Link
              to={{
                pathname: `/product/${productid}/edit`,
              }}
            >
              수정
            </Link>
          </MenuItem>
          <MenuItem>
            <a rel='noopener noreferrer' target='_blank' href={productLink}>
              웹사이트에서 상품 보기
            </a>
          </MenuItem>
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary='상품 삭제 알림창'
          title='상품을 삭제하시겠어요?'
          trigger='삭제'
          tiggerFunc={deleteProduct}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductModal;
