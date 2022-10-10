import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import {
  Center,
  Container,
  MultiSelect,
  Text,
  RadioGroup,
  Radio,
  TransferList,
  TransferListData,
} from '@mantine/core'
import { Layout } from '../components/Layout'

const initialValues: TransferListData = [
  [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'rust', label: 'Rust' },
    { value: 'py', label: 'Python' },
    { value: 'js', label: 'JavaScript' },
    { value: 'go', label: 'Golang' },
  ],
  [],
]

const MultiSelectDemo: NextPage = () => {
  const [radioValue, setRadioValue] = useState('react')
  const [selectValues, setSelectValues] = useState<string[]>([])
  const [transferValues, setTransferValues] =
    useState<TransferListData>(initialValues)

  return (
    <Layout title="Multi Select Demo">
      <Container>
        <Text>What is your most favorite frontend library ?</Text>
        <Center>
          <RadioGroup
            my="lg"
            value={radioValue}
            onChange={setRadioValue}
            required
          >
            <Radio value="react" label="react" />
            <Radio value="svelte" label="svelte" />
            <Radio value="angular" label="angular" />
            <Radio value="vue" label="vue" />
          </RadioGroup>
        </Center>
        <Text>What is your favorite React framework ?</Text>
        <MultiSelect
          my="lg"
          value={selectValues}
          onChange={setSelectValues}
          data={['Next.js', 'Remix', 'Gatsby.js']}
          placeholder="Select items"
          clearable
        ></MultiSelect>
        <TransferList
          className="text-center"
          my="lg"
          value={transferValues}
          onChange={setTransferValues}
          searchPlaceholder="Search..."
          nothingFound="..."
          titles={['w/o GC', 'w GC']}
          breakpoint="sm"
        />
      </Container>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default MultiSelectDemo
