// eslint-disable-next-line unicorn/filename-case
import React from "react";

import { Button, ButtonText } from "@/components/ui/button";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";

export default function Example() {
  const toast = useToast();
  const [toastId, setToastId] = React.useState(0);
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: 'bottom',
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="success" variant="outline" >
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };
  return (
    <Button onPress={handleToast}>
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
}
