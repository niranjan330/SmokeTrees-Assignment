/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qSDcdrmxPQ6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Add Address</CardTitle>
        <CardDescription>Enter your address details to store them in our system.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="street">Street Address</Label>
              <Input id="street" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="San Francisco" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="CA" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" placeholder="94101" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select id="country">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="can">Canada</SelectItem>
                    <SelectItem value="mex">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Save Address
        </Button>
      </CardFooter>
    </Card>
  )
}