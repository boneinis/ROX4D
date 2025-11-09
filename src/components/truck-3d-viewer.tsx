'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from './theme-provider'

export function Truck3DViewer() {
  const { theme } = useTheme()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Inject CSS to hide branding as early as possible
    const iframe = iframeRef.current
    if (!iframe) return

    const injectHidingCSS = () => {
      try {
        const iframeDoc = iframe.contentWindow?.document
        if (iframeDoc) {
          const style = iframeDoc.createElement('style')
          style.textContent = `
            /* Hide all eDrawings branding and controls */
            * {
              font-family: inherit !important;
            }
            #edrawings-top-bar,
            .bottom-bar,
            .edrawings-hud-button,
            .edrawings-tool-button,
            #edrawings-button-shaded,
            #edrawings-button-view,
            #edrawings-button-view-settings,
            #edrawings-button-help,
            #edrawings-button-fs,
            #edrawings-button-languages,
            #edrawings-button-reset,
            #edrawings-button-animate,
            #edrawings-button-zoomtofit,
            #edrawings-loading-text,
            #edrawings-loading-message,
            .edrawings-loading-text,
            .edrawings-branding,
            #edrawings-splash,
            .edrawings-splash-text,
            [class*="edrawings-logo"],
            [id*="edrawings-logo"],
            [id*="logo"],
            [class*="logo"],
            div[style*="eDrawings"],
            span[style*="eDrawings"],
            #edrawings-loading-container,
            .loading-container,
            #loading-text,
            .loading-text {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
            }
          `
          iframeDoc.head.appendChild(style)
        }
      } catch (error) {
        // Silently fail if we can't access iframe yet
      }
    }

    // Try to inject immediately
    injectHidingCSS()

    // Also try after a short delay to catch elements that load later
    const timeout = setTimeout(injectHidingCSS, 50)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // Send theme updates to iframe
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          { type: 'theme-change', theme },
          '*'
        )
      } catch (error) {
        console.error('Failed to send theme to iframe:', error)
      }
    }
  }, [theme])

  const handleLoad = () => {
    setIsLoading(false)

    // Hide controls and branding by injecting CSS into iframe
    if (iframeRef.current?.contentWindow) {
      // Inject immediately, no delay
      try {
        const iframeDoc = iframeRef.current?.contentWindow?.document
        if (iframeDoc) {
          const style = iframeDoc.createElement('style')
          style.textContent = `
            /* Hide all UI controls and eDrawings branding */
            #edrawings-top-bar,
            .bottom-bar,
            .edrawings-hud-button,
            .edrawings-tool-button,
            #edrawings-button-shaded,
            #edrawings-button-view,
            #edrawings-button-view-settings,
            #edrawings-button-help,
            #edrawings-button-fs,
            #edrawings-button-languages,
            #edrawings-button-reset,
            #edrawings-button-animate,
            #edrawings-button-zoomtofit,
            #edrawings-loading-text,
            #edrawings-loading-message,
            .edrawings-loading-text,
            .edrawings-branding,
            #edrawings-splash,
            .edrawings-splash-text,
            [class*="edrawings-logo"],
            [id*="edrawings-logo"],
            [id*="logo"],
            [class*="logo"],
            div[style*="eDrawings"],
            span[style*="eDrawings"],
            /* Hide any text elements that might contain branding */
            body > div:first-child:not(#edrawings-viewer-container),
            #edrawings-loading-container,
            .loading-container,
            #loading-text,
            .loading-text {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
            }
          `
          iframeDoc.head.appendChild(style)
        }
      } catch (error) {
        console.error('Failed to hide controls:', error)
      }
    }
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`aspect-video w-full rounded-xl flex items-center justify-center transition-colors ${
        theme === 'dark'
          ? 'bg-gray-800 text-gray-400'
          : 'bg-gray-100 text-gray-600'
      }`}>
        <div className="text-center space-y-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-medium">Failed to load 3D viewer</p>
          <button
            onClick={() => {
              setHasError(false)
              setIsLoading(true)
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video">
      {isLoading && (
        <div className={`absolute inset-0 rounded-xl flex items-center justify-center transition-colors ${
          theme === 'dark'
            ? 'bg-gray-800'
            : 'bg-gray-100'
        }`}>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className={`text-sm transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Loading 3D Model...
            </p>
          </div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src="/truck-body-3d.html"
        className="w-full h-full border-0 rounded-xl"
        title="ROX4D Truck Body 3D Model"
        allow="fullscreen"
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          border: 'none',
          outline: 'none',
          filter: 'grayscale(100%)'
        }}
      />
    </div>
  )
}
