import React from 'react';
import {LoginForm} from "@/components/login/login-form";

interface Props {
}

export const LoginView: React.FC<Props> = ({}) => {
  return (
      <div className='flex flex-col items-center justify-center w-full h-full p-4'>
        <LoginForm/>
      </div>
  );
};
