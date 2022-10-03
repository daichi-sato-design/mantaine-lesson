import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Group, Center } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { Layout } from '../components/Layout'

const GroupDemo: FC = () => {
  return (
    <Layout title="Group Demo">
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group direction="column" my="md" position="right">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="start">
        <Button className="h-10" color="indigo">
          1
        </Button>
        <Button className="h-20" color="teal">
          2
        </Button>
        <Button className="h-32" color="orange">
          3
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GroupDemo
