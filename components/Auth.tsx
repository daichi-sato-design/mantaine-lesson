import { FC, useState } from 'react'
import * as Yup from 'yup'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon } from '@heroicons/react/outline'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from './Layout'
import { Form } from '../types'
import { useForm, yupResolver } from '@mantine/form'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('メールアドレスがありません'),
  password: Yup.string()
    .required('パスワードがありません')
    .min(6, 'パスワードは最低8文字必要です')
    .matches(/[0-9]+/, 'パスワードに英数字が含まれていません')
    .matches(/[a-z]+/, 'パスワードに小文字が含まれていません')
    .matches(/[A-Z]+/, 'パスワードに大文字が含まれていません')
    .matches(/[@$!%*#?&]+/, 'パスワードに特殊文字が含まれていません'),
  age: Yup.number().min(15, '15歳以上でなければアカウントは作成できません'),
})

export const Auth: FC = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  })
  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      } else {
        form.reset()
      }
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      } else {
        form.reset()
      }
    }
  }
  return (
    <Layout title="Auth Demo">
      <Group direction="column" position="center">
        <ShieldCheckIcon className="h-16 w-16 text-blue-500" />
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="Authorization Error"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="email"
            label="Email*"
            placeholder="example@gmail.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="md"
            id="password"
            placeholder="password"
            label="Password*"
            description="Must include on upper * lower char & special char"
            {...form.getInputProps('password')}
          />
          {isRegister && (
            <NumberInput
              mt="md"
              id="age"
              label="Age"
              placeholder="Your age"
              {...form.getInputProps('age')}
            />
          )}
          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
              size="sm"
            >
              {isRegister
                ? 'Have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  )
}
