import { useState, type FormEvent, type ReactNode } from 'react'
import campusImage from '../../assets/images/branding/pupbinan.webp'
import pupBinanLogo from '../../assets/images/branding/pupbn-logo.webp'

const ACCESS_SESSION_KEY = 'pup-binan-accreditation-access'
const ACCESS_SESSION_VALUE = 'authorized'
const PASSWORD_SHA256 = '61f984c0cbbc9b3d4a89e7cdebed48242d44be3b4afac4533ee67f00747a1abf'

type SiteAccessGateProps = {
  children: ReactNode
}

async function hashPassword(password: string) {
  const passwordBytes = new TextEncoder().encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', passwordBytes)

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current" strokeWidth="2">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function EyeIcon({ hidden }: { hidden: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current" strokeWidth="2">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
      {hidden && <path d="m4 4 16 16" />}
    </svg>
  )
}

export function SiteAccessGate({ children }: SiteAccessGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(
    () => sessionStorage.getItem(ACCESS_SESSION_KEY) === ACCESS_SESSION_VALUE,
  )
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsChecking(true)

    try {
      const submittedHash = await hashPassword(password)

      if (submittedHash !== PASSWORD_SHA256) {
        setPassword('')
        setError('The password you entered is incorrect.')
        return
      }

      sessionStorage.setItem(ACCESS_SESSION_KEY, ACCESS_SESSION_VALUE)
      setIsAuthorized(true)
    } catch {
      setError('Password verification is unavailable in this browser. Please try a current browser.')
    } finally {
      setIsChecking(false)
    }
  }

  if (isAuthorized) {
    return children
  }

  return (
    <main className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-[#07172c] px-5 py-10 text-slate-900">
      <img src={campusImage} alt="" className="absolute inset-0 -z-30 size-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#06172f]/95 via-[#07172c]/90 to-[#8a1724]/85" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(135deg,transparent_25%,rgba(255,255,255,.15)_25%,rgba(255,255,255,.15)_26%,transparent_26%,transparent_75%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15)_76%,transparent_76%)] [background-size:42px_42px]" />

      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl shadow-black/40">
        <div className="bg-[#8a1724] px-7 py-7 text-center text-white">
          <img
            src={pupBinanLogo}
            alt="PUP Biñan Campus"
            className="mx-auto size-24 rounded-full bg-white object-contain p-1 shadow-xl"
          />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">PUP Biñan Campus</p>
          <h1 className="mt-2 text-2xl font-black uppercase tracking-tight">Accreditation Portal</h1>
        </div>

        <div className="p-7 sm:p-9">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#8a1724]/10 text-[#8a1724]">
            <LockIcon />
          </div>
          <h2 className="mt-5 text-center text-xl font-black">Restricted Access</h2>
          <p className="mt-3 text-center text-sm leading-6 text-slate-600">
            Enter the authorized password to access accreditation documents and website content.
          </p>

          <form className="mt-7" onSubmit={handleSubmit}>
            <label htmlFor="site-password" className="text-sm font-bold text-slate-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="site-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                autoFocus
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-base outline-none transition placeholder:text-slate-400 focus:border-[#8a1724] focus:ring-4 focus:ring-[#8a1724]/10"
                placeholder="Enter password"
                aria-describedby={error ? 'password-error' : undefined}
                aria-invalid={Boolean(error)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute inset-y-0 right-0 grid w-12 place-items-center text-slate-500 transition hover:text-[#8a1724] focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8a1724]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon hidden={showPassword} />
              </button>
            </div>

            <p id="password-error" aria-live="polite" className="mt-3 min-h-5 text-sm font-semibold text-red-700">
              {error}
            </p>

            <button
              type="submit"
              disabled={isChecking}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8a1724] px-5 py-3.5 font-black uppercase tracking-wide text-white shadow-lg shadow-[#8a1724]/20 transition hover:bg-[#72121e] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8a1724] disabled:cursor-wait disabled:opacity-70"
            >
              <LockIcon />
              {isChecking ? 'Verifying…' : 'Access Portal'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Access is limited to authorized accreditation personnel.
          </p>
        </div>
      </section>
    </main>
  )
}
