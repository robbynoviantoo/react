import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Daftar Produk',
}

const cobain = () => {
  const slug = [
    {
      nama: "Laptop",
      slug: "laptop-murah",
    },
    {
      nama: "Mouse",
      slug: "mouse-murah",
    },
    {
      nama: "Keyboard",
      slug: "keyboard-murah",
    },
  ];

  return (
    <>
      {slug.map((item) => (
        <div key={item.slug}>
          <Link href={`/cobain/${item.slug}`}>{item.nama}</Link>
        </div>
      ))}
    </>
  );
};

export default cobain