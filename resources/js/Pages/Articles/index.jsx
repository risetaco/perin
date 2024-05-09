import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Button, Pagination, Table } from "flowbite-react";
import classnames from "@/utils/classnames";

export default function ArticleList(props) {
  const { articles } = usePage().props;

  const handleDelete = (article) => {
    if (confirm("Yakin akan menghapus file ini?")) {
      Inertia.delete(route("articles.destroy", article.id));
    }
  };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Artikel / Publikasi</h2>}
    >
      <Head title="Articles (Publikasi)" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <Link href={route("articles.create")}>
              <Button>Tambah Baru</Button>
            </Link>
          </div>

          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Cover</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {articles?.data.map((article) => (
                <Table.Row>
                  <Table.Cell width={200}>
                    <div className="h-24 w-32">
                      <img
                        style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        alt={article.id}
                        src={`/storage/articles/${article.cover}`}
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="text-md font-bold">{article.title}</div>
                    <div className="clamp-3">
                      {article.content.replace(/<[^>]*>?/gm, "")}
                    </div>
                  </Table.Cell>
                  <Table.Cell width={48}>
                    <div className="flex gap-2">
                      <Link href={route("articles.edit", article.id)}>
                        <Button size="xs">Edit</Button>
                      </Link>
                      <Button size="xs" color="failure" onClick={() => handleDelete(article)}>
                        Hapus
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
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
      </div>
    </AuthenticatedLayout>
  );
}
