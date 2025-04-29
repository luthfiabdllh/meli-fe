import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"

export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <p className="text-4xl font-semibold text-gradient text-center mb-5">MELI</p>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Fullname</Label>
          <Input id="name" type="text" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="@mail.com" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" variant="gradient" className="w-full text-sm">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or register with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <FcGoogle />
          Register with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        have an account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Login
        </a>
      </div>
    </form>
  )
}
