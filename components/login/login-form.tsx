'use client';
import React from 'react';
import {Input} from "@nextui-org/input";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {APP_ICON_IMAGE} from "@/constants";
import {Image} from "@nextui-org/image";
import { useRouter } from 'next/navigation';
interface Props {
}

export const LoginForm: React.FC<Props> = ({}) => {
  const router = useRouter();
  const [userInput, setUserInput] = React.useState<UserLoginInput>({
    email: '',
    password: ''
  });
  const setUserInputValue = (key: keyof UserLoginInput, value: string) => {
    setUserInput({
      ...userInput,
      [key]: value
    })
  }

  const handleSubmit = async () => {
    const userResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    if (userResponse.ok) {
      router.push('/')
    }
  }
  return (
    <div className='flex flex-row items-center justify-center w-full h-screen p-8'>
      <Card className='md:w-1/3 xl:w-1/3 2xl:w-1/5 flex flex-colitems-center justify-center'>
        <CardHeader className='text-center
          flex flex-col'>
          <Image src={APP_ICON_IMAGE} width={200} height={200} className='mx-auto p-4' alt='ProIngenieria' />
          <h2 className='text-lg font-semibold w-full h-full p-4'>Bienvenido</h2>
        </CardHeader>
        <CardBody
          className='flex flex-col items-center justify-center w-full h-full p-4'
        >
          <div className="mb-10 mt-2 w-full px-8">
            <Input
              label='Email'
              labelPlacement={'outside'}
              required
              className='w-full'
              onChange={
                (e) => {
                  setUserInputValue('email', e.target.value)
                }
              }
            />
          </div>
          <div className="mb-10 w-full px-8">
            <Input
              label='Contraseña'
              required
              type='password'
              labelPlacement={'outside'}
              className='w-full'
              onChange={
                (e) => {
                  setUserInputValue('password', e.target.value)
                }
              }
            />
          </div>
          <div className="mb-4 w-full px-8">
            <Button
              className='w-full'
              color='primary'
              onPress={handleSubmit}
             >
              Iniciar Sesión
            </Button>
          </div>

        </CardBody>
        <CardFooter className='flex flex-col items-center justify-center w-full h-full p-4'>
          <p className='text-sm'>¿No tienes una cuenta? <a href='/register' className='text-blue-500'>Regístrate</a></p>
        </CardFooter>
      </Card>
    </div>
  );
};

