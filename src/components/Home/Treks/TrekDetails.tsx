import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Mountain,
  MapPin,
  Calendar,
  Star,
  Clock,
  Ruler,
  TrendingUp,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Check,
  X,
  Backpack,
  Thermometer,
  HeartPulse,
  Bus,
  ChevronUp,
} from 'lucide-react';

import './trek.css';
import type { TrekCompleteData } from '../../../constants';

export default function TrekDetails() {
  const [searchParams] = useSearchParams();
  const [trekData, setTrekData] = useState<TrekCompleteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedDay, setExpandedDay] = useState(0);
  const [navBg, setNavBg] = useState('transparent');
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch trek data based on query parameter
  useEffect(() => {
    const trekName = searchParams.get('name');
    const data = getTrekDetailsByName(trekName);

    if (data) {
      setTrekData(data);
      setNotFound(false);
    } else {
      setTrekData(null);
      setNotFound(true);
    }

    setLoading(false);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        setShowScrollTop(scrollTop > 400);
        if (scrollTop > 100) {
          setNavBg('rgba(26, 46, 26, 0.9)');
        } else {
          setNavBg('transparent');
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const nextSlide = () => {
    if (trekData) {
      setCurrentSlide((prev) => (prev + 1) % trekData.gallery.length);
    }
  };

  const prevSlide = () => {
    if (trekData) {
      setCurrentSlide((prev) => (prev - 1 + trekData.gallery.length) % trekData.gallery.length);
    }
  };

  const handleScrollTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCTA = () => {
    alert('Trek booking request sent!');
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-sand-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-700 mx-auto mb-4" />
          <p className="text-forest-900">Loading trek details...</p>
        </div>
      </div>
    );
  }

  // Handle trek not found
  if (notFound || !trekData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-sand-50 px-4">
        <Mountain size={64} className="text-forest-700 mb-4" />
        <h1 className="font-display text-3xl font-bold text-forest-900 mb-2">Trek Not Found</h1>
        <p className="text-forest-900/70 text-lg mb-6">
          We couldn't find the trek you're looking for. Please check the trek name in the URL.
        </p>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white bg-forest-700 hover:bg-forest-900 transition-colors font-medium px-6 py-3 rounded-full"
        >
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-screen overflow-auto bg-sand-50 text-forest-900">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-sm"
        style={{ background: navBg }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium text-sm backdrop-blur-sm bg-white/10 rounded-full px-4 py-2"
          >
            <ArrowLeft size={16} />
            <span>All Treks</span>
          </button>
          <div className="flex items-center gap-3">
            <button className="backdrop-blur-sm bg-white/10 rounded-full p-2 text-white/90 hover:text-white hover:bg-white/20 transition-all">
              <Share2 size={18} />
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="backdrop-blur-sm bg-white/10 rounded-full p-2 text-white/90 hover:text-white hover:bg-white/20 transition-all"
            >
              <Bookmark size={18} fill={bookmarked ? 'white' : 'none'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient relative overflow-hidden" style={{ minHeight: '520px' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=60 height=60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M30 5 L55 50 L5 50Z%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="mountain-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-36">
          <div className="animate-in">
            <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 badge-glow">
              <Mountain size={14} />
              <span>{trekData.trek.difficulty}</span>
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-in delay-1">
            {trekData.trek.name}
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-8 font-light animate-in delay-2">
            {trekData.trek.tagline}
          </p>
          <div className="flex flex-wrap gap-4 animate-in delay-3">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={16} />
              <span>{trekData.trek.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Calendar size={16} />
              <span>Best: {trekData.trek.bestSeason}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Star size={16} />
              <span>
                {trekData.trek.rating} ({trekData.trek.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="relative z-10 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-card bg-white rounded-2xl p-5 text-center animate-in delay-1 card-hover">
            <div className="w-10 h-10 rounded-full bg-forest-700/10 flex items-center justify-center mx-auto mb-3">
              <Clock size={20} color="#2d4a2d" />
            </div>
            <p className="text-xs text-forest-900/50 uppercase tracking-wider mb-1 font-semibold">Duration</p>
            <p className="font-display text-lg font-bold">{trekData.trek.duration}</p>
          </div>
          <div className="stat-card bg-white rounded-2xl p-5 text-center animate-in delay-2 card-hover">
            <div className="w-10 h-10 rounded-full bg-forest-700/10 flex items-center justify-center mx-auto mb-3">
              <Ruler size={20} color="#2d4a2d" />
            </div>
            <p className="text-xs text-forest-900/50 uppercase tracking-wider mb-1 font-semibold">Distance</p>
            <p className="font-display text-lg font-bold">{trekData.trek.distance}</p>
          </div>
          <div className="stat-card bg-white rounded-2xl p-5 text-center animate-in delay-3 card-hover">
            <div className="w-10 h-10 rounded-full bg-forest-700/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={20} color="#2d4a2d" />
            </div>
            <p className="text-xs text-forest-900/50 uppercase tracking-wider mb-1 font-semibold">Max Altitude</p>
            <p className="font-display text-lg font-bold">{trekData.trek.altitude}</p>
          </div>
          <div className="stat-card bg-white rounded-2xl p-5 text-center animate-in delay-4 card-hover">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-3">
              <IndianRupee size={20} color="#d4af37" />
            </div>
            <p className="text-xs text-forest-900/50 uppercase tracking-wider mb-1 font-semibold">Starting From</p>
            <p className="font-display text-lg font-bold">{trekData.trek.price}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl font-bold mb-5">About This Trek</h2>
            <div className="space-y-4 text-forest-900/75 leading-relaxed">
              {trekData.trek.description.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-sand-200">
              <h3 className="font-display text-xl font-bold mb-4">Trek Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-forest-900/75">Sacred Har Ki Dun Valley</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-forest-900/75">Alpine Meadows & Wildflowers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-forest-900/75">Dense Pine & Oak Forests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-forest-900/75">Minimal Crowds & Pristine Nature</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-display text-3xl font-bold mb-6">Trail Gallery</h2>
        <div className="slider-container">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {trekData.gallery.map((img, idx) => (
              <div
                key={idx}
                className="slider-item"
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay" />
                <div className="label">Gallery Image {idx + 1}</div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {trekData.gallery.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevSlide} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <button className="slider-btn" onClick={nextSlide} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-display text-3xl font-bold mb-8">Day-by-Day Itinerary</h2>
        <div className="space-y-0">
          {trekData.itinerary.map((day, idx) => {
            const isLast = idx === trekData.itinerary.length - 1;
            return (
              <div
                key={day.day}
                className="relative pl-14 pb-8 cursor-pointer group"
                onClick={() => setExpandedDay(expandedDay === idx ? -1 : idx)}
              >
                {!isLast && (
                  <div
                    className="itinerary-line"
                    style={{
                      background: 'linear-gradient(to bottom, #2d4a2d, #ddd0c0)',
                    }}
                  />
                )}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-forest-700 text-white flex items-center justify-center font-display font-bold text-sm z-10 group-hover:scale-110 transition-transform">
                  {day.day}
                </div>
                <div className="bg-white rounded-2xl p-5 border border-sand-200 group-hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-forest-700">{day.title}</h3>
                    <span className="text-xs bg-sand-100 text-forest-800 px-3 py-1 rounded-full">
                      {day.altitude}
                    </span>
                    <span className="text-xs text-forest-900/60">{day.distance}</span>
                  </div>
                  {expandedDay === idx && (
                    <p className="text-sm text-forest-900/65 leading-relaxed mt-3">{day.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inclusions / Exclusions */}
      <section className="bg-white py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-forest-700 mb-4">
                <CheckCircle size={20} color="#4a7c4a" />
                Inclusions
              </h3>
              <ul className="space-y-3">
                {trekData.inclusions.map((item, idx) => (
                  <li key={idx} className="inclusion-item flex items-start gap-3">
                    <Check size={16} color="#4a7c4a" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-forest-900/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-red-700 mb-4">
                <XCircle size={20} color="#b91c1c" />
                Exclusions
              </h3>
              <ul className="space-y-3">
                {trekData.exclusions.map((item, idx) => (
                  <li key={idx} className="inclusion-item flex items-start gap-3">
                    <X size={16} color="#b91c1c" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-forest-900/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-display text-3xl font-bold mb-3 text-center">What Trekkers Say</h2>
        <p className="text-center text-forest-900/50 mb-10">Real stories from real adventurers</p>
        <div className="grid md:grid-cols-3 gap-6">
          {trekData.testimonials.map((testimonial) => (
            <div key={testimonial.avatar} className="testimonial-card bg-white rounded-2xl p-6 border border-sand-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    color={idx < testimonial.rating ? '#d4af37' : '#ddd0c0'}
                    fill={idx < testimonial.rating ? '#d4af37' : 'none'}
                  />
                ))}
              </div>
              <p className="text-sm text-forest-900/70 leading-relaxed mb-5 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-700 text-white flex items-center justify-center font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-forest-900">{testimonial.name}</p>
                  <p className="text-xs text-forest-900/60">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Information */}
      <section className="bg-forest-900 text-white py-16 mb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Essential Information</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Backpack size={20} color="#d4af37" />
                <h4 className="font-semibold text-gold-500">What to Pack</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Layered clothing, trekking shoes, rain jacket, sunscreen, water bottle, personal medication, snacks.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer size={20} color="#d4af37" />
                <h4 className="font-semibold text-gold-500">Weather</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Daytime: 12–18°C. Nighttime: 2–8°C at higher camps. Rain possible Jun–Aug.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <HeartPulse size={20} color="#d4af37" />
                <h4 className="font-semibold text-gold-500">Fitness Level</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Moderate fitness required. Be able to walk 6–8 km daily. Great for beginners and experienced trekkers.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Bus size={20} color="#d4af37" />
                <h4 className="font-semibold text-gold-500">How to Reach</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Fly to Delhi or Chandigarh. Drive to Sankri village (230 km). Trek starts from Sankri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 z-30 bg-white/90 backdrop-blur-md border-t border-sand-200 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm text-forest-900/50">Starting from</p>
            <p className="font-display text-2xl font-bold">{trekData.trek.price}</p>
            <p className="text-xs text-forest-900/40">per person • All inclusive</p>
          </div>
          <button
            onClick={handleCTA}
            className="cta-btn font-semibold text-white px-8 py-3.5 rounded-full text-base btn-hover"
            style={{
              background: 'linear-gradient(135deg, #2d4a2d, #4a7c4a)',
            }}
          >
            Book This Trek
            <ChevronRight size={18} style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }} />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="scroll-top-btn visible"
          style={{ background: '#2d4a2d' }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} color="white" />
        </button>
      )}
    </div>
  );
}
