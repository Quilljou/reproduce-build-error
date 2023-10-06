'use client'
import { Upload } from 'lucide-react'
import React, { useState } from 'react'

import { Accept, useDropzone } from 'react-dropzone'

export const VIDEO_FORMATS = [
  { mimeType: 'video/mp4', format: 'mp4' },
  { mimeType: 'video/quicktime', format: 'mov' },
  { mimeType: 'video/x-msvideo', format: 'avi' },
  { mimeType: 'video/x-matroska', format: 'mkv' },
  { mimeType: 'video/x-flv', format: 'flv' },
  { mimeType: 'video/webm', format: 'webm' },
]

const accept: Accept = VIDEO_FORMATS.reduce((prev, next) => {
  return {
    ...prev,
    [next.mimeType]: ['.' + next.format],
  }
}, {})

export function Hero() {
  const [selectedOutputFormat, setOutputFormat] = useState('mp3')

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: () => {
      return
    },
    accept: accept,
  })

  return (
    <div className="container mx-auto max-w-screen-md px-4">
      <div {...getRootProps()} className="dropzone mt-6 cursor-pointer rounded-sm border-2 border-dashed p-6">
        <input {...getInputProps()} />
        <Upload size="32" className="mx-auto" />
        <div className="mt-2 text-center text-sm text-slate-500"></div>
      </div>
    </div>
  )
}
