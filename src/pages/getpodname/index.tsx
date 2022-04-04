import Header from '@/components/organisms/Header'
import * as React from 'react'
import { NextPage } from 'next'

type Props = {
  podName: string
}

const Home: NextPage<Props> = ({ podName }) => {
  return (
    <>
      <Header />
      <p>
        あなたがアクセスしたPodの名前は 「${podName}」 です。
      </p>
      <span>Mixed Contentで通信がブロックされます。改修中です。</span>
      <a href="http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com">
        http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com
      </a>
    </>
  )
}

export default Home

Home.getInitialProps = async ({ req }) => {
  const response = await fetch(
    'http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com',
    {
      cache: 'no-cache'
    }
  )
  const podName = await response.text()
  return { podName }
}
