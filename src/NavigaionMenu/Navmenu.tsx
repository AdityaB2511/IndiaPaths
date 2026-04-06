import React, { useEffect, useRef, useState } from 'react'
import './Navmenu.css'
import logo from '../assets/logo.png'

const MENU_ITEMS = ['Treks', 'Village tour', 'WFH facilities']

// Add submenu map (generic)
const SUBMENU: Record<string, string[]> = {
  Treks: ['Annapurna Trek', 'Leh-Ladakh Trek', 'Kedarnath Trek', 'Valley Trail']
}

export default function Navmenu() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [openIndex, setOpenIndex] = useState<number | null>(null) // which menu has its submenu open
	const containerRef = useRef<HTMLDivElement | null>(null)
	const btnRefs = useRef<Array<HTMLButtonElement | null>>([])

	// close submenu when clicking outside
	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (!containerRef.current) return
			if (!containerRef.current.contains(e.target as Node)) {
				setOpenIndex(null)
			}
		}
		document.addEventListener('mousedown', onDocClick)
		return () => document.removeEventListener('mousedown', onDocClick)
	}, [])

	const handleClick = (index: number) => {
		// if item has submenu, toggle it on click (useful for touch)
		const label = MENU_ITEMS[index]
		if (SUBMENU[label]) {
			setOpenIndex((prev) => (prev === index ? null : index))
			// don't change active index immediately (optional)
			return
		}
		setActiveIndex(index)
		setOpenIndex(null)
		// ensure clicked item is visible
		const btn = btnRefs.current[index]
		btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		// keyboard navigation for main items
		if (e.key === 'ArrowRight') {
			e.preventDefault()
			const next = Math.min(MENU_ITEMS.length - 1, activeIndex + 1)
			btnRefs.current[next]?.focus()
			setActiveIndex(next)
			btnRefs.current[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault()
			const prev = Math.max(0, activeIndex - 1)
			btnRefs.current[prev]?.focus()
			setActiveIndex(prev)
			btnRefs.current[prev]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
		} else if (e.key === 'Enter' || e.key === ' ') {
			// If focused item has submenu, toggle it
			const focusedIndex = btnRefs.current.findIndex((b) => b === document.activeElement)
			if (focusedIndex >= 0) {
				const label = MENU_ITEMS[focusedIndex]
				if (SUBMENU[label]) {
					e.preventDefault()
					setOpenIndex((prev) => (prev === focusedIndex ? null : focusedIndex))
				}
			}
		}
	}

	// helper to render submenu
	const renderSubmenu = (label: string, menuIndex: number) => {
		const items = SUBMENU[label]
		if (!items) return null
		const isOpen = openIndex === menuIndex
		return (
			<div className={`submenu ${isOpen ? 'show' : ''}`} role="menu" aria-hidden={!isOpen}>
				{items.map((s, i) => (
					<button
						key={s}
						className="submenu-item"
						role="menuitem"
						tabIndex={isOpen ? 0 : -1}
						onClick={() => {
							// generic handler when submenu item clicked
							setActiveIndex(menuIndex)
							setOpenIndex(null)
							// you can add navigation logic here (e.g. route to detail)
							console.log('Selected submenu', s)
						}}
					>
						{s}
					</button>
				))}
			</div>
		)
	}

	return (
		<nav className="nav-wrapper" aria-label="Primary">
			<div
				className="nav-scroll"
				ref={containerRef}
				role="tablist"
				aria-orientation="horizontal"
				onKeyDown={handleKeyDown}
			>
				<img src={logo} alt="Hero" style={{ height: '40px' }} />
				{MENU_ITEMS.map((label, idx) => (
					// wrapper to position submenu relative to each item
					<div
						key={label}
						className="nav-item-wrapper"
						onMouseEnter={() => {
							// open on hover (desktop)
							if (SUBMENU[label]) setOpenIndex(idx)
						}}
						onMouseLeave={() => {
							// close on leave (desktop)
							if (SUBMENU[label]) setOpenIndex((prev) => (prev === idx ? null : prev))
						}}
					>
						<button
							ref={(el) => (btnRefs.current[idx] = el)}
							className={`nav-item ${idx === activeIndex ? 'active' : ''}`}
							role="tab"
							aria-selected={idx === activeIndex}
							aria-haspopup={!!SUBMENU[label]}
							aria-expanded={openIndex === idx}
							onClick={() => handleClick(idx)}
						>
							{label}
						</button>

						{renderSubmenu(label, idx)}
					</div>
				))}
			</div>
		</nav>
	)
}