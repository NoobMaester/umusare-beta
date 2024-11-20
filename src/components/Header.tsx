import { Button } from "@/components/ui/button"

// ... previous code remains the same
const Header = () => {
  return (
    <div className="flex justify-between">
        <h1 className="p-4 m-4">Umusare</h1>
        <div className="p-4 m-4">
            <Button className="mx-2" variant="default">Sign In</Button>
            <Button variant="outline">Register</Button>
        </div>
    </div>
  )
}

export default Header
