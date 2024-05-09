import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Button, Label, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Create(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    cover: undefined,
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("articles.store"));
  };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Buat Artikel</h2>}
    >
      <Head title="Buat Artikel" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="title" value="Masukkan Judul" />
                    <TextInput
                      id="title"
                      name="title"
                      required
                      placeholder="Masukkan Judul"
                      value={data.title}
                      onChange={(e) => setData("title", e.target.value)}
                    />
                    <div className="text-red-500 text-sm my-2">{errors.title}</div>
                  </div>
                  <div>
                    <Label htmlFor="content" value="Masukkan Isi" />
                    <ReactQuill
                      theme="snow"
                      id="content"
                      name="content"
                      required
                      placeholder="Masukkan Isi"
                      value={data.content}
                      onChange={(value) => setData("content", value)}
                    />
                    <div className="text-red-500 text-sm my-2">{errors.content}</div>
                  </div>
                  <div>
                    <Label htmlFor="cover" value="Masukkan Gambar" />
                    <input
                      className="block"
                      id="cover"
                      name="cover"
                      required
                      type="file"
                      onChange={(e) => setData("cover", e.target.files[0])}
                    />
                    <div className="text-red-500 text-sm my-2">{errors.cover}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button disabled={processing} type="submit">
                      SIMPAN
                    </Button>
                    <Button color="warning" type="reset" onClick={() => reset()}>
                      RESET
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
