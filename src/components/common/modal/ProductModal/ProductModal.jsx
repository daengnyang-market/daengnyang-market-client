import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const ProductModal = ({ closeModal, productid }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const deleteProduct = () => {
    console.log('상품 삭제 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
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
              onClick={() => {
                console.log('수정 페이지 입니다!!');
              }}
            >
              수정
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='#'>웹사이트에서 상품 보기</Link>
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
