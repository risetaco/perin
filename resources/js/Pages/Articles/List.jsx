import React from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "@/layout/header/navbar";
import Footer from "@/layout/footer/footer";
import escape from "@/utils/escape";
import { formatDate } from "@/utils/intl";
import classnames from "@/utils/classnames";

export default function ArticleList(props) {
  const { articles } = usePage().props;

  return (
    <>
       <Head title="Publikasi">
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <Navbar />
      <div
        className="h-[70vh] w-screen relative"
        style={{
          background: `url('/storage/images/publikasi/cover.png') top center / cover no-repeat`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-white font-bold text-5xl drop-shadow-xl absolute flex text-center justify-center bottom-64 w-full mx-auto">
          PUBLIKASI
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 sm:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {articles.data.map((article) => (
            <Link href={`/publikasi/${article.id}`}>
              <article className="grid gap-1">
                <div className="w-full min-h-48 h-48 bg-gray-100 rounded-md">
                  <img
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                    src={`/storage/articles/${article.cover}`}
                    alt={article.id}
                  />
                </div>
                <h1 className="font-bold text-lg">{article.title}</h1>
                <h1 className="text-gray-500 text-sm">{formatDate.format(new Date(article.created_at))}</h1>
                <h1 className="text-sm clamp-3">{escape(article.content)}</h1>
              </article>
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-1 my-2">
          {articles.links.map((link) => (
            <Link href={link.url}>
              <button
                disabled={!link.url}
                className={classnames(
                  "bg-white px-3 py-1 disabled:text-gray-400 disabled:cursor-not-allowed	rounded hover:bg-blue-100 disabled:hover:bg-white border border-gray-300",
                  link.active ? "bg-blue-200" : "",
                )}
                dangerouslySetInnerHTML={{ __html: link.label }}
              ></button>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
