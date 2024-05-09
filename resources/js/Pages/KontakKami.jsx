import React, { useEffect, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Navbar from "@/layout/header/navbar";
import Footer from "@/layout/footer/footer";
import { Button, Label, TextInput, Textarea, Alert } from "flowbite-react";

export default function Peraturan(props) {
  const { message } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contact-us.store"));
  };

  useEffect(() => {
    if (message) {
      reset();
    }
  }, [message])

  return (
    <div className="bg-white">
       <Head title="Kontak Kami">
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <>
        <Navbar />
        <div
          className="h-[70vh] w-screen relative"
          style={{
            background: `url('/storage/images/kontak-kami/cover.png') top center / cover no-repeat`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-white font-bold text-5xl drop-shadow-xl absolute flex text-center justify-center bottom-32 w-full mx-auto">
            KONTAK KAMI
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-48 py-12">
          <h1 className="text-2xl font-bold text-center mb-8">KONTAK KAMI</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:gap-12">
                <div>
                  <Label htmlFor="name" value="Masukkan Nama" />
                  <TextInput
                    id="name"
                    name="name"
                    required
                    placeholder="Masukkan Nama"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email" value="Alamat Email" />
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Masukkan Alamat Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" value="Nomor Telepon" />
                  <TextInput
                    id="phone"
                    name="phone"
                    required
                    placeholder="Masukkan Nomor Telepon"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="title" value="Keperluan" />
                <TextInput
                  id="title"
                  name="title"
                  required
                  placeholder="Masukkan Keperluan"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="content" value="Pesan" />
                <Textarea
                  rows={8}
                  id="content"
                  name="content"
                  required
                  placeholder="Masukkan Pesan"
                  value={data.content}
                  onChange={(e) => setData("content", e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={processing}>
                  KIRIM
                </Button>
                <Button color="warning" type="reset">
                  RESET
                </Button>
              </div>
            </div>
          </form>
          {message && (
            <div className="mt-2">
              <Alert color="success">
                <span>
                  <span className="font-medium">Berhasil!</span> {message}
                </span>
              </Alert>
            </div>
          )}
        </div>
        <Footer />
      </>
    </div>
  );
}
