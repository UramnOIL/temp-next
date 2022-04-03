import Header from '@/components/organisms/Header'
import Link from 'next/link'
import * as React from 'react'

export default function Home () {
  return (
    <div>
      <Header />
      <div className="m-auto py-4 px-2 sm:w-full md:w-1/2 lg:w-1024px">
        <main>
          <article>
            <header>
              <div className="w-full h-10">
                <h1 className="h-full leading-10">
                  <span className="block text-center align-middle font-semibold">
                    作品集
                  </span>
                </h1>
              </div>
            </header>
            <div className="p-1">
              <section>
                <div className="w-full h-8">
                  <h2 className="h-full leading-8">
                    <span className="block align-middle font-bold">
                      Get Pod Name
                    </span>
                  </h2>
                </div>
                <div className="p-2">
                  <Link href="/getpodname">/aws_eks_practice</Link>
                  <p>アクセスしたAPIサーバーが動いているPod名を表示します。</p>
                  <p>
                    EKS上にAPIサーバをデプロイしています。
                    <br />
                    CircleCIとArgoCDでGitOpsをコンセプトとしたCI/CDパイプラインを構築しています。
                  </p>
                  <div className="w-full h-8">
                    <h3 className="h-full leading-8">
                      <span className="block align-middle font-semibold">
                        Repositories
                      </span>
                    </h3>
                  </div>
                  <div>
                    <ul>
                      <li>
                        IaC:{' '}
                        <a
                          href="https://github.com/UramnOIL/aws_eks_practice"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/UramnOIL/aws_eks_practice
                        </a>
                      </li>
                      <li>
                        Kubernetes:{' '}
                        <a
                          href="https://github.com/UramnOIL/kubernetes_practice"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/UramnOIL/kubernetes_practice
                        </a>
                      </li>
                      <li>
                        APIサーバー:{' '}
                        <a
                          href="https://github.com/UramnOIL/rust_practice"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/UramnOIL/rust_practice
                        </a>
                      </li>
                      <li>
                        フロントエンド:{' '}
                        <a
                          href="https://github.com/UramnOIL/deno_practice"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/UramnOIL/deno_practice
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
