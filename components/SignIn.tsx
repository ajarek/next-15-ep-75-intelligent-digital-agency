import { signIn } from "@/app/api/auth"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
      className="flex flex-col gap-4"
    >
      <Label>
        Email
        <Input name="email" type="email" className="mt-2"/>
      </Label>
      <Label>
        Password
        <Input name="password" type="password" className="mt-2"/>
      </Label>
      <Button>Sign In</Button>
    </form>
  )
}