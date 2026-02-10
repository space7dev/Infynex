import Link from 'next/link'
import type { Metadata } from 'next'

const roles = [
  {
    title: 'Senior Full-Stack Engineer',
    location: 'Remote / US & Canada',
    type: 'Full-time',
    team: 'Engineering',
    description:
      'Build scalable web products, collaborate with design, and ship polished client experiences.',
  },
  {
    title: 'Product Designer',
    location: 'Remote / Europe',
    type: 'Full-time',
    team: 'Design',
    description:
      'Lead product UX, craft visual systems, and partner with engineering to launch new features.',
  },
  {
    title: 'AI Solutions Consultant',
    location: 'Hybrid / Dubai',
    type: 'Contract',
    team: 'AI & Strategy',
    description:
      'Guide enterprise clients through AI adoption, from discovery workshops to delivery roadmaps.',
  },
  {
    title: 'Business Development Manager',
    location: 'Remote / Global',
    type: 'Full-time',
    team: 'Growth',
    description:
      'Own pipeline strategy, build partnerships, and help global brands unlock new revenue.',
  },
  {
    title: 'dApp Developer',
    location: 'Remote / Global',
    type: 'Full-time',
    team: 'Web3 Engineering',
    description:
      'Build production-grade decentralized applications with secure wallets, performant UIs, and robust APIs.',
  },
  {
    title: 'Smart Contract Developer',
    location: 'Remote / Global',
    type: 'Full-time',
    team: 'Web3 Engineering',
    description:
      'Design, audit, and optimize smart contracts with a focus on security, gas efficiency, and testing.',
  },
  {
    title: 'Web3 Developer',
    location: 'Remote / Global',
    type: 'Full-time',
    team: 'Web3 Engineering',
    description:
      'Integrate blockchain protocols, build token experiences, and ship scalable Web3 product features.',
  },
  {
    title: 'Hybrid Blockchain Developer',
    location: 'Remote / Global',
    type: 'Full-time',
    team: 'Web3 Engineering',
    description:
      'Bridge on-chain and off-chain systems with middleware, oracle integrations, and secure data flows.',
  },
]

const benefits = [
  'Flexible hybrid and remote-first collaboration',
  'High-impact work with enterprise and venture teams',
  'Learning stipend and certification support',
  'Transparent growth paths and mentorship',
  'Global team retreats and wellness support',
  'Competitive compensation with performance bonuses',
]

const hiringSteps = [
  {
    title: 'Intro Call',
    description: 'A quick conversation to align on goals, role scope, and growth ambitions.',
  },
  {
    title: 'Skill Interview',
    description: 'Deep dive with the team to understand your expertise and working style.',
  },
  {
    title: 'Take-home Task',
    description: 'A realistic challenge to showcase your craft (always paid for senior roles).',
  },
  {
    title: 'Final Conversation',
    description: 'Meet leadership, align on impact, and finalize the offer.',
  },
]

export const metadata: Metadata = {
  title: 'Job Board',
  description:
    'Explore open roles at Infynex Solutions. Join a team that builds world-class mobile, AI, and Web3 products.',
}

export default function JobBoardPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-28">
        <div className="container-custom section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
                Careers at Infynex
              </span>
              <h1 className="mt-6 text-4xl font-bold text-secondary-900 md:text-5xl">
                Build the future of digital products with us
              </h1>
              <p className="mt-6 text-lg text-secondary-600">
                We are a global team of builders, strategists, and designers delivering mobile, AI, and
                blockchain solutions for ambitious brands. Find the role that matches your craft and
                grow alongside experts who care about impact.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#open-roles" className="btn-primary">
                  View Open Roles
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-10 top-8 h-64 w-64 rounded-full bg-primary-100 opacity-40 blur-3xl" />
              <img
                src="/startup_leader_doing_presentation_to_staff_in_a_o_e159d956-e9c_1767592279564-Dcgm86H-.jpg"
                alt="Team collaboration session"
                className="relative w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900">Why work with Infynex?</h2>
              <p className="mt-4 text-secondary-600">
                You will partner with teams across industries, shipping products that scale to millions of
                users. We value craft, clarity, and human-centered delivery.
              </p>
              <div className="mt-6 grid gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="card flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600" />
                    <p className="text-secondary-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary-900">Global, but close-knit</h3>
                <p className="mt-3 text-secondary-600">
                  We operate as a distributed studio with agile pods, real-time collaboration, and
                  ownership built into every engagement.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary-900">Client impact first</h3>
                <p className="mt-3 text-secondary-600">
                  You will be hands-on with Fortune 500 and high-growth startups, driving measurable
                  outcomes and long-term partnerships.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary-900">Growth with purpose</h3>
                <p className="mt-3 text-secondary-600">
                  We invest in leadership development, technical mastery, and opportunities to mentor and
                  lead across disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900">Open roles</h2>
              <p className="mt-3 text-secondary-600">
                Explore positions across product, engineering, design, and growth.
              </p>
            </div>
            <Link href="/contact" className="btn-outline">
              Submit Your Resume
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="card">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900">{role.title}</h3>
                    <p className="mt-1 text-sm text-secondary-500">
                      {role.team} · {role.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                    {role.type}
                  </span>
                </div>
                <p className="mt-4 text-secondary-600">{role.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Apply Now
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Ask a Question
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900">Hiring process</h2>
              <p className="mt-4 text-secondary-600">
                We keep the process focused, transparent, and respectful of your time.
              </p>
            </div>
            <div className="grid gap-4">
              {hiringSteps.map((step, index) => (
                <div key={step.title} className="card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900">{step.title}</h3>
                      <p className="mt-2 text-secondary-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold">Ready to build with us?</h2>
              <p className="mt-4 text-secondary-200">
                Send your portfolio and a quick intro. We will reach out with the best role match and
                keep you in the loop.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start the Conversation
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
