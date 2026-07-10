'use client'
import { TransitionRouter } from 'next-transition-router'
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { PAGE_TRANSITIONS } from '@/config/transitionConfig'

gsap.registerPlugin(DrawSVGPlugin)

const SM_BREAKPOINT = 640

const TransitionProvider = ({ children }) => {
  const transitionOverlayRef = useRef(null)
  const svgPathRef = useRef(null)
  const tlRef = useRef(null) // tracks the single active timeline
  const pathname = usePathname()

  const getConfig = (path) => PAGE_TRANSITIONS[path] ?? PAGE_TRANSITIONS.default
  const isSmallScreen = () =>
    typeof window !== 'undefined' && window.innerWidth < SM_BREAKPOINT
  const isDarkMode = () =>
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark')
  const getColor = (config) => (isDarkMode() ? config.darkColor ?? config.color : config.color)

  // Hard-reset everything to a known, "not transitioning" state.
  // Called before every leave/enter so an interrupted (killed) tween
  // can never leave the DOM in a half-finished state.
  const resetTransitionState = () => {
    tlRef.current?.kill()
    gsap.killTweensOf([transitionOverlayRef.current, svgPathRef.current])
    gsap.set(transitionOverlayRef.current, { opacity: 0 })
    gsap.set(svgPathRef.current, { drawSVG: '0%', strokeWidth: 2 })
  }

  useEffect(() => {
    if (svgPathRef.current) {
      gsap.set(svgPathRef.current, { drawSVG: '0%', strokeWidth: 2 })
    }
  }, [])

  return (
    <TransitionRouter
      auto
      leave={(next, from, to) => {
        const config = getConfig(to)
        if (!config.enabled || isSmallScreen()) {
          next()
          return () => {}
        }

        resetTransitionState()

        if (svgPathRef.current) {
          svgPathRef.current.style.stroke = getColor(config)
        }

        const tl = gsap.timeline({ onComplete: next })
        tlRef.current = tl

        tl.to(transitionOverlayRef.current, { opacity: 1, duration: 0.1 }).to(
          svgPathRef.current,
          { drawSVG: '100%', strokeWidth: 300, duration: 1 },
          0
        )

        return () => tl.kill()
      }}
      enter={(next) => {
        const config = getConfig(pathname)
        if (!config.enabled || isSmallScreen()) {
          next()
          return () => {}
        }

        // Don't call resetTransitionState() here — it would snap the
        // overlay back to opacity 0 before it's had a chance to reveal.
        // Just kill any stray tween so the new timeline owns the props cleanly.
        tlRef.current?.kill()
        gsap.killTweensOf([transitionOverlayRef.current, svgPathRef.current])

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(svgPathRef.current, { drawSVG: '0%', strokeWidth: 2 })
            next()
          },
        })
        tlRef.current = tl

        tl.to(svgPathRef.current, {
          drawSVG: '100% 100%',
          strokeWidth: 2,
          duration: 1,
        }).to(transitionOverlayRef.current, { opacity: 0, duration: 0.1 }, 1)

        return () => tl.kill()
      }}
    >
      <div
        ref={transitionOverlayRef}
        className="fixed inset-0 pointer-events-none z-999 flex items-center justify-center opacity-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1316 664"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full scale-[1.3]"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref={svgPathRef}
            d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
            stroke="#82A0FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {children}
    </TransitionRouter>
  )
}

export default TransitionProvider