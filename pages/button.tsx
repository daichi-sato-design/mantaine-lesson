import { FC } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Button, Group } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'

const ButtonDemo: FC = () => {
  return (
    <Layout title="Button Demo Page">
      <Group direction="column" position="center">
        <Button
          classNames={{
            leftIcon: 'text-pink-500',
            rightIcon: 'text-orange-500',
          }}
          color="cyan"
          radius="lg"
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Login with Github
        </Button>
        <Button mt="md">Press</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
