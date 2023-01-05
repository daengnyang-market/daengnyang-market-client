import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContextStore } from '../../../context/AuthContext';
import ProductRegistrationPage from '../ProductRegistrationPage/ProductRegistrationPage';

const ProductModificationPage = () => {
  const { userToken } = useContext(AuthContextStore);

  const params = useParams();

  const [itemNameMod, setItemNameMod] = useState('');
  const itemNameModFunction = (value) => {
    setItemNameMod(value);
  };

  const [priceMod, setPriceMod] = useState('');
  const priceModFunction = (value) => {
    setPriceMod(parseInt(value));
  };

  const [linkMod, setLinkMod] = useState('');
  const linkModFunction = (value) => {
    const urlRegex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
    if (urlRegex.test(value)) {
      setLinkMod(value);
    } else {
      setLinkMod('');
    }
  };

  const [itemImageMod, setItemImageMod] = useState('');
  const itemImageModFunction = (value) => {
    setItemImageMod(value);
  };

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const getInfo = () => {
      const option = {
        url: `https://mandarin.api.weniv.co.kr/product/detail/${params.productid}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
      };

      axios(option)
        .then((res) => {
          setItemNameMod(res.data.product.itemName);
          setPriceMod(res.data.product.price);
          setLinkMod(res.data.product.link);
          setItemImageMod(res.data.product.itemImage);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getInfo();
  }, [userToken, params]);

  const onClickProductModificationHandler = () => {
    const option = {
      url: `https://mandarin.api.weniv.co.kr/product/${params.productid}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
      data: {
        product: {
          itemName: itemNameMod,
          price: priceMod,
          link: linkMod,
          itemImage: itemImageMod,
        },
      },
    };

    axios(option)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (itemNameMod && priceMod && linkMod && itemImageMod) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [itemNameMod, priceMod, linkMod, itemImageMod]);

  return (
    <>
      <ProductRegistrationPage
        activeModButton={disabledButton}
        onClickProductModificationHandler={onClickProductModificationHandler}
        itemNameModFunction={itemNameModFunction}
        priceModFunction={priceModFunction}
        linkModFunction={linkModFunction}
        itemImageModFunction={itemImageModFunction}
        itemNameMod={itemNameMod}
        priceMod={priceMod}
        linkMod={linkMod}
        itemImageMod={itemImageMod}
      />
    </>
  );
};

export default ProductModificationPage;
