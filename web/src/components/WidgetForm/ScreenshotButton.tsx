import html2canvas from "html2canvas";
import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import { LoadingSpin } from "../LoadingSpin";

interface ScreenshotButtonProps {
  onClickSetScreenshot: (screenshot: string | null) => void
  screenshotTook: string | null
}

export function ScreenshotButton( {onClickSetScreenshot, screenshotTook}: ScreenshotButtonProps ){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)


  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    onClickSetScreenshot(base64image)

    setIsTakingScreenshot(false)
  }

  if (screenshotTook){
    return (
      <button 
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 transition-colors"
        style={{
          backgroundImage: `url(${screenshotTook})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
        onClick={() => onClickSetScreenshot(null)}
      >
        <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button 
      type="button" 
      onClick={handleTakeScreenshot}
      disabled={isTakingScreenshot}
      className="p-2 bg-zinc-800 rounded border-transparent hover:bg-zinc-700 transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >

      {isTakingScreenshot ? <LoadingSpin/> : <Camera className="w-6 h-6 text-zinc-100"/> }
    </button>
  )
}