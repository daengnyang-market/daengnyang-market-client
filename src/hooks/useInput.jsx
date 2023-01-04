import { useEffect, useState } from 'react';
import { regexEmail } from '../utils/ValidationRegex';

const useInput = ({
  initailValues,
  inputsValidState,
  setInputsValidState,
  alertMessage,
  setAlertMessage,
  ChangeLoginFailStateToFail = null,
}) => {
  const [values, setValues] = useState(initailValues);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const [isPassValidation, setIsPassValidation] = useState(false);

  useEffect(() => {
    const checkDisabledSubmitButton = () => {
      let inputValues = Object.values(inputsValidState);
      let sum = inputValues.reduce((sum, cur) => (sum += cur), 0);

      if (sum === inputValues.length) {
        setDisabledSubmitButton(false);
        return;
      }

      setDisabledSubmitButton(true);
    };

    checkDisabledSubmitButton();
  }, [isPassValidation, inputsValidState]);

  const onBlurHandler = (e) => {
    e.currentTarget.style.borderBottom = '1px solid var(--border-color)';
  };

  const onFocusHandler = (e) => {
    // * 주의 * ChangeLoginFailStateToFail이 기본값(null)인 경우에는 아래 조건문을 실행하지 않음. 로그인 실패 메시지 컨트롤을 위한 코드임.
    if (ChangeLoginFailStateToFail) {
      ChangeLoginFailStateToFail();
    }

    e.currentTarget.style.borderBottom = '1px solid var(--main-color)';
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === 'email') {
      if (!checkEmailValidation(value)) {
        setIsPassValidation(false);
        return;
      }
    }

    if (name === 'password') {
      if (!checkPasswordValidation(value)) {
        setIsPassValidation(false);
        return;
      }
    }

    setIsPassValidation(true);
  };

  const checkEmailValidation = (value) => {
    setInputsValidState({ ...inputsValidState, email: false });

    if (!value) {
      setAlertMessage({ ...alertMessage, emailAlertMessage: '' });
      return false;
    }

    if (!regexEmail.test(value)) {
      setAlertMessage({ ...alertMessage, emailAlertMessage: '* 이메일 형식에 맞지 않습니다.' });
      return false;
    }

    setAlertMessage({ ...alertMessage, emailAlertMessage: '' });
    setInputsValidState({ ...inputsValidState, email: true });
    return true;
  };

  const checkPasswordValidation = (value) => {
    setInputsValidState({ ...inputsValidState, password: false });

    if (!value) {
      setAlertMessage({ ...alertMessage, passwordAlertMessage: '' });
      return false;
    }

    if (value.length < 6) {
      setAlertMessage({ ...alertMessage, passwordAlertMessage: '* 비밀번호는 6자리 이상이어야 합니다.' });
      return false;
    }

    setAlertMessage({ ...alertMessage, passwordAlertMessage: '' });
    setInputsValidState({ ...inputsValidState, password: true });
    return true;
  };

  return {
    values,
    onBlurHandler,
    onFocusHandler,
    onChangeHandler,
    disabledSubmitButton,
    isPassValidation,
    alertMessage,
  };
};

export default useInput;
