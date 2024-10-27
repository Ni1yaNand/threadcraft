import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
        <SignUp 
            appearance={{
                elements: {
                    formButtonPrimary: "bg-blue-500 hover:blue-600 text-sm normal-case",
                },
            }}
        />    
    </div>
  )
}