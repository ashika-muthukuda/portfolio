"use client"

import { useState, useEffect, useRef } from "react"

export function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startValue = 0
    const endValue = Number.parseInt(end.toString().replace(/\D/g, ""))

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * endValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  const formatNumber = (num) => {
    if (end.toString().includes("+")) return `${num}+`
    if (end.toString().includes("%")) return `${num}%`
    return num.toString()
  }

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
