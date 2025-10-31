import { UserPlus } from "lucide-react"
import { useState } from "react"
const API_URL = "http://http://localhost:4000"
const INITIAL_FORM = {name: "", email:"", password:""}
const SignUp = () => {
  const [formdata, setFormdata] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({text: "", type:""})
  return (
    <div className="max-w-md w-full bg-white shadow-lg border border-purple-100 rounded-xl p-8">
      <div className="mb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
          <UserPlus className="w-8 h-8 text-white"/>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-500 text-sm mt-1">Join DayLine to mange your tasks</p>
      </div>
      {message.text && (
        <div className={message.type == 'success' ? "bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4 border border-green-100" : "bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100"}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {Fil}
      </form>
    </div>
  )
}

export default SignUp