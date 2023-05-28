import React, { useState, useRef, useEffect } from 'react';
import { Button, notification } from 'antd';
import { useVerifyPinMutation } from '@apps/services/pinService';

const PinInput = () => {
  const regex = /^[0-9]$/;
  const pinLength = 6;
  const [pinDigits, setPinDigits] = useState(Array(pinLength).fill(''));
  const [isSecretMode, setIsSecretMode] = useState(false);
  const pinInputRefs = useRef<any>([]);
  const [verify] = useVerifyPinMutation()

	useEffect(() => {
    checkCompletion();
  }, [pinDigits]);

  const handleInput = (index: number, value: string) => {
    const digit = value.charAt(0);

    if (!regex.test(digit)) {
      setPinDigits((prevDigits) => {
        const newDigits = [...prevDigits];
        newDigits[index] = '';
        return newDigits;
      });
      return;
    }

    setPinDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = digit;
      return newDigits;
    });

    if (digit !== '') {
      focusNextEmptyBox(index);
    }
  };

  const handlePaste = (event: any, index: number) => {
    const pastedText = event.clipboardData.getData('text');
    const digits = pastedText.slice(0, pinLength).split('');

    digits.forEach((digit: number, i: number) => {
      if (!isNaN(digit) && index + i < pinLength) {
        setPinDigits((prevDigits) => {
          const newDigits = [...prevDigits];
          newDigits[index + i] = digit;
          return newDigits;
        });
      }
    });
  };

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === 'Backspace' && index > 0 && pinDigits[index] === '') {
      focusPreviousBox(index);
    }
  };

  const focusNextEmptyBox = (index: number) => {
    for (let i = index + 1; i < pinLength; i++) {
      if (pinDigits[i] === '') {
        pinInputRefs.current[i].focus();
        break;
      }
    }
  };

  const focusPreviousBox = (index: number) => {
    for (let i = index - 1; i >= 0; i--) {
      if (pinDigits[i] === '') {
        pinInputRefs.current[i].focus();
        break;
      }
    }
  };

  const checkCompletion = async () => {
    console.log(pinDigits);
    const isComplete = pinDigits.every((digit) => digit !== '');

    if (isComplete) {
      const pinData = {
        status: 200,
        data: {
          pin: pinDigits.join(''),
        },
      };
      const valid: any = await verify(pinData);
      if (valid.data.status === 200) {
        notification.success({
          message: `The PIN is valid with the value ${valid.data.data.pin}`
        })
      }
    }
  };

  const isDisabled = (index: number) => {
    return index >= pinLength;
  };

  const toggleSecretMode = () => {
    setIsSecretMode((prevMode) => !prevMode);
  };

  return (
    <div id='pin_input'>
        <div className="secret-mode">
        <Button type="primary" onClick={toggleSecretMode}>
          {isSecretMode ? 'Disable Secret Mode' : 'Enable Secret Mode'}
        </Button>
      </div>
      <div className="pin-input">
        {pinDigits.map((digit, index) => (
            <input
            key={index}
            type={isSecretMode ? 'password' : 'text'}
            maxLength={1}
            value={digit}
            onChange={(e) => handleInput(index, e.target.value)}
            onPaste={(e) => handlePaste(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={isDisabled(index)}
            className={digit !== '' ? 'filled' : ''}
            autoFocus={index === 0}
            ref={(ref) => (pinInputRefs.current[index] = ref)}
            />
        ))}
        </div>
    </div>
  );
};

export default PinInput;
