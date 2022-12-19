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
    // TODO: 모든 항목이 유효성 검사를 통과했다면 로그인 버튼 활성화 처리
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

  // TODO: 인풋이 포커스를 잃었을 때
  const onBlurHandler = (e) => {
    e.currentTarget.style.borderBottom = '1px solid var(--border-color)';
  };

  // TODO: 인풋이 포커스를 얻었을 때
  const onFocusHandler = (e) => {
    // *참고* 41~43 라인은 로그인 페이지 한정 - 로그인 실패 메시지 컨트롤을 위한 코드. 기본값(null)인 경우에는 41~43 라인 코드를 실행하지 않음
    if (ChangeLoginFailStateToFail) {
      ChangeLoginFailStateToFail();
    }

    e.currentTarget.style.borderBottom = '1px solid var(--main-color)';
  };

  // TODO: 인풋 밸류가 바뀌었을 때
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // TODO: 이메일 유효성 검사
    if (name === 'email') {
      if (!checkEmailValidation(value)) {
        setIsPassValidation(false);
        return;
      }
    }

    // TODO: 비밀번호 유효성 검사
    if (name === 'password') {
      if (!checkPasswordValidation(value)) {
        setIsPassValidation(false);
        return;
      }
    }

    setIsPassValidation(true);
  };

  // 유효성 검사 함수들
  // TODO: 이메일 밸리데이션 함수
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

  // TODO: 비밀번호 밸리데이션 함수
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
