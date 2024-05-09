import React from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "@/layout/header/navbar";
import Footer from "@/layout/footer/footer";
import { formatDate } from "@/utils/intl";

export default function ArticleList(props) {
  const { article, more } = usePage().props;
  return (
    <>
      <Head title={article.title}>
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <Navbar white />
      <div className="container mx-auto pt-20 py-12 px-4 lg:px-48">
        <article className="grid gap-4">
          <h1 className="md:text-4xl text-lg">{article.title}</h1>
          <div className="text-sm text-gray-600">{formatDate.format(new Date(article.created_at))}</div>
          <div className="w-full h-[200px] md:h-[400px] lg:h-[540px]">
            <img
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              src={`/storage/articles/${article.cover}`}
              alt={article.id}
            />
          </div>
          <div className="grid gap-4 text-justify" dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </article>
        <div className="border-b border-blue-400 mt-12 mb-4" />
        <div>
          <h1 className="font-bold text-blue-600 text-xl mb-4">Berita Terbaru</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {more.map((el) => (
              <Link className="w-full max-w-full items-center flex gap-4" href={`/publikasi/${el.id}`}>
                <div className="h-20 w-28 flex-none">
                  <img
                    src={`/storage/articles/${el.cover}`}
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <div>
                  <div className="text-bold text-lg">{el.title}</div>
                  <div className="text-bold text-sm text-gray-400">{formatDate.format(new Date(el.created_at))}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
