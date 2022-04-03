import Header from '@/components/organisms/Header'
import * as React from 'react'
import { useEffect, useState } from 'react'

function useFetchName (): [string, boolean] {
  const [name, setName] = useState('not yet loaded')
  const [done, setDone] = useState(false)
  useEffect(() => {
    const get = async () => {
      const response = await fetch(
        'http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com',
        {
          cache: 'no-cache'
        }
      )
      setName(await response.text())
      setDone(true)
    }
    get()
  }, [])
  return [name, done]
}

export default function Home () {
  const [name, done] = useFetchName()
  return (
    <>
      <Header />
      <p>
        {done
          ? `あなたがアクセスしたPodの名前は 「${name}」 です。`
          : 'フェッチ中'}
      </p>
      <a href="http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com">
        http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com
      </a>
    </>
  )
}
