'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function FullBodyOrgasmCourseLandingPage() {
  const [open, setOpen] = useState(false)
  const stripeCheckoutUrl = 'PASTE_STRIPE_LINK_HERE'
  const fboStudentUrl = 'https://fbo-student.brockjohn.com/'
  const moduleOneUrl = 'https://public-fbo-access.vercel.app/module-1'

  const sections = [
    {
      title: 'Release pressure',
      text: 'A calm, guided experience that helps you shift from tension, overthinking, and performance into body awareness, breath, and expanded sensation.',
    },
    {
      title: 'Expand sensation',
      text: 'This 35-minute course is designed to help you slow down, feel more, and build your capacity for grounded, full-body pleasure without force or overwhelm.',
    },
    {
      title: 'Learn Brock’s framework',
      text: 'Breath, somatic awareness, presence, and energy circulation come together in a simple, elegant format you can return to again and again.',
    },
  ]

  const moduleLessons = [
    { id: '1', title: 'Somatic Foundations' },
    { id: '2', title: 'Sensual Guided Practice' },
  ]

  const modules = [
    {
      num: '01',
      title: 'Arrival',
      text: 'Settle your nervous system, release urgency, and create a safe internal starting point.',
      unlocked: true,
      embedUrl: 'https://hypnoticdreamtv.com/wp-content/uploads/2026/07/finalFBO_PT10405_edit0725_part3.mp4',
      suggestedExercise: 'Welcome to Your Body',
      lessons: [
        { ...moduleLessons[0] },
        { ...moduleLessons[1] },
      ],
    },
    {
      num: '02',
      title: 'Awareness',
      text: 'Shift from story into sensation with guided body awareness and present-moment tracking.',
      unlocked: false,
      suggestedExercise: 'Know Your Nervous System',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '03',
      title: 'Breath',
      text: 'Use slow, intentional breath to expand capacity, soften holding, and awaken sensation.',
      unlocked: false,
      suggestedExercise: 'Sensation Vocabulary Builder',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '04',
      title: 'Energy Awareness',
      text: 'Learn to notice subtle warmth, tingling, pulsing, and aliveness without chasing intensity.',
      unlocked: false,
      suggestedExercise: 'Desire Discovery',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '05',
      title: 'Expansion',
      text: 'Let sensation spread through the body instead of collapsing into pressure or goal-seeking.',
      unlocked: false,
      suggestedExercise: 'Pleasure & Aliveness Map',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '06',
      title: 'Circulation',
      text: 'Guide awareness through a simple energy pathway that supports fullness, calm, and integration.',
      unlocked: false,
      suggestedExercise: 'Titration Awareness Form',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '07',
      title: 'Integration',
      text: 'Finish grounded, open, and connected to a more spacious experience of pleasure and self-trust.',
      unlocked: false,
      suggestedExercise: 'Embodied Confidence Check-In',
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
  ]

  const faqs = [
    {
      q: 'Who is this for?',
      a: 'This course is for women who want a more grounded, body-aware, full-body experience of pleasure, presence, and self-connection.',
    },
    {
      q: 'Is this explicit?',
      a: 'No. The course is educational, sensual, and somatic in tone. It focuses on awareness, breath, regulation, and expanded sensation.',
    },
    {
      q: 'How long is the course?',
      a: 'Approximately 35 minutes, designed as a guided experience you can revisit whenever you want to reconnect with your body.',
    },
    {
      q: 'What makes this different?',
      a: 'Instead of performance, pressure, or rushing toward an outcome, this course teaches slowness, sensation, breath, and nervous system-led expansion.',
    },
  ]

  return (
    <div className="min-h-screen bg-warm text-brown font-jost">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(46,31,14,0.03),transparent_20%)]" />

      <header className="relative border-b border-[rgba(201,169,110,0.25)] bg-warm/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-amber">Brock Somatic Education</div>
            <div className="mt-1 text-sm text-[rgba(107,76,42,0.7)]">Full Body Intro Orgasm Course</div>
          </div>
          <a
            href="https://fbo.brockjohn.com/membership-details"
            className="rounded-full border border-gold px-5 py-2 text-sm font-medium text-brown transition hover:bg-brown hover:text-cream"
          >
            Get Membership Details
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[rgba(201,169,110,0.35)] bg-white px-4 py-2 text-xs uppercase tracking-[0.26em] text-amber">
              Guided somatic course · 35 minutes · Brock Avatar narrated
            </div>
            <h1 className="font-playfair text-4xl font-light leading-tight text-brown sm:text-5xl lg:text-6xl">
              From tension to expanded
              <span className="block italic text-amber">full-body sensation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(107,76,42,0.75)]">
              A slow, elegant landing page for a guided somatic experience that helps women move out of pressure,
              performance, and disconnect—and back into breath, presence, and embodied pleasure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://fbo.brockjohn.com/membership-details"
                className="rounded-full bg-brown px-7 py-3 text-center text-sm font-semibold text-cream transition hover:opacity-90"
              >
                Get Membership Details
              </a>
              <a
                href="#modules"
                className="rounded-full border border-[rgba(201,169,110,0.4)] bg-white px-7 py-3 text-center text-sm font-semibold text-brown transition hover:bg-[rgba(201,169,110,0.08)]"
              >
                Preview the Course
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {sections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[rgba(201,169,110,0.25)] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm uppercase tracking-[0.24em] text-gold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(107,76,42,0.75)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="overflow-hidden rounded-[2rem] border border-[rgba(201,169,110,0.25)] bg-soft p-6 shadow-sm">
              <div className="rounded-[1.5rem] border border-[rgba(201,169,110,0.25)] bg-white p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Inside the experience</div>
                <div className="mt-4 space-y-4">
                  {[
                    'Calm Brock Avatar narration',
                    'Somatic awareness cues',
                    'Breath-led expansion',
                    'Energy circulation framework',
                    'Soft integration ending',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[rgba(201,169,110,0.2)] bg-warm px-4 py-3"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-gold" />
                      <span className="text-sm text-brown">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-[rgba(201,169,110,0.25)] bg-warm p-5">
                  <div className="text-sm font-medium text-brown">Best for women who feel:</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[rgba(107,76,42,0.75)]">
                    <li>• disconnected from their bodies</li>
                    <li>• pressure to perform instead of feel</li>
                    <li>• overstimulated, tense, or emotionally flat</li>
                    <li>• curious about somatic pleasure and nervous system safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(201,169,110,0.15)] bg-soft">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Why it works</div>
              <h2 className="mt-4 font-playfair text-3xl font-light text-brown">A structure that helps the body soften before it expands.</h2>
            </div>
            <div className="rounded-3xl border border-[rgba(201,169,110,0.25)] bg-white p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-gold">01</div>
              <h3 className="mt-3 text-xl font-medium text-brown">Safety before sensation</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(107,76,42,0.75)]">
                The course begins with nervous system settling, body awareness, and permission—not urgency, pressure,
                or performance.
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(201,169,110,0.25)] bg-white p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-gold">02</div>
              <h3 className="mt-3 text-xl font-medium text-brown">Slowness creates access</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(107,76,42,0.75)]">
                When the pace slows, micro-sensation becomes easier to notice. That is often where real expansion
                begins.
              </p>
            </div>
          </div>
        </section>

        <section id="modules" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Course experience</div>
            <h2 className="mt-4 font-playfair text-3xl font-light text-brown sm:text-4xl">
              Start with Module 1 now, then unlock the full guided journey.
            </h2>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[rgba(201,169,110,0.3)] bg-white p-6 sm:p-7 shadow-sm">
            <div className="mb-5 inline-flex items-center rounded-full border border-gold bg-[rgba(201,169,110,0.12)] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-amber">
              Module 1 · Unlocked · 3 lessons available
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-[rgba(201,169,110,0.3)] bg-black">
                <Image
                  src="/module01.png"
                  alt="Module 01 placeholder preview"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Click to Experience</div>
                <h3 className="mt-3 text-2xl font-medium text-brown">
                  <a href={moduleOneUrl} target="_blank" rel="noreferrer" className="transition hover:text-amber">
                    Module {modules[0].num}: {modules[0].title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(107,76,42,0.75)]">{modules[0].text}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[rgba(107,76,42,0.5)]">
                  This module includes 3 lessons available now
                </p>
                <div className="mt-6 space-y-2">
                  <>
                  <div className="flex items-center justify-between rounded-xl border border-gold bg-[rgba(201,169,110,0.12)] px-4 py-2 text-xs text-brown">
                    <span>Video 1: {modules[0].lessons[0].title}</span>
                    <a
                      href={moduleOneUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="uppercase tracking-[0.12em] font-semibold transition hover:text-amber"
                    >
                      Available
                    </a>
                  </div>

                  <div
                    onClick={() => setOpen(true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-gold bg-[rgba(201,169,110,0.08)] px-4 py-2 text-xs text-brown transition hover:bg-[rgba(201,169,110,0.16)]"
                  >
                    <span>Audio: {modules[0].lessons[1].title}</span>
                    <span className="uppercase tracking-[0.12em] font-semibold">Play</span>
                  </div>

                  <a
                    href={fboStudentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[rgba(201,169,110,0.3)] bg-white px-4 py-2 text-xs text-amber transition hover:border-gold"
                  >
                    <span>Suggested Exercise: {modules[0].suggestedExercise}</span>
                    <span className="uppercase tracking-[0.12em] font-semibold">Open →</span>
                  </a>
                </>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-playfair text-2xl font-light text-brown sm:text-3xl">Continue the Full Guided Experience</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[rgba(107,76,42,0.75)]">
              Module 1 introduces the foundation. Modules 2–7 guide you deeper into awareness, breath, expansion,
              circulation, and integration.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.filter((module) => !module.unlocked).map((module) => (
              <div
                key={module.num}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(201,169,110,0.25)] bg-white p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(46,31,14,0.55)] via-[rgba(46,31,14,0.22)] to-[rgba(46,31,14,0.6)]" />
                <div className="pointer-events-none absolute inset-0 backdrop-blur-[1.5px]" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold bg-warm/90 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-brown">
                    <span aria-hidden>🔒</span>
                    Locked
                  </div>
                  <h4 className="mt-5 text-lg font-medium text-cream">
                    Module {module.num}: {module.title}
                  </h4>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-[rgba(245,238,216,0.3)] bg-black/35">
                    <Image
                      src={`/module${module.num}.png`}
                      alt={`Module ${module.num} placeholder preview`}
                      width={1600}
                      height={900}
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[rgba(245,238,216,0.85)]">{module.text}</p>
                  <div className="mt-4 space-y-2">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="rounded-xl border border-[rgba(245,238,216,0.2)] bg-black/25 px-3 py-2 text-xs text-[rgba(245,238,216,0.85)]"
                      >
                        Video {index + 1}: {lesson.title}
                      </div>
                    ))}
                    <a
                      href={fboStudentUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between rounded-xl border border-gold bg-warm px-3 py-2 text-xs text-brown transition hover:bg-white"
                    >
                      <span>Suggested Exercise: {module.suggestedExercise}</span>
                      <span className="uppercase tracking-[0.1em] font-semibold">Open →</span>
                    </a>
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.12em] text-[rgba(245,238,216,0.55)]">Status: Locked</div>
                </div>
              </div>
            ))}
          </div>

        </section>

        <section className="border-y border-[rgba(201,169,110,0.15)] bg-gradient-to-b from-soft to-warm">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Brock’s promise</div>
              <h2 className="mt-4 font-playfair text-3xl font-light text-brown sm:text-4xl">
                This is not about forcing an outcome.
                <span className="block italic text-amber">It is about learning how to feel.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgba(107,76,42,0.75)]">
                The tone is calm, masculine, grounded, and safe. The guidance helps the viewer move toward greater
                sensation by reducing pressure and increasing awareness.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(201,169,110,0.15)] bg-soft">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Frequently asked</div>
              <h2 className="mt-4 font-playfair text-3xl font-light text-brown sm:text-4xl">Questions before you begin</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[1.5rem] border border-[rgba(201,169,110,0.25)] bg-white p-6">
                  <summary className="cursor-pointer list-none text-base font-medium text-brown">{item.q}</summary>
                  <p className="mt-4 text-sm leading-7 text-[rgba(107,76,42,0.75)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="membership-info" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border-[1.5px] border-gold bg-brown p-7 shadow-sm relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(70% 90% at 90% 0%, rgba(201,169,110,.22), transparent 60%)' }}
              />
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-[0.22em] text-[rgba(201,169,110,0.7)]">BEST VALUE</div>
                <h3 className="mt-4 text-2xl font-medium text-cream">Join Membership</h3>
                <div className="mt-2 text-3xl font-light text-cream">$39/month</div>
                <p className="mt-4 text-sm leading-7 text-[rgba(245,238,216,0.75)]">
                  Unlock Modules 2–7, ongoing monthly member benefits, and for a limited time receive the 35-Minute Full Body Orgasm Course at no additional cost.
                </p>
                <p className="mt-3 rounded-xl border border-gold bg-[rgba(201,169,110,0.15)] px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-[rgba(201,169,110,0.9)]">
                  LIMITED TIME BONUS: 35-Minute Full Body Orgasm Course included — $59 value.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://fbo.brockjohn.com/membership-details"
                    className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-brown transition hover:opacity-90"
                  >
                    Get Membership Details
                  </a>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[rgba(245,238,216,0.5)]">
                  INCLUDES MODULES 2–7 + MONTHLY MEMBER BENEFITS + $59 COURSE BONUS
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[rgba(201,169,110,0.3)] bg-white p-7">
              <div className="text-xs uppercase tracking-[0.22em] text-[rgba(107,76,42,0.6)]">Simple unlock</div>
              <h3 className="mt-4 text-2xl font-medium text-brown">One-Time Unlock</h3>
              <div className="mt-2 text-3xl font-light text-brown">$20</div>
              <p className="mt-4 text-sm leading-7 text-[rgba(107,76,42,0.75)]">
                Just the modules — no calls, no membership, no other apps. One payment unlocks all six remaining
                modules — Awareness, Breath, Energy Awareness, Expansion, Circulation, and Integration — twelve
                guided pieces in total (a video and an audio practice for each), yours to revisit anytime.
              </p>
              <a
                href={stripeCheckoutUrl}
                className="mt-7 inline-flex rounded-full border border-gold bg-white px-6 py-3 text-sm font-medium text-brown transition hover:bg-[rgba(201,169,110,0.08)]"
                target="_blank"
                rel="noreferrer"
              >
                Unlock Now
              </a>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[rgba(107,76,42,0.5)]">
                Single purchase for access to Modules 2–7 only
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[rgba(201,169,110,0.25)] bg-white px-6 py-5 text-sm leading-7 text-[rgba(107,76,42,0.75)] sm:px-7">
            Choose membership for full access, ongoing benefits, and the limited-time $59 course bonus — or unlock Modules 2–7 once with a simple one-time purchase.
          </div>
        </section>
      
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(46,31,14,0.6)] backdrop-blur-sm">
            <div className="w-[90%] max-w-md rounded-3xl border border-gold bg-white p-6 shadow-2xl">
              <h2 className="mb-4 font-playfair text-xl text-brown">Sensual Guided Practice</h2>

              <audio controls autoPlay className="w-full">
                <source src="/module01_guide.mp3" type="audio/mpeg" />
              </audio>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full rounded-xl bg-brown py-3 text-cream transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-[rgba(201,169,110,0.15)] bg-warm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[rgba(107,76,42,0.55)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Brock Somatic Education</div>
          <div>Preview to the Full body Intro Orgasm Course</div>
        </div>
      </footer>
    </div>
  )
}
