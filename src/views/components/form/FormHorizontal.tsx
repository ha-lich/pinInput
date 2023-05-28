import { useEffect } from 'react';
import { Form } from 'antd';
import { FormValueProps } from '@globalTypes/globalTypes';

interface FormHorizontalInterface {
  children: JSX.Element;
  onFinish: (values: FormValueProps) => void;
  defaultForm?: any;
  data?: any;
}

export default function FormHorizontal({
  children,
  onFinish,
  defaultForm,
  data,
}: FormHorizontalInterface) {
  useEffect(() => {
    if (data) {
      defaultForm.setFieldsValue({
        name: data.name,
      });
    }
  }, [data, defaultForm]);

  return (
    <Form
      form={defaultForm}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(values: FormValueProps) => onFinish(values)}
      autoComplete="off"
      layout="vertical"
    >
      {children}
    </Form>
  );
}
