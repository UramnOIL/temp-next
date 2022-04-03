import Link from 'next/link'
import * as React from 'react'

export default function Header () {
  return (
    <header>
      <div className="w-full h-12 border-b leading-[3rem]">
        <div className="mx-auto flex h-full sm:w-full md:w-4/5 lg:w-1024px">
          <div className="h-full">
            <Link href="/">
              <span className="inline-block align-middle text-slate-600">
                ポートフォリオ(急造)
              </span>
            </Link>
          </div>
          <nav></nav>
        </div>
      </div>
    </header>
  )
}
