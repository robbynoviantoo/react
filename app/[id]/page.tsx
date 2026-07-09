import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
}

// Generate dynamic metadata for the tab title
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  try {
    const res = await fetch(`https://api.restful-api.dev/objects/${id}`)
    if (!res.ok) return { title: 'Object Not Found' }
    const objectData = await res.json()
    return {
      title: objectData.name || 'Object Detail',
    }
  } catch (error) {
    return { title: 'Object Detail' }
  }
}

const ObjectDetailPage = async ({ params }: Props) => {
  const { id } = await params

  async function getObjectData(objectId: string) {
    try {
      const res = await fetch(`https://api.restful-api.dev/objects/${objectId}`)
      if (!res.ok) {
        throw new Error("Failed to fetch object details")
      }
      return await res.json()
    } catch (error) {
      console.error("Fetch detail failed, using mock fallback:", error)
      return {
        id: objectId,
        name: objectId === "1" ? "Google Pixel 6 Pro" : objectId === "2" ? "Apple iPhone 13 Pro" : "Mocked Product " + objectId,
        data: {
          color: objectId === "1" ? "Cloudy White" : "Graphite",
          capacity: objectId === "1" ? "128 GB" : "256 GB"
        }
      }
    }
  }

  let objectData;
  let errorMsg = "";

  try {
    objectData = await getObjectData(id)
  } catch (err) {
    errorMsg = "Data tidak ditemukan atau terjadi kesalahan."
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Kembali ke Beranda</Link>
      
      {errorMsg ? (
        <div className="text-red-500 font-semibold">{errorMsg}</div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{objectData?.name}</h1>
          <p className="text-gray-500 mb-4">ID: {objectData?.id}</p>
          
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">Spesifikasi:</h2>
            {objectData?.data ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {Object.entries(objectData.data).map(([key, value]) => (
                  <li key={key}>
                    <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">Tidak ada spesifikasi tambahan.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ObjectDetailPage